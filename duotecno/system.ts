import { Master } from "./master";
import { SystemConfig, MasterConfig, UnitConfig, YN, GroupConfig, LogFunction, SceneConfig } from "./types";
import { Node, Unit, Protocol } from "./protocol";
import { Base } from "../server/base";
import { EventEmitter } from "events";


export class System extends Base {
  public masters: Array<Master>;
  public config: SystemConfig;
  public groups: Array<GroupConfig>;
  public isBrowser: boolean = true;
  public isSplitted: boolean = false;

  // rebuild active services (units)
  trigger: NodeJS.Timeout;
  emitter: EventEmitter;
  public moods: Array<Unit> = [];
  public controls: Array<Unit> = [];
  public temperatures: Array<Unit> = [];
  public stores: Array<Unit> = [];
  public scenes: Array<SceneConfig> = [];

  constructor(debug: boolean = false, logger?: LogFunction) {
    super("system", debug, logger);
    this.trigger = null;

    this.emitter = new EventEmitter();
    Protocol.setEmitter(this.emitter);
    this.emitter.on('update', this.checkScenes.bind(this));

    this.readConfig();
    this.readGroups();
    this.readScenes();

    // open all masters listed in the config
    this.masters = [];
  }

  setBrowser(isB: boolean) {
    this.isBrowser = isB;
  }

  setLogger(logger: LogFunction) {
    this.logger = logger;

    // use my log function
    Protocol.logger = logger;
  }

  async openMasters(readDB: boolean = false) {
    for (let inx = 0; inx < this.config.cmasters.length; inx++) {
      try {
        if (this.config.cmasters[inx].active)
          await this.openMaster(this.config.cmasters[inx], inx, readDB);
      } catch(err) {
        this.log(err);
      }
    }
  }
  async closeMasters() {
    for (let inx = 0; inx < this.masters.length; inx++) {
      await this.closeMaster(this.masters[inx])
    }  
  }

  async openMaster(config: MasterConfig, inx: number, readDB: boolean = false): Promise<Master> {
    const master = new Master(this, config);
    this.masters[inx] = master;
    try {
      // testing
      if (!master.config.active) return;

      this.log("opening master: " + master.getAddress());
      await master.open();
      if (! await master.login()) throw(new Error("Failed to log in"));
      await master.getDatabase(readDB);
      this.log("master: " + master.getAddress() + " opened with " + master.nodes.length + " nodes.");
      this.triggerRebuild();
      return master;

    } catch(e) {
      this.err("failed to open master (" + e.toString() + ")");
      return null;
      // throw(e);
    }
  }

  async closeMaster(master: Master) {
    // non-existing master or not open -> do nothing
    if ((! master) || (!master.isOpen)) return;

    // find its index (we need it to delete it from the master list)
    let inx = this.findMasterInx(master);

    // close
    try {
      await master.close();
    } catch(e) {
      this.err("failed to close master on " + master.getAddress() + ":" + master.getConfig().port);
    }

    // remove from list
    if (inx > -1)
      this.masters.splice(inx, 1);
  }

  displayDatabases() {
    this.masters.forEach(m => m.displayDatabase());
  }
  

  ////////////////
  // Setting up //
  ////////////////

  async addMaster(cmaster: MasterConfig): Promise<Master> {
    if (!cmaster.address) return;

    // see if this master already exists
    let inx = this.findCMasterInx(cmaster.address, cmaster.port);

    // store in config if not yet known
    if (inx < 0) {
      this.config.cmasters.push(cmaster);
      inx = this.masters.length;

    } else {
      // close to re-open
      await this.closeMaster(this.masters[inx]);
      this.config.cmasters[inx] = cmaster;
    }
    this.writeConfig();
    return await this.openMaster(cmaster, inx);
  }

  async deleteMaster(master: Master) {
    const masterAddress = master.getAddress();
    const masterPort = master.getPort();

    // remove from the config
    let inx = this.findCMasterInx(masterAddress, masterPort);
    if (inx >= 0) {
      // remove the master (from the master list and the config list), 
      this.config.cmasters.splice(inx, 1);

      // remove it's units from the config
      this.config.cunits = this.config.cunits.filter(unit => 
        (unit.masterPort != masterPort) || (unit.masterAddress != masterAddress));

      this.writeConfig();
    } else {
      this.err("didn't find the master " + master.getAddress() + ":" + master.getConfig().port + " in the config");
    }

    // remove from the active masters
    inx = this.findMasterInx(master);
    if (inx >= 0) {
      this.masters.splice(inx, 1);
      try {
        if (master.isOpen) {
          await master.close();
        }
      } catch(e) {
        this.err("failed to close master on " + master.getAddress() + ":" + master.getConfig().port);
      }
    } else {
      this.err("didn't find the master " + master.getAddress() + ":" + master.getConfig().port + " in the active master list");
    }
  }

