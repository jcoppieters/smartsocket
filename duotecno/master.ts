import { Node, Protocol, Unit, recName, Rec } from "./protocol";
import { MasterConfig, WriteError, CommRecord, Message, Sanitizers, LogFunction } from "./types";
import { System } from "./system";
import { Base } from "../server/base";

import { Q } from "./Q";
import { getSocket, SmartSocket } from "./smartsocket";

export class Master extends Base {

  private system: System;
  public nodes: Array<Node>;
  public nrNodes: number;
  public schedule: number;
  public date: Date;
  public lastHeartbeat: number;

  public isOpen: boolean;
  public isLoggedIn: boolean;
  private closing: boolean;
  private resolveLogin = null;
  private buffer: string;

  private Q: Q;
  
  config: MasterConfig;
  private socket: SmartSocket;

  // command was sent, no response received yet

  /* system.config: {
  "language": "EN",
  "stores": false,
  "multiple": false,
  "socketserver": "akiworks.be",
  "socketport": 9999,
  "mood": "sfeer",
  "cmasters": [
    {
      "address": "192.168.0.98",
      "port": 5001,
      "password": "duotecno",
      "name": "Smartbox",
      "active": false,
      "debug": false
    },
    {
      "address": "gm.coppieters.be",
      "port": 5005,
      "password": "duotecno",
      "name": "IP Master GM",
      "active": true,
      "debug": false
    }
  ],
  "cunits": [
    {
      "active": "Y",
      "group": 0,
      "name": "rgb|Hue1",
      "displayName": "Lamp - Brightness",
      "type": 1,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 38
    },
    {
      "active": "Y",
      "group": 0,
      "name": "rgB|Hue1",
      "displayName": "Lamp - Hue",
      "type": 1,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 37
    },
    {
      "active": "Y",
      "group": 0,
      "name": "rGb|Hue1",
      "displayName": "rGb Hue1",
      "type": 1,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 36
    },
    {
      "active": "Y",
      "group": 0,
      "name": "Rgb|Hue1",
      "displayName": "Rgb Hue1",
      "type": 1,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 35
    },
    {
      "active": "Y",
      "group": 0,
      "name": "Sticks",
      "displayName": "Sticks",
      "type": 1,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 34
    },
    {
      "active": "Y",
      "group": 0,
      "name": "Vintage",
      "displayName": "Vintage",
      "type": 1,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 33
    },
    {
      "active": "Y",
      "group": 0,
      "name": "Driveway",
      "displayName": "Driveway",
      "type": 2,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 40
    },
    {
      "active": "Y",
      "group": 0,
      "name": "Trees",
      "displayName": "Trees",
      "type": 2,
      "masterAddress": "gm.coppieters.be",
      "masterPort": 5005,
      "logicalNodeAddress": 6,
      "logicalAddress": 39
    }
  ]
}
  */

  constructor(system: System, config: MasterConfig) {
    super("master", config.debug, system.logger);
    this.Q = new Q(system.logger);

    // save my eco system
    this.system = system;
  
    // save this masters config settings
    this.config = Sanitizers.masterConfig(config);

    // all nodes in this master
    this.nodes = [];
    this.nrNodes = 0;
    this.schedule = 0;
    this.date = null;

    // connection to an IP node / smartbox
    this.socket = null;
    this.isOpen = false;
    this.isLoggedIn = false;
    this.closing = false;
  
    // incoming data
    this.buffer = "";
  }

  getName() {
    return this.config.name || "master";
  }
  getSort() {
    return this.getName().toLowerCase();
  }

  log(msg: string) {
    // overwrite to add IP address
    super.log(this.getAddress() + ": " + msg);
  }

  writeConfig(config?: object, fn?: string) {
    // overwrite: don't do anything, all is stored in the system-config
  }

  getConfig(): MasterConfig {
    return this.config;
  }

