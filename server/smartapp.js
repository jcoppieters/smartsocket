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
exports.SmartApp = void 0;
const os_1 = require("os");
const webapp_1 = require("./webapp");
const types_1 = require("../duotecno/types");
const protocol_1 = require("../duotecno/protocol");
const http = require("http");
const somfy = require("./somfy");
const kMaster = { name: "master", type: "string", default: "0.0.0.0:5001" };
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
    "577-03-005": "CC:22:3D:E3:A1:05",
    "577-03-006": "CC:22:3D:E3:A1:06",
    "577-03-007": "CC:22:3D:E3:A1:07",
    "577-03-008": "CC:22:3D:E3:A1:08",
    "577-03-009": "CC:22:3D:E3:A1:09",
    "577-03-010": "CC:22:3D:E3:A1:0A"
};
var ContentType;
(function (ContentType) {
    ContentType[ContentType["form"] = 0] = "form";
    ContentType[ContentType["plain"] = 1] = "plain";
})(ContentType || (ContentType = {}));
;
class SmartApp extends webapp_1.WebApp {
    constructor(system, smappee, platform, log, dev = false) {
        super("smartapp" + (dev ? "-dev" : ""), log);
        somfy.setlogger(log);
        this.readConfig();
        this.system = system;
        // get status change updates
        this.system.emitter.on('update', this.informChange.bind(this));
        this.system.emitter.on('switch', this.alertSwitch.bind(this));
        // get some configurated params
        this.port = this.config.port || this.port || 80;
        this.debug = !!this.config.debug;
        this.system = system;
        this.smappee = smappee;
        this.platform = platform;
        // when all masters are loaded -> attach units to the switches
        this.system.emitter.on('ready', this.initSwitchUnits.bind(this));
        this.addFile("unitList", "./server/views/unit-list.ejs", "application/json");
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
    }
    writeConfig() {
        // copy switches into config, eliminate the runtime stuff (like unit)
        this.config.switches = this.switches.map(s => types_1.Sanitizers.makeSwitchConfig(s));
        super.writeConfig();
    }
    readConfig() {
        super.readConfig();
        // copy switches from config
        this.switches = this.config.switches.map(s => types_1.Sanitizers.switchConfig(s));
    }
    checkReady(context) {
        this.log("ready: " + (this.platform && this.platform.ready));
        if (this.platform && !this.platform.ready) {
            context["notReady"] = true;
            context["notReadyMessage"] = "=== waiting >> found " + this.system.allActiveUnits().length + " units out of " + this.system.config.cunits.length + " selected after " +
                this.platform.startWaiting + " sec ===";
        }
        else {
            context["notReady"] = false;
            context["notReadyMessage"] = "";
        }
    }
    //////////////////////////////
    // Router                   //
    //////////////////////////////
    doRequest(context) {
        const _super = Object.create(null, {
            doRequest: { get: () => super.doRequest }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.checkReady(context);
            if (context.request === "")
                context.request = "masters";
            context["hasSmappee"] = !!this.smappee;
            if (context.nums[0]) {
                // try number url node/unit/status
            }
            const res = yield this.tryNumURL(context);
            if (res) {
                return res;
            }
            else if (context.request === "files") {
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
    tryNumURL(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const node = context.nums[0];
            const master = this.system.masters[0];
            if ((!node) || (!master))
                return null;
            const unit = context.nums[1];
            const state = context.nums[2];
            if (typeof state === "undefined")
                return this.json(yield this.getState(master, node, unit));
            else
                return this.json(yield this.setState(master, node, unit, state));
        });
    }
    scrapeUnit(context, boundary) {
        context.getMaster("action");
        const master = this.system.findMaster(context["masterAddress"], context["masterPort"]);
        let unit = null;
        let logicalNodeAddress, logicalAddress;
        let name = context.getParam({ name: "unit" + boundary, type: "string", default: "--" });
        const value = types_1.actionValue(context.getParam({ name: "value" + boundary, type: "string", default: "0" }));
        // hex addresses or name
        if ((name[0] === "0") && (name[1] === "x")) {
            ({ logicalNodeAddress, logicalAddress } = context.addr(name));
            unit = this.system.findUnit(master, logicalNodeAddress, logicalAddress);
            name = (unit) ? unit.displayName : "--";
        }
        else {
            unit = this.system.findUnitByName(master, name);
            logicalNodeAddress = (unit) ? unit.node.logicalAddress : 0;
            logicalAddress = (unit) ? unit.logicalAddress : 0;
        }
        return { name, value, masterAddress: context["masterAddress"], masterPort: context["masterPort"],
            logicalAddress, logicalNodeAddress };
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
            return this.ejs("smappee", context, { config: this.smappee.config,
                rules: this.smappee.rules, message, realtime: this.smappee.realtime, voltages: this.smappee.voltages,
                switches: this.smappee.switches, plugs: this.smappee.plugs, channels: this.smappee.channels });
        });
    }
    scrapeAction(context, boundary) {
        const { name, value, masterAddress, masterPort, logicalAddress, logicalNodeAddress } = this.scrapeUnit(context, boundary);
        return {
            name, value, masterAddress, masterPort, logicalAddress, logicalNodeAddress
        };
    }
    scrapeRule(context) {
        // deep copy an empty rule
        let rule = Object.assign({}, types_1.kEmptyRule);
        // get the form values
        rule.type = context.getParam({ name: "type", type: "string", default: rule.type });
        rule.channel = context.getParam({ name: "channel", type: "string", default: rule.channel });
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
        this.log("Init " + this.switches.length + " Switches -> add units");
        this.switches.forEach(swtch => {
            swtch.unit = swtch.unit ||
                this.system.findUnit(this.system.findMaster(swtch.masterAddress, swtch.masterPort), swtch.logicalNodeAddress, swtch.logicalAddress);
            if ((this.smappee) && (swtch.type === types_1.SwitchType.kSmappee)) {
                for (let key in this.smappee.plugs) {
                    // convert to numbers, better be safe then missing one...
                    const p = (typeof swtch.plug === "string") ? parseInt(swtch.plug) : swtch.plug;
                    const k = (typeof key === "string") ? parseInt(key) : key;
                    if (k === p)
                        swtch.value = this.smappee.plugs[key].value;
                }
                ;
            }
            else if ((swtch.type === types_1.SwitchType.kHTTPDimmer) ||
                (swtch.type === types_1.SwitchType.kHTTPSwitch) ||
                (swtch.type === types_1.SwitchType.kHTTPUpDown)) {
                if (swtch.unit) {
                    swtch.value = swtch.unit.value;
                    swtch.status = swtch.unit.status;
                }
                else {
                    this.log("** error ** missing unit: " + types_1.hex(swtch.logicalNodeAddress) + "/" + types_1.hex(swtch.logicalAddress) + " **");
                }
            }
        });
    }
    alertSwitch(type, plugNr, value) {
        this.log("Received " + type + " switch status change: " + plugNr + " -> " + value);
        if ((this.smappee) && (type === types_1.SwitchType.kSmappee)) {
            this.switches.forEach(swtch => {
                if ((swtch.plug == plugNr) && swtch.unit) {
                    this.log(" -> Switch was attached to unit = " + swtch.unit.getDisplayName() + " -> setting state to " + value);
                    swtch.unit.setState(value);
                }
            });
        }
    }
    doSwitches(context) {
        return __awaiter(this, void 0, void 0, function* () {
            let inx = parseInt(context.id);
            let message;
            try {
                if (context.action === "add") {
                    this.switches.push(types_1.kEmptySwitch);
                    inx = this.switches.length - 1;
                    return this.ejs("switchDetail", context, { config: this.config, swtch: this.switches[inx],
                        masters: this.system.masters, id: inx });
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
                    const value = context.getParam({ name: "value", type: "integer", default: 0 });
                    this.setSwitch(inx, (state === "Y"), value);
                    return this.json({ switch: inx, state, value });
                }
                else {
                    // possible new IP Nodes, hence Units could be online
                    this.initSwitchUnits();
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
            if (u.isUnit(swtch.masterAddress, swtch.masterPort, swtch.logicalNodeAddress, swtch.logicalAddress)) {
                this.setSwitch(swtch);
            }
        });
    }
    scrapeSwitch(context) {
        const { name: unitName, masterAddress, masterPort, logicalAddress, logicalNodeAddress } = this.scrapeUnit(context, '');
        const plug = context.getParam({ name: "plug", type: "string", default: "0" });
        const stype = context.getParam({ name: "type", type: "string", default: types_1.SwitchType.kNoType });
        const name = context.getParam({ name: "name", type: "string", default: "--" });
        const data = context.getParam({ name: "data", type: "string", default: "" });
        const method = context.getParam({ name: "method", type: "string", default: "GET" });
        return { name, unitName, masterAddress, masterPort, logicalAddress, logicalNodeAddress, type: stype, plug, data, method };
    }
    updateSwitch(inx, swtch) {
        if ((inx >= 0) && (inx < this.switches.length)) {
            this.switches[inx] = swtch;
            this.initSwitchUnits();
            this.writeConfig();
        }
    }
    deleteSwitch(inx) {
        if ((inx >= 0) && (inx < this.switches.length)) {
            this.switches.splice(inx, 1);
            this.initSwitchUnits();
            this.writeConfig();
        }
    }
    setSwitch(inx, newstate, newvalue) {
        // find the switch if an index is given
        let swtch = null;
        if (typeof inx === "number") {
            if ((inx >= 0) && (inx < this.switches.length)) {
                swtch = this.switches[inx];
            }
        }
        else {
            // a Switch was passed as first param
            swtch = inx;
        }
        // check if state is given
        if (typeof newstate != "undefined") {
            swtch.unit.status = !!newstate;
        }
        if (typeof newvalue != "undefined") {
            swtch.unit.value = +newvalue;
        }
        if (!swtch) {
            this.err("Didn't find switch with inx: " + inx);
        }
        else if (!swtch.unit) {
            this.err("Don't have unit for switch: " + swtch.unitname);
        }
        else {
            if ((swtch.type === types_1.SwitchType.kSmappee) && (this.smappee)) {
                this.smappee.setPlug(parseInt(swtch.plug), swtch.unit.value);
            }
            else if (swtch.type === types_1.SwitchType.kHTTPSwitch) {
                this.httpSwitch(swtch);
            }
            else if (swtch.type === types_1.SwitchType.kHTTPDimmer) {
                this.httpDimmer(swtch);
            }
            else if (swtch.type === types_1.SwitchType.kHTTPUpDown) {
                this.httpUpDown(swtch);
            }
            else if (swtch.type === types_1.SwitchType.kOhSwitch) {
                this.ohSwitch(swtch);
            }
            else if (swtch.type === types_1.SwitchType.kOhDimmer) {
                this.ohDimmer(swtch);
            }
            else if (swtch.type === types_1.SwitchType.kOhUpDown) {
                this.ohUpDown(swtch);
            }
            else if (swtch.type === types_1.SwitchType.kSomfy) {
                this.somfy(swtch);
            }
            else {
                this.err("Don't know how to set a switch of type " + swtch.type);
            }
        }
    }
    ///////////
    // Somfy //
    ///////////
    somfy(swtch) {
        let nr = swtch.plug;
        if (typeof nr === "string")
            nr = parseInt(nr);
        nr = Math.max(0, Math.min(4, nr));
        if (swtch.unit) {
            if (swtch.unit.status === 3)
                somfy.down(nr); // 3 = going down
            else if (swtch.unit.status === 4)
                somfy.up(nr); // 4 = going up
            else if (swtch.unit.status != 0)
                somfy.stop(nr); // 1 = stopped down, 2 = stopped up
        }
    }
    //////////////////////////
    // http driven switches //
    //////////////////////////
    makeVariableURL(url, state, value) {
        // support legacy on/off
        const parts = url.split("|");
        let base = parts[0];
        if (parts.length > 2) {
            base += parts[state ? 2 : 1];
        }
        // do the dimmer value and on/off
        return base
            .replace("#B", state ? "true" : "false")
            .replace("#O", state ? "on" : "off")
            .replace("#1", state ? '1' : '0')
            .replace("#", state ? "on" : "off")
            .replace("$B", "" + Math.round(value / 100 * 256))
            .replace("$W", "" + Math.round(value / 100 * 256 * 256))
            .replace("$1", "" + (value / 100))
            .replace("$", "" + value);
    }
    httpSwitch(swtch) {
        const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
        this.log("HTTP-Switch(" + !!swtch.unit.status + ") -> " + req);
        this.wrequest(req);
    }
    httpUpDown(swtch) {
        let url = swtch.plug + "";
        // support legacy on/off
        const parts = url.split("|");
        let base = parts[0];
        const val = 1 + swtch.unit.value;
        if (val < parts.length) {
            base += parts[val];
        }
        this.log("UpDown(" + val + ") -> " + base);
        this.wrequest(base);
    }
    httpDimmer(swtch) {
        // do the possible on/off + value part
        let req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
        let data = "";
        if (swtch.data) {
            // we have body data
            data = this.makeVariableURL(swtch.data, !!swtch.unit.status, +swtch.unit.value);
        }
        this.log("Dimmer(" + !!swtch.unit.status + "," + swtch.unit.value + ") -> " + req + " + " + data);
        this.wrequest(req, swtch.method, data);
    }
    wrequest(url, method = "GET", formdata, contentType = ContentType.form) {
        try {
            // const data = querystring.stringify(formdata);
            const options = { method };
            if (formdata) {
                if (contentType === ContentType.form) {
                    options["headers"] = {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Length': Buffer.byteLength(formdata)
                    };
                }
                else if (contentType === ContentType.plain) {
                    options["headers"] = {
                        'Content-Type': 'text/plain',
                        'Accept': 'application/json'
                    };
                }
            }
            ;
            const req = http.request(url, options, res => {
                let resp = "";
                // res.setEncoding('utf8');
                res.on('data', chunk => {
                    resp += chunk;
                });
                res.on('end', () => {
                    // try to make something out of it...
                    try {
                        const x = JSON.parse(resp);
                        if ((x.type === "Buffer") && x.data)
                            x.data = x.data.toString();
                        this.log("http " + method + " -> " + res.statusCode + ": " + url + " = " + JSON.stringify(x));
                    }
                    catch (e) {
                        this.log("http " + method + " -> " + res.statusCode + ": " + url + " = " + resp);
                    }
                    ;
                });
            });
            if (formdata) {
                req.write(formdata);
            }
            req.on("error", (e) => {
                this.log("The request to " + url + ", error: " + e.message);
            });
            req.on("timeout", (e) => {
                this.log("The request to " + url + ", timeout: " + e.message);
            });
            req.end();
        }
        catch (e) {
            this.log("** http error ** " + e.message + " **");
        }
    }
    //////////////
    // open HAB //
    //////////////
    ohSwitch(swtch) {
        const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
        this.log("OH-Switch(" + !!swtch.unit.status + ") -> " + req);
        this.wrequest(req, swtch.method, swtch.unit.status ? "ON" : "OFF", ContentType.plain);
    }
    ohDimmer(swtch) {
        const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
        const val = (swtch.unit.value == 1) ? "ON" : swtch.unit.value.toString();
        this.log("OH-Dimmer(" + !!swtch.unit.status + ", " + val + ") -> " + req);
        this.wrequest(req, swtch.method, swtch.unit.status ? val : "OFF", ContentType.plain);
    }
    ohUpDown(swtch) {
        const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
        let data;
        // 1=stopped, 2-closed, 3=opened, 4=closing, 5=opening
        if ((swtch.unit.status == 1) || (swtch.unit.status == 2))
            data = "STOP";
        else if (swtch.unit.status == 3)
            data = "DOWN";
        else if (swtch.unit.status == 4)
            data = "UP";
        if (data) {
            this.log("OH-UpDown(" + swtch.unit.value + ", " + data + ") -> " + req);
            this.wrequest(req, swtch.method, data, ContentType.plain);
        }
    }
    //////////////////////////////
    // Services                 //
    //////////////////////////////
    doServices(context) {
        return __awaiter(this, void 0, void 0, function* () {
            let units = this.system.allUsedUnits();
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
                else if (context.action === "list") {
                    return this.ejs("unitList", context, { masters: this.system.masters });
                }
                else if (context.action === "services") {
                    return this.serviceList(context);
                }
                else if (context.action === "edit") {
                    context.getMaster("id");
                    const master = this.system.findMaster(context["masterAddress"], context["masterPort"]);
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
                        active: context.getParam(kActive) != "N", nodenames: {} });
                    this.updateNodes(master, context.params.nodes || "", context.params);
                    this.system.writeConfig();
                }
            }
            catch (e) {
                message = e.toString();
            }
            return this.ejs("masterList", context, { masters: this.system.masters, message });
        });
    }
    serviceList(context) {
        return __awaiter(this, void 0, void 0, function* () {
            let units = this.system.allActiveUnits();
            for (let u of units) {
                yield u.node.master.requestUnitStatus(u);
            }
            return this.ejs("unitList", context, { services: this.system.allActiveUnits() });
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
            // get masterAddress and Port
            context.getMaster("action", "node");
            const master = this.system.findMaster(context["masterAddress"], context["masterPort"]);
            if (context.action === "save") {
                // store changes in units into master config
                this.updateUnits(master, context.getParam(kNode), context.params);
                this.system.writeConfig();
                context.action = "cancel";
            }
            if (context.action === "cancel") {
                // return to previous screen -> show master info + list of nodes.
                context.id = context["masterAddress"] + ":" + context["masterPort"];
                context.request = "masters";
                context.action = "edit";
                return this.doRequest(context);
            }
            else if (context.action === "set") {
                if (!master)
                    return this.error(context, "master not found", true);
                const { logicalNodeAddress, logicalAddress } = context.getUnit();
                const response = yield this.setState(master, logicalNodeAddress, logicalAddress, context.getParam(kValue));
                return this.json(response);
            }
            else if (context.action === "get") {
                if (!master)
                    return this.error(context, "master not found", true);
                const { logicalNodeAddress, logicalAddress } = context.getUnit();
                const response = yield this.getState(master, logicalNodeAddress, logicalAddress);
                return this.json(response);
            }
            else if (context.action === "press") {
                if (!master)
                    return this.error(context, "master not found", true);
                const { logicalNodeAddress, logicalAddress } = context.getUnit();
                const response = yield this.doPress(master, logicalNodeAddress, logicalAddress, context.getParam(kIntValue));
                return this.json(response);
            }
            else { // context.action === "node"
                // reponding to  /units/[master ip address:port]/[logical node address]
                const nodeLogicalAddress = parseInt(context.id);
                let response = yield this.getNodeInfo(master, nodeLogicalAddress);
                let N = this.sortCopy(response.node, context);
                return this.ejs("nodeDetail", context, { message: response.message, node: N });
            }
        });
    }
    sortCopy(N, context) {
        // only need to re-sort if onAddress is requested, units should always be sorted on name
        const S = context["sortOnAddr"] = context.getParam({ name: "sortOnAddr", type: "string", default: "N" });
        if (S === "Y") {
            // don't sort the original array / node
            if (N.units) {
                const units = N.units.map(u => u);
                N = new protocol_1.Node(N.master, N);
                N.units = units;
                N.nrUnits = units.length;
                N.units.sort((a, b) => a.logicalAddress - b.logicalAddress);
            }
        }
        return N;
    }
    updateUnits(master, nodeLogicalAddress, params) {
        let node = this.system.findNode(master, nodeLogicalAddress);
        if (node) {
            node.units.forEach(unit => {
                unit.active = (params["active_" + unit.logicalAddress] === "Y");
                unit.used = unit.active || (params["used_" + unit.logicalAddress] === "Y");
                unit.displayName = params["name_" + unit.logicalAddress];
                unit.extendedType = parseInt(params["extended_" + unit.logicalAddress]);
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
                if (node.nrUnits != node.units.length)
                    yield master.fetchAllUnits(node);
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
            if (val === -1) {
                // mood click
                yield unit.setState(true);
                unit.value = false; // simulate push button
                return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: true };
            }
            else if ((val === 0) || (val === 1)) {
                // mood/input long clicks
                yield unit.setState(val);
                return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: val };
            }
            else if ((val === 3) || (val === 4) || (val === 5)) {
                // switching motor
                yield unit.setState(val);
                return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: yield unit.reqState() };
            }
            return { message: "Strange press " + val };
        });
    }
    setState(master, nodeLogicalAddress, unitLogicalAddress, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.log("setState requested with node = " + nodeLogicalAddress + ", unit = " + unitLogicalAddress + " -> " + value);
            if ((value === "Y") || (value === "N"))
                value = (value === "Y");
            else {
                value = parseInt(value);
                if (isNaN(value))
                    return { message: "Illegal value" };
            }
            let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
            if (!unit)
                return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };
            yield unit.setState(value);
            return { node: nodeLogicalAddress, unit: unitLogicalAddress, value };
        });
    }
    getState(master, nodeLogicalAddress, unitLogicalAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            this.log("getState requested with node = " + nodeLogicalAddress + ", unit = " + unitLogicalAddress);
            let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
            if (!unit)
                return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };
            yield master.requestUnitStatus(unit);
            return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: unit.value, status: unit.status, active: unit.active };
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