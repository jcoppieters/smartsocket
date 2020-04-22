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
const protocol_1 = require("./protocol");
const types_1 = require("./types");
const base_1 = require("../server/base");
const Q_1 = require("./Q");
//import { Socket } from 'cz.blocshop.socketsforcordova/socket.js';
class Master extends base_1.Base {
    // command was sent, no response received yet
    /* system.config: {
      "socketserver": "akiworks.be",
      "socketport": 9999,
      "language": "EN",
      "stores": true,
      "multiple": true,
      "cmasters": [
        { "name": "Roos",
          "address": "141.135.240.51",
          "port": 5001,
          "password": "duotecno",
          "debug": true,
          "active": true
        }, ...],
      "cnodes": [
        { "active": "Y",
          "masterAddress": "141.135.240.51",
          "masterPort": 5001,
          "logicalAddress": 7
        }, ...],
      "cunits": [
        { "active": "Y",
          "group": "1",
          "masterAddress": "141.135.240.51",
          "masterPort": 5001,
          "logicalNodeAddress": 7,
          "logicalAddress": 0
        }, ...
      ]
    }
    */
    constructor(system, config) {
        super("master");
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
        // connection to an IP node / smartbox
        this.socket = null;
        this.isOpen = false;
        this.isLoggedIn = false;
        this.closeRequested = false;
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
        super.log(this.type + " " + this.getAddress() + ": " + msg);
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
    inMultiNode() {
        return (this.nodes.length > 1);
    }
    same(master, port) {
        if (typeof master === "string") {
            if (typeof port === "undefined")
                port = 5001;
            return this.hasAddress(master) && this.hasPort(port);
        }
        else {
            return master && this.hasAddress(master.getAddress()) && this.hasPort(master.getPort());
        }
    }
    /* ************* */
    /* Communication */
    /* ************* */
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            // test:
            // if (!this.system.isBrowser) {
            //   try {
            //     let x = new Socket();
            //     if (x) 
            //       this.toast("socket is created")
            //     else
            //       this.toast("socket return null");
            //   } catch(e) {
            //     this.toast("socket throwed error: " + e);
            //   }
            // }
            //if (this.system.isBrowser) 
            return yield this.openWeb();
            //else 
            //  return await this.openTCP();
        });
    }
    openTCP() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.openWeb();
            /*
              return new Promise((resolve, reject) => {
                try {
                  ////////////////////////////////
                  // try to open the connection //
                  this.log("opening connection to direct TCP Socket");
                  this.socket = new Socket();
                  if (!this.socket) throw(new Error("could create new tcp socket"));
          
                  ///////////////////////
                  // set data listener //
                  this.socket.onData = (message) => {
                    // messages need to be buffered until "]" is received
                    this.handleData(message);
                  };
          
                  ///////////////////////////
                  // set an error listener //
                  this.socket.onError = (err) => {
                    this.err("TCP Socket: " + err);
                  };
          
                  ///////////////////////////////////////////
                  // set end: the server closed the socket //
                  this.socket.onClose = (err) => {
                    this.isOpen = false;
                    this.isLoggedIn = false;
                    this.log("end -> socket got disconnected");
          
                    if (!this.closeRequested) {
                      // unexpected close
                      this.err("Socket: closed unexpectedly -> " + err);
                    }
                  };
          
                  this.socket.open(this.config.address, this.config.port,
                    () => {
                      this.log("connection open on " + this.getAddress() + " on port " + this.getPort());
                      this.isOpen = true;
                      resolve(this.socket);
                    },
                    (err) => {
                      this.err("Failed to open a connection to " + this.getAddress() + " on port " + this.getPort());
                      reject(err)
                    }
                  );
          
                } catch(e) {
                  this.err("Failed to open a connection to " + this.getAddress() + " on port " + this.getPort());
                  reject(e);
                }
              });
              */
        });
    }
    openWeb() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    ////////////////////////////////
                    // try to open the connection //
                    this.log("opening connection to the SmartSocket Server");
                    const wsserver = this.system.config.socketserver + ":" + this.system.config.socketport;
                    const tcpserver = this.config.address + ":" + this.config.port;
                    this.socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);
                    if (!this.socket)
                        throw (new Error("could create new web socket"));
                    ///////////////////////
                    // set data listener //
                    this.socket.onmessage = (message) => {
                        // messages need to be buffered until "]" is received
                        this.handleData(message.data);
                    };
                    ///////////////////////////
                    // set an error listener //
                    this.socket.onerror = (err) => {
                        this.err("Socket: " + err);
                    };
                    ///////////////////////////////////////////
                    // set end: the server closed the socket //
                    this.socket.onclose = () => {
                        this.isOpen = false;
                        this.isLoggedIn = false;
                        this.log("end -> socket got disconnected");
                        if (!this.closeRequested) {
                            // unexpected close
                            this.err("Socket: closed unexpectedly");
                        }
                    };
                    this.socket.onopen = () => {
                        this.isOpen = true;
                        // request a connection to the real socket
                        this.log("connection open on " + this.config.address + " on port " + this.config.port);
                        // resolve our promise with the opened socket
                        resolve(this.socket);
                    };
                }
                catch (e) {
                    this.err("Failed to open a connection on port " + this.getPort());
                    reject(e);
                }
            });
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isOpen) {
                const message = protocol_1.Protocol.buildDisconnect();
                try {
                    this.closeRequested = true;
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
                const message = protocol_1.Protocol.buildLogin(this.config.password);
                try {
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
    backup() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(this.config);
            protocol_1.Protocol.write(this.socket, "[B," + data + "]");
        });
    }
    restore() {
        return __awaiter(this, void 0, void 0, function* () {
            protocol_1.Protocol.write(this.socket, "[R]");
        });
    }
    restoring(data) {
        this.config = data;
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
            this.log("incoming msg=" + protocol_1.recName(next.cmd) + ", status=" + next.isStatus +
                ", data=" + ((!next.message) ?
                "--" : ((next.message instanceof Array) ? next.message.join(",") : next.message)));
            this.Q.do();
            //this.q.pop();
            if (next.isStatus) {
                this.receiveStatus(next);
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
            else if (next.cmd === -1) {
                this.restoring(next.message);
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
                unit = new protocol_1.Unit(node, unitInfo);
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
        for (let unitInx = 0; unitInx < node.nrUnits; unitInx++) {
            this.fetchUnit(node, unitInx);
        }
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
    getDatabase(readUnits = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this.nodes = [];
            yield this.fetchDbInfo();
        });
    }
    allNodes(callback) {
        this.nodes.forEach(node => {
            callback(node);
        });
    }
    allUnits(callback) {
        this.nodes.forEach(node => {
            node.units.forEach(unit => {
                callback(unit);
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
            this.err("status message " + next.cmd + " for unknown node = " + nodeLogical);
            return;
        }
        // find unit 
        const unitLogical = next.message[3];
        const unit = node.units.find(unit => unit && (unit.logicalAddress == unitLogical));
        if (!unit) {
            //this.err("status message " + next.cmd + " for unknown unit = " + unitLogical + 
            //          " in node = " + nodeLogical);
            return;
        }
        // Parse the status into the unit
        protocol_1.Protocol.receiveStatus(next, unit);
        /*
        // inform the system if a change was detected or if macro command (69)
        if ((currValue != unit.value) || (currStatus != unit.status) || (next.cmd == 69))
          this.system.informStatusChange(this, unit);
        */
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