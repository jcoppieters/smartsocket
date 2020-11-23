import { CommRecord, Message, Sanitizers, NodeInfo, UnitInfo, DBInfo, WriteError, LogFunction, hex, NodeType, UnitType, UnitExtendedType, UnitState } from "./types";
import { Master } from "./master";
import { SmartSocket } from "./smartsocket";
import { EventEmitter } from "events";

// Duotecno master IP protocol implementation
// Johan Coppieters
//
// Dec 2018 - v1 - first version based on 1 smartbox
// Mar 2019 - v2 - rewrite to support multiple masters
//
// Dec 2019 - v3 - for app side only


///////////////////////////
// Commands + attributes //
///////////////////////////
enum Cmd {
  SetSwitch = 163,
  SetDimmer = 162,
  SetControl = 168,
  SetMotor = 182,
  SetSensor = 136,
  Login = 214,
  Heartbeat = 215,
  DatabaseInfo = 209,
  SetSchedule = 217
}

// for Set Switch/Dimmer/Control
const reqDim = 3;
const reqOff = 9;
const reqOn = 10;

// for Login
const reqDisconnect = 0;
const reqConnect = 3;

// for DatabaseInfo = 209;
const reqDBInfo = 0;
const reqNodeInfo = 1;
const reqUnitInfo = 2;
const reqUnitStatus = 3;

// for Schedule
const reqSchedule = 218;


export function cmdName(cmd: number | string) {
  return Cmd[cmd] || "cmd"+cmd;
}

type CmdSet = {
  cmd: number, 
  method: number, 
  value?: number | boolean,
  message?: Message, 
  reqStatus?: boolean
}

//////////////////////
// Received results //
//////////////////////
export enum Rec {
  // return info from cmdDatabaseInfo
  DBInfo = 0,
  NodeInfo = 1,
  UnitInfo = 2,

  Internal = 9,     // smartsystem defined (not Duotecno)

  ErrorMessage = 17,
  ConnectStatus = 67,
  AudioStatus = 23,
  AudioExtendedStatus = 70,
  TimeDateStatus = 71,
  ScheduleStatus = 73,

  // return info from recDBInfo
  Info = 64,

  // return info from reqUnitStatus
  Mood = 4,
  Dimmer = 5,
  Switch = 6,
  Sensor = 7,
  Motor = 38,
  Macro = 69
};

export function recName(rec: number) {
  return Rec[rec] || "rec"+rec;
}



/////////////////////////
// Node in the network //
/////////////////////////
export class Node {
  master: Master;
  active: boolean;
  name: string;
  index: number;
  logicalAddress: number;
  physicalAddress: number;
  type: NodeType;
  flags: number;
  nrUnits: number;
  units: Array<Unit>;

  constructor(master: Master, params: NodeInfo) {
    this.master = master;
    Sanitizers.nodeInfo(params, this);
    this.units = [];

    // remove | in names
    let separ = this.name.indexOf("|");
    this.name = (separ < 0) ? this.name : this.name.substring(0, separ) + " " + (this.name.substring(separ+1));
  }

  inMultiNode() {
    return this.master.inMultiNode();
  }

  typeName(): string {
    switch(this.type) {
      case NodeType.kStandardNode: return "Standard";
      case NodeType.kGatewayNode: return "Gateway";
      case NodeType.kModemNode: return "Modem";
      case NodeType.kGUINode: return "GUI";
      default: return "Unknown node type (" + this.type + ")";
    }
  }

  getName(): string {
    return this.name;
  }
  getSort(): string {
    return this.getName().toLowerCase();
  }

  getNumber(): string {
    return hex(this.logicalAddress);
  }

  getDescription(): string {
    return this.getName() + ", active: " + this.active + ", type: " + this.typeName() + ", node: " + this.getName();
  }

  findUnit(logicalAddress: number): Unit {
    return this.units.find(u => u && (u.logicalAddress === logicalAddress));
  }

  findUnitIndex(logicalAddress: number): number {
    return this.units.findIndex(u => u && (u.logicalAddress === logicalAddress));
  }
}


