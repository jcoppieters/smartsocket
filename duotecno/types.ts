// Johan Coppieters.
// v1 - server version, Apr 2019
// v2 - app version, Jan 2020
// v3 - smart server version, Mar 2020

import { NodeType, UnitType, Unit } from "./protocol";


// coming from Homebridge or from unit tests
export type LogFunction = (message: any, ...optionalParams: any[]) => void;

// for Homebridge
export type Service = new (nodeName: string, unitName: string) => any;


// for Active=Y/N or New=X
export type YNX =  "Y" | "N" | "X";
export type YN =  "Y" | "N";


// For the SmartApp
export enum Boundaries {kLow = 0, kMid = 1, kHigh = 2};
export enum RuleType {kPower = "power", kCurrent = "current", kWater = "water"}
export enum SwitchType {kNoType = "", kSmappee = "smappee", kRF = "RF"}


export interface UnitDef {
  unitName: string;
  master: string;
  port: number;
  unitNr: number,
  nodeNr: number,
  unit?: Unit
}
export const kEmptyUnit: UnitDef = { master: "0.0.0.0", port: 5001, unitName: "unit", unitNr: 0, nodeNr: 0 };

export interface Action extends UnitDef {
  value: number | boolean;
}
export const kEmptyAction: Action = { ...kEmptyUnit, value: false };

export interface Rule {
  type: string;
  channel: number;
  low: number;
  high: number;
  current?: number;
  power?: number;
  actions: Array<Action>;
};
export const kEmptyRule: Rule = { 
  type: "power", channel: 0, low: 30, high: 900, 
  actions: [{...kEmptyUnit, value: false}, {...kEmptyUnit, value: 50}, {...kEmptyUnit, value: true}] 
};

export interface Switch extends UnitDef {
  type: SwitchType,
  plug: number,
  value?: number | boolean
};
export const kEmptySwitch: Switch = { ...kEmptyUnit, plug: 0, type: SwitchType.kNoType};


export interface Bridge {
  name: string,
  username: string,   // CC:22:3D:E3:A3:03
  port: number,
  pin: string         // "577-02-003"
};

export interface BaseConfig {
  debug?: boolean;
}
export interface PlatformConfig extends BaseConfig {
  manufacturer: string,
  platform: string,
  smappee?: string,
  smartapp?: string,
  system?: string,
  [x: string]: any    // for other platforms
};
export interface AccessoryConfig {
  accessory: string,
  name: string,
  [x: string]: any    // for other accessories
};
export interface HomebridgeConfig {
  bridge: Bridge,                         
  description: string,
  platforms?: Array<PlatformConfig>
  accessories?: Array<AccessoryConfig>
};

export interface WebAppConfig extends BaseConfig {
  port: number;
  switches: Array<Switch>;
}

export interface SmappeeConfig extends BaseConfig {
  address: string;
  rules: Array<Rule>;
  uid: string;
};


// Duotecno configuration (see duotecno/system.ts)
export interface SystemConfig {
  socketserver: string;
  socketport: number;
  language: string;
  stores: boolean;
  multiple: boolean;
  cmasters: Array<MasterConfig>;
  cunits: Array<UnitConfig>;
};
export interface MasterConfig {
  name?: string;
  address: string;
  port: number;
  password: string;
  debug?: boolean;
  active: boolean;
};
export interface NodeConfig {
  active: YNX;                 // if found with "N": don't even query, "X": new node
  masterAddress: string;      // address of master node
  masterPort: number;         // port of master node
  logicalAddress?: number;
};
export interface UnitConfig {
  active: YNX;                 // export / don't export to homebridge
  masterAddress: string;      // address of master node
  masterPort: number;         // port of master node
  logicalNodeAddress: number;
  logicalAddress: number;
  group: number;              // id of group
};
export interface UnitSetting extends UnitConfig {
  value: number;
}

export interface GroupConfig {
  name: string;
  id: number;
  visible: boolean;
  used?: boolean;
  order: number;
}
export const kEmptyGroup: GroupConfig = {name: "Home", id: 0, order: 0, visible: true};


// from Protocol//Hardware to Nodes and Units
export interface DBInfo {
  nrNodes: number;
};
export interface NodeInfo {
  name?: string;
  logicalReqNodeAddress?: number;
  index?: number;
  logicalAddress?: number;
  physicalAddress?: number;
  nrUnits?: number;
  type?: NodeType;
  flags?: number;
};
export interface UnitInfo {
  name?: string;
  logicalReqNodeAddress?: number;
  logicalNodeAddress?: number;
  index?: number;
  logicalAddress?: number;
  physicalAddress?: number;
  type?: UnitType;
  flags?: number;
};


