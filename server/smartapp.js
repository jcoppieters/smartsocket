"use strict";
// SmartApp implementation with Webapp
// Purpose: 
//  - select IP nodes & units to include -> generate config file
//  - attach Smappee and rules -> update config file
//  - control units from the IP nodes as test
//
// Johan Coppieters, Feb 2019.
//
// v2.0: mar/apr 2020
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
const os_1 = require("os");
const types_1 = require("../duotecno/types");
const protocol_1 = require("../duotecno/protocol");
const socapp_1 = require("./socapp");
const kMaster = { name: "master", type: "string", default: "0.0.0.0" };
const kAddress = { name: "address", type: "string", default: "0.0.0.0" };
const kPort = { name: "port", type: "integer", default: 80 };
const kActive = { name: "active", type: "string", default: "N" };
const kUID = { name: "uid", type: "string", default: "" };
const kName = { name: "name", type: "string", default: "no name" };
const kPassword = { name: "password", type: "string", default: "no password" };
const kNode = { name: "node", type: "integer", default: 0 };
const kUnit = { name: "unit", type: "integer", default: 0 };
const kValue = { name: "value" };
const kIntValue = { name: "value", type: "integer", default: 0 };
const kPin = { name: "pin", type: "string", default: "577-03-001" };
const kAccessoryPins = {
    "577-03-001": "CC:22:3D:E3:A1:01",
    "577-03-002": "CC:22:3D:E3:A1:02",
    "577-03-003": "CC:22:3D:E3:A1:03",
    "577-03-004": "CC:22:3D:E3:A1:04",
    "577-03-005": "CC:22:3D:E3:A1:05"
};
class SmartApp extends socapp_1.SocApp {
    constructor(system, smappee, platform, log) {
        super("smartapp", log);
        // get some configurated params
        this.readConfig();
        this.port = this.config.port || this.port || 80;
        this.debug = !!this.config.debug;
        this.system = system;
        // if (system) system.smartapp = this;
        this.smappee = smappee;
        this.platform = platform;
        this.addFile("masterList", "./server/views/master-list.ejs", "text/html");
        this.addFile("masterDetail", "./server/views/master-detail.ejs", "text/html");
        this.addFile("nodeDetail", "./server/views/node-details.ejs", "text/html");
        this.addFile("serviceList", "./server/views/service-list.ejs", "text/html");
        this.addFile("smappee", "./server/views/smappee.ejs", "text/html");
        this.addFile("homekit", "./server/views/homekit.ejs", "text/html");
        this.addFile("switchDetail", "./server/views/switch-details.ejs", "text/html");
        this.addFile("switchList", "./server/views/switch-list.ejs", "text/html");
        this.addFile("smappeeRule", "./server/views/smappee-rule.ejs", "text/html");
        this.addFile("materializeCSS", "./server/views/assets/materialize.min.css", "text/css");
        this.addFile("materializeJS", "./server/views/assets/materialize.min.js", "text/javascript");
        this.addFile("favicon", "./server/views/assets/favicon.ico", "image/x-icon");
        this.copyAndSanitizeSwitches(this.config.switches);
    }
    //////////////////////////////
    // Router                   //
    //////////////////////////////
    doRequest(context) {
        const _super = Object.create(null, {
            doRequest: { get: () => super.doRequest }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (context.request === "")
                context.request = "masters";
            context["hasSmappee"] = !!this.smappee;
            if (context.request === "assets") {
                return this.renderAssets(context);
            }
            else if (context.request === "images") {
                return this.renderImage(context);
            }
            else if (context.request === "masters") {
                return this.doMasters(context);
            }
            else if (context.request === "units") {
                return this.doUnits(context);
            }
            else if (context.request === "services") {
                return this.doServices(context);
            }
            else if ((this.smappee) && (context.request === "smappee")) {
                return this.doSmappee(context);
            }
            else if (context.request === "homekit") {
                return this.doHomekit(context);
            }
            else if (context.request === "switches") {
                return this.doSwitches(context);
            }
            else {
                return _super.doRequest.call(this, context);
            }
        });
    }
    copyAndSanitizeSwitches(switches) {
        this.switches = switches || [];
        this.switches.forEach(aSwitch => {
            types_1.Sanitizers.switchConfig(aSwitch);
        });
    }
    scrapeUnit(context, boundary) {
        let unit = null;
        let unitName = context.getParam({ name: "unit" + boundary, type: "string", default: "--" });
        let value = types_1.actionValue(context.getParam({ name: "value" + boundary, type: "string", default: "0" }));
        let master = context.getParam(kMaster);
        let port = context.getParam(kPort);
        let nodeNr, unitNr;
        // hex addresses or name
        if ((unitName[0] === "0") && (unitName[1] === "x")) {
            const parts = unitName.split(";");
            nodeNr = parseInt(parts[0], 16);
            unitNr = parseInt((parts.length > 1) ? parts[1] : "0", 16);
            unit = this.system.findUnit(master, nodeNr, unitNr);
            unitName = (unit) ? unit.displayName : "--";
        }
        else {
            unit = this.system.findUnitByName(master, unitName);
            nodeNr = (unit) ? unit.node.logicalAddress : 0;
            unitNr = (unit) ? unit.logicalAddress : 0;
        }
        return { unitName, value, master, port, unitNr, nodeNr };
    }
    //////////////////////////////
    // Homekit                  //
    //////////////////////////////
    doHomekit(context) {
        const _super = Object.create(null, {
            doRequest: { get: () => super.doRequest }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const kFN = os_1.homedir() + "/.homebridge/config.json";
            let message;
            let config;
            if (context.action === "restart") {
                context.request = "restart";
                return _super.doRequest.call(this, context);
            }
            else if (context.action === "save") {
                const bridge = this.scrapePlatformConfig(context);
                config = this.read("homebridge", kFN);
                config.bridge = bridge;
                this.log("writing config");
                console.log(config);
                this.write("homebridge", config, kFN);
                message = "Config saved. You need to restart before you can use it";
            }
            else {
                config = this.read("homebridge", kFN);
            }
            return this.ejs("homekit", context, { config, pins: kAccessoryPins, message });
        });
    }
    scrapePlatformConfig(context) {
        const pin = context.getParam(kPin);
        return {
            name: context.getParam(kName),
            pin,
            username: kAccessoryPins[pin]
        };
    }
    //////////////////////////////
    // Smappee                  //
    //////////////////////////////
    doSmappee(context) {
        return __awaiter(this, void 0, void 0, function* () {
            let message;
            const id = parseInt(context.id);
            // if not found or action done -> drop through and list again the smappee attributes + all rules
            try {
                if (context.action === "add") {
                    this.smappee.rules.push(types_1.kEmptyRule);
                    return this.ejs("smappeeRule", context, { rule: types_1.kEmptyRule, id: this.smappee.rules.length - 1, masters: this.system.masters });
                }
                else if (context.action === "rule") {
                    if (id >= 0)
                        return this.ejs("smappeeRule", context, { rule: this.smappee.rules[id], id, masters: this.system.masters });
                }
                else if (context.action === "delete") {
                    if (id >= 0)
                        this.smappee.deleteRule(id);
                }
                else if (context.action === "change") {
                    this.smappee.updateRule(id, this.scrapeRule(context));
                }
                else if (context.action === "save") {
                    this.smappee.updateConfig(context.getParam(kAddress), context.getParam(kUID));
                }
            }
            catch (e) {
                message = e.toString();
            }
            return this.ejs("smappee", context, { config: this.smappee.config, rules: this.smappee.rules, message });
        });
    }
    scrapeAction(context, boundary) {
        const { unitName, value, master, port, unitNr, nodeNr } = this.scrapeUnit(context, boundary);
        return {
            unitName, value, master, port, unitNr, nodeNr
        };
    }
    scrapeRule(context) {
        // deep copy an empty rule
        let rule = Object.assign({}, types_1.kEmptyRule);
        // get the form values
        rule.type = context.getParam({ name: "type", type: "string", default: rule.type });
        rule.channel = context.getParam({ name: "channel", type: "integer", default: rule.channel });
        rule.low = context.getParam({ name: "low", type: "integer", default: rule.low });
        rule.high = context.getParam({ name: "high", type: "integer", default: rule.high });
        rule.actions[0] = this.scrapeUnit(context, "low");
        rule.actions[1] = this.scrapeUnit(context, "mid");
        rule.actions[2] = this.scrapeUnit(context, "high");
        return rule;
    }
    //////////////
    // Switches //
    //////////////
    initSwitchUnits() {
        this.switches.forEach(swtch => {
            swtch.unit = swtch.unit || this.system.findUnit(this.system.findMaster(swtch.master, swtch.port), swtch.nodeNr, swtch.unitNr);
            if ((this.smappee) && (swtch.type === types_1.SwitchType.kSmappee)) {
                for (let key in this.smappee.plugs) {
                    if (parseInt(key) === swtch.plug)
                        swtch.value = this.smappee.plugs[key];
                }
                ;
            }
        });
    }
    doSwitches(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const inx = parseInt(context.id);
            // new IP Nodes, hence Units could be online
            this.initSwitchUnits();
            let message;
            try {
                if (context.action === "add") {
                    this.switches.push(types_1.kEmptySwitch);
                    return this.ejs("switchDetail", context, { config: this.config, swtch: this.switches[this.switches.length - 1],
                        masters: this.system.masters });
                }
                else if (context.action === "edit") {
                    return this.ejs("switchDetail", context, { rule: types_1.kEmptyRule, swtch: this.switches[inx],
                        masters: this.system.masters });
                }
                else if (context.action === "delete") {
                    this.deleteSwitch(inx);
                }
                else if (context.action === "change") {
                    this.updateSwitch(inx, this.scrapeSwitch(context));
                }
                else if (context.action === "set") {
                    const state = context.getParam({ name: "state", type: "string", default: "N" });
                    this.setSwitch(inx, (state === "Y"));
                }
            }
            catch (e) {
                message = e.toString();
            }
            return this.ejs("switchList", context, { masters: this.system.masters, switches: this.switches, message });
        });
    }
    informChange(u) {
        this.switches.forEach(swtch => {
            const master = this.system.findMaster(swtch.master, swtch.port);
            if (master) {
                const unit = this.system.findUnit(master, swtch.nodeNr, swtch.unitNr);
                if (unit) {
                    this.setSwitch(swtch, !!u.status);
                }
            }
        });
    }
    scrapeSwitch(context) {
        const { unitName, master, port, unitNr, nodeNr } = this.scrapeUnit(context, '');
        const plug = context.getParam({ name: "plug", type: "integer", default: 0 });
        const stype = context.getParam({ name: "type", type: "string", default: types_1.SwitchType.kNoType });
        return { unitName, master, port, unitNr, nodeNr, type: stype, plug };
    }
    updateSwitch(inx, swtch) {
        if ((inx >= 0) && (inx < this.switches.length)) {
            this.switches[inx] = swtch;
            this.writeConfig();
        }
    }
    deleteSwitch(inx) {
        if ((inx >= 0) && (inx < this.switches.length)) {
            this.switches.splice(inx, 1);
            this.writeConfig();
        }
    }
    setSwitch(inx, state) {
        // find the switch
        let swtch = null;
        if (typeof inx === "number") {
            if ((inx >= 0) && (inx < this.switches.length)) {
                swtch = this.switches[inx];
            }
        }
        else {
            swtch = inx;
        }
        if (!swtch) {
            this.err("Didn't find switch with inx: " + inx);
        }
        else {
            if ((swtch.type === types_1.SwitchType.kSmappee) && (this.smappee)) {
                this.smappee.setPlug(swtch.plug, state);
            }
            else {
                this.err("Don't know how to set a switch of type " + swtch.type);
            }
        }
    }
    //////////////////////////////
    // Services                 //
    //////////////////////////////
    doServices(context) {
        return __awaiter(this, void 0, void 0, function* () {
            let units = this.system.allActiveUnits();
            for (let u of units) {
                yield u.node.master.requestUnitStatus(u);
            }
            return this.ejs("serviceList", context, { units });
        });
    }
    //////////////////////////////
    // Masters                  //
    //////////////////////////////
    doMasters(context) {
        return __awaiter(this, void 0, void 0, function* () {
            let message;
            try {
                if (context.action === "new") {
                    return this.ejs("masterDetail", context, { config: types_1.Sanitizers.masterConfig(null) });
                }
                else if (context.action === "edit") {
                    const masterString = context.id.split(":");
                    const master = this.system.findMaster(masterString[0], parseInt(masterString[1]));
                    if (master)
                        return this.ejs("masterDetail", context, { nodes: master.nodes, config: master.getConfig() });
                    else
                        message = "Error: Master not found";
                }
                else if (context.action === "delete") {
                    const master = this.system.findMaster(context.getParam(kAddress), context.getParam(kPort));
                    if (master)
                        yield this.system.deleteMaster(master);
                    else
                        message = "Error: Master not found";
                    // drop through and list all masters
                }
                else if (context.action === "save") {
                    const master = yield this.system.addMaster({ address: context.getParam(kAddress), port: context.getParam(kPort),
                        password: context.getParam(kPassword), name: context.getParam(kName),
                        active: context.getParam(kActive) != "N" });
                    this.updateNodes(master, context.params.nodes, context.params);
                    this.system.writeConfig();
                }
            }
            catch (e) {
                message = e.toString();
            }
            return this.ejs("masterList", context, { masters: this.system.masters, message });
        });
    }
    updateNodes(master, nodes, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (nodes) {
                let nodeArr = nodes.split(",").map(s => parseInt(s));
                nodeArr.forEach(adr => {
                    let node = this.system.findNode(master, adr);
                    if (node) {
                        node.active = (params["active_" + adr] === "Y");
                        this.system.setActiveState(node);
                    }
                });
            }
        });
    }
    //////////////////////////////
    // Units                    //
    //////////////////////////////
    doUnits(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const master = this.system.findMaster(context.getParam(kMaster), context.getParam(kPort));
            if (context.action === "save") {
                // store changes in units into master config
                this.updateUnits(master, context.getParam(kNode), context.params);
                this.system.writeConfig();
                context.action = "cancel";
            }
            if (context.action === "cancel") {
                // return to previous screen -> show master info + list of nodes.
                context.id = context.getParam(kMaster) + ":" + context.getParam(kPort);
                context.request = "masters";
                context.action = "edit";
                return this.doRequest(context);
            }
            else if (context.action === "set") {
                const response = yield this.setState(master, context.getParam(kNode), context.getParam(kUnit), context.getParam(kValue));
                return this.json(response);
            }
            else if (context.action === "press") {
                const response = yield this.doPress(master, context.getParam(kNode), context.getParam(kUnit), context.getParam(kIntValue));
                return this.json(response);
            }
            else {
                // reponding to  /units/[master ip address:port]/[logical node address]
                const masterString = context.action.split(":");
                const masterAddress = masterString[0];
                const masterPort = parseInt(masterString[1] || "5001");
                const master = this.system.findMaster(masterAddress, masterPort);
                const nodeLogicalAddress = parseInt(context.id);
                let response = yield this.getNodeInfo(master, nodeLogicalAddress);
                return this.ejs("nodeDetail", context, Object.assign({ masterAddress, masterPort }, response));
            }
        });
    }
    updateUnits(master, nodeLogicalAddress, params) {
        let node = this.system.findNode(master, nodeLogicalAddress);
        if (node) {
            node.units.forEach(unit => {
                unit.active = (params["active_" + unit.logicalAddress] === "Y");
            });
            this.system.updateSystem(true);
        }
    }
    getNodeInfo(master, nodeLogicalAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            let node = this.system.findNode(master, nodeLogicalAddress);
            if (!node) {
                // if no node found, make some dummy node for the display system. (should not occur !)
                return { node: new protocol_1.Node(this.system.masters[0], { name: "No node" }), message: "Node not found" };
            }
            else {
                yield node.master.requestNodeStatus(node);
                return { node };
            }
        });
    }
    doPress(master, nodeLogicalAddress, unitLogicalAddress, val) {
        return __awaiter(this, void 0, void 0, function* () {
            let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
            if (!unit)
                return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };
            if (val === 1) {
                // mood click
                yield unit.setState(true);
                unit.value = false; // simulate push button
                return { value: true };
            }
            else if ((val === 3) || (val === 4) || (val === 5)) {
                // switching motor
                yield unit.setState(val);
                return { value: yield unit.reqState() };
            }
            return { message: "Strange press " + val };
        });
    }
    setState(master, nodeLogicalAddress, unitLogicalAddress, val) {
        return __awaiter(this, void 0, void 0, function* () {
            this.log("setState requested with node = " + nodeLogicalAddress + ", unit = " + unitLogicalAddress + " -> " + val);
            if ((val === "Y") || (val === "N"))
                val = (val === "Y");
            else {
                val = parseInt(val);
                if (isNaN(val))
                    return { message: "Illegal value" };
            }
            let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
            if (!unit)
                return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };
            val = yield unit.setState(val);
            return { value: val };
        });
    }
    //////////////////////////////
    // Assets & Images          //
    //////////////////////////////
    renderAssets(context) {
        const file = context.action;
        if ((file === "min.css") || (file === "materialize.min.css") || (file === "materialize.css")) {
            return this.file("materializeCSS");
        }
        else if ((file === "min.js") || (file === "materialize.min.js") || (file === "materialize.js")) {
            return this.file("materializeJS");
        }
        else if (file === "favicon.ico") {
            return this.file("favicon");
        }
        else
            return this.notFound();
    }
    renderImage(context) {
        const file = context.action;
        return this.image("./server/views/images/" + file, "jpeg");
    }
}
exports.SmartApp = SmartApp;
//# sourceMappingURL=smartapp.js.map