/////////////////////////
// Unit within a Node  //
/////////////////////////
export class Unit {
  node: Node;
  active: boolean;
  name: string;
  group: number = 0;
  index: number;
  logicalNodeAddress: number;
  logicalAddress: number;
  type: UnitType;
  extendedType: UnitExtendedType;
  flags: number;
  displayName: string;
  value: number | boolean;
  status: number;
  resetTimer = null;

  // Temperature stuff (values in x10 degree Celcius)
  preset: number;  // 0=sun, 1=half sun, 2=moon, 3=half moon, -1=off
  sun: number; 
  hsun: number;
  moon: number;
  hmoon: number;
  temp: number;


  constructor(node, params: UnitInfo, moodName: string = "mood") {
    this.node = node;
    Sanitizers.unitInfo(params, this);
    this.extendedType = this.calcExtendedType();
    this.name = this.name || this.getSerialNr();
    // make a name for homekit, without the | but add § is 'specials' to add "sfeer", etc...
    // if the display name is empty make a N[nodeAdr]-U[unitAdr] name.
    // delete all type modifiers ( $, * and ! )
    this.displayName = this.displayName || this.name.replace(/\|/g, this.hasSpecials() ? (" "+moodName+" ") : " ").replace(/\$|\*|\!/g, '') || this.getSerialNr();
  }

  hasSpecials(): boolean {
    let special = this.name.indexOf("|20");
    if (special < 0) special = this.name.indexOf("|50");
    if (special < 0) special = this.name.indexOf("|90");
    if (special < 0) special = this.name.indexOf("|OFF");
    return special >= 0;
  }

  isUnit(unit: Unit): boolean;
  isUnit(master: string, port: number, nodeLogicalAddress: number, unitLogicalAddress: number): boolean;
  isUnit(master: Unit | string, port?: number, nodeLogicalAddress?: number, unitLogicalAddress?: number): boolean {
    if (master instanceof Unit) {
      const unit = master;
      return ((this.node.master.same(unit.node.master)) &&
              (this.node.logicalAddress == unit.node.logicalAddress) && 
              (this.logicalAddress == unit.logicalAddress));

    } else { /* if (typeof master === "string") */
      return ((this.node.master.same(master, port)) &&
              (this.node.logicalAddress == nodeLogicalAddress) && 
              (this.logicalAddress == unitLogicalAddress));
    } 
  }

  sameValue(value): boolean {
    if (this.type === UnitType.kSwitchingMotor)
      return (((this.value == UnitState.kOpening) && (value == 4)) ||
              ((this.value == UnitState.kClosing) && (value == 5)) ||
              ((this.value <= UnitState.kOpen) && (value == 3)));
    else
      return this.value == value;
  }

  typeName(): string {
    switch (this.getType()) {
      case UnitExtendedType.kDimmer: return 'Dimmer';
      case UnitExtendedType.kSwitch: return 'Switch/Relay';
      case UnitExtendedType.kLightbulb: return 'Lightbulb';
      case UnitExtendedType.kInput: return 'Control input';
      case UnitExtendedType.kTemperature: return 'Temperature sensor';
      case UnitExtendedType.kExtendedAudio: return 'Extended audio';
      case UnitExtendedType.kMood: return 'Virtual mood';
      case UnitExtendedType.kCondition: return 'Condition';
      case UnitExtendedType.kSwitchingMotor: return 'Switch motor';
      case UnitExtendedType.kGarageDoor: return 'Garagedoor';
      case UnitExtendedType.kDoor: return 'Door';
      case UnitExtendedType.kLock: return 'Lock';
      case UnitExtendedType.kUnlocker: return 'Unlocker';
      case UnitExtendedType.kAudio: return 'Basic audio';
      case UnitExtendedType.kAV: return 'AV Matrix';
      case UnitExtendedType.kIRTX: return 'IRTX';
      case UnitExtendedType.kVideo: return 'Video multiplexer';
      default: return 'Unknown unit type (' + this.type + ')';
    }
  }
  getName(): string {
    return this.name;
  }
  getDisplayName(): string {
    return this.displayName;
  }

