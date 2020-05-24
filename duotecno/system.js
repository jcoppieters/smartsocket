"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const master_1 = require("./master");
const protocol_1 = require("./protocol");
const base_1 = require("../server/base");
const events_1 = require("events");
class System extends base_1.Base {
    constructor(debug = false, logger) {
        super("system", debug, logger);
        this.isBrowser = true;
        this.isSplitted = false;
        this.moods = [];
        this.controls = [];
        this.temperatures = [];
        this.stores = [];
        this.scenes = [];
        this.trigger = null;
        this.emitter = new events_1.EventEmitter();
        protocol_1.Protocol.setEmitter(this.emitter);
        this.emitter.on('update', this.checkScenes.bind(this));
        this.readConfig();
        this.readGroups();
        this.readScenes();
        // open all masters listed in the config
        this.masters = [];
    }
    setBrowser(isB) {
        this.isBrowser = isB;
    }
    setLogger(logger) {
        this.logger = logger;
        // use my log function
        protocol_1.Protocol.logger = logger;
    }
    openMasters(readDB = false) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let inx = 0; inx < this.config.cmasters.length; inx++) {
                try {
                    if (this.config.cmasters[inx].active)
                        yield this.openMaster(this.config.cmasters[inx], inx, readDB);
                }
                catch (err) {
                    this.log(err);
                }
            }
        });
    }
    closeMasters() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let inx = 0; inx < this.masters.length; inx++) {
                yield this.closeMaster(this.masters[inx]);
            }
        });
    }
    openMaster(config, inx, readDB = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const master = new master_1.Master(this, config);
            this.masters[inx] = master;
            try {
                // testing
                if (!master.config.active)
                    return;
                this.log("opening master: " + master.getAddress());
                yield master.open();
                if (!(yield master.login()))
                    throw (new Error("Failed to log in"));
                yield master.getDatabase(readDB);
                this.log("master: " + master.getAddress() + " opened with " + master.nodes.length + " nodes.");
                this.triggerRebuild();
                return master;
            }
            catch (e) {
                this.err("failed to open master (" + e.toString() + ")");
                return null;
                // throw(e);
            }
        });
    }
    closeMaster(master) {
        return __awaiter(this, void 0, void 0, function* () {
            // non-existing master or not open -> do nothing
            if ((!master) || (!master.isOpen))
                return;
            // find its index (we need it to delete it from the master list)
            let inx = this.findMasterInx(master);
            // close
            try {
                yield master.close();
            }
            catch (e) {
                this.err("failed to close master on " + master.getAddress() + ":" + master.getConfig().port);
            }
            // remove from list
            if (inx > -1)
                this.masters.splice(inx, 1);
        });
    }
    displayDatabases() {
        this.masters.forEach(m => m.displayDatabase());
    }
    ////////////////
    // Setting up //
    ////////////////
    addMaster(cmaster) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cmaster.address)
                return;
            // see if this master already exists
            let inx = this.findCMasterInx(cmaster.address, cmaster.port);
            // store in config if not yet known
            if (inx < 0) {
                this.config.cmasters.push(cmaster);
                inx = this.masters.length;
            }
            else {
                // close to re-open
                yield this.closeMaster(this.masters[inx]);
                this.config.cmasters[inx] = cmaster;
            }
            this.writeConfig();
            return yield this.openMaster(cmaster, inx);
        });
    }
    deleteMaster(master) {
        return __awaiter(this, void 0, void 0, function* () {
            const masterAddress = master.getAddress();
            const masterPort = master.getPort();
            // remove from the config
            let inx = this.findCMasterInx(masterAddress, masterPort);
            if (inx >= 0) {
                // remove the master (from the master list and the config list), 
                this.config.cmasters.splice(inx, 1);
                // remove it's units from the config
                this.config.cunits = this.config.cunits.filter(unit => (unit.masterPort != masterPort) || (unit.masterAddress != masterAddress));
                this.writeConfig();
            }
            else {
                this.err("didn't find the master " + master.getAddress() + ":" + master.getConfig().port + " in the config");
            }
            // remove from the active masters
            inx = this.findMasterInx(master);
            if (inx >= 0) {
                this.masters.splice(inx, 1);
                try {
                    if (master.isOpen) {
                        yield master.close();
                    }
                }
                catch (e) {
                    this.err("failed to close master on " + master.getAddress() + ":" + master.getConfig().port);
                }
            }
            else {
                this.err("didn't find the master " + master.getAddress() + ":" + master.getConfig().port + " in the active master list");
            }
        });
    }
    setActiveState(item) {
        if (item instanceof protocol_1.Node) {
            const masterAddress = item.master.getAddress();
            const masterPort = item.master.getPort();
            const unitConfig = this.config.cunits.find((cu) => (cu.logicalNodeAddress === item.logicalAddress) &&
                (cu.masterAddress === masterAddress) &&
                (cu.masterPort == masterPort));
            // exists in configured nodes
            item.active = !!unitConfig;
        }
        if (item instanceof protocol_1.Unit) {
            const masterAddress = item.node.master.getAddress();
            const masterPort = item.node.master.getPort();
            const config = this.config.cunits.find((cu) => (cu.logicalAddress === item.logicalAddress) &&
                (cu.logicalNodeAddress === item.logicalNodeAddress) &&
                (cu.masterAddress === masterAddress) &&
                (cu.masterPort == masterPort));
            item.active = !!config;
            if (config) {
                item.group = config.group;
            }
        }
    }
    selectGroup(group) {
        if (this.config.multiple) {
            // multiple groups = just turn on/off
            group.visible = !group.visible;
        }
        else {
            // turn of other groups if this one becomes visible
            if (!group.visible)
                this.groups.forEach(g => g.visible = false);
            group.visible = !group.visible;
        }
        this.writeGroups();
    }
    //////////////////////////////////////
    // Finding masters, nodes and units //
    //////////////////////////////////////
    findMaster(master, port) {
        if (typeof master === "string") {
            if (typeof port === "undefined")
                port = 5001;
            return this.masters.find((m) => m.same(master, port));
        }
        else {
            return this.masters.find((m) => m && m.same(master));
        }
    }
    findMasterInx(master) {
        return this.masters.findIndex((m) => m && m.same(master));
    }
    findCMasterInx(address, port) {
        return this.config.cmasters.findIndex((m) => (m.address == address) && (m.port == port));
    }
    findNode(master, logicalAddress) {
        if (master)
            return master.nodes.find((n) => n && (n.logicalAddress === logicalAddress));
        else
            return null;
    }
    findUnit(master, A, B, C) {
        let nodeNr = A;
        let unitNr = B;
        if (typeof master === "string") {
            master = this.findMaster(master, A);
            nodeNr = B;
            unitNr = C;
        }
        const node = this.findNode(master, nodeNr);
        if (node)
            return node.units.find((u) => u && (u.logicalAddress === unitNr));
        else
            return null;
    }
    findUnitByAddress(logicalNodeAddress, logicalAddress) {
        let unit = null;
        this.masters.forEach((m) => {
            if (m) {
                const node = this.findNode(m, logicalNodeAddress);
                if (node)
                    unit = node.units.find((u) => u && (u.logicalAddress === logicalAddress));
            }
        });
        return unit;
    }
    findUnitByName(master, name) {
        let unit = null;
        this.masters.forEach((m) => {
            if (m && (m.getAddress() == master)) {
                m.nodes.forEach((n) => {
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
    allActiveUnits() {
        return this.masters
            .reduce((acc, m) => acc.concat(m.nodes), [])
            .reduce((acc, n) => acc.concat(n.units), [])
            .filter(u => u.active);
    }
    allMasters(doToMaster) {
        this.masters.forEach(m => doToMaster(m));
    }
    //////////////////////////////////////////////////
    // Getting the current state of units and nodes //
    //////////////////////////////////////////////////
    updateSystem(dontTrigger = false) {
        this.config.cunits = this.allActiveUnits()
            .map((u) => {
            return { active: "Y", group: u.group, name: u.name,
                masterAddress: u.node.master.getAddress(), masterPort: u.node.master.getPort(),
                logicalNodeAddress: u.node.logicalAddress, logicalAddress: u.logicalAddress };
        });
        this.writeConfig();
        if (dontTrigger)
            this.triggerRebuild();
    }
    triggerRebuild(immediate = false) {
        this.log("triggerRebuild requested");
        if (this.trigger) {
            this.log("killing pending rebuild");
            clearTimeout(this.trigger);
            this.trigger = null;
        }
        if (immediate) {
            this.rebuildServices();
        }
        else {
            this.trigger = setTimeout(() => {
                this.trigger = null;
                this.rebuildServices();
            }, 1000);
        }
    }
    rebuildServices() {
        function compare(a, b) {
            const an = a.getSort();
            const bn = b.getSort();
            if (an < bn)
                return -1;
            if (an > bn)
                return 1;
            return 0;
        }
        function compareN(a, b) {
            const aname = a.name.toLowerCase();
            const bname = b.name.toLowerCase();
            if (aname < bname)
                return -1;
            if (aname > bname)
                return 1;
            return 0;
        }
        // sort masters, nodes in masters, units in nodes.
        this.log("rebuildMasters (" + this.masters.length + ") -> nodes -> units");
        this.masters.sort(compare);
        this.masters.forEach((m) => {
            m.nodes.sort(compare);
            m.nodes.forEach((n) => n.units.sort(compare));
        });
        // sort selected controls, temperatures and moods.
        this.log("rebuildServices");
        const services = this.allActiveUnits();
        this.controls = services.filter(s => s.isCtrl()).sort(compareN);
        this.temperatures = services.filter(s => s.isTemperature()).sort(compareN);
        this.moods = services.filter(s => (s.isMood() || s.isInput())).sort(compareN);
        this.stores = this.controls.filter(s => s.isUpDown());
        let complete = true;
        this.allMasters(m => m.allNodes(n => { if (n.nrUnits != n.units.length)
            complete = false; }));
        if (complete)
            this.emitter.emit('ready', this.masters.length);
    }
    ////////////
    // Scenes //
    ////////////
    checkScenes(unit) {
        // called by updateState that is listening for status changes
        const scene = this.scenes.find(s => unit.isUnit(s.trigger.masterAddress, s.trigger.masterPort, s.trigger.logicalNodeAddress, s.trigger.logicalAddress));
        if (scene) {
            this.log("scene found -> " + scene.name + ", value = " + scene.trigger.value + " unit = " + unit.value);
            console.log(scene);
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
        this.groups.sort((a, b) => a.order - b.order);
        this.groups.forEach((g, i) => g.order = i);
    }
    readScenes() {
        this.scenes = this.read("scenes");
        // order the groups and reset the order indices
        this.scenes.sort((a, b) => a.order - b.order);
        this.scenes.forEach((g, i) => g.order = i);
    }
    writeScenes() {
        this.groups = this.write("scenes", this.scenes);
    }
    writeGroups() {
        this.groups = this.write("groups", this.groups);
    }
}
exports.System = System;
//# sourceMappingURL=system.js.map