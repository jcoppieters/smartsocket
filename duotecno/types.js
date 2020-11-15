"use strict";
// Johan Coppieters.
// v1 - server version, Apr 2019
// v2 - app version, Jan 2020
// v3 - smart server version, Mar 2020
// v3.1 - added scenes from app version, May 2020
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
exports.single = exports.now = exports.two = exports.hex = exports.char = exports.ascii = exports.wait = exports.Sanitizers = exports.makeInt = exports.actionValueStr = exports.actionValue = exports.kEmptySwitch = exports.kEmptyRule = exports.kEmptyAction = exports.SwitchType = exports.RuleType = exports.Boundaries = exports.kEmptyCommRecord = exports.WriteError = exports.kEmptyGroup = exports.kEmptyScene = exports.kEmptyUnitScene = exports.kEmptyUnit = exports.UnitExtendedType = exports.UnitType = exports.UnitMotorCmd = exports.UnitState = exports.NodeType = void 0;
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
;
;
;
;
exports.kEmptyUnit = { masterAddress: "0.0.0.0", masterPort: 5001,
    name: "unit", logicalAddress: 0, logicalNodeAddress: 0 };
;
;
;
exports.kEmptyUnitScene = Object.assign(Object.assign({}, exports.kEmptyUnit), { value: true });
;
exports.kEmptyScene = { name: 'Scene', trigger: exports.kEmptyUnitScene, order: 0, units: [] };
;
exports.kEmptyGroup = { name: "Home", id: 0, order: 0, visible: true };
;
;
;
var WriteError;
(function (WriteError) {
    WriteError[WriteError["writeFatal"] = -1] = "writeFatal";
    WriteError[WriteError["writeError"] = 0] = "writeError";
    WriteError[WriteError["writeOK"] = 1] = "writeOK";
})(WriteError = exports.WriteError || (exports.WriteError = {}));
exports.kEmptyCommRecord = { status: false, cmd: -1, message: [-1, 0, 0], rest: "" };
//////////////
// SmartApp //
//////////////
var Boundaries;
(function (Boundaries) {
    Boundaries[Boundaries["kLow"] = 0] = "kLow";
    Boundaries[Boundaries["kMid"] = 1] = "kMid";
    Boundaries[Boundaries["kHigh"] = 2] = "kHigh";
})(Boundaries = exports.Boundaries || (exports.Boundaries = {}));
;
var RuleType;
(function (RuleType) {
    RuleType["kPower"] = "power";
    RuleType["kCurrent"] = "current";
    RuleType["kWater"] = "water";
})(RuleType = exports.RuleType || (exports.RuleType = {}));
;
var SwitchType;
(function (SwitchType) {
    SwitchType["kNoType"] = "";
    SwitchType["kSmappee"] = "smappee";
    SwitchType["kRF"] = "RF";
    SwitchType["kHTTPSwitch"] = "http";
    SwitchType["kHTTPDimmer"] = "httpdim";
    SwitchType["kHTTPUpDown"] = "httpupdown";
    SwitchType["kSomfy"] = "somfy";
})(SwitchType = exports.SwitchType || (exports.SwitchType = {}));
;
exports.kEmptyAction = Object.assign(Object.assign({}, exports.kEmptyUnit), { value: false });
;
exports.kEmptyRule = {
    type: "power", channel: 0, low: 30, high: 900,
    actions: [Object.assign(Object.assign({}, exports.kEmptyUnit), { value: false }), Object.assign(Object.assign({}, exports.kEmptyUnit), { value: 50 }), Object.assign(Object.assign({}, exports.kEmptyUnit), { value: true })]
};
;
exports.kEmptySwitch = Object.assign(Object.assign({}, exports.kEmptyUnit), { plug: 0, type: SwitchType.kNoType, unitName: "", name: "", data: "", method: "GET" });
;
;
;
;
;
/////////////
// Smappee //
/////////////
function actionValue(val) {
    if ((typeof val === "number") || (typeof val === "boolean"))
        return val;
    let x = parseInt(val);
    if (isNaN(x))
        return (val === "true") || (val === "TRUE") || (val === "True");
    else
        return x;
}
exports.actionValue = actionValue;
function actionValueStr(val) {
    if (typeof val === "boolean")
        return (val) ? "true" : "false";
    else
        return val.toString();
}
exports.actionValueStr = actionValueStr;
function makeInt(val) {
    if (typeof val === "string")
        val = parseInt(val);
    if (isNaN(val))
        val = 0;
    return val;
}
exports.makeInt = makeInt;
////////////////
// Sanitizers //
////////////////
exports.Sanitizers = {
    accessory: function (config) {
        if (!config)
            config = {};
        config.accessory = config.accessory || "DuotecnoAccessory";
        config.name = config.name || "Duotecno-Coppieters";
        // for sp4pro -> "device": "/dev/serial0", "baudrate": "9600"
        return config;
    },
    platform: function (config) {
        if (!config)
            config = {};
        config.manufacturer = config.manufacturer || "Duotecno-Coppieters";
        config.platform = config.platform || "DuotecnoPlatform";
        if (config.platform === "DuotecnoPlatform") {
            config.smappee = config.smappee || "./config.smappee.json";
            config.smartapp = config.smartapp || "./config.smartapp.json";
            config.system = config.system || "./config.system.json";
        }
        return config;
    },
    homebridge: function (config) {
        if (!config)
            config = {};
        config.bridge = config.bridge || {};
        config.bridge.name = config.bridge.name || "Duotecno Bridge";
        config.bridge.username = config.bridge.username || "CC:22:3D:E3:A3:01";
        config.bridge.port = config.bridge.port || 51827;
        config.bridge.pin = config.bridge.pin || "577-03-001";
        config.description = config.description || "Duotecno Platform";
        config.platforms = config.platforms || [{}];
        for (let p in config.platforms)
            this.platform(config.platforms[p]);
        config.accessories = []; //config.accessories || [<AccessoryConfig>{}];
        //for (let a in config.accessories) this.accessory(config.accessories[a]);
        return config;
    },
    server: function (config) {
        if (!config)
            return { debug: true, port: 9999 };
        config.port = config.port || 9999;
        if (typeof config.port === "string")
            config.port = parseInt(config.port);
        if (typeof config.debug === "undefined")
            config.debug = true;
        return config;
    },
    smartapp: function (config) {
        if (!config)
            config = {};
        config.port = config.port || 5002;
        config.switches = config.switches || [];
        config.switches.forEach(sw => this.switchConfig(sw));
        config.debug = config.debug || false;
        return config;
    },
    smappee: function (config) {
        if (!config)
            config = {};
        config.rules = config.rules || [];
        config.rules.forEach(sw => this.ruleConfig(sw));
        config.address = config.address || "";
        config.uid = config.uid || "--none--";
        config.debug = config.debug || false;
        return config;
    },
    switchConfig: function (aSwitch) {
        this.unitDef(aSwitch);
        aSwitch.name = aSwitch.name || "--";
        aSwitch.unitName = aSwitch.unitName || "";
        aSwitch.value = aSwitch.value || 0;
        aSwitch.data = aSwitch.data || "";
        aSwitch.method = aSwitch.method || "GET";
        aSwitch.type = aSwitch.type || SwitchType.kNoType;
        // don't destroy 0 plug
        if (typeof aSwitch.plug === "string")
            aSwitch.plug = aSwitch.plug || "";
        return aSwitch;
    },
    makeSwitchConfig: function (aSwitch) {
        return this.switchConfig({ name: aSwitch.name, unitName: aSwitch.unitName,
            masterAddress: aSwitch.masterAddress, masterPort: aSwitch.masterPort,
            logicalAddress: aSwitch.logicalAddress, logicalNodeAddress: aSwitch.logicalNodeAddress,
            type: aSwitch.type, plug: aSwitch.plug, data: aSwitch.data, method: aSwitch.method });
    },
    ruleConfig(rule) {
        rule.channel = makeInt(rule.channel);
        rule.low = makeInt(rule.low);
        rule.high = makeInt(rule.high);
        if (typeof rule.actions === "undefined")
            rule.actions = [];
        while (rule.actions.length < 2)
            rule.actions.push(exports.kEmptyAction);
        rule.actions.forEach(action => {
            action.value = actionValue(action.value);
            action.logicalAddress = makeInt(action.logicalAddress);
            action.logicalNodeAddress = makeInt(action.logicalNodeAddress);
            if (typeof action.name != "string")
                action.name = "";
        });
        return rule;
    },
    masterConfig: function (config) {
        if (!config)
            config = {};
        config.name = config.name || "IP Master";
        config.address = config.address || "";
        config.port = config.port || 0;
        if (typeof config.port === "string")
            config.port = parseInt(config.port);
        config.password = config.password || "";
        config.debug = config.debug || false;
        if (typeof config.active === "undefined")
            config.active = true;
        config.active = !!config.active;
        config.nodenames = config.nodenames || {};
        return config;
    },
    system: function (config) {
        if (!config)
            config = {};
        config.mood = config.mood || "sfeer";
        config.language = config.language || "EN";
        config.stores = config.stores || false;
        config.multiple = config.multiple || false;
        config.socketserver = config.socketserver || "akiworks.be";
        config.socketserver = config.socketserver || 'gateway.duotecno.com';
        if (config.socketserver == 'akiworks.be')
            config.socketserver = 'gateway.duotecno.com';
        config.socketport = config.socketport || 9999;
        config.cmasters = config.cmasters || [];
        config.cunits = config.cunits || [];
        return config;
    },
    ////////////
    // Groups //
    group: function (config) {
        if (!config)
            return exports.kEmptyGroup;
        config.name = config.name || exports.kEmptyGroup.name;
        config.id = config.id || exports.kEmptyGroup.id;
        config.order = config.order || exports.kEmptyGroup.order;
        config.visible = (typeof config.visible === "boolean") ? config.visible : exports.kEmptyGroup.visible;
        return config;
    },
    groups: function (config) {
        if (!config)
            return [exports.kEmptyGroup];
        config.forEach(g => exports.Sanitizers["group"](g));
        return config;
    },
    //////////
    // Node //
    nodeConfig: function (config) {
        if (!config)
            config = {};
        config.active = config.active || "N";
        config.masterAddress = config.masterAddress || "";
        config.masterPort = config.masterPort || 5001;
        config.logicalAddress = config.logicalAddress || 0;
        return config;
    },
    //////////
    // Unit //
    unitDef: function (info, into) {
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.masterAddress = info.masterAddress || '';
        info.masterPort = info.masterPort || 5001;
        return info;
    },
    unitConfig: function (config) {
        if (!config) {
            config = {};
        }
        this.unitDef(config);
        config.active = config.active || 'N';
        if (typeof config.group === 'string') {
            config.group = parseInt(config.group);
        }
        config.group = config.group || 0;
        return config;
    },
    unitScene: function (config) {
        // change + create new clean record for writing to config files
        if (!config) {
            config = {};
        }
        this.unitDef(config);
        if (typeof config.value === "undefined")
            config.value = 0;
        if (typeof config.value === "string")
            config.value = parseInt(config.value);
        return { logicalNodeAddress: config.logicalNodeAddress,
            logicalAddress: config.logicalAddress,
            masterAddress: config.masterAddress,
            masterPort: config.masterPort,
            value: config.value };
    },
    ////////////
    // Scenes //
    sceneConfig: function (config) {
        // don't change -> create new clean record for writing to config files
        if (!config) {
            return Object.assign({}, exports.kEmptyScene);
        }
        const newConfig = Object.assign({}, exports.kEmptyScene);
        newConfig.name = config.name || exports.kEmptyScene.name;
        if (typeof config.order === 'string') {
            newConfig.order = parseInt(config.order);
        }
        newConfig.order = config.order || exports.kEmptyScene.order;
        newConfig.trigger = this.unitScene(config.trigger);
        config.units = config.units || exports.kEmptyScene.units;
        newConfig.units = config.units.map(u => this.unitScene(u));
        return newConfig;
    },
    scenes: function (config) {
        if (!config) {
            return [this.sceneConfig()];
        }
        config.forEach(s => this.sceneConfig(s));
        return config;
    },
    ///////////////////////////////////
    // Data coming from the hardware //
    nodeInfo: function (info, into) {
        info.name = info.name || "";
        info.index = info.index || -1;
        info.logicalAddress = info.logicalAddress || 0;
        info.physicalAddress = info.physicalAddress || 0;
        info.type = info.type || NodeType.kNoNode;
        info.flags = info.flags || 0;
        info.nrUnits = info.nrUnits || 0;
        if (into) {
            Object.keys(info).forEach(prop => into[prop] = info[prop]);
        }
        return info;
    },
    unitInfo: function (info, into) {
        info.name = info.name || "";
        info.displayName = info.displayName || "";
        info.logicalReqNodeAddress = info.logicalReqNodeAddress || 0;
        info.index = info.index || -1;
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.type = info.type || UnitType.kNoType;
        info.flags = info.flags || 0;
        if (into) {
            Object.keys(info).forEach(prop => into[prop] = info[prop]);
        }
        return info;
    }
};
//////////////////////
// Helper functions //
//////////////////////
function wait(sec) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, sec * 1000));
    });
}
exports.wait = wait;
function ascii(char) {
    return char.charCodeAt(0);
}
exports.ascii = ascii;
function char(ascii) {
    return String.fromCharCode(ascii);
}
exports.char = char;
function hex(n) {
    n = Math.floor(n);
    return "0x" + n.toString(16);
}
exports.hex = hex;
function two(n) {
    return (n < 10) ? ("0" + n) : n.toString();
}
exports.two = two;
function now() {
    const aDate = new Date();
    return aDate.getFullYear() + "-" +
        two(aDate.getMonth() + 1) + "-" +
        two(aDate.getDate()) + " " +
        two(aDate.getHours()) + ":" +
        two(aDate.getMinutes()) + ":" +
        two(aDate.getSeconds());
}
exports.now = now;
function single(val) {
    return (val instanceof Array) ? val[0] : val;
}
exports.single = single;
//# sourceMappingURL=types.js.map