  hasAddress(ip: string): boolean {
    return this.config.address === ip;
  }
  getAddress(): string {
    return this.config.address;
  }
  getPort(): number {
    return this.config.port;
  }
  hasPort(port: number): boolean {
    return this.config.port == port;
  }
  getURL(): string {
    return this.config.address + ":" + this.config.port;
  }

  inMultiNode(): boolean {
    return (this.nodes.length > 1);
  }

  same(master: Master | string, port?: number): boolean {
    if (typeof master === "string") {
      if (typeof port === "undefined") { 
        // master is probably url ip:port
        const url = master.split(":");
        master = url[0];
        port = parseInt(url[1] || "5001");
      }
      return this.hasAddress(master) && this.hasPort(port);

    } else {
      return master && this.hasAddress(master.getAddress()) && this.hasPort(master.getPort());
    }
  }


  /* ************* */
  /* Communication */
  /* ************* */
  async open(cnt = 1) {
    let beater;

    this.socket = await getSocket( this.config.address, this.config.port,
      (msg) => { 
        this.handleData(msg);
      },
      (end) => {
        this.isOpen = false;
        this.isLoggedIn = false;

        if (this.closing) {
          // stop sending heartbeats
          if (beater) { clearInterval(beater); beater = null; }

          this.log("end -> socket got closed as requested");
          this.closing = false;
          this.lastHeartbeat = 0;

        } else {
          this.log("end -> socket got unexpectedly disconnected -> hopefully the heartbeat will reopen ###############");
        }
      },
      (log) => {
        this.log(log);
      },
      (err) => {
        this.err(err);
      }
    );
    this.isOpen = true;
    this.closing = false;
    this.log("master opened -> " + this.config.address);

    // setup a heartbeat
    const kInterval = 30 * 1000;
    beater = setInterval(() => {
      if (this.lastHeartbeat && ((new Date().getTime() - this.lastHeartbeat) > 2.5 * kInterval)) {
        this.log("Didn't receive a heartbeat in 2.5 times our interval -> try to close manually")
        this.close();
      }
      this.send(Protocol.buildHeartbeat());
    }, kInterval);
  }

  async close() {
    if (this.isOpen) {
      const message = Protocol.buildDisconnect();
      try {
        this.closing = true;
        this.log("master closing -> " + this.config.address);
        await this.send(message);  
        // server will close the socket, no need to call socket.close()

      } catch (err) {
        this.err("Disconnect failure: " + err);
      }
    }
  }

  async login() {
    return new Promise((resolve, reject) => {
      try {
        const message = Protocol.buildLogin(this.config.password) 
        Protocol.write(this.socket, message);
        // to be called when logged in
        this.resolveLogin = resolve;
 
      } catch(err) {
        this.resolveLogin = null;
        this.err("Login call failed: " + err);
        reject(false);
      }
    });
  }

  async send(message: Message) {
    return this.Q.exec(async () => {
      if (! this.isOpen) {
        await this.open();
        if (! await this.login()) {
          return WriteError.writeFatal;
        }
      }
      return Protocol.write(this.socket, message);
    });
  }

  handleData(message: string) {
    // put the incoming data into a buffer and only use complete data
    this.buffer += message;

    while ((this.buffer.length > 0) && this.processData())
      ;
  }

  processData(): boolean {
    // fetch next message and store the rest of unused data (if any)
    const next = Protocol.nextMessage(this.buffer);
    this.buffer = next.rest;

    if (!next.cmd) {
      return false;

    } else {
      if ((next.cmd != Rec.TimeDateStatus) &&
          (next.cmd != Rec.Sensor))
        this.log(recName(next.cmd) + " -> " + ((!next.message) ? 
          "--" : ((next.message instanceof Array) ? next.message.join(",") : next.message)));

      this.Q.do();

      if (next.isStatus) {
        this.receiveStatus(next);

      // non-unit specific info
      } else if (next.cmd === Rec.TimeDateStatus) {
        this.receiveDateTime(next.message);
    
      } else if (next.cmd === Rec.Info) {
        this.receiveInfo(next);

      } else if (next.cmd === Rec.HeartbeatStatus) {
        this.receiveHeartbeat(next.message);

      } else if (next.cmd === Rec.ConnectStatus) {
        this.receiveLogin(next.message);
      
      } else if (next.cmd === Rec.ScheduleStatus) {
        this.receiveSchedule(next.message);

      } else {
        this.log("not handled: " + next.message);

      }
      return true;
    }
  }