  getNumber(): string {
    return this.node.getNumber() + ";" + hex(this.logicalAddress);
  }
  getSort(): string {
    const name = this.getName().toLowerCase();
    switch(this.type) {
      case UnitType.kTemperature: return "01|" + name;
      case UnitType.kSwitchingMotor: return "02|" + name;
      case UnitType.kDimmer: return "03|" + name;
      case UnitType.kSwitch: return "04|" + name;
      case UnitType.kMood: return "09|" + name;
      case UnitType.kInput: return "11|" + name;
      case UnitType.kExtendedAudio: "12|" + name;
      case UnitType.kAudio: return "12|" + name;
      case UnitType.kAV: return "13|" + name;
      case UnitType.kVideo: return "14|" + name;
      case UnitType.kIRTX: return "19|" + name;
      default: return "99|" + name;
    } 
  }

  getType(): UnitExtendedType {
    return this.extendedType;
  }

  calcExtendedType(): UnitExtendedType {
    // General idea extention on DuoTecno's types
    //
    // $,! -> kind of lock -> needs authentication
    // *   -> toggle
    //
    // Extension on Duotecno's types
    //  updown =>
    //      if name contains $   => "garagedoor"
    //      if name contains *   => "door"
    //      else                 => "window-covering"
    //  mood =>
    //      if name contains $   => "unlock", locks again after 1.2 sec
    //      if name contains *   => permanent locked=on/unlocked=off
    //      else                 => "mood" (turns of 1.2 seconds after being turned on)
    //  switch =>
    //      if name contains $   => "lock"
    //      if name contains *   => "switch" (also still works with "stc", "Stc", "STC", stk", "STK" and "Stk")
    //      else                 => "lightbulb" 
    //

    ////////////
    // Switch //
    ////////////
    // Switch -> with * or STK -> Switch
    if ((this.type === UnitType.kSwitch) &&
        ((this.name.indexOf("STK") >= 0) || (this.name.indexOf("stk") >= 0) || (this.name.indexOf("Stk") >= 0) || 
         (this.name.indexOf("STC") >= 0) || (this.name.indexOf("stc") >= 0) || (this.name.indexOf("Stc") >= 0) || 
         (this.name.indexOf("*") >= 0)))
      return UnitExtendedType.kSwitch;

    // Switch -> with $ -> Door
    if ((this.type === UnitType.kSwitch) &&
        (this.name.indexOf("$") >= 0))
      return UnitExtendedType.kLock;

    // Switch -> default -> LightBulb
    if (this.type === UnitType.kSwitch) 
      return UnitExtendedType.kLightbulb;


    /////////////
    // Up/Down //
    /////////////
    // UpDown -> with $ -> GarageDoor
    if ((this.type === UnitType.kSwitchingMotor) &&
        (this.name.indexOf("$") >= 0))
      return UnitExtendedType.kGarageDoor;

    // UpDown with * -> Door
    if ((this.type === UnitType.kSwitchingMotor) &&
        (this.name.indexOf("*") >= 0))
      return UnitExtendedType.kDoor;

    // UpDown -> default -> WindowCovering
    if (this.type === UnitType.kSwitchingMotor) 
      return UnitExtendedType.kSwitchingMotor;

    ///////////
    // Moods //
    ///////////
    // Mood -> with $ -> Lock (re-closes after 1.2 secs)
    if ((this.type === UnitType.kMood) && 
        (this.name.indexOf("$") >= 0))
      return UnitExtendedType.kUnlocker;

    // Mood -> with * -> Mood with state
    if ((this.type === UnitType.kMood) && 
        (this.name.indexOf("*") >= 0))
      return UnitExtendedType.kCondition;

    // Mood -> default -> Mood (turn off after 1.2 secs)
    if (this.type === UnitType.kMood)
      return UnitExtendedType.kMood;

    ///////////////////////
    // All other default //
    ///////////////////////
    return <UnitExtendedType><unknown>this.type;
  }

  getSerialNr(): string {
    if (this.inMultiNode)
      return this.node.getName() + "-N" + this.logicalNodeAddress + "-U" + this.logicalAddress;
    else
      return "N" + this.logicalNodeAddress + "-U" + this.logicalAddress;
  }
  getModelName(): string {
    return this.typeName() + " " + hex(this.node.logicalAddress)+ ";" + hex(this.logicalAddress);
  }


