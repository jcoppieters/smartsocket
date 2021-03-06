// SmartApp implementation with Webapp
// Purpose: 
//  - select IP nodes & units to include -> generate config file
//  - attach Smappee and rules -> update config file
//  - control units from the IP nodes as test
//
// Johan Coppieters, Feb 2019.
//
// v2.0: mar/apr 2020

import { homedir } from 'os';
import { Context, HttpResponse, WebApp } from "./webapp";
import { LogFunction, Sanitizers, Rule, kEmptyRule, actionValue, Action, kEmptySwitch, Switch, SwitchType, HomebridgeConfig, YN, hex } from "../duotecno/types";
import { System } from "../duotecno/system";
import { Node, Unit } from "../duotecno/protocol";
import { Smappee } from "./smappee";
import { Master } from "../duotecno/master";
import { Platform } from "./platform";
import * as http from "http";
import * as somfy  from "./somfy";

const kMaster = {name: "master", type: "string", default: "0.0.0.0:5001"} as const;
const kAddress = {name: "address", type: "string", default: "0.0.0.0"} as const;
const kAddressOld = {name: "addressX", type: "string", default: "0.0.0.0"} as const;
const kPort = {name: "port", type: "integer", default: 80} as const;
const kPortOld = {name: "portX", type: "integer", default: 80} as const;
const kActive = {name: "active", type: "string", default: "N"} as const;
const kUID = {name: "uid", type: "string", default: ""} as const;
const kName = {name: "name", type: "string", default: "no name"} as const;
const kPassword = {name: "password", type: "string", default: "no password"} as const;
const kNode = {name: "node", type: "integer", default: 0} as const;
const kUnit = {name: "unit", type: "integer", default: 0} as const;
const kValue = {name: "value"} as const;
const kIntValue = {name: "value", type: "integer", default: 0} as const;
const kPin = {name: "pin", type: "string", default: "577-03-001"} as const;


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

enum ContentType {form, plain};


export class SmartApp extends WebApp {
  system: System;
  smappee: Smappee;
  platform: Platform;
  switches: Array<Switch>;


  constructor(system: System, smappee: Smappee, platform: Platform, log?: LogFunction, dev = false) {
    super("smartapp" + (dev ? "-dev" : ""), log);
    somfy.setlogger(log);

    this.readConfig();
    this.system = system;

    // get status change updates
    this.system.emitter.on('update', this.informChange.bind(this));
    this.system.emitter.on('switch', this.alertSwitch.bind(this));

    // get some configurated params
    this.port = this.config.port || this.port || 80;
    this.debug = !! this.config.debug;
    
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
    this.config.switches = this.switches.map(s => Sanitizers.makeSwitchConfig(s));
    super.writeConfig();
  }

  readConfig() {
    super.readConfig();

    // copy switches from config
    this.switches = this.config.switches.map(s => Sanitizers.switchConfig(s));
  }

  checkReady(context: Context) {
    this.log("ready: " + (this.platform && this.platform.ready));
    if (this.platform && ! this.platform.ready) {
      context["notReady"] = true;
      context["notReadyMessage"] = "=== waiting >> found " + 
        this.system.allActiveUnits().length + " units out of " + this.system.activeUnitsConfig().length + " selected after " +
        this.platform.startWaiting + " sec ===";
    } else {
      context["notReady"] = false;
      context["notReadyMessage"] = "";
    }
  }

  //////////////////////////////
  // Router                   //
  //////////////////////////////

  async doRequest(context: Context): Promise<HttpResponse> {
    this.checkReady(context);

    if (context.request === "") context.request= "masters";
    context["hasSmappee"] = !!this.smappee;

    if (context.nums[0]) {
      // try number url node/unit/status

    }

    const res = await this.tryNumURL(context);
    if (res) {
      return res;

    } else if (context.request === "files") {
      return this.renderAssets(context);

    } else if (context.request === "images") {
      return this.renderImage(context);
  
    } else if (context.request === "masters") {
      return this.doMasters(context);

    } else if (context.request === "units") {
      return this.doUnits(context);

    } else if (context.request === "services") {
      return this.doServices(context);

    } else if ( (this.smappee) && (context.request === "smappee")) {
      return this.doSmappee(context);

    } else if (context.request === "homekit") {
      return this.doHomekit(context);

    } else if (context.request === "switches") {
      return this.doSwitches(context);

    } else {
      return super.doRequest(context);
    }
  }