  ///////////////////
  // Login message //
  ///////////////////

  receiveLogin(message: Message) {
    this.isLoggedIn = (message[2] === 1);

    if (this.resolveLogin) {
      this.resolveLogin(this.isLoggedIn);
      this.resolveLogin = null;
    } else {
      this.err("unexpected ConnectStatus ?");
    }
  }

  ///////////////////
  // Info messages //
  ///////////////////

  receiveHeartbeat(next: Message) {
    this.lastHeartbeat = new Date().getTime();
  }

  receiveInfo(next: CommRecord) {
    if (next.message[1] === Rec.DBInfo) {
      this.receiveDBInfo(next.message)

    } else if (next.message[1] === Rec.NodeInfo) {
      this.receiveNodeInfo(next.message);

    } else if (next.message[1] === Rec.UnitInfo) {
      this.receiveUnitInfo(next.message);

    } else {
      this.err("What is this? info type = " + next.message[1] + ", message: " + next.message);
    }
    this.system.triggerRebuild();
  }

  receiveSchedule(message: Message) {
    this.schedule = message[2];
    this.info("received week schedule = " + this.schedule);
  }

  receiveDateTime(message: Message) {
    // 71,0,9,37,3,3,4,3,21,20 -> 09:37:03 Wednesday(3) 4 march 2120
    this.date = new Date( (message[8]-1) * 100 + message[9], message[7]-1, message[6], 
      message[2], message[3], message[4]);
    // this.log("Received date/time: " + this.date);
  }

  receiveDBInfo(message: Message) {
    const dbInfo = Protocol.makeDBInfo(message);
    this.nrNodes = dbInfo.nrNodes;
    for (let nodeInx=0; nodeInx < this.nrNodes; nodeInx++) {
      this.fetchNode(nodeInx);
    }
  }

  receiveNodeInfo(message: Message) {
    const nodeInfo = Protocol.makeNodeInfo(message);
    let node = this.findNode(nodeInfo.logicalAddress);
    if (!node) {
      node = new Node(this, nodeInfo);
      this.nodes.push(node);
    } else {
      Sanitizers.nodeInfo(nodeInfo, node);
    }
    this.system.setActiveState(node);
    this.config.nodenames[node.logicalAddress] = node.name;
    this.system.updateMasterConfig(this);

    if (node.active && (node.nrUnits !== node.units.length)) {
      this.fetchAllUnits(node);
    } else {
      this.log("Skipping node: " + node.getDescription());
    }
  }

  receiveUnitInfo(message: Message) {
    const unitInfo = Protocol.makeUnitInfo(message);
    let unit = this.findUnit(unitInfo.logicalNodeAddress, unitInfo.logicalAddress);
    if (!unit) {
      const node = this.findNode(unitInfo.logicalNodeAddress);
      if (node) {
        unit = new Unit(node, unitInfo, this.system.config.mood);
        node.units.push(unit);
      } else {
        this.err("Node not found: " + unitInfo.logicalNodeAddress);
      }
    } else {
      Sanitizers.unitInfo(unitInfo, unit);
    }
    this.system.setActiveState(unit);
  }


  async fetchAllUnits(node: Node) {
    for (let unitInx=0; unitInx < node.nrUnits; unitInx++) {
      await this.fetchUnit(node, unitInx);
    }
  }

  async fetchDbInfo() {
    try {
      await this.send(Protocol.buildDBInfo());
      await this.send(Protocol.buildRequestSchedule());

    } catch (err) {
      this.err("dbInfo call failed -> " + err);
    }
  }