  isCtrl(): boolean {
    return this.isSwitch() || this.isDimmer() || this.isUpDown();
  }
  isSwitch(): boolean {
    return (this.type === UnitType.kSwitch);
  }
  isMood(): boolean {
    return (this.type === UnitType.kMood);
  }
  isInput(): boolean {
    return (this.type === UnitType.kInput);
  }
  isTemperature(): boolean {
    return (this.type === UnitType.kTemperature);
  }
  isDimmer(): boolean {
    return (this.type === UnitType.kDimmer);
  }
  isUpDown(): boolean {
    return (this.type === UnitType.kSwitchingMotor);
  }

  async setPreset(preset: number, temp: number) {
    await this.node.master.setPreset(this, preset, temp);
  }
  async selectPreset(preset: number) {
    await this.node.master.selectPreset(this, preset);
  }
  async sensorOnOff(on: boolean) {
    await this.node.master.setTempOnOff(this, on);
  }
  async doIncDecPreset(inc: boolean) {
    await this.node.master.doIncDecPreset(this, inc);
  }

  inMultiNode() {
    return this.node.inMultiNode();
  }

  async reqState(callback?: DeliverStatus): Promise<void> {
    await this.node.master.requestUnitStatus(this);
    if (callback) Protocol.addSubscriber(callback, this);
  }
  async setState(value) {
    await this.node.master.setUnitStatus(this, value);
  }


  getDispayState(): string {
    switch(this.getType()) {
      case UnitExtendedType.kDimmer: 
        return ((this.status) ? 'on' : 'off') + ' (' + this.value + '%)';

      case UnitExtendedType.kSwitch:
      case UnitExtendedType.kLightbulb: 
        return (this.status) ? 'on' : 'off';

      case UnitExtendedType.kInput: 
        return (this.status) ? 'on' : 'off';

      case UnitExtendedType.kTemperature: 
        return isNaN(<number>this.value) ? "-" : ((<number>this.value / 10.0) + 'C');

      case UnitExtendedType.kCondition: 
      case UnitExtendedType.kMood: 
        return (this.status) ? 'on' : 'off';

      case UnitExtendedType.kLock:
        return (this.status) ? 'locked' : 'unlocked';

      case UnitExtendedType.kUnlocker:
        return (this.status) ? 'unlocking' : 'locked';

      case UnitExtendedType.kGarageDoor:
      case UnitExtendedType.kDoor:
      case UnitExtendedType.kSwitchingMotor:
        if (this.status === UnitState.kOpening) { return 'opening'; }
        if (this.status === UnitState.kClosing) { return 'closing'; }
        if (this.status === UnitState.kOpen) { return 'open'; }
        if (this.status === UnitState.kClosed) { return 'closed'; }
        if (this.status === UnitState.kStopped) { return 'stopped'; }
    }
    return (typeof this.status != "undefined") ? this.status.toString() : 'unknown';
  }


  getDescription() {
    return this.getDisplayName() + ", active: " + this.active + ", type: " + this.typeName() + ", status: " + this.status + ", value: " + this.value + " -> " + this.getDispayState();
  }

}


/////////////////////////////////////
// IP node protocol implementation //
/////////////////////////////////////
type DeliverStatus = (unit: Unit) => void;
type ValueSubscribtion = {deliver: DeliverStatus, unit: Unit};
// callbacks, waiting to be called when a status for them arrives
const subscribers: Array<ValueSubscribtion> = [];