// handlers from incoming and outgoing messages
export type Message = Array<number>;
export type ISignature = {
  status: boolean, 
  nodeNr: number, 
  unitNr: number
};
export type PromiseObject = { 
  resolver: (result: Message) => void, 
  rejecter: (result: Error) => void,
  signature: ISignature 
};

export enum WriteError { writeFatal = -1, writeError = 0, writeOK = 1 }
export type OkFunction = (ok: WriteError) => void;
export interface CommRecord {
  isStatus: boolean;
  cmd: number;
  message: Message;
  rest: string;
}
export const kEmptyCommRecord = { status: false, cmd: -1, message: [-1,0,0], rest: ""};

/////////////
// Smappee //
/////////////

export function actionValue(val: string | boolean | number): boolean | number {
  if ((typeof val === "number") || (typeof val === "boolean"))
    return val;

  let x = parseInt(val);
  if (isNaN(x)) 
    return (val === "true") || (val === "TRUE") || (val === "True");
  else
    return x;

}
export function actionValueStr(val: boolean | number): string {
  if (typeof val === "boolean")
    return (val) ? "true" : "false";
  else
    return val.toString();
}

export function makeInt(val: string | number): number {
  if (typeof val === "string") val = parseInt(val);
  if (isNaN(val)) val = 0;
  return val;
}

////////////////
// Sanitizers //
////////////////