  setActiveState(item: Node | Unit) {
    if (item instanceof Node) {
      const masterAddress = item.master.getAddress();
      const masterPort = item.master.getPort();
      const unitConfig = this.config.cunits.find((cu: UnitConfig) => 
        (cu.logicalNodeAddress === item.logicalAddress) && 
        (cu.masterAddress === masterAddress) && 
        (cu.masterPort == masterPort));

      // exists in configured nodes
      item.active = !! unitConfig;
    }
    if (item instanceof Unit) {
      const masterAddress = item.node.master.getAddress();
      const masterPort = item.node.master.getPort();
      const config = this.config.cunits.find((cu: UnitConfig) => 
        (cu.logicalAddress === item.logicalAddress) && 
        (cu.logicalNodeAddress === item.logicalNodeAddress) && 
        (cu.masterAddress === masterAddress) && 
        (cu.masterPort == masterPort));
      item.active = !! config;
      if (config) {
        item.group = config.group;
      }
    }
  }


  selectGroup(group: GroupConfig) {
    if (this.config.multiple) {
      // multiple groups = just turn on/off
      group.visible = !group.visible;

    } else {
      // turn of other groups if this one becomes visible
      if (!group.visible) 
        this.groups.forEach(g => g.visible = false);
      group.visible = ! group.visible;
    }
    this.writeGroups();
  }

  //////////////////////////////////////
  // Finding masters, nodes and units //
  //////////////////////////////////////

  findMaster(master: Master | string, port?: number): Master {
    if (typeof master === "string") {
      if (typeof port === "undefined") port = 5001;
      return this.masters.find((m: Master) => m && m.same(master, port))
    } else {
      return this.masters.find((m: Master) => m && m.same(master));
    }
  }
  findMasterInx(master: Master): number {
    return this.masters.findIndex((m: Master) => m && m.same(master));
  }

  findCMasterInx(address: string, port: number): number {
    return this.config.cmasters.findIndex((m: MasterConfig) => (m.address == address) && (m.port == port));
  }

  findNode(master: Master, logicalAddress: number) {
    if (master)
      return master.nodes.find((n: Node) => n && (n.logicalAddress === logicalAddress));
    else
      return null;
  }

  findUnit(master: string, port: number, logicalNodeAddress: number, logicalAddress: number): Unit;
  findUnit(master: Master, logicalNodeAddress: number, logicalAddress: number): Unit;
  findUnit(master: Master | string, A: number, B: number, C?: number): Unit {
    let logicalNodeAddress = A; 
    let logicalAddress = B;
    if (typeof master === "string") {
      master = this.findMaster(master, A);
      logicalNodeAddress = B; logicalAddress = C;
    }
    const node = this.findNode(master, logicalNodeAddress);
    if (node)
      return node.units.find((u: Unit) => u && (u.logicalAddress === logicalAddress));
    else
      return null;
  }

  findUnitByAddress(logicalNodeAddress: number, logicalAddress: number): Unit {
    let unit: Unit = null;
    this.masters.forEach((m: Master) => {
      if (m) {
        const node = this.findNode(m, logicalNodeAddress);
        if (node)
          unit = node.units.find((u: Unit) => u && (u.logicalAddress === logicalAddress));
      }
    });
    return unit;
  }

  findUnitByName(master: string, port: number, name: string): Unit;
  findUnitByName(master: Master, name: string): Unit;
  findUnitByName(master: string | Master, A: number | string, name?: string): Unit {
    let unit: Unit = null;
    if (typeof master === "string") {
      master = this.findMaster(master, <number>A);
    } else {
      name = <string>A;
    }
    this.masters.forEach((m: Master) => {
      if (m && m.same(master)) {
        m.nodes.forEach((n: Node) => {
          if (n) {
            n.units.forEach(u => {
              if ((u.displayName === name) || (u.name === name)) 
                unit = u; 
            });
          }
        });
      }
    });
    return unit;
  }