  async fetchNode(nodeInx: number) {
    const message = Protocol.buildNodeInfo(nodeInx);
    try {
      await this.send(message);

    } catch (err) {
      this.err("nodeInfo call failed -> " + err);
    }
  }

  async fetchUnit(node: Node, unitInx: number) {
    const message = Protocol.buildUnitInfo(node, unitInx);
    try {
      // unit with index "unitInx" in node "logicalAddress"
      await this.send(message); 
  
    } catch (err) {
      this.err("unitInfo call failed -> " + err);
    }
  }


  async getDatabase(readDB: boolean = false) {
    this.nodes = [];

    const hasNames = this.system.config.cunits.filter(u => this.same(u.masterAddress, u.masterPort)).some(u => u.name);
    if (readDB || !hasNames) {
      this.log("Fetching info from master DB for: " + this.getAddress());
      await this.fetchDbInfo();
      // upon reception of the DB info, 
      //   getNode info will be called, 
      //   which in it's turn will trigger getUnitInfo through fetchAllUnits
      
    } else {
      // loop over all nodes/units in the config with a matching ip address
      //  fill: this.nrNodes
      //  call: kind of receive-Node/Unit-Info
      this.log("Building info from config for: " + this.getAddress());
      this.system.config.cunits
      .filter(u => this.same(u.masterAddress, u.masterPort))
      .forEach(u => {
        let node = this.findNode(u.logicalNodeAddress);
        if (!node) {
          let name = this.config.nodenames[u.logicalNodeAddress] ||
                     ((u.logicalNodeAddress == 255) ? "Virtual Node" : 
                      ("Node-" + ((u.logicalNodeAddress < 16) ? '0' : '') + u.logicalNodeAddress.toString(16)));
          node = new Node(this, {logicalAddress: u.logicalNodeAddress, name});
          this.nodes.push(node);
          this.system.setActiveState(node);
          this.log("new node: " + node.getName())
        }
        let unit = this.findUnit(u.logicalNodeAddress, u.logicalAddress);
        if (!unit) {
          unit = new Unit(node, u);
          node.units.push(unit);
          this.log("new unit: " + unit.getName() + " -> " + u.logicalAddress);

        }
        this.system.setActiveState(unit);
      });
    }
  }


  allNodes(doToNode:(n: Node) => void) {
    this.nodes.forEach(node => {
      doToNode(node)
    });
  }

  allUnits(doToUnit:(u: Unit) => void) {
    this.nodes.forEach(node => {
      node.units.forEach(unit => {
        doToUnit(unit)
      });
    });
  }

  displayDatabase(onlyNodes = false) {
    this.log("Showing " + this.nodes.length + " nodes");
    this.nodes.forEach((node, nodeInx) => {
      if (onlyNodes) this.log("===================================================================================")
      this.log(nodeInx + ". " + node.name + 
          ", type = " + node.typeName() + 
          ", nrUnits = " + node.nrUnits + 
          ", logical address = " + node.logicalAddress);
      if (onlyNodes) {
        this.log("-----------------------------------------------------------------------------------")
        node.units.forEach((unit, unitInx) => {
          this.log("> " + unitInx + ". '" + unit.name + "' => '" + unit.getName() + 
                                    "', type = " + unit.typeName() + 
                                    ", logical address: " + unit.logicalAddress + 
                                    ", value: " + unit.value + 
                                    (unit.status ? (", status = " + unit.status) : ""));
        });
      }
    });  
  }

  findUnit(logicalNodeAddress: number, logicalAddress: number) {
    const node = this.findNode(logicalNodeAddress);
    if (node)
      return node.units.find((u: Unit) => u.logicalAddress === logicalAddress);
    else
      return null;
  }

  findNode(logicalAddress: number) {
    return this.nodes.find((n: Node) => n && (n.logicalAddress === logicalAddress));
  }