  async tryNumURL(context: Context): Promise<HttpResponse> {
    const node = context.nums[0];
    const master = this.system.masters[0];
    if ((!node) || (!master)) return null;

    const unit = context.nums[1];
    const state = context.nums[2];

    if (typeof state === "undefined")
      return this.json(await this.getState(master, node, unit))
    else
      return this.json(await this.setState(master, node, unit, state));
  }

  scrapeUnit(context: Context, boundary: string): Action {
    context.getMaster("action");
    const master = this.system.findMaster(context["masterAddress"], context["masterPort"]);

    let unit: Unit = null;
    let logicalNodeAddress: number, logicalAddress: number;
    let name = context.getParam({ name: "unit"+boundary, type: "string", default: "--" });
    const value = actionValue(context.getParam({ name: "value"+boundary, type: "string", default: "0" }));

    // hex addresses or name
    if ((name[0] === "0") && (name[1] === "x")) {
      ({ logicalNodeAddress, logicalAddress } = context.addr(name));
      unit = this.system.findUnit(master, logicalNodeAddress, logicalAddress);
      name = (unit) ? unit.displayName : "--";
    } else {
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
  async doHomekit(context: Context): Promise<HttpResponse> {
    const kFN = homedir() + "/.homebridge/config.json";
    let message;
    let config;

    if (context.action === "restart") {
      context.request = "restart";
      return super.doRequest(context);

    } else if (context.action === "save") {
      const bridge = this.scrapePlatformConfig(context);
      config = this.read("homebridge", kFN);
      config.bridge = bridge;
      this.log("writing config"); console.log(config);
      this.write("homebridge", config, kFN);
      message = "Config saved. You need to restart before you can use it";

    } else {
      config = this.read("homebridge", kFN)
    }
    
    return this.ejs("homekit", context, { config, pins: kAccessoryPins, message });
  }

  scrapePlatformConfig(context: Context): any {
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
  async doSmappee(context: Context): Promise<HttpResponse> {
    let message: string;
    const id: number = parseInt(context.id);

    // if not found or action done -> drop through and list again the smappee attributes + all rules
    try {
      if (context.action === "add") {
        const rule = {... kEmptyRule};
        this.smappee.rules.push(rule);
        return this.ejs("smappeeRule", context, { rule, id: this.smappee.rules.length-1, masters: this.system.masters });

      } else if (context.action === "rule") {
        if (id >= 0) 
          return this.ejs("smappeeRule", context, { rule: this.smappee.rules[id], id, masters: this.system.masters });
        
        } else if (context.action === "delete") {
          if (id >= 0) 
            this.smappee.deleteRule( id );
  
        } else if (context.action === "change") {
          this.smappee.updateRule( id, this.scrapeRule(context) );
  
        } else if (context.action === "save") {
        this.smappee.updateConfig(context.getParam(kAddress), context.getParam(kUID));

      }
    } catch(e) {
      message = e.toString();
    }

    return this.ejs("smappee", context, { config: this.smappee.config, 
      rules: this.smappee.rules, message, realtime: this.smappee.realtime, voltages: this.smappee.voltages,
      switches: this.smappee.switches, plugs: this.smappee.plugs, channels: this.smappee.channels });
  }


  scrapeAction(context: Context, boundary: string): Action {
    const { name, value, masterAddress, masterPort, logicalAddress, logicalNodeAddress } = this.scrapeUnit(context, boundary);
    return {
      name, value, masterAddress, masterPort, logicalAddress, logicalNodeAddress
    }
  }

  scrapeRule(context: Context): Rule {
    // deep copy an empty rule
    let rule = {... kEmptyRule};  // = shallow copy, re-assign actions later

    // get the form values
    rule.type = context.getParam({name: "type", type: "string", default: rule.type });
    rule.channel = context.getParam({name: "channel", type: "string", default: rule.channel });

    rule.low = context.getParam({name: "low", type: "integer", default: rule.low });
    rule.high = context.getParam({name: "high", type: "integer", default: rule.high });

    rule.actions = [this.scrapeUnit(context, "low"),
                    this.scrapeUnit(context, "mid"),
                    this.scrapeUnit(context, "high")];

    return rule;
  }

  
  //////////////
  // Switches //
  //////////////
  initSwitchUnits() {
    this.log("Init " + this.switches.length + " Switches -> add units");

    this.switches.forEach(swtch => {
      swtch.unit = swtch.unit || 
        this.system.findUnit(this.system.findMaster(swtch.masterAddress, swtch.masterPort), 
                             swtch.logicalNodeAddress, swtch.logicalAddress);

      if ((this.smappee) && (swtch.type === SwitchType.kSmappee)) {
        for (let key in this.smappee.plugs) {
          // convert to numbers, better be safe then missing one...
          const p = (typeof swtch.plug === "string") ? parseInt(swtch.plug) : swtch.plug;
          const k = (typeof key === "string") ? parseInt(key) : key;
          if (k === p) 
            swtch.value = this.smappee.plugs[key].value;
        };

      } else if ((swtch.type === SwitchType.kHTTPDimmer) || 
                 (swtch.type === SwitchType.kHTTPSwitch) || 
                 (swtch.type === SwitchType.kHTTPUpDown)) {
        if (swtch.unit) {
          swtch.value = swtch.unit.value;
          swtch.status = swtch.unit.status;
        } else {
          this.log("** error ** missing unit: " + hex(swtch.logicalNodeAddress)+"/"+hex(swtch.logicalAddress) + " **");
        }
      }
    });
  }

  alertSwitch(type: SwitchType, plugNr: number, value: number | boolean) {
    this.log("Received " + type + " switch status change: " + plugNr + " -> " + value);
    if ((this.smappee) && (type === SwitchType.kSmappee)) {
      this.switches.forEach(swtch => {
        if ((swtch.plug == plugNr) && swtch.unit) {
          this.log(" -> Switch was attached to unit = " + swtch.unit.getDisplayName() + " -> setting state to " + value);
          swtch.unit.setState(value);
        }
      });
    }
  }

  async doSwitches(context: Context): Promise<HttpResponse> {
    let inx: number = parseInt(context.id);

    let message: string;
    try {
      if (context.action === "add") {
        this.switches.push(kEmptySwitch);
        inx = this.switches.length-1;
        return this.ejs("switchDetail", context, { config: this.config, swtch: this.switches[inx], 
                                                   masters: this.system.masters, id: inx });

      } else if (context.action === "edit") {
        return this.ejs("switchDetail", context, { rule: kEmptyRule, swtch: this.switches[inx], 
                                                   masters: this.system.masters });
  
      } else if (context.action === "delete") {
        this.deleteSwitch( inx );

      } else if (context.action === "change") {
        this.updateSwitch( inx, this.scrapeSwitch(context) );

      } else if (context.action === "set") {
        const state = context.getParam({name: "state", type: "string", default: "N"})
        const value = context.getParam({name: "value", type: "integer", default: 0})
        this.setSwitch( inx, (state === "Y"), value );
        return this.json({switch: inx, state, value});

      } else {
        // possible new IP Nodes, hence Units could be online
        this.initSwitchUnits();
      }

    } catch(e) {
      message = e.toString();
    }
    return this.ejs("switchList", context, { masters: this.system.masters, switches: this.switches, message });
  }
  

  informChange(u: Unit) {
    this.switches.forEach(swtch => {
      if (u.isUnit(swtch.masterAddress, swtch.masterPort, swtch.logicalNodeAddress, swtch.logicalAddress)) {
        this.setSwitch(swtch);
      }
    });
  }

  scrapeSwitch(context: Context): Switch {
    const { name: unitName, masterAddress, masterPort, logicalAddress, logicalNodeAddress } = this.scrapeUnit(context, '');
    const plug = context.getParam({name: "plug", type: "string", default: "0" });
    const stype = context.getParam({name: "type", type: "string", default: SwitchType.kNoType });
    const name = context.getParam({name: "name", type: "string", default: "--" });
    const data = context.getParam({name: "data", type: "string", default: "" });
    const method = context.getParam({name: "method", type: "string", default: "GET" });
    return { name, unitName, masterAddress, masterPort, logicalAddress, logicalNodeAddress, type: stype, plug, data, method  };
  }

  updateSwitch(inx: number, swtch: Switch) {
    if ((inx >= 0) && (inx < this.switches.length)) {
      this.switches[inx] = swtch;
      this.initSwitchUnits();
      this.writeConfig();
    }
  }

  deleteSwitch(inx: number) {
    if ((inx >= 0) && (inx < this.switches.length)) {
      this.switches.splice(inx, 1);
      this.initSwitchUnits();
      this.writeConfig();
    }
  }


  setSwitch(inx: number | Switch, newstate?: boolean, newvalue?: number) {
    // find the switch if an index is given
    let swtch = null;
    if (typeof inx === "number") {
      if ((inx >= 0) && (inx < this.switches.length)) {
        swtch = this.switches[inx];
      }
    } else {
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

    } else if (!swtch.unit) {
      this.err("Don't have unit for switch: "+swtch.unitname);

    } else {
      if ((swtch.type === SwitchType.kSmappee) && (this.smappee)) {
        this.smappee.setPlug(parseInt(swtch.plug), swtch.unit.value);

      } else if (swtch.type === SwitchType.kHTTPSwitch) {
        this.httpSwitch(swtch);

      } else if (swtch.type === SwitchType.kHTTPDimmer) {
        this.httpDimmer(swtch);

      } else if (swtch.type === SwitchType.kHTTPUpDown) {
        this.httpUpDown(swtch);

      } else if (swtch.type === SwitchType.kOhSwitch) {
        this.ohSwitch(swtch);

      } else if (swtch.type === SwitchType.kOhDimmer) {
        this.ohDimmer(swtch);

      } else if (swtch.type === SwitchType.kOhUpDown) {
        this.ohUpDown(swtch);

      } else if (swtch.type === SwitchType.kSomfy) {
        this.somfy(swtch);

      } else {
        this.err("Don't know how to set a switch of type " + swtch.type);
      }
    }
  }

  ///////////
  // Somfy //
  ///////////
  somfy(swtch: Switch) {
    let nr = swtch.plug;
    if (typeof nr === "string") nr = parseInt(nr);
    nr = Math.max(0, Math.min(4,nr));
    if (swtch.unit) {
      if (swtch.unit.status === 3) 
        somfy.down(nr);       // 3 = going down
      else if (swtch.unit.status === 4) 
        somfy.up(nr);         // 4 = going up
      else if (swtch.unit.status != 0)
        somfy.stop(nr);       // 1 = stopped down, 2 = stopped up
    }
  }

  //////////////////////////
  // http driven switches //
  //////////////////////////
  makeVariableURL(url, state: boolean, value: number) {
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
        .replace("$T", "" + Math.round(value / 100 * 512))
        .replace("$W", "" + Math.round(value / 100 * 256 * 256))
        .replace("$1", "" + (value / 100))
        .replace("$", "" + value);
  }

  httpSwitch(swtch: Switch) {
    const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
    this.log("HTTP-Switch(" + !!swtch.unit.status + ") -> " + req);
    this.wrequest(req);
  }

  httpUpDown(swtch: Switch) {
    let url = swtch.plug + "";
    // support legacy on/off
    const parts = url.split("|");
    let base = parts[0];
    const val = 1 + <number>swtch.unit.value;
    if (val < parts.length) {
      base += parts[val];
    }
    
    this.log("UpDown(" + val + ") -> " + base);
    this.wrequest(base);
  }

  httpDimmer(swtch: Switch) {
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


  wrequest(url: string, method = "GET", formdata?, contentType = ContentType.form) {
    try {
      // const data = querystring.stringify(formdata);
      const options = { method };

      if (formdata) {
        if (contentType === ContentType.form) {
          options["headers"] = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(formdata)
          }
        } else if (contentType === ContentType.plain) {
          options["headers"] = {
            'Content-Type': 'text/plain',
            'Accept': 'application/json'
          };
        }
      };

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
            if ((x.type === "Buffer") && x.data) x.data = x.data.toString();
            this.log("http " + method + " -> " + res.statusCode + ": " + url + " = " + JSON.stringify(x));
          } catch(e) {
            this.log("http " + method + " -> " + res.statusCode + ": " + url + " = " + resp);
          };
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

    } catch(e) {
      this.log("** http error ** " + e.message + " **");
    }
  }


  //////////////
  // open HAB //
  //////////////
  ohSwitch(swtch: Switch) {
    const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
    this.log("OH-Switch(" + !!swtch.unit.status + ") -> " + req);
    this.wrequest(req, swtch.method, swtch.unit.status ? "ON" : "OFF", ContentType.plain);
  }
  ohDimmer(swtch: Switch) {
    const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
    const val = (swtch.unit.value == 1) ? "ON" : swtch.unit.value.toString();
    this.log("OH-Dimmer(" + !!swtch.unit.status + ", " + val + ") -> " + req);
    this.wrequest(req, swtch.method, swtch.unit.status ? val : "OFF", ContentType.plain);
  }
  ohUpDown(swtch: Switch) {
    const req = this.makeVariableURL(swtch.plug, !!swtch.unit.status, +swtch.unit.value);
    let data;
    // 1=stopped, 2-closed, 3=opened, 4=closing, 5=opening
    if ( (swtch.unit.status == 0) || (swtch.unit.status == 1) || (swtch.unit.status == 2) )
      data = "STOP";
    else if (swtch.unit.status == 3)
      data = "DOWN";
    else if (swtch.unit.status == 4)
      data = "UP";

    if (data) {
      this.log("OH-UpDown(" + <number>swtch.unit.value +", " + data + ") -> " + req);
      this.wrequest(req, swtch.method, data, ContentType.plain);
    }
  }


  //////////////////////////////
  // Services                 //
  //////////////////////////////
  async doServices(context: Context): Promise<HttpResponse> {
    let units = this.system.allUsedUnits();
    for (let u of units) {
      await u.node.master.requestUnitStatus(u);
    }
    return this.ejs("serviceList", context, { units });
  }


  //////////////////////////////
  // Masters                  //
  //////////////////////////////
  async doMasters(context: Context): Promise<HttpResponse> {
    let message: string;
    try {

      if (context.action === "new") {
        return this.ejs("masterDetail", context, { config: Sanitizers.masterConfig(null) });

      } else if (context.action === "list") {
        return this.ejs("unitList", context, { masters: this.system.masters });

      } else if (context.action === "services") {
        return this.serviceList(context);        

      } else if (context.action === "edit") {
        context.getMaster("id");
        const master = this.system.findMaster(context["masterAddress"], context["masterPort"]);
        if (master)
          return this.ejs("masterDetail", context, { nodes: master.nodes, config: master.getConfig() });
        else
          message = "Error: Master not found";

      } else if (context.action === "delete") {
        const master = this.system.findMaster(context.getParam(kAddress), context.getParam(kPort));
        if (master)
          await this.system.deleteMaster(master);
        else
          message = "Error: Master not found";
        // drop through and list all masters

      } else if (context.action === "save") {
        const master = await this.system.addMaster(context.getParam(kAddressOld), context.getParam(kPortOld),
                                                   { address: context.getParam(kAddress), port: context.getParam(kPort), 
                                                     password: context.getParam(kPassword), name: context.getParam(kName),
                                                     active: context.getParam(kActive) != "N", nodenames: {} });
        this.updateNodes(master, context.params.nodes || "", context.params);
        this.system.writeConfig();
      }
    } catch(e) {
      message = e.toString();
    }
    return this.ejs("masterList", context, { masters: this.system.masters, message });
  }

  async serviceList(context: Context) {
    let units = this.system.allActiveUnits();
    for (let u of units) {
      await u.node.master.requestUnitStatus(u);
    }
    return this.ejs("unitList", context, { services: this.system.allActiveUnits() });
  }

  async updateNodes(master: Master, nodes, params) {
    if (nodes) {
      let nodeArr = nodes.split(",").map(s => parseInt(s));
      nodeArr.forEach(adr => {
        let node = this.system.findNode(master, adr);
        if (node) {
          node.active = (params["active_"+adr] === "Y");
          this.system.setActiveState(node);
        }
      });
    }
  }


  //////////////////////////////
  // Units                    //
  //////////////////////////////
  async doUnits(context: Context): Promise<HttpResponse> {
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

    } else if (context.action === "set") {
      if (!master) return this.error(context, "master not found", true);
      const { logicalNodeAddress, logicalAddress } = context.getUnit();
      const response = await this.setState(master, logicalNodeAddress, logicalAddress, context.getParam(kValue));
      return this.json(response);
      
    } else if (context.action === "get") {
      if (!master) return this.error(context, "master not found", true);
      const { logicalNodeAddress, logicalAddress } = context.getUnit();
      const response = await this.getState(master, logicalNodeAddress, logicalAddress);
      return this.json(response);
      
    } else if (context.action === "press") {
      if (!master) return this.error(context, "master not found", true);
      const { logicalNodeAddress, logicalAddress } = context.getUnit();
      const response = await this.doPress(master, logicalNodeAddress, logicalAddress, context.getParam(kIntValue));
      return this.json(response);
      
    } else { // context.action === "node"
      // reponding to  /units/[master ip address:port]/[logical node address]
      const nodeLogicalAddress = parseInt(context.id);
      let response = await this.getNodeInfo(master, nodeLogicalAddress);
      let N = this.sortCopy(response.node, context);
      return this.ejs("nodeDetail", context, { message: response.message, node: N });
    }    
  }


  sortCopy(N: Node, context: Context): Node {
    // only need to re-sort if onAddress is requested, units should always be sorted on name
    const S = context["sortOnAddr"] = context.getParam({name: "sortOnAddr", type:"string", default: "N"});
    if (S === "Y") {
      // don't sort the original array / node
      if (N.units) {
        const units = N.units.map(u => u);
        N = new Node(N.master, N);
        N.units = units; N.nrUnits = units.length;
        N.units.sort((a,b) => a.logicalAddress - b.logicalAddress);
      }
    }
    return N;
  }

  updateUnits(master: Master, nodeLogicalAddress, params) {
    let node = this.system.findNode(master, nodeLogicalAddress);
    if (node) {
      node.units.forEach(unit => {
        unit.active = (params["active_"+unit.logicalAddress] === "Y");
        unit.used = unit.active || (params["used_"+unit.logicalAddress] === "Y");
        unit.displayName = params["name_"+unit.logicalAddress];
        unit.extendedType = parseInt(params["extended_"+unit.logicalAddress]);
      });
      this.system.updateSystem(true); 
    }
  }

  async getNodeInfo(master: Master, nodeLogicalAddress: number) {
    let node = this.system.findNode(master, nodeLogicalAddress);
    if (! node) {
      // if no node found, make some dummy node for the display system. (should not occur !)
      return { node: new Node(this.system.masters[0], {name: "No node"}), message: "Node not found" };

    } else {
      if (node.nrUnits != node.units.length) 
        await master.fetchAllUnits(node);
      await node.master.requestNodeStatus(node);
      return { node };
    }
  }

  async doPress(master: Master, nodeLogicalAddress: number, unitLogicalAddress: number, val: any) {
    let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
    if (! unit) return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };

    if (val === -1) {
      // mood click
      await unit.setState(-1);
      unit.value = false; // simulate push button
      return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: true };

    } else if ((val === 0) || (val === 1)) {
      // mood/input long clicks
      await unit.setState(val);
      return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: val }

    } else if ((val === 3) || (val === 4) || (val === 5)) {
      // switching motor
      await unit.setState(val);
      return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: await unit.reqState() };
    }
    return { message: "Strange press " + val };
  }

  async setState(master: Master, nodeLogicalAddress: number, unitLogicalAddress: number, value: any) {
    this.log("setState requested with node = " + nodeLogicalAddress + ", unit = " + unitLogicalAddress + " -> " + value);

    if ((value === "Y") || (value === "N"))
      value = (value === "Y")
    else {
      value = parseInt(value);
      if (isNaN(value)) return { message: "Illegal value" };
    }
    let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
    if (! unit) return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };

    await unit.setState(value);
    return { node: nodeLogicalAddress, unit: unitLogicalAddress, value };
  }

  async getState(master: Master, nodeLogicalAddress: number, unitLogicalAddress: number) {
    this.log("getState requested with node = " + nodeLogicalAddress + ", unit = " + unitLogicalAddress);

    let unit = this.system.findUnit(master, nodeLogicalAddress, unitLogicalAddress);
    if (! unit) return { message: "Unit not found " + master.getName() + "/" + nodeLogicalAddress + "/" + unitLogicalAddress };

    await master.requestUnitStatus(unit);
    return { node: nodeLogicalAddress, unit: unitLogicalAddress, value: unit.value, status: unit.status, active: unit.active };
  }

  
  //////////////////////////////
  // Assets & Images          //
  //////////////////////////////

  renderAssets(context: Context) {
    const file = context.action;
    if ((file === "min.css") || (file === "materialize.min.css") || (file === "materialize.css")) {
      return this.file("materializeCSS");

    } else if ((file === "min.js") || (file === "materialize.min.js") || (file === "materialize.js")) {
      return this.file("materializeJS");

    } else if (file === "favicon.ico") {
      return this.file("favicon");

    } else 
      return this.notFound(); 
  }

  renderImage(context: Context) {
    const file = context.action;
    return this.image("./server/views/images/" + file, "jpeg"); 
  }

}