export const Protocol = {
  // set to a different value if needed.
  logger: console.log,
  debugger: () => {},
  emitter: null,

  setLogger(logger: LogFunction, debug?: LogFunction) {
    this.logger = logger;
    this.debugger = debug || ((message: any, ...optionalParams: any[]) => {});
  },
  setEmitter(emitter: EventEmitter) {
    this.emitter = emitter;
  },

  /////////////////
  // Subscribers //
  /////////////////
  alertSubscriber(unit: Unit) {
    const inx = subscribers.findIndex(vs => vs.unit.isUnit(unit));
    if (inx >= 0) {
      subscribers[inx].deliver(unit);
      subscribers.splice(inx, 1);
    }
  },
  addSubscriber(deliver: DeliverStatus, unit: Unit) {
    subscribers.push({deliver, unit});
  },

  ////////////////////
  // Helper methods //
  ////////////////////

  getStr: function(arr: Array<number>, at: number) {
    return arr.slice(at+1, at+arr[at]+1)
              .map(val => String.fromCharCode(val))
              .join("");
  },

  makeLong: function(arr: Array<number>, at: number) {
    return arr[at+0] * 256 * 256 * 256 + 
           arr[at+1] * 256 * 256 + 
           arr[at+2] * 256 + 
           arr[at+3];
  },

  isStatus: function(cmd: number): boolean {
    return (cmd === Rec.Mood)   ||
           (cmd === Rec.Dimmer) ||
           (cmd === Rec.Switch) ||
           (cmd === Rec.Sensor) ||
           (cmd === Rec.Motor)  ||
           (cmd === Rec.Macro);
  },


  //////////////////////////
  // Code to String stuff //
  //////////////////////////

  translateError: function(err: Message): string {
    if (err[0] != Rec.ErrorMessage) return "received unexpected data: " + err;

    switch(err[1]) {
      case 11: return "Wrong object method received for " + err[2] + "/" + err[3];
      case 12: return "Wrong Message Code received: " + err[2];
      case 18: return "This function can only be executed when this node is the master";
      case 128: return "The node database is not ready";
      case 129: return "Node " + err[2] + " could not be found in the database";
      case 130: return "Wrong node index: " + err[2];
      case 131: return "Unit " + err[2] + " with address " + err[3] + " could not be found in the database";
      case 132: return "Wrong unit index " + err[3] + " for this node " + err[2];
      case 133: return "Unit " + err[3] + " of node " + err[2] + " is of a different type";
      case 140: return "The requested operation is not allowed";
      case 141: return "The requested operation is not allowed because a wrong access code is used";
      case 142: return "The requested operation is not implemented in this software version";
      default:
        return "Unknown error";
    }
  },


  ////////////////////
  // Socket methods //
  ////////////////////

  write: function(socket: SmartSocket, data: Message | string): WriteError {
    let cmd: string | number = parseInt(<string> data[0]);
    if (isNaN(cmd)) cmd = <string> data[0];

    if (data instanceof Array) {
      data = data.join(",");
    }

    if (typeof data === "string") {
      // if no enclosing "[...]", add them
      if (data[0] != "[") data = "[" + data + "]";
      this.logger("sending: " + cmdName(cmd) + " - " + data);

      try {
        // append a LF char and send
        socket.write(data+String.fromCharCode(10));
        return WriteError.writeOK;

      } catch(err) {
        this.logger("error sending through socket " + err.message);
        return WriteError.writeFatal;
      }
    } else {
      throw(new Error("wrong data type for sending"));
    }
  },

  //////////////////////////////
  // Handle incoming data     //
  //  strip []                //
  //  convert to array        //
  //  convert chars to ints   //
  //////////////////////////////
  nextMessage: function(buffer: string): CommRecord {
    // pre return result
    const nextRec: CommRecord = { rest: buffer, isStatus: false, message: null, cmd: 0 };

    // no "start-of-data" -> discard buffer || else -> trim buffer
    const begin = buffer.indexOf("[");
    if (begin < 0) {
      nextRec.rest = "";
    } else if (begin != 0) {
      nextRec.rest = buffer.substring(begin);
    }
    
    // we either have valid start data or nothing
    if (nextRec.rest.length > 0) {
      // do we have an "end-of-data" in our buffer
      let end = nextRec.rest.indexOf("]");

      // if no end-of-data was found:
      // leave it in the buffer and hope more data will arrive soon
      //TODO: set up a timer that clears the buffer if nothing comes through

      if (end >= 0) {
        // fetch the first available message (discard the [ and ])
        const msg = nextRec.rest.substring(1, end);

        // delete the used message from the input buffer
        // if there, also delete the trailing LF (0x0A)
        if ((end <= nextRec.rest.length) && (nextRec.rest.charCodeAt(end+1) === 0x0A)) end++;
          nextRec.rest = nextRec.rest.substring(end+1);

        // convert to array and turn strings into numbers if IP command
        nextRec.message = msg.split(",").map(c => parseInt(c));

        // get the first byte to see what kind of incoming data
        nextRec.cmd = <number>nextRec.message[0];
        nextRec.isStatus = this.isStatus(nextRec.cmd);

        // this.logger("processing: " + (nextRec.isStatus ? "status -> " : "") + msg);
      }

    }
    return nextRec;
  },


  buildLogin: function(password: string): Message {
    password = password || "";
    return [Cmd.Login, reqConnect, password.length, 
            ...password.split('').map(c => c.charCodeAt(0))];
  },

  buildDisconnect: function(): Message {
    return [Cmd.Login, reqDisconnect];
  },


  /////////////////////////////////////
  // Collect info of all found nodes //
  /////////////////////////////////////

  buildDBInfo: function(): Message {
    return [Cmd.DatabaseInfo, reqDBInfo];
  },

  buildNodeInfo: function(nodeInx: number): Message {
    return [Cmd.DatabaseInfo, reqNodeInfo, nodeInx];
  },

  buildUnitInfo: function(node: Node, unitInx: number) {
    return [Cmd.DatabaseInfo, reqUnitInfo, node.logicalAddress, unitInx];
  },

  buildRequestUnitStatus: function(node: Node, unit: Unit): Message {
    return [Cmd.DatabaseInfo, reqUnitStatus, node.logicalAddress, unit.logicalAddress, unit.type];
  },

  buildRequestSchedule(): Message {
    return [reqSchedule, 0];
  },

  getCmdAndMethod: function(unit: Unit, value: number | boolean): CmdSet {
    switch (unit.type) {
      case UnitType.kDimmer:
        if (typeof value === "boolean")
          return { cmd: Cmd.SetDimmer, method: (value) ? reqOn : reqOff };
        else if (value <= 0)
          return { cmd: Cmd.SetDimmer, method: reqOff };
        else
          return { cmd: Cmd.SetDimmer, method: reqDim, value: Math.max(Math.min(value, 99),1) };

      case UnitType.kSwitch:
        return { cmd: Cmd.SetSwitch, method: (value) ? 3 : 2 };

      case UnitType.kInput:
      case UnitType.kMood:
        if (value < 0)
          return { cmd: Cmd.SetControl, method: 2 }; // short pulse
        else
          return { cmd: Cmd.SetControl, method: 3, value: (value) ? 1 : 0 };  // long event + 0/1

      case UnitType.kSwitchingMotor:
        return { cmd: Cmd.SetMotor, method: <number>value };  // 5 close, 4 open, 3 is stop

      case UnitType.kTemperature:
        return { cmd: Cmd.SetSensor, method: 13 /* select preset */, value };

      case UnitType.kExtendedAudio:
      case UnitType.kAudio:
      case UnitType.kAV:
      case UnitType.kIRTX:
      case UnitType.kVideo:

      default: // "Unknown unit type (" + unit.type + ")";
        this.err("setting " + unit.type + " not yet implemented");
        return { cmd: 0, method: 0, value: 0}
    }
  },

  buildSetCmd: function(node: Node, unit: Unit, value: number | boolean): CmdSet {
    let params = this.getCmdAndMethod(unit, value);
    if (params.cmd) {
      params.message = [params.cmd, params.method, node.logicalAddress, unit.logicalAddress];
      if (typeof params.value != "undefined") params.message.push(params.value);

      // some need a requestStatus afterwards
      params.reqStatus = ((params.cmd === Cmd.SetDimmer) && (params.method === reqDim));
    }
    return params;
  },

  /* Temperature / Presets */
  buildSelectPreset(node: Node, unit: Unit, preset: number): Message {
    let params = this.getCmdAndMethod(unit, preset);
    return [params.cmd, 13, node.logicalAddress, unit.logicalAddress, preset];
  },

  buildSetPreset(node: Node, unit: Unit, preset: number, value: number): Message {
    return [Cmd.SetSensor, 1, node.logicalAddress, unit.logicalAddress, preset, Math.floor(value / 256), value % 256];
  },
  buildIncDecPreset(node: Node, unit: Unit, inc: boolean): Message {
    return [Cmd.SetSensor, (inc) ? 5 : 6, node.logicalAddress, unit.logicalAddress];
  },
  buildSensorOnOff(node: Node, unit: Unit, on: boolean): Message {
    return [Cmd.SetSensor, 3, node.logicalAddress, unit.logicalAddress, (on) ? 1 : 0];
  },

  /* Schedule commands */
  buildSendSchedule(schedule: number): Message {
    return [Cmd.SetSchedule, 0, Math.max(0, Math.min(3, schedule))];
  },

  ///////////////////
  // Received info //
  ///////////////////
  receiveStatus: function(next: CommRecord, unit: Unit) {    
    if (next.cmd === Rec.Sensor) { 
      // sensor -> value
      unit.value  = next.message[9]*256  +  next.message[10];   // 10x current temperature
      unit.status = next.message[7];                            // 0=idle, 1=heating, 2=cooling
      unit.preset = (next.message[6]) ? next.message[8] : -1;   // 0=sun, 1=half sun, 2=moon, 3=half moon, -1 = off
      unit.sun    = next.message[11]*256 +  next.message[12];   // 10x temperature
      unit.hsun   = next.message[13]*256 +  next.message[14];   // 10x temperature
      unit.moon   = next.message[15]*256 +  next.message[16];   // 10x temperature
      unit.hmoon  = next.message[17]*256 +  next.message[18];   // 10x temperature
      this.debugger("received status - temperature = " + <number>unit.value / 10.0);
  

    // Dimmers, switches and moods have 
    //  - status (0=off,1=on,2=pir-on)
    //  = value (true/false for switches and moods, 1-99 for dimmers)
    } else if (next.cmd === Rec.Switch) { 
      // switch -> boolean
      unit.status = next.message[6];
      unit.value = (next.message[6] > 0);
      this.debugger("received status - switch = " + unit.value);
  
    } else if (next.cmd === Rec.Dimmer) {
      // dimmer -> 0 .. 99
      unit.status = next.message[6];
      unit.value = next.message[7];
      this.debugger("received status - dimmer -> value=" + unit.value + " / status=" + unit.status);
  
    } else if (next.cmd === Rec.Mood) {
      // control -> boolean
      unit.status = next.message[6];
      unit.value = (next.message[6] != 0);
      this.debugger("received status - mood = " + unit.value);

    } else if (next.cmd === Rec.Motor) {
      // motor -> boolean/status
      // 0 = stopped, 1 stopped/down, 2 = stopped/up, 3 = busy/down, 4 = busy/up
      unit.status = next.message[6];
      unit.value = next.message[6];
      this.debugger("received status - motor = " + unit.value);

    } else if (next.cmd === Rec.Macro) {
      // = EV_UNITMACROCOMMANDO
      // examples: On 50%: [69,0,NodeAddress,UnitAddress,6,1,0,50]
      //           Off:    [69,0,NodeAddress,UnitAddress,6,0,0,0] -> don't touch dimmer value

      if (next.message[4] == 6) {
        // ON/OFF
        unit.status = next.message[5];

      } else if ((next.message[4] == 7) && (next.message[5] == 1)) {
        // PIR ON
        unit.status = 2;
      }

      // only change dim value when state = 1 (ON, PIR ON, DIM STOP)
      if (next.message[5] === 1) {
        unit.value = next.message[6]*256 + next.message[7];
      }
      this.debugger("received status - macro -> value=" + unit.value + " / status=" + unit.status);
    }

    // clear the timer to turn the mood off again.
    //if (unit.resetTimer) {
    //  clearInterval(unit.resetTimer);
    //  unit.resetTimer = null;
    //}

    this.alertSubscriber(unit);
    this.emitter.emit('update', unit);
  },

  makeDBInfo(res: Message): DBInfo {
    return { nrNodes: res[2] };
  },

  makeNodeInfo(res: Message): NodeInfo {
    let name = this.getStr(res, 8);
    let offset = name.length;
    return {
      name: name,
      index: res[2],               // should be == nodeInx
      logicalAddress: res[3],
      physicalAddress: this.makeLong(res, 4),
      nrUnits: res[offset+9],
      type: res[offset+10],
      flags: res[offset+11]
    }
  },

  makeUnitInfo(res: Message): UnitInfo {
    let name = this.getStr(res, 6);
    let offset = name.length;

    return {
      name,
      index: res[3],                  // should be == unitInx
      logicalNodeAddress: res[4],     // difference with res[2] / logicalReqNodeAddress ?
      logicalAddress: res[5],
      type: res[offset+7],
      flags: res[offset+8]
    };
  }
};