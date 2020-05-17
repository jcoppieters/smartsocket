"use strict";
// Johan Coppieters.
// v1 - server version, Apr 2019
// v2 - app version, Jan 2020
// v3 - smart server version, Mar 2020
// v3.1 - added scenes from app version, May 2020
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_1 = require("./protocol");
;
;
;
;
exports.kEmptyUnit = { masterAddress: "0.0.0.0", masterPort: 5001, name: "unit", logicalAddress: 0, logicalNodeAddress: 0 };
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
var SwitchType;
(function (SwitchType) {
    SwitchType["kNoType"] = "";
    SwitchType["kSmappee"] = "smappee";
    SwitchType["kRF"] = "RF";
})(SwitchType = exports.SwitchType || (exports.SwitchType = {}));
exports.kEmptyAction = Object.assign(Object.assign({}, exports.kEmptyUnit), { value: false });
;
exports.kEmptyRule = {
    type: "power", channel: 0, low: 30, high: 900,
    actions: [Object.assign(Object.assign({}, exports.kEmptyUnit), { value: false }), Object.assign(Object.assign({}, exports.kEmptyUnit), { value: 50 }), Object.assign(Object.assign({}, exports.kEmptyUnit), { value: true })]
};
;
exports.kEmptySwitch = Object.assign(Object.assign({}, exports.kEmptyUnit), { plug: 0, type: SwitchType.kNoType });
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
    smartapp: function (config) {
        if (!config)
            config = {};
        config.port = config.port || 5002;
        config.switches = config.switches || [];
        config.debug = config.debug || false;
        return config;
    },
    smappee: function (config) {
        if (!config)
            config = {};
        config.rules = config.rules || [];
        config.address = config.address || "192.168.0.54";
        config.uid = config.uid || "--none--";
        config.debug = config.debug || false;
        return config;
    },
    switchConfig: function (aSwitch) {
        aSwitch.id = makeInt(aSwitch.id);
        aSwitch.unitNr = makeInt(aSwitch.unitNr);
        aSwitch.nodeNr = makeInt(aSwitch.nodeNr);
        if (typeof aSwitch.name != "string")
            aSwitch.name = "";
        return aSwitch;
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
            action.unitNr = makeInt(action.unitNr);
            action.nodeNr = makeInt(action.nodeNr);
            if (typeof action.name != "string")
                action.name = "";
        });
        return rule;
    },
    masterConfig: function (config) {
        if (!config)
            config = {};
        config.name = config.name || "Smartbox";
        config.address = config.address || "";
        config.port = config.port || 0;
        if (typeof config.port === "string")
            config.port = parseInt(config.port);
        config.password = config.password || "";
        config.debug = config.debug || false;
        if (typeof config.active === "undefined")
            config.active = true;
        config.active = !!config.active;
        return config;
    },
    system: function (config) {
        if (!config)
            config = {};
        config.language = config.language || "EN";
        config.stores = config.stores || false;
        config.multiple = config.multiple || false;
        config.socketserver = config.socketserver || "akiworks.be";
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
        info.type = info.type || protocol_1.NodeType.kNoNode;
        info.flags = info.flags || 0;
        info.nrUnits = info.nrUnits || 0;
        if (into)
            Object.keys(info).forEach(prop => into[prop] = info[prop]);
        return info;
    },
    unitInfo: function (info, into) {
        info.name = info.name || "";
        info.logicalReqNodeAddress = info.logicalReqNodeAddress || 0;
        info.index = info.index || -1;
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.type = info.type || protocol_1.UnitType.kNoType;
        info.flags = info.flags || 0;
        if (into)
            Object.keys(info).forEach(prop => into[prop] = info[prop]);
        return info;
    }
};
//////////////////////
// Helper functions //
//////////////////////
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