export const Sanitizers = {
  accessory: function(config: AccessoryConfig): AccessoryConfig {
    if (!config) config = <AccessoryConfig>{};
    config.accessory = config.accessory || "DuotecnoAccessory";
    config.name = config.name || "Duotecno-Coppieters";
    // for sp4pro -> "device": "/dev/serial0", "baudrate": "9600"
    return config;
  },

  platform: function(config: PlatformConfig): PlatformConfig {
    if (!config) config = <PlatformConfig>{};
    config.manufacturer = config.manufacturer || "Duotecno-Coppieters";
    config.platform = config.platform || "DuotecnoPlatform";
    if (config.platform === "DuotecnoPlatform") {
      config.smappee = config.smappee || "./config.smappee.json";
      config.smartapp = config.smartapp || "./config.smartapp.json";
      config.system = config.system || "./config.system.json";
    }
    return config;
  },

  homebridge: function(config: HomebridgeConfig): HomebridgeConfig {
    if (!config) config = <HomebridgeConfig>{};

    config.bridge = config.bridge || <Bridge>{};
    config.bridge.name = config.bridge.name || "Duotecno Bridge";
    config.bridge.username = config.bridge.username || "CC:22:3D:E3:A3:01";
    config.bridge.port = config.bridge.port || 51827;
    config.bridge.pin = config.bridge.pin || "577-03-001";

    config.description = config.description || "Duotecno Platform";

    config.platforms = config.platforms || [<PlatformConfig>{}];
    for (let p in config.platforms) this.platform(config.platforms[p]);

    config.accessories = []; //config.accessories || [<AccessoryConfig>{}];
    //for (let a in config.accessories) this.accessory(config.accessories[a]);

    return config;
  },

  webapp: function(config: WebAppConfig): WebAppConfig {
    if (!config) config = <WebAppConfig>{};
    config.port = config.port || 5002;
    config.switches = config.switches || [];
    config.debug = config.debug || false;
    return config;
  },

  smappee: function(config: SmappeeConfig): SmappeeConfig {
    if (!config) config = <SmappeeConfig>{};
    config.rules = config.rules || [];
    config.address = config.address || "192.168.99.95";
    config.uid = config.uid || "--none--";
    config.debug = config.debug || false;
    return config;
  },

  switchConfig: function(aSwitch): Switch {
    aSwitch.id = makeInt(aSwitch.id);
    aSwitch.unitNr = makeInt(aSwitch.unitNr);
    aSwitch.nodeNr = makeInt(aSwitch.nodeNr);
    if (typeof aSwitch.unitName != "string") aSwitch.unitName = "";

    return aSwitch;
  },

  ruleConfig(rule): Rule {
    rule.channel = makeInt(rule.channel);
    rule.low = makeInt(rule.low);
    rule.high = makeInt(rule.high);

    if (typeof rule.actions === "undefined") rule.actions = [];
    while (rule.actions.length < 2) rule.actions.push(kEmptyAction);
    rule.actions.forEach( action => {
      action.value = actionValue(action.value);
      action.unitNr = makeInt(action.unitNr);
      action.nodeNr = makeInt(action.nodeNr);
      if (typeof action.unitName != "string") action.unitName = "";
    });
    return rule;
  },

  masterConfig: function(config?: MasterConfig): MasterConfig {
    if (!config) config = <MasterConfig>{};
    config.name = config.name || "Smartbox";
    config.address = config.address || "";
    config.port = config.port || 0;
    if (typeof config.port === "string") config.port = parseInt(config.port);
    config.password = config.password || "";
    config.debug = config.debug || false;
    if (typeof config.active === "undefined") config.active = true;
    config.active = !!config.active;
    return config;
  },

  system: function(config?: SystemConfig): SystemConfig {
    if (!config) config = <SystemConfig>{};
    config.language = config.language || "EN";
    config.stores = config.stores || false;
    config.multiple = config.multiple || false;
    config.socketserver = config.socketserver || "akiworks.be";
    config.socketport = config.socketport || 9999;
    config.cmasters = config.cmasters || [];
    config.cunits = config.cunits || [];

    return config;
  },

  group: function(config?: GroupConfig): GroupConfig {
    if (!config) return kEmptyGroup;

    config.name = config.name || kEmptyGroup.name;
    config.id = config.id || kEmptyGroup.id;
    config.order = config.order || kEmptyGroup.order;
    config.visible = (typeof config.visible === "boolean") ? config.visible : kEmptyGroup.visible;
    return config;
  },

  groups: function(config?: Array<GroupConfig>): Array<GroupConfig> {
    if (!config) return [kEmptyGroup];

    config.forEach(g => Sanitizers["group"](g));
    return config;
  },

  nodeConfig: function(config?: NodeConfig) {
    if (!config) config = <NodeConfig>{};
    config.active = config.active || "N";
    config.masterAddress = config.masterAddress || "";
    config.masterPort = config.masterPort || 5001;
    config.logicalAddress = config.logicalAddress || 0;
    return config;
  },
  
  unitConfig: function(config?: UnitConfig) {
    if (!config) config = <UnitConfig>{};
    config.active = config.active || "N";
    config.logicalAddress = config.logicalAddress || 0;
    config.logicalNodeAddress = config.logicalNodeAddress || 0;
    config.masterAddress = config.masterAddress || "";
    config.masterPort = config.masterPort || 5001;

    if (typeof config.group === "string") config.group = parseInt(config.group);
    config.group = config.group || 0;
    return config;
  },

  // for data coming from the hardware
  nodeInfo: function(info: NodeInfo, into?: object) {
    info.name = info.name || "";
    info.index = info.index || -1;
    info.logicalAddress = info.logicalAddress || 0;
    info.physicalAddress = info.physicalAddress || 0;
    info.type = info.type || NodeType.kNoNode;
    info.flags = info.flags || 0;
    info.nrUnits = info.nrUnits || 0;

    if (into)
      Object.keys(info).forEach(prop => into[prop] = info[prop]);

    return info;
    },
  
  unitInfo: function(info: UnitInfo, into?: object) {
    info.name = info.name || "";
    info.logicalReqNodeAddress = info.logicalReqNodeAddress || 0;
    info.index = info.index || -1;
    info.logicalNodeAddress = info.logicalNodeAddress || 0;
    info.logicalAddress = info.logicalAddress || 0;
    info.type = info.type || UnitType.kNoType;
    info.flags = info.flags || 0;

    if (into)
      Object.keys(info).forEach(prop => into[prop] = info[prop]);

    return info;
  }

};

//////////////////////
// Helper functions //
//////////////////////
export function ascii(char: string): number {
  return char.charCodeAt(0);
}
export function char(ascii:  number): string {
  return String.fromCharCode(ascii)
}

export function hex(n: number): string {
  n = Math.floor(n);
  return "0x" + n.toString(16);
}

export function two(n: number | string) { 
  return (n < 10) ? ("0" + n) : n.toString();
}

export function now(): string {
  const aDate = new Date();
  return aDate.getFullYear() + "-" + 
         two(aDate.getMonth() + 1) + "-" + 
         two(aDate.getDate()) + " " +
         two(aDate.getHours()) + ":" + 
         two(aDate.getMinutes()) + ":" + 
         two(aDate.getSeconds());
}

export function single(val: string | Array<string>): string {
  return (val instanceof Array) ? val[0] : val;
}
