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
exports.Protocol = exports.Unit = exports.Node = exports.UnitExtendedType = exports.UnitType = exports.UnitMotorCmd = exports.UnitState = exports.NodeType = exports.recName = exports.Rec = exports.cmdName = void 0;
const types_1 = require("./types");
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
var Cmd;
(function (Cmd) {
    Cmd[Cmd["SetSwitch"] = 163] = "SetSwitch";
    Cmd[Cmd["SetDimmer"] = 162] = "SetDimmer";
    Cmd[Cmd["SetControl"] = 168] = "SetControl";
    Cmd[Cmd["SetMotor"] = 182] = "SetMotor";
    Cmd[Cmd["SetSensor"] = 136] = "SetSensor";
    Cmd[Cmd["Login"] = 214] = "Login";
    Cmd[Cmd["Heartbeat"] = 215] = "Heartbeat";
    Cmd[Cmd["DatabaseInfo"] = 209] = "DatabaseInfo";
    Cmd[Cmd["SetSchedule"] = 217] = "SetSchedule";
})(Cmd || (Cmd = {}));
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
function cmdName(cmd) {
    return Cmd[cmd] || "cmd" + cmd;
}
exports.cmdName = cmdName;
//////////////////////
// Received results //
//////////////////////
var Rec;
(function (Rec) {
    // return info from cmdDatabaseInfo
    Rec[Rec["DBInfo"] = 0] = "DBInfo";
    Rec[Rec["NodeInfo"] = 1] = "NodeInfo";
    Rec[Rec["UnitInfo"] = 2] = "UnitInfo";
    Rec[Rec["Internal"] = 9] = "Internal";
    Rec[Rec["ErrorMessage"] = 17] = "ErrorMessage";
    Rec[Rec["ConnectStatus"] = 67] = "ConnectStatus";
    Rec[Rec["ScheduleStatus"] = 73] = "ScheduleStatus";
    // return info from recDBInfo
    Rec[Rec["Info"] = 64] = "Info";
    // return info from reqUnitStatus
    Rec[Rec["Mood"] = 4] = "Mood";
    Rec[Rec["Dimmer"] = 5] = "Dimmer";
    Rec[Rec["Switch"] = 6] = "Switch";
    Rec[Rec["Sensor"] = 7] = "Sensor";
    Rec[Rec["Motor"] = 38] = "Motor";
    Rec[Rec["Macro"] = 69] = "Macro";
})(Rec = exports.Rec || (exports.Rec = {}));
;
function recName(rec) {
    return Rec[rec] || "rec" + rec;
}
exports.recName = recName;
// Node types
var NodeType;
(function (NodeType) {
    NodeType[NodeType["kNoNode"] = 0] = "kNoNode";
    NodeType[NodeType["kStandardNode"] = 1] = "kStandardNode";
    NodeType[NodeType["kGatewayNode"] = 4] = "kGatewayNode";
    NodeType[NodeType["kModemNode"] = 8] = "kModemNode";
    NodeType[NodeType["kGUINode"] = 32] = "kGUINode";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
;
// States
var UnitState;
(function (UnitState) {
    UnitState[UnitState["kOpening"] = 4] = "kOpening";
    UnitState[UnitState["kClosing"] = 3] = "kClosing";
    UnitState[UnitState["kOpen"] = 2] = "kOpen";
    UnitState[UnitState["kClosed"] = 1] = "kClosed";
    UnitState[UnitState["kStopped"] = 0] = "kStopped";
})(UnitState = exports.UnitState || (exports.UnitState = {}));
;
var UnitMotorCmd;
(function (UnitMotorCmd) {
    UnitMotorCmd[UnitMotorCmd["kClose"] = 5] = "kClose";
    UnitMotorCmd[UnitMotorCmd["kOpen"] = 4] = "kOpen";
    UnitMotorCmd[UnitMotorCmd["kStop"] = 3] = "kStop";
})(UnitMotorCmd = exports.UnitMotorCmd || (exports.UnitMotorCmd = {}));
;
var UnitType;
(function (UnitType) {
    UnitType[UnitType["kNoType"] = 0] = "kNoType";
    UnitType[UnitType["kDimmer"] = 1] = "kDimmer";
    UnitType[UnitType["kSwitch"] = 2] = "kSwitch";
    UnitType[UnitType["kInput"] = 3] = "kInput";
    UnitType[UnitType["kTemperature"] = 4] = "kTemperature";
    UnitType[UnitType["kExtendedAudio"] = 5] = "kExtendedAudio";
    UnitType[UnitType["kMood"] = 7] = "kMood";
    UnitType[UnitType["kSwitchingMotor"] = 8] = "kSwitchingMotor";
    UnitType[UnitType["kAudio"] = 10] = "kAudio";
    UnitType[UnitType["kAV"] = 11] = "kAV";
    UnitType[UnitType["kIRTX"] = 12] = "kIRTX";
    UnitType[UnitType["kVideo"] = 14] = "kVideo";
})(UnitType = exports.UnitType || (exports.UnitType = {}));
;
var UnitExtendedType;
(function (UnitExtendedType) {
    UnitExtendedType[UnitExtendedType["kNoType"] = 0] = "kNoType";
    UnitExtendedType[UnitExtendedType["kDimmer"] = 1] = "kDimmer";
    UnitExtendedType[UnitExtendedType["kSwitch"] = 2] = "kSwitch";
    UnitExtendedType[UnitExtendedType["kInput"] = 3] = "kInput";
    UnitExtendedType[UnitExtendedType["kTemperature"] = 4] = "kTemperature";
    UnitExtendedType[UnitExtendedType["kExtendedAudio"] = 5] = "kExtendedAudio";
    UnitExtendedType[UnitExtendedType["kMood"] = 7] = "kMood";
    UnitExtendedType[UnitExtendedType["kSwitchingMotor"] = 8] = "kSwitchingMotor";
    UnitExtendedType[UnitExtendedType["kAudio"] = 10] = "kAudio";
    UnitExtendedType[UnitExtendedType["kAV"] = 11] = "kAV";
    UnitExtendedType[UnitExtendedType["kIRTX"] = 12] = "kIRTX";
    UnitExtendedType[UnitExtendedType["kVideo"] = 14] = "kVideo";
    UnitExtendedType[UnitExtendedType["kLightbulb"] = 101] = "kLightbulb";
    UnitExtendedType[UnitExtendedType["kCondition"] = 102] = "kCondition";
    UnitExtendedType[UnitExtendedType["kGarageDoor"] = 201] = "kGarageDoor";
    UnitExtendedType[UnitExtendedType["kDoor"] = 202] = "kDoor";
    UnitExtendedType[UnitExtendedType["kLock"] = 203] = "kLock";
    UnitExtendedType[UnitExtendedType["kUnlocker"] = 204] = "kUnlocker";
})(UnitExtendedType = exports.UnitExtendedType /* extends UnitType */ || (exports.UnitExtendedType /* extends UnitType */ = {}));
;
// kLightbulb  == kSwitch with no "*" or "$" in the name
// kDoor == kSwitchingMotor with "*" in the name
// kGarageDoor == kSwitchingMotor with "$" in the name
// kCondition  == kMood with "*" in the name
// kLock == kMood with $ in the name
// kUnlocker = kMood with $ in the name
/////////////////////////
// Node in the network //
/////////////////////////
class Node {
    constructor(master, params) {
        this.master = master;
        types_1.Sanitizers.nodeInfo(params, this);
        this.units = [];
        // remove | in names
        let separ = this.name.indexOf("|");
        this.name = (separ < 0) ? this.name : this.name.substring(0, separ) + " " + (this.name.substring(separ + 1));
    }
    inMultiNode() {
        return this.master.inMultiNode();
    }
    typeName() {
        switch (this.type) {
            case NodeType.kStandardNode: return "Standard";
            case NodeType.kGatewayNode: return "Gateway";
            case NodeType.kModemNode: return "Modem";
            case NodeType.kGUINode: return "GUI";
            default: return "Unknown node type (" + this.type + ")";
        }
    }
    getName() {
        return this.name;
    }
    getSort() {
        return this.getName().toLowerCase();
    }
    getNumber() {
        return types_1.hex(this.logicalAddress);
    }
    getDescription() {
        return this.getName() + ", active: " + this.active + ", type: " + this.typeName() + ", node: " + this.getName();
    }
    findUnit(logicalAddress) {
        return this.units.find(u => u && (u.logicalAddress === logicalAddress));
    }
    findUnitIndex(logicalAddress) {
        return this.units.findIndex(u => u && (u.logicalAddress === logicalAddress));
    }
}
exports.Node = Node;
/////////////////////////
// Unit within a Node  //
/////////////////////////
class Unit {
    constructor(node, params, moodName = "mood") {
        this.group = 0;
        this.resetTimer = null;
        this.node = node;
        types_1.Sanitizers.unitInfo(params, this);
        this.extendedType = this.calcExtendedType();
        this.name = this.name || this.getSerialNr();
        // make a name for homekit, without the | but add § is 'specials' to add "sfeer", etc...
        // if the display name is empty make a N[nodeAdr]-U[unitAdr] name.
        // delete all type modifiers ( $, * and ! )
        this.displayName = this.displayName || this.name.replace(/\|/g, this.hasSpecials() ? (" " + moodName + " ") : " ").replace(/\$|\*|\!/g, '') || this.getSerialNr();
    }
    hasSpecials() {
        let special = this.name.indexOf("|20");
        if (special < 0)
            special = this.name.indexOf("|50");
        if (special < 0)
            special = this.name.indexOf("|90");
        if (special < 0)
            special = this.name.indexOf("|OFF");
        return special >= 0;
    }
    isUnit(master, port, nodeLogicalAddress, unitLogicalAddress) {
        if (master instanceof Unit) {
            const unit = master;
            return ((this.node.master.same(unit.node.master)) &&
                (this.node.logicalAddress == unit.node.logicalAddress) &&
                (this.logicalAddress == unit.logicalAddress));
        }
        else { /* if (typeof master === "string") */
            return ((this.node.master.same(master, port)) &&
                (this.node.logicalAddress == nodeLogicalAddress) &&
                (this.logicalAddress == unitLogicalAddress));
        }
    }
    sameValue(value) {
        if (this.type === UnitType.kSwitchingMotor)
            return (((this.value == UnitState.kOpening) && (value == 4)) ||
                ((this.value == UnitState.kClosing) && (value == 5)) ||
                ((this.value <= UnitState.kOpen) && (value == 3)));
        else
            return this.value == value;
    }
    typeName() {
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
    getName() {
        return this.name;
    }
    getDisplayName() {
        return this.displayName;
    }
    getNumber() {
        return this.node.getNumber() + ";" + types_1.hex(this.logicalAddress);
    }
    getSort() {
        const name = this.getName().toLowerCase();
        switch (this.type) {
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
    getType() {
        return this.extendedType;
    }
    calcExtendedType() {
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
        return this.type;
    }
    getSerialNr() {
        if (this.inMultiNode)
            return this.node.getName() + "-N" + this.logicalNodeAddress + "-U" + this.logicalAddress;
        else
            return "N" + this.logicalNodeAddress + "-U" + this.logicalAddress;
    }
    getModelName() {
        return this.typeName() + " " + types_1.hex(this.node.logicalAddress) + ";" + types_1.hex(this.logicalAddress);
    }
    isCtrl() {
        return this.isSwitch() || this.isDimmer() || this.isUpDown();
    }
    isSwitch() {
        return (this.type === UnitType.kSwitch);
    }
    isMood() {
        return (this.type === UnitType.kMood);
    }
    isInput() {
        return (this.type === UnitType.kInput);
    }
    isTemperature() {
        return (this.type === UnitType.kTemperature);
    }
    isDimmer() {
        return (this.type === UnitType.kDimmer);
    }
    isUpDown() {
        return (this.type === UnitType.kSwitchingMotor);
    }
    setPreset(preset, temp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.node.master.setPreset(this, preset, temp);
        });
    }
    selectPreset(preset) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.node.master.selectPreset(this, preset);
        });
    }
    sensorOnOff(on) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.node.master.setTempOnOff(this, on);
        });
    }
    doIncDecPreset(inc) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.node.master.doIncDecPreset(this, inc);
        });
    }
    inMultiNode() {
        return this.node.inMultiNode();
    }
    reqState(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.node.master.requestUnitStatus(this);
            if (callback)
                exports.Protocol.addSubscriber(callback, this);
        });
    }
    setState(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.node.master.setUnitStatus(this, value);
        });
    }
    getDispayState() {
        switch (this.getType()) {
            case UnitExtendedType.kDimmer:
                return ((this.status) ? 'on' : 'off') + ' (' + this.value + '%)';
            case UnitExtendedType.kSwitch:
            case UnitExtendedType.kLightbulb:
                return (this.status) ? 'on' : 'off';
            case UnitExtendedType.kInput:
                return (this.status) ? 'on' : 'off';
            case UnitExtendedType.kTemperature:
                return isNaN(this.value) ? "-" : ((this.value / 10.0) + 'C');
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
                if (this.status === UnitState.kOpening) {
                    return 'opening';
                }
                if (this.status === UnitState.kClosing) {
                    return 'closing';
                }
                if (this.status === UnitState.kOpen) {
                    return 'open';
                }
                if (this.status === UnitState.kClosed) {
                    return 'closed';
                }
                if (this.status === UnitState.kStopped) {
                    return 'stopped';
                }
        }
        return (typeof this.status != "undefined") ? this.status.toString() : 'unknown';
    }
    getDescription() {
        return this.getDisplayName() + ", active: " + this.active + ", type: " + this.typeName() + ", status: " + this.status + ", value: " + this.value + " -> " + this.getDispayState();
    }
}
exports.Unit = Unit;
// callbacks, waiting to be called when a status for them arrives
const subscribers = [];
exports.Protocol = {
    // set to a different value if needed.
    logger: console.log,
    debugger: () => { },
    emitter: null,
    setLogger(logger, debug) {
        this.logger = logger;
        this.debugger = debug || ((message, ...optionalParams) => { });
    },
    setEmitter(emitter) {
        this.emitter = emitter;
    },
    /////////////////
    // Subscribers //
    /////////////////
    alertSubscriber(unit) {
        const inx = subscribers.findIndex(vs => vs.unit.isUnit(unit));
        if (inx >= 0) {
            subscribers[inx].deliver(unit);
            subscribers.splice(inx, 1);
        }
    },
    addSubscriber(deliver, unit) {
        subscribers.push({ deliver, unit });
    },
    ////////////////////
    // Helper methods //
    ////////////////////
    getStr: function (arr, at) {
        return arr.slice(at + 1, at + arr[at] + 1)
            .map(val => String.fromCharCode(val))
            .join("");
    },
    makeLong: function (arr, at) {
        return arr[at + 0] * 256 * 256 * 256 +
            arr[at + 1] * 256 * 256 +
            arr[at + 2] * 256 +
            arr[at + 3];
    },
    isStatus: function (cmd) {
        return (cmd === Rec.Mood) ||
            (cmd === Rec.Dimmer) ||
            (cmd === Rec.Switch) ||
            (cmd === Rec.Sensor) ||
            (cmd === Rec.Motor) ||
            (cmd === Rec.Macro);
    },
    //////////////////////////
    // Code to String stuff //
    //////////////////////////
    translateError: function (err) {
        if (err[0] != Rec.ErrorMessage)
            return "received unexpected data: " + err;
        switch (err[1]) {
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
    write: function (socket, data) {
        let cmd = parseInt(data[0]);
        if (isNaN(cmd))
            cmd = data[0];
        if (data instanceof Array) {
            data = data.join(",");
        }
        if (typeof data === "string") {
            // if no enclosing "[...]", add them
            if (data[0] != "[")
                data = "[" + data + "]";
            this.logger("sending: " + cmdName(cmd) + " - " + data);
            try {
                // append a LF char and send
                socket.write(data + String.fromCharCode(10));
                return types_1.WriteError.writeOK;
            }
            catch (err) {
                this.logger("error sending through socket " + err.message);
                return types_1.WriteError.writeFatal;
            }
        }
        else {
            throw (new Error("wrong data type for sending"));
        }
    },
    //////////////////////////////
    // Handle incoming data     //
    //  strip []                //
    //  convert to array        //
    //  convert chars to ints   //
    //////////////////////////////
    nextMessage: function (buffer) {
        // pre return result
        const nextRec = { rest: buffer, isStatus: false, message: null, cmd: 0 };
        // no "start-of-data" -> discard buffer || else -> trim buffer
        const begin = buffer.indexOf("[");
        if (begin < 0) {
            nextRec.rest = "";
        }
        else if (begin != 0) {
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
                if ((end <= nextRec.rest.length) && (nextRec.rest.charCodeAt(end + 1) === 0x0A))
                    end++;
                nextRec.rest = nextRec.rest.substring(end + 1);
                // convert to array and turn strings into numbers if IP command
                nextRec.message = msg.split(",").map(c => parseInt(c));
                // get the first byte to see what kind of incoming data
                nextRec.cmd = nextRec.message[0];
                nextRec.isStatus = this.isStatus(nextRec.cmd);
                // this.logger("processing: " + (nextRec.isStatus ? "status -> " : "") + msg);
            }
        }
        return nextRec;
    },
    buildLogin: function (password) {
        password = password || "";
        return [Cmd.Login, reqConnect, password.length,
            ...password.split('').map(c => c.charCodeAt(0))];
    },
    buildDisconnect: function () {
        return [Cmd.Login, reqDisconnect];
    },
    /////////////////////////////////////
    // Collect info of all found nodes //
    /////////////////////////////////////
    buildDBInfo: function () {
        return [Cmd.DatabaseInfo, reqDBInfo];
    },
    buildNodeInfo: function (nodeInx) {
        return [Cmd.DatabaseInfo, reqNodeInfo, nodeInx];
    },
    buildUnitInfo: function (node, unitInx) {
        return [Cmd.DatabaseInfo, reqUnitInfo, node.logicalAddress, unitInx];
    },
    buildRequestUnitStatus: function (node, unit) {
        return [Cmd.DatabaseInfo, reqUnitStatus, node.logicalAddress, unit.logicalAddress, unit.type];
    },
    buildRequestSchedule() {
        return [reqSchedule, 0];
    },
    getCmdAndMethod: function (unit, value) {
        switch (unit.type) {
            case UnitType.kDimmer:
                if (typeof value === "boolean")
                    return { cmd: Cmd.SetDimmer, method: (value) ? reqOn : reqOff };
                else if (value <= 0)
                    return { cmd: Cmd.SetDimmer, method: reqOff };
                else
                    return { cmd: Cmd.SetDimmer, method: reqDim, value: Math.max(Math.min(value, 99), 1) };
            case UnitType.kSwitch:
                return { cmd: Cmd.SetSwitch, method: (value) ? 3 : 2 };
            case UnitType.kInput:
            case UnitType.kMood:
                if (value < 0)
                    return { cmd: Cmd.SetControl, method: 2 }; // short pulse
                else
                    return { cmd: Cmd.SetControl, method: 3, value: (value) ? 1 : 0 }; // long event + 0/1
            case UnitType.kSwitchingMotor:
                return { cmd: Cmd.SetMotor, method: value }; // 5 close, 4 open, 3 is stop
            case UnitType.kTemperature:
                return { cmd: Cmd.SetSensor, method: 13 /* select preset */, value };
            case UnitType.kExtendedAudio:
            case UnitType.kAudio:
            case UnitType.kAV:
            case UnitType.kIRTX:
            case UnitType.kVideo:
            default: // "Unknown unit type (" + unit.type + ")";
                this.err("setting " + unit.type + " not yet implemented");
                return { cmd: 0, method: 0, value: 0 };
        }
    },
    buildSetCmd: function (node, unit, value) {
        let params = this.getCmdAndMethod(unit, value);
        if (params.cmd) {
            params.message = [params.cmd, params.method, node.logicalAddress, unit.logicalAddress];
            if (typeof params.value != "undefined")
                params.message.push(params.value);
            // some need a requestStatus afterwards
            params.reqStatus = ((params.cmd === Cmd.SetDimmer) && (params.method === reqDim));
        }
        return params;
    },
    /* Temperature / Presets */
    buildSelectPreset(node, unit, preset) {
        let params = this.getCmdAndMethod(unit, preset);
        return [params.cmd, 13, node.logicalAddress, unit.logicalAddress, preset];
    },
    buildSetPreset(node, unit, preset, value) {
        return [Cmd.SetSensor, 1, node.logicalAddress, unit.logicalAddress, preset, Math.floor(value / 256), value % 256];
    },
    buildIncDecPreset(node, unit, inc) {
        return [Cmd.SetSensor, (inc) ? 5 : 6, node.logicalAddress, unit.logicalAddress];
    },
    buildSensorOnOff(node, unit, on) {
        return [Cmd.SetSensor, 3, node.logicalAddress, unit.logicalAddress, (on) ? 1 : 0];
    },
    /* Schedule commands */
    buildSendSchedule(schedule) {
        return [Cmd.SetSchedule, 0, Math.max(0, Math.min(3, schedule))];
    },
    ///////////////////
    // Received info //
    ///////////////////
    receiveStatus: function (next, unit) {
        if (next.cmd === Rec.Sensor) {
            // sensor -> value
            unit.value = next.message[9] * 256 + next.message[10]; // 10x current temperature
            unit.status = next.message[7]; // 0=idle, 1=heating, 2=cooling
            unit.preset = (next.message[6]) ? next.message[8] : -1; // 0=sun, 1=half sun, 2=moon, 3=half moon, -1 = off
            unit.sun = next.message[11] * 256 + next.message[12]; // 10x temperature
            unit.hsun = next.message[13] * 256 + next.message[14]; // 10x temperature
            unit.moon = next.message[15] * 256 + next.message[16]; // 10x temperature
            unit.hmoon = next.message[17] * 256 + next.message[18]; // 10x temperature
            this.debugger("received temperature = " + unit.value / 10.0);
        }
        else if (next.cmd === Rec.Switch) {
            // switch -> boolean
            unit.status = next.message[6];
            unit.value = (next.message[6] > 0);
            this.debugger("received switch = " + unit.value);
        }
        else if (next.cmd === Rec.Dimmer) {
            // dimmer -> 0 .. 99
            unit.status = next.message[6];
            unit.value = next.message[7];
            this.debugger("received dimmer -> value=" + unit.value + " / status=" + unit.status);
        }
        else if (next.cmd === Rec.Mood) {
            // control -> boolean
            unit.status = next.message[6];
            unit.value = (next.message[6] != 0);
            this.debugger("received mood = " + unit.value);
        }
        else if (next.cmd === Rec.Motor) {
            // motor -> boolean/status
            // 0 = stopped, 1 stopped/down, 2 = stopped/up, busy/down, busy/up
            unit.status = next.message[6];
            unit.value = next.message[6];
            this.debugger("received motor = " + unit.value);
        }
        else if (next.cmd = Rec.Macro) {
            // = EV_UNITMACROCOMMANDO
            // example: On 50%: [69,0,NodeAddress,UnitAddress,6,1,50]
            //          Off:    [69,0,NodeAddress,UnitAddress,6,0,0]
            unit.status = next.message[5];
            unit.value = next.message[6];
            this.debugger("received macro -> value=" + unit.value + " / status=" + unit.status);
        }
        // clear the timer to turn the mood off again.
        //if (unit.resetTimer) {
        //  clearInterval(unit.resetTimer);
        //  unit.resetTimer = null;
        //}
        this.alertSubscriber(unit);
        this.emitter.emit('update', unit);
    },
    makeDBInfo(res) {
        return { nrNodes: res[2] };
    },
    makeNodeInfo(res) {
        let name = this.getStr(res, 8);
        let offset = name.length;
        return {
            name: name,
            index: res[2],
            logicalAddress: res[3],
            physicalAddress: this.makeLong(res, 4),
            nrUnits: res[offset + 9],
            type: res[offset + 10],
            flags: res[offset + 11]
        };
    },
    makeUnitInfo(res) {
        let name = this.getStr(res, 6);
        let offset = name.length;
        return {
            name,
            logicalReqNodeAddress: res[2],
            index: res[3],
            logicalNodeAddress: res[4],
            logicalAddress: res[5],
            type: res[offset + 7],
            flags: res[offset + 8]
        };
    }
};
//# sourceMappingURL=protocol.js.map