  allActiveUnits(): Array<Unit> {
    return this.masters
      .reduce((acc, m) => acc.concat(m.nodes), [])
      .reduce((acc, n) => acc.concat(n.units), [])
      .filter(u => u.active);
  }

  allMasters(doToMaster: (m: Master) => void) {
    this.masters.forEach(m => doToMaster(m));
  }


  //////////////////////////////////////////////////
  // Getting the current state of units and nodes //
  //////////////////////////////////////////////////
  updateSystem(dontTrigger: boolean = false) {
    this.config.cunits = this.allActiveUnits()
      .map((u: Unit) => { return { active: <YN>"Y", group: u.group, name: u.name,
                                   masterAddress: u.node.master.getAddress(), masterPort: u.node.master.getPort(), 
                                   logicalNodeAddress: u.node.logicalAddress, logicalAddress: u.logicalAddress}; });
    this.writeConfig();
    
    if (dontTrigger)
      this.triggerRebuild();
  }

  triggerRebuild(immediate: boolean = false) {
    this.log("triggerRebuild requested")
    if (this.trigger) {
      this.log("killing pending rebuild")
      clearTimeout(this.trigger);
      this.trigger = null;
    }

    if (immediate) {
      this.rebuildServices();
    } else {
      this.trigger = setTimeout(() => {
        this.trigger = null;
        this.rebuildServices();
      }, 1000);
    }
  }

  rebuildServices() {
    function compare(a: Unit | Node | Master, b: Unit | Node | Master) {
      const an = a.getSort();
      const bn = b.getSort();
      if (an < bn) return -1;
      if (an > bn) return 1;
      return 0;
    }
    function compareN(a: Unit, b: Unit) {
      const aname = a.name.toLowerCase();
      const bname = b.name.toLowerCase();
      if (aname < bname) return -1;
      if (aname > bname) return 1;
      return 0;
    }

    // sort masters, nodes in masters, units in nodes.

    this.log("rebuildMasters (" + this.masters.length + ") -> nodes -> units");
    this.masters.sort(compare);
    this.masters.forEach((m: Master) => { 
      m.nodes.sort(compare);
      m.nodes.forEach((n: Node) => n.units.sort(compare));
     });

    // sort selected controls, temperatures and moods.
    this.log("rebuildServices")
    const services = this.allActiveUnits();

    this.controls = services.filter(s => s.isCtrl()).sort(compareN);
    this.temperatures = services.filter(s => s.isTemperature()).sort(compareN);
    this.moods = services.filter(s => (s.isMood() || s.isInput())).sort(compareN);
    this.stores = this.controls.filter(s => s.isUpDown());

    let complete = true;
    //this.allMasters(m => m.allNodes(n => {if (n.nrUnits != n.units.length) complete = false; }))
    if (complete)
      this.emitter.emit('ready', this.masters.length);
  }


  ////////////
  // Scenes //
  ////////////
  checkScenes(unit: Unit) {
    // called by updateState that is listening for status changes
    const scene = this.scenes.find(s => unit.isUnit(s.trigger.masterAddress, s.trigger.masterPort, 
                                          s.trigger.logicalNodeAddress, s.trigger.logicalAddress));
    if (scene) {
      this.log("scene found -> " + scene.name + ", value = " + scene.trigger.value + " unit = " + unit.value);console.log(scene);

    //  if (unit.sameValue(scene.trigger.value)) {
        scene.units.forEach(u => {
          const unit = this.findUnit(u.masterAddress, u.masterPort, u.logicalNodeAddress, u.logicalAddress);
          if (unit) {
            this.log(" - unit found " + unit.getDisplayName() + " -> " + u.value);
            unit.setState(u.value);
          }
        });
    //  }
    }
  }

  //////////////////
  // Config stuff //
  //////////////////

  readGroups() {
    this.groups = this.read("groups");

    // order the groups and reset the order indices
    this.groups.sort((a,b) => a.order-b.order);
    this.groups.forEach((g,i) => g.order = i);
  }
  readScenes() {
    this.scenes = this.read("scenes");

    // order the groups and reset the order indices
    this.scenes.sort((a,b) => a.order-b.order);
    this.scenes.forEach((g,i) => g.order = i);
  }

  writeScenes() {
    this.groups = this.write("scenes", this.scenes);
  }

  writeGroups() {
    this.groups = this.write("groups", this.groups);
  }


}