  getNodeAndUnit(node: number | Node, unit: number | Unit) {
    // allow for index numbers or real nodes to be passed
    if (typeof node === "number") { 
      if (node >= this.nodes.length) {
        this.err("getNodeAndUnit -> node nr " + node + " out of bounds");
        node = null;
      } else {
        node = this.nodes[node];
      }
    }
    if (! node) {
      this.err("getNodeAndUnit -> node not found ");
      return null;
    }

    if (typeof unit === "number") { 
      if (unit >= (<Node>node).units.length) {
        this.err("getNodeAndUnit -> unit nr " + unit + " out of bounds");
        unit = null;
      } else {
        unit = (<Node>node).units[unit];
      }
    }
    if (! unit) {
      this.err("getNodeAndUnit -> unit not found");
      return null;
    }

    return { node, unit };
  }

  /* ****************************************************************************** */
  /* Status requests                                                                */
  /*   Database (all known nodes)                                                   */
  /*   Node (all known units in this node)                                          */
  /*   Unit (only dimmer, switch, input, temperature, motor and mood implemented)   */
  /* ****************************************************************************** */

  receiveStatus(next: CommRecord) {
    // called when an incoming message was received and classified as a status message

    // find node 
    const nodeLogical = next.message[2];
    const node = this.nodes.find(node => node && (node.logicalAddress == nodeLogical));
    if (! node) {
      this.info("status message " + next.cmd + " for unknown node = " + nodeLogical);
      return;
    }

    // find unit 
    const unitLogical = next.message[3];
    const unit = node.units.find(unit => unit && (unit.logicalAddress == unitLogical))
    if (!unit) {
      this.info("status message " + next.cmd + " for unknown unit = " + unitLogical + 
                " in node = " + nodeLogical);
      return;
    }

    // Parse the status into the unit and propagate
    Protocol.receiveStatus(next, unit);
  }

  async requestStatus() {
    for (let nodeInx = 0; nodeInx < this.nodes.length; nodeInx++) {
      const node = this.nodes[nodeInx];
      if (node.active) {
        for (let unitInx = 0; unitInx < node.units.length; unitInx++) {
          await this.requestUnitStatus(node.units[unitInx]);
        }
      }
    }
  }

  async requestNodeStatus(node: Node) {
    for (let unitInx = 0; unitInx < node.units.length; unitInx++) {
      if (node.units[unitInx].active) 
        await this.requestUnitStatus(node.units[unitInx]);
    }
  }

  async requestUnitStatus(unit: Unit) {
    const message = Protocol.buildRequestUnitStatus(unit.node, unit)
    let res = await this.send(message);
    // results will be set by the data event listener
    this.info("get value of " + unit.node.getName() + "-" + unit.getName());
  }

  async setUnitStatus(unit: Unit, value: number) {
    const params = Protocol.buildSetCmd(unit.node, unit, value);
    if (params.cmd) {
      await this.send(params.message);
    }
  }

  async setPreset(unit: Unit, preset: number, temp: number) {
    await this.send(Protocol.buildSetPreset(unit.node, unit, preset, temp));
    this.info("set temp preset: " + preset + " of " + unit.node.getName() + "-" + unit.getName() + " to temp " + temp);
  }

  async selectPreset(unit: Unit, preset: number) {
    await this.send(Protocol.buildSelectPreset(unit.node, unit, preset));
    this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + " to: " + preset);
  }

  async setSchedule() {
    await this.send(Protocol.buildSendSchedule(this.schedule));
    this.info("set schedule to week nr: " + this.schedule);
  }

  async setTempOnOff(unit: Unit, on: boolean) {
    await this.send(Protocol.buildSensorOnOff(unit.node, unit, on));
    this.info("turn temp sensor of " + unit.node.getName() + "-" + unit.getName() + ": " + (on ? "on" : "off"));
  }

  async doIncDecPreset(unit: Unit, inc: boolean) {
    await this.send(Protocol.buildIncDecPreset(unit.node, unit, inc));
    this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + ": " + (inc ? "up" : "down"));
  }


}