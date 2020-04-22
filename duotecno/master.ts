import { Node, Protocol, Unit, recName, Rec } from "./protocol";
import { MasterConfig, WriteError, CommRecord, Message, Sanitizers } from "./types";
import { System } from "./system";
import { Base } from "../server/base";

import { Q } from "./Q";
//import { Socket } from 'cz.blocshop.socketsforcordova/socket.js';

export class Master extends Base {

  private system: System;
  public nodes: Array<Node>;
  public nrNodes: number;
  public schedule: number;

  public isOpen: boolean;
  public isLoggedIn: boolean;
  private resolveLogin = null;
  private closeRequested: boolean;
  private buffer: string;

  private Q: Q;
  
  config: MasterConfig;
  private socket: WebSocket //  Socket;

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

  constructor(system: System, config: MasterConfig) {
    super("master");
    this.Q = new Q(system.logger);

    // save my eco system
    this.system = system;
  
    // save this masters config settings
    this.config = Sanitizers.masterConfig(config);

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

  log(msg: string) {
    // overwrite to add IP address
    super.log(this.type + " " + this.getAddress() + ": " + msg);
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

  inMultiNode(): boolean {
    return (this.nodes.length > 1);
  }

  same(master: Master | string, port?: number): boolean {
    if (typeof master === "string") {
      if (typeof port === "undefined") port = 5001;
      return this.hasAddress(master) && this.hasPort(port);
    } else {
      return master && this.hasAddress(master.getAddress()) && this.hasPort(master.getPort());
    }
  }


  /* ************* */
  /* Communication */
  /* ************* */
  async open() {
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
      return await this.openWeb();
    //else 
    //  return await this.openTCP();
  }
  async openTCP() {
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
  }
  async openWeb() {
    return new Promise((resolve, reject) => {
      try {
        ////////////////////////////////
        // try to open the connection //
        this.log("opening connection to the SmartSocket Server");
        const wsserver = this.system.config.socketserver + ":" + this.system.config.socketport;
        const tcpserver = this.config.address + ":" + this.config.port;
        this.socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);
        if (!this.socket) throw(new Error("could create new web socket"));

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


      } catch(e) {
        this.err("Failed to open a connection on port " + this.getPort());
        reject(e);
      }
    });
  }


  async close() {
    if (this.isOpen) {
      const message = Protocol.buildDisconnect();
      try {
        this.closeRequested = true;
        await this.send(message);  
        // server will close the socket, no need to call socket.close()

      } catch (err) {
        this.err("Disconnect failure: " + err);
      }
    }
  }

  async login() {
    return new Promise((resolve, reject) => {
      const message = Protocol.buildLogin(this.config.password) 
      try {
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

  async backup() {
    const data = JSON.stringify(this.config);
    Protocol.write(this.socket, "[B," + data + "]");
  }
  async restore() {
    Protocol.write(this.socket, "[R]");
  }
  restoring(data) {
    this.config = data;
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
      this.log("incoming msg=" + recName(next.cmd) + ", status="+next.isStatus + 
      ", data=" + ((!next.message) ? 
          "--" : ((next.message instanceof Array) ? next.message.join(",") : next.message)));

      this.Q.do();
      //this.q.pop();

      if (next.isStatus) {
        this.receiveStatus(next);
      
      } else if (next.cmd === Rec.Info) {
        this.receiveInfo(next);

      } else if (next.cmd === Rec.ConnectStatus) {
        this.receiveLogin(next.message);
      
      } else if (next.cmd === Rec.ScheduleStatus) {
        this.receiveSchedule(next.message);

      } else if (next.cmd === -1) {
        this.restoring(next.message);
      
      } else {
        this.log("what to do with: " + next.message);

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
        unit = new Unit(node, unitInfo);
        node.units.push(unit);
      } else {
        this.err("Node not found: " + unitInfo.logicalNodeAddress);
      }
    } else {
      Sanitizers.unitInfo(unitInfo, unit);
    }
    this.system.setActiveState(unit);
  }


  fetchAllUnits(node: Node) {
    for (let unitInx=0; unitInx < node.nrUnits; unitInx++) {
      this.fetchUnit(node, unitInx);
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


  async getDatabase(readUnits: boolean = true) {
    this.nodes = [];

    await this.fetchDbInfo();
  }

  allNodes(callback:(n: Node) => void) {
    this.nodes.forEach(node => {
      callback(node)
    });
  }

  allUnits(callback:(u: Unit) => void) {
    this.nodes.forEach(node => {
      node.units.forEach(unit => {
        callback(unit)
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
      this.err("status message " + next.cmd + " for unknown node = " + nodeLogical);
      return;
    }

    // find unit 
    const unitLogical = next.message[3];
    const unit = node.units.find(unit => unit && (unit.logicalAddress == unitLogical))
    if (!unit) {
      //this.err("status message " + next.cmd + " for unknown unit = " + unitLogical + 
      //          " in node = " + nodeLogical);
      return;
    }

    // Parse the status into the unit
    Protocol.receiveStatus(next, unit);

    /*
    // inform the system if a change was detected or if macro command (69)
    if ((currValue != unit.value) || (currStatus != unit.status) || (next.cmd == 69))
      this.system.informStatusChange(this, unit);
    */
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