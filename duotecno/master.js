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
exports.Master = void 0;
const protocol_1 = require("./protocol");
const types_1 = require("./types");
const base_1 = require("../server/base");
const Q_1 = require("./Q");
const smartsocket_1 = require("./smartsocket");
class Master extends base_1.Base {
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
    constructor(system, config) {
        super("master", config.debug, system.logger);
        this.resolveLogin = null;
        this.Q = new Q_1.Q(system.logger);
        // save my eco system
        this.system = system;
        // save this masters config settings
        this.config = types_1.Sanitizers.masterConfig(config);
        // all nodes in this master
        this.nodes = [];
        this.nrNodes = 0;
        this.schedule = 0;
        this.date = null;
        // connection to an IP node / smartbox
        this.socket = null;
        this.isOpen = false;
        this.isLoggedIn = false;
        // incoming data
        this.buffer = "";
    }
    getName() {
        return this.config.name || "master";
    }
    getSort() {
        return this.getName().toLowerCase();
    }
    log(msg) {
        // overwrite to add IP address
        super.log(this.getAddress() + ": " + msg);
    }
    writeConfig(config, fn) {
        // overwrite: don't do anything, all is stored in the system-config
    }
    getConfig() {
        return this.config;
    }
    hasAddress(ip) {
        return this.config.address === ip;
    }
    getAddress() {
        return this.config.address;
    }
    getPort() {
        return this.config.port;
    }
    hasPort(port) {
        return this.config.port == port;
    }
    getURL() {
        return this.config.address + ":" + this.config.port;
    }
    inMultiNode() {
        return (this.nodes.length > 1);
    }
    same(master, port) {
        if (typeof master === "string") {
            if (typeof port === "undefined") {
                // master is probably url ip:port
                const url = master.split(":");
                master = url[0];
                port = parseInt(url[1] || "5001");
            }
            return this.hasAddress(master) && this.hasPort(port);
        }
        else {
            return master && this.hasAddress(master.getAddress()) && this.hasPort(master.getPort());
        }
    }
    /* ************* */
    /* Communication */
    /* ************* */
    open(cnt = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            this.socket = yield smartsocket_1.getSocket(this.config.address, this.config.port, (msg) => {
                this.handleData(msg);
            }, (end) => {
                this.isOpen = false;
                this.isLoggedIn = false;
                this.log("end -> socket got disconnected -> try to reopen (" + cnt + ")");
                // try to reopen
                setTimeout(() => this.open(cnt + 1), 2);
            }, (log) => {
                this.log(log);
            }, (err) => {
                this.err(err);
            });
            this.isOpen = true;
            this.log("master opened -> " + this.config.address);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isOpen) {
                const message = protocol_1.Protocol.buildDisconnect();
                try {
                    yield this.send(message);
                    // server will close the socket, no need to call socket.close()
                }
                catch (err) {
                    this.err("Disconnect failure: " + err);
                }
            }
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    const message = protocol_1.Protocol.buildLogin(this.config.password);
                    protocol_1.Protocol.write(this.socket, message);
                    // to be called when logged in
                    this.resolveLogin = resolve;
                }
                catch (err) {
                    this.resolveLogin = null;
                    this.err("Login call failed: " + err);
                    reject(false);
                }
            });
        });
    }
    send(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Q.exec(() => __awaiter(this, void 0, void 0, function* () {
                if (!this.isOpen) {
                    yield this.open();
                    if (!(yield this.login())) {
                        return types_1.WriteError.writeFatal;
                    }
                }
                return protocol_1.Protocol.write(this.socket, message);
            }));
        });
    }
    handleData(message) {
        // put the incoming data into a buffer and only use complete data
        this.buffer += message;
        while ((this.buffer.length > 0) && this.processData())
            ;
    }
    processData() {
        // fetch next message and store the rest of unused data (if any)
        const next = protocol_1.Protocol.nextMessage(this.buffer);
        this.buffer = next.rest;
        if (!next.cmd) {
            return false;
        }
        else {
            if ((next.cmd != protocol_1.Rec.TimeDateStatus) && (next.cmd != protocol_1.Rec.Sensor))
                this.log(protocol_1.recName(next.cmd) + " -> " + ((!next.message) ?
                    "--" : ((next.message instanceof Array) ? next.message.join(",") : next.message)));
            this.Q.do();
            if (next.isStatus) {
                this.receiveStatus(next);
                // non-unit specific info
            }
            else if (next.cmd === protocol_1.Rec.TimeDateStatus) {
                this.receiveDateTime(next.message);
            }
            else if (next.cmd === protocol_1.Rec.Info) {
                this.receiveInfo(next);
            }
            else if (next.cmd === protocol_1.Rec.ConnectStatus) {
                this.receiveLogin(next.message);
            }
            else if (next.cmd === protocol_1.Rec.ScheduleStatus) {
                this.receiveSchedule(next.message);
            }
            else {
                this.log("what to do with: " + next.message);
            }
            return true;
        }
    }
    ///////////////////
    // Login message //
    ///////////////////
    receiveLogin(message) {
        this.isLoggedIn = (message[2] === 1);
        if (this.resolveLogin) {
            this.resolveLogin(this.isLoggedIn);
            this.resolveLogin = null;
        }
        else {
            this.err("unexpected ConnectStatus ?");
        }
    }
    ///////////////////
    // Info messages //
    ///////////////////
    receiveInfo(next) {
        if (next.message[1] === protocol_1.Rec.DBInfo) {
            this.receiveDBInfo(next.message);
        }
        else if (next.message[1] === protocol_1.Rec.NodeInfo) {
            this.receiveNodeInfo(next.message);
        }
        else if (next.message[1] === protocol_1.Rec.UnitInfo) {
            this.receiveUnitInfo(next.message);
        }
        else {
            this.err("What is this? info type = " + next.message[1] + ", message: " + next.message);
        }
        this.system.triggerRebuild();
    }
    receiveSchedule(message) {
        this.schedule = message[2];
        this.info("received week schedule = " + this.schedule);
    }
    receiveDateTime(message) {
        // 71,0,9,37,3,3,4,3,21,20 -> 09:37:03 Wednesday(3) 4 march 2120
        this.date = new Date((message[8] - 1) * 100 + message[9], message[7] - 1, message[6], message[2], message[3], message[4]);
        // this.log("Received date/time: " + this.date);
    }
    receiveDBInfo(message) {
        const dbInfo = protocol_1.Protocol.makeDBInfo(message);
        this.nrNodes = dbInfo.nrNodes;
        for (let nodeInx = 0; nodeInx < this.nrNodes; nodeInx++) {
            this.fetchNode(nodeInx);
        }
    }
    receiveNodeInfo(message) {
        const nodeInfo = protocol_1.Protocol.makeNodeInfo(message);
        let node = this.findNode(nodeInfo.logicalAddress);
        if (!node) {
            node = new protocol_1.Node(this, nodeInfo);
            this.nodes.push(node);
        }
        else {
            types_1.Sanitizers.nodeInfo(nodeInfo, node);
        }
        this.system.setActiveState(node);
        this.config.nodenames[node.logicalAddress] = node.name;
        this.system.updateMasterConfig(this);
        if (node.active && (node.nrUnits !== node.units.length)) {
            this.fetchAllUnits(node);
        }
        else {
            this.log("Skipping node: " + node.getDescription());
        }
    }
    receiveUnitInfo(message) {
        const unitInfo = protocol_1.Protocol.makeUnitInfo(message);
        let unit = this.findUnit(unitInfo.logicalNodeAddress, unitInfo.logicalAddress);
        if (!unit) {
            const node = this.findNode(unitInfo.logicalNodeAddress);
            if (node) {
                unit = new protocol_1.Unit(node, unitInfo, this.system.config.mood);
                node.units.push(unit);
            }
            else {
                this.err("Node not found: " + unitInfo.logicalNodeAddress);
            }
        }
        else {
            types_1.Sanitizers.unitInfo(unitInfo, unit);
        }
        this.system.setActiveState(unit);
    }
    fetchAllUnits(node) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let unitInx = 0; unitInx < node.nrUnits; unitInx++) {
                yield this.fetchUnit(node, unitInx);
            }
        });
    }
    fetchDbInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.send(protocol_1.Protocol.buildDBInfo());
                yield this.send(protocol_1.Protocol.buildRequestSchedule());
            }
            catch (err) {
                this.err("dbInfo call failed -> " + err);
            }
        });
    }
    fetchNode(nodeInx) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = protocol_1.Protocol.buildNodeInfo(nodeInx);
            try {
                yield this.send(message);
            }
            catch (err) {
                this.err("nodeInfo call failed -> " + err);
            }
        });
    }
    fetchUnit(node, unitInx) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = protocol_1.Protocol.buildUnitInfo(node, unitInx);
            try {
                // unit with index "unitInx" in node "logicalAddress"
                yield this.send(message);
            }
            catch (err) {
                this.err("unitInfo call failed -> " + err);
            }
        });
    }
    getDatabase(readDB = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.nodes = [];
            const hasNames = this.system.config.cunits.filter(u => this.same(u.masterAddress, u.masterPort)).some(u => u.name);
            if (readDB || !hasNames) {
                this.log("Fetching info from master DB for: " + this.getAddress());
                yield this.fetchDbInfo();
                // upon reception of the DB info, 
                //   getNode info will be called, 
                //   which in it's turn will trigger getUnitInfo through fetchAllUnits
            }
            else {
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
                        node = new protocol_1.Node(this, { logicalAddress: u.logicalNodeAddress, name });
                        this.nodes.push(node);
                        this.system.setActiveState(node);
                        this.log("new node: " + node.getName());
                    }
                    let unit = this.findUnit(u.logicalNodeAddress, u.logicalAddress);
                    if (!unit) {
                        unit = new protocol_1.Unit(node, u);
                        node.units.push(unit);
                        this.log("new unit: " + unit.getName() + " -> " + u.logicalAddress);
                    }
                    this.system.setActiveState(unit);
                });
            }
        });
    }
    allNodes(doToNode) {
        this.nodes.forEach(node => {
            doToNode(node);
        });
    }
    allUnits(doToUnit) {
        this.nodes.forEach(node => {
            node.units.forEach(unit => {
                doToUnit(unit);
            });
        });
    }
    displayDatabase(onlyNodes = false) {
        this.log("Showing " + this.nodes.length + " nodes");
        this.nodes.forEach((node, nodeInx) => {
            if (onlyNodes)
                this.log("===================================================================================");
            this.log(nodeInx + ". " + node.name +
                ", type = " + node.typeName() +
                ", nrUnits = " + node.nrUnits +
                ", logical address = " + node.logicalAddress);
            if (onlyNodes) {
                this.log("-----------------------------------------------------------------------------------");
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
    findUnit(logicalNodeAddress, logicalAddress) {
        const node = this.findNode(logicalNodeAddress);
        if (node)
            return node.units.find((u) => u.logicalAddress === logicalAddress);
        else
            return null;
    }
    findNode(logicalAddress) {
        return this.nodes.find((n) => n && (n.logicalAddress === logicalAddress));
    }
    getNodeAndUnit(node, unit) {
        // allow for index numbers or real nodes to be passed
        if (typeof node === "number") {
            if (node >= this.nodes.length) {
                this.err("getNodeAndUnit -> node nr " + node + " out of bounds");
                node = null;
            }
            else {
                node = this.nodes[node];
            }
        }
        if (!node) {
            this.err("getNodeAndUnit -> node not found ");
            return null;
        }
        if (typeof unit === "number") {
            if (unit >= node.units.length) {
                this.err("getNodeAndUnit -> unit nr " + unit + " out of bounds");
                unit = null;
            }
            else {
                unit = node.units[unit];
            }
        }
        if (!unit) {
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
    receiveStatus(next) {
        // called when an incoming message was received and classified as a status message
        // find node 
        const nodeLogical = next.message[2];
        const node = this.nodes.find(node => node && (node.logicalAddress == nodeLogical));
        if (!node) {
            this.info("status message " + next.cmd + " for unknown node = " + nodeLogical);
            return;
        }
        // find unit 
        const unitLogical = next.message[3];
        const unit = node.units.find(unit => unit && (unit.logicalAddress == unitLogical));
        if (!unit) {
            this.info("status message " + next.cmd + " for unknown unit = " + unitLogical +
                " in node = " + nodeLogical);
            return;
        }
        // Parse the status into the unit and propagate
        protocol_1.Protocol.receiveStatus(next, unit);
    }
    requestStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let nodeInx = 0; nodeInx < this.nodes.length; nodeInx++) {
                const node = this.nodes[nodeInx];
                if (node.active) {
                    for (let unitInx = 0; unitInx < node.units.length; unitInx++) {
                        yield this.requestUnitStatus(node.units[unitInx]);
                    }
                }
            }
        });
    }
    requestNodeStatus(node) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let unitInx = 0; unitInx < node.units.length; unitInx++) {
                if (node.units[unitInx].active)
                    yield this.requestUnitStatus(node.units[unitInx]);
            }
        });
    }
    requestUnitStatus(unit) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = protocol_1.Protocol.buildRequestUnitStatus(unit.node, unit);
            let res = yield this.send(message);
            // results will be set by the data event listener
            this.info("get value of " + unit.node.getName() + "-" + unit.getName());
        });
    }
    setUnitStatus(unit, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = protocol_1.Protocol.buildSetCmd(unit.node, unit, value);
            if (params.cmd) {
                yield this.send(params.message);
            }
        });
    }
    setPreset(unit, preset, temp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(protocol_1.Protocol.buildSetPreset(unit.node, unit, preset, temp));
            this.info("set temp preset: " + preset + " of " + unit.node.getName() + "-" + unit.getName() + " to temp " + temp);
        });
    }
    selectPreset(unit, preset) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(protocol_1.Protocol.buildSelectPreset(unit.node, unit, preset));
            this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + " to: " + preset);
        });
    }
    setSchedule() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(protocol_1.Protocol.buildSendSchedule(this.schedule));
            this.info("set schedule to week nr: " + this.schedule);
        });
    }
    setTempOnOff(unit, on) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(protocol_1.Protocol.buildSensorOnOff(unit.node, unit, on));
            this.info("turn temp sensor of " + unit.node.getName() + "-" + unit.getName() + ": " + (on ? "on" : "off"));
        });
    }
    doIncDecPreset(unit, inc) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send(protocol_1.Protocol.buildIncDecPreset(unit.node, unit, inc));
            this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + ": " + (inc ? "up" : "down"));
        });
    }
}
exports.Master = Master;
//# sourceMappingURL=master.js.map