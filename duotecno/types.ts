// Johan Coppieters.
// v1 - server version, Apr 2019
// v2 - app version, Jan 2020
// v3 - smart server version, Mar 2020
// v3.1 - added scenes from app version, May 2020

import { Unit } from "./protocol";

// for Active=Y/N or New=X
export type YNX =  "Y" | "N" | "X";
export type YN =  "Y" | "N";


// Node types
export enum NodeType { kNoNode = 0, kStandardNode = 1, kGatewayNode = 4, kModemNode = 8, kGUINode = 32 };

// States
export enum UnitState { kOpening = 4, kClosing = 3, kOpen = 2, kClosed = 1, kStopped = 0 };
export enum UnitMotorCmd { kClose = 5, kOpen = 4, kStop = 3};

export enum UnitType { 
  kNoType = 0, kDimmer = 1, kSwitch = 2, kInput = 3, 
  kTemperature = 4, kExtendedAudio = 5, kMood = 7, kSwitchingMotor = 8, 
  kAudio = 10, kAV = 11, kIRTX = 12, kVideo = 14
};
export enum UnitExtendedType /* extends UnitType */ { 
  kNoType = 0, kDimmer = 1, kSwitch = 2, kInput = 3, 
  kTemperature = 4, kExtendedAudio = 5, kMood = 7, kSwitchingMotor = 8, 
  kAudio = 10, kAV = 11, kIRTX = 12, kVideo = 14,

  kLightbulb = 101, kCondition = 102, 
  kGarageDoor = 201, kDoor = 202, kLock = 203, kUnlocker = 204
};


// kLightbulb  == kSwitch with no "*" or "$" in the name
// kDoor == kSwitchingMotor with "*" in the name
// kGarageDoor == kSwitchingMotor with "$" in the name
// kCondition  == kMood with "*" in the name
// kLock == kMood with $ in the name
// kUnlocker = kMood with $ in the name


//////////////
// Duotecno //
//////////////

// Configuration (see duotecno/system.ts)
export interface SystemConfig {
  socketserver: string;
  socketport: number;
  mood: string;
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
  nodenames: { [node: number]: string };
};

export interface NodeConfig {
  active: YNX;                 // if found with "N": don't even query, "X": new node
  masterAddress: string;       // address of master node
  masterPort: number;          // port of master node
  logicalAddress?: number;
};

export interface UnitDef {
  name: string;
  masterAddress: string;
  masterPort: number;
  logicalAddress: number;
  logicalNodeAddress: number;
  displayName?: string;
  extendedType?: UnitExtendedType;
  //unit?: Unit;
};
export const kEmptyUnit: UnitDef = { masterAddress: "0.0.0.0", masterPort: 5001, 
                                     name: "unit", logicalAddress: 0, logicalNodeAddress: 0 } as const;


export interface UnitConfig extends UnitDef {
  active: YN;                 // export / don't export to homebridge
  used: YN;                   // load into the active units
  group: number;              // id of group
};

export interface UnitSetting extends UnitConfig {
  value: number;
};
export interface UnitScene extends UnitDef {
  value: number | boolean;
};
export const kEmptyUnitScene: UnitScene = { ...kEmptyUnit, value: true} as const;


export interface SceneConfig {
  name: string;
  trigger: UnitScene;
  order: number;
  units: Array<UnitScene>;
};
export const kEmptyScene: SceneConfig = {name: 'Scene', trigger: {... kEmptyUnitScene}, order: 0, units: []};


export interface GroupConfig {
  name: string;
  id: number;
  visible: boolean;
  order: number;
};
export const kEmptyGroup: GroupConfig = {name: "Home", id: 0, order: 0, visible: true} as const;



// from Protocol//Hardware to Nodes and Units
export interface DBInfo {
  nrNodes: number;
};
export interface NodeInfo {
  name?: string;
  index?: number;
  logicalAddress?: number;
  physicalAddress?: number;
  nrUnits?: number;
  type?: NodeType;
  flags?: number;
};
export interface UnitInfo {
  name?: string;
  displayName?: string;
  logicalNodeAddress?: number;
  index?: number;
  logicalAddress?: number;
  physicalAddress?: number;
  type?: UnitType;
  extendedType?: UnitExtendedType;
  flags?: number;
};


// handlers from incoming and outgoing messages
export type Message = Array<number>;
export type ISignature = {
  status: boolean, 
  logicalNodeAddress: number, 
  logicalAddress: number
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


//////////////
// SmartApp //
//////////////

export enum Boundaries {kLow = 0, kMid = 1, kHigh = 2};
export enum RuleType {kPower = "power", kCurrent = "current", kWater = "water"};

export enum SwitchType {
  kNoType = "", 
  kSmappee = "smappee", 
  kRF = "RF", 
  kHTTPSwitch = "http", 
  kHTTPDimmer = "httpdim",
  kHTTPUpDown = "httpupdown",
  kOhSwitch = "oswitch",
  kOhDimmer = "odimmer",
  kOhUpDown = "oupdown",
  kSomfy = "somfy"
};


export interface Action extends UnitDef {
  value: number | boolean;
}
export const kEmptyAction: Action = { ...kEmptyUnit, value: false } as const;

export interface Rule {
  type: string;
  channel: string;
  low: number;
  high: number;
  current?: number;
  power?: number;
  actions: Array<Action>;
};
export const kEmptyRule: Rule = { 
  type: "power", channel: "0", low: 30, high: 900, 
  actions: [{...kEmptyUnit, value: false}, {...kEmptyUnit, value: 50}, {...kEmptyUnit, value: true}] 
};

export interface Switch extends UnitDef {
  name: string,
  unitName: string,
  type: SwitchType,
  plug: number | string,
  data: string,
  method: string,
  unit?: Unit;
  status?: number | boolean,
  value?: number | boolean | string
};
export const kEmptySwitch: Switch = 
  { ...kEmptyUnit, plug: 0, type: SwitchType.kNoType, unitName: "", name: "", data: "", method: "GET"} as const;


export interface SmartAppConfig extends BaseConfig {
  port: number;
  switches: Array<Switch>;
}

export interface SmappeeConfig extends BaseConfig {
  address: string;
  rules: Array<Rule>;
  uid: string;
};

////////////////
// Homebridge //
////////////////

// coming from Homebridge or from unit tests
export type LogFunction = (message: any, ...optionalParams: any[]) => void;
// needed as return objects to Homebridge
export type Service = new (nodeName: string) => any;


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


//////////////////
// SocketServer //
//////////////////
export interface ServerConfig extends BaseConfig {
  port: number;
}


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

  server: function(config: ServerConfig): ServerConfig {
    if (!config) return {debug: true, port: 9999};
    config.port = config.port || 9999;
    if (typeof config.port === "string") config.port = parseInt(config.port);
    if (typeof config.debug === "undefined") config.debug = true;
    return config;
  },


  smartapp: function(config: SmartAppConfig): SmartAppConfig {
    if (!config) config = <SmartAppConfig>{};
    config.port = config.port || 5002;
    config.switches = config.switches || [];
    config.switches.forEach(sw => this.switchConfig(sw));
    config.debug = config.debug || false;
    return config;
  },

  smappee: function(config: SmappeeConfig): SmappeeConfig {
    if (!config) config = <SmappeeConfig>{};
    config.rules = config.rules || [];
    config.rules.forEach(sw => this.ruleConfig(sw));

    config.address = config.address || "";
    config.uid = config.uid || "--none--";
    config.debug = config.debug || false;
    return config;
  },

  switchConfig: function(aSwitch): Switch {
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

  makeSwitchConfig: function(aSwitch): Switch {
    return this.switchConfig({ name: aSwitch.name, unitName: aSwitch.unitName,
      masterAddress: aSwitch.masterAddress, masterPort: aSwitch.masterPort, 
      logicalAddress: aSwitch.logicalAddress, logicalNodeAddress: aSwitch.logicalNodeAddress, 
      type: aSwitch.type, plug: aSwitch.plug, data: aSwitch.data, method: aSwitch.method });
  },

  ruleConfig(rule): Rule {
    rule = {... rule};
    rule.channel = (rule.channel ?? 0).toString(10);
    rule.low = makeInt(rule.low);
    rule.high = makeInt(rule.high);

    if (typeof rule.actions === "undefined") rule.actions = [];
    while (rule.actions.length < 2) rule.actions.push({... kEmptyAction});
    rule.actions.forEach( action => {
      action.value = actionValue(action.value);
      action.logicalAddress = makeInt(action.logicalAddress);
      action.logicalNodeAddress = makeInt(action.logicalNodeAddress);
      if (typeof action.name != "string") action.name = "";
    });
    return rule;
  },

  masterConfig: function(config?: MasterConfig): MasterConfig {
    config = (config) ? {...config} : <MasterConfig>{};

    config.name = config.name || "IP Master";
    config.address = config.address || "";
    config.port = config.port || 0;
    if (typeof config.port === "string") config.port = parseInt(config.port);
    config.password = config.password || "";
    config.debug = config.debug || false;
    if (typeof config.active === "undefined") config.active = true;
    config.active = !!config.active;
    config.nodenames = config.nodenames || {};
    return config;
  },

  system: function(config?: SystemConfig): SystemConfig {
    if (!config) config = <SystemConfig>{};
    config.mood = config.mood || "sfeer";
    config.language = config.language || "EN";
    config.stores = config.stores || false;
    config.multiple = config.multiple || false;
    config.socketserver = config.socketserver || "akiworks.be";
    config.socketserver = config.socketserver || 'gateway.duotecno.com';
    if (config.socketserver == 'akiworks.be') config.socketserver = 'gateway.duotecno.com';
    config.socketport = config.socketport || 9999;

    config.cmasters = config.cmasters || [];
    config.cmasters.forEach(m => this.masterConfig(m));
    
    config.cunits = config.cunits || [];
    config.cunits.forEach(u => this.unitConfig(u));

    return config;
  },

  ////////////
  // Groups //
  group: function(config?: GroupConfig): GroupConfig {
    if (!config) return kEmptyGroup;

    config.name = config.name || kEmptyGroup.name;
    config.id = config.id || kEmptyGroup.id;
    config.order = config.order || kEmptyGroup.order;
    config.visible = (typeof config.visible === "boolean") ? config.visible : kEmptyGroup.visible;
    return config;
  },

  groups: function(config?: Array<GroupConfig>): Array<GroupConfig> {
    if (!config) return [{... kEmptyGroup}];

    config.forEach(g => Sanitizers["group"](g));
    return config;
  },

  //////////
  // Node //
  nodeConfig: function(config?: NodeConfig) {
    if (!config) config = <NodeConfig>{};
    config.active = config.active || "N";
    config.masterAddress = config.masterAddress || "";
    config.masterPort = config.masterPort || 5001;
    config.logicalAddress = config.logicalAddress || 0;
    return config;
  },

  //////////
  // Unit //
  unitDef: function(info: UnitDef, into?: object) {
    info.logicalNodeAddress = info.logicalNodeAddress || 0;
    info.logicalAddress = info.logicalAddress || 0;
    info.masterAddress = info.masterAddress || '';
    info.masterPort = info.masterPort || 5001;

    return info;
  },


  unitConfig: function(config?: UnitConfig) {  // unitDef + active + group
    if (!config) { config = <UnitConfig>{}; }
    this.unitDef(config);

    config.active = config.active || 'N';
    config.used = config.used || config.active;

    if (typeof config.group === 'string') { config.group = parseInt(config.group); }
    config.group = config.group || 0;

    return config;
  },

  
  unitScene: function(config?: UnitScene) {  // unitDef + value 
    // change + create new clean record for writing to config files
    if (!config) { config = <UnitScene>{}; }
    this.unitDef(config);
    if (typeof config.value === "undefined") config.value = 0;
    if (typeof config.value === "string") config.value = parseInt(config.value);

    return { logicalNodeAddress: config.logicalNodeAddress,
             logicalAddress: config.logicalAddress,
             masterAddress: config.masterAddress,
             masterPort: config.masterPort,
             value: config.value };
  },


  ////////////
  // Scenes //
  sceneConfig: function(config?: SceneConfig): SceneConfig {
    // don't change -> create new clean record for writing to config files
    if (!config) { return {...kEmptyScene}; }

    const newConfig: SceneConfig = {...kEmptyScene};
    newConfig.name = config.name || kEmptyScene.name;
    if (typeof config.order === 'string') { newConfig.order = parseInt(config.order); }
    newConfig.order = config.order || kEmptyScene.order;

    newConfig.trigger = this.unitScene(config.trigger);

    config.units = config.units || kEmptyScene.units;
    newConfig.units = config.units.map(u => this.unitScene(u));

    return newConfig;
  },

  scenes: function(config?: Array<SceneConfig>): Array<SceneConfig> {
    if (!config) { return [this.sceneConfig()]; }

    config.forEach(s => this.sceneConfig(s));
    return config;
  },
  
  ///////////////////////////////////
  // Data coming from the hardware //
  nodeInfo: function(info: NodeInfo, into?: object) {
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
  
  unitInfo: function(info: UnitInfo, into?: Unit) {
    info.name = info.name || "";
    info.displayName = info.displayName || "";
    info.index = info.index || -1;
    info.logicalNodeAddress = info.logicalNodeAddress || 0;
    info.logicalAddress = info.logicalAddress || 0;
    info.type = info.type || UnitType.kNoType;
    info.extendedType = info.extendedType || <UnitExtendedType><unknown>info.type;
    info.flags = info.flags || 0;

    if (into) {
      Object.keys(info).forEach(prop => into[prop] = info[prop]);
    }
    return info;
  }

};

// add dev entries for dev configs
Sanitizers["system-dev"] = Sanitizers["system"];
Sanitizers["smartapp-dev"] = Sanitizers["smartapp"];
Sanitizers["smappee-dev"] = Sanitizers["smappee"];


//////////////////////
// Helper functions //
//////////////////////
export async function wait(sec) {
  return new Promise(resolve => setTimeout(resolve, sec*1000));
}
 
export function ascii(char: string): number {
  return char.charCodeAt(0);
}
export function char(ascii:  number): string {
  return String.fromCharCode(ascii)
}


export function two(n: number | string) { 
  return (n < 10) ? ("0" + n) : n.toString();
}
export function hex(n: number): string {
  n = Math.floor(n);
  return "0x" + n.toString(16);
}

export function watt(w: number) {
  if (w < 1000) return w + "W";
  if (w < 1000000) return Math.floor(w/1000) + "." + (Math.round(w/100) % 10) + "KW";
  if (w < 1000000000) return Math.floor(w/1000000) + "." + (Math.round(w/100000) % 10) + "MW";
  return Math.floor(w/1000000000) + "." + (Math.round(w/100000000) % 10) + "GW";
}

export function date(aDate: Date) {
  if (! aDate) return "-";
  return two(aDate.getDate()) + "-" + two(aDate.getMonth() + 1) + "-" + aDate.getFullYear();
}

export function time(aDate: Date) {
  if (! aDate) return "-";
  return two(aDate.getHours()) + ":" + two(aDate.getMinutes()) + ":" + two(aDate.getSeconds());
}

export function datetime(aDate: Date) {
  if (! aDate) return "-";
  return date(aDate) + " " + time(aDate);
}

export function now(): string {
  return datetime(new Date());
}

export function makeInt(val: string | number): number {
  if (typeof val === "string") {
    if ((val[0]==='0') && (val[1]==='x'))
      val = parseInt(val.substr(2), 16);
    else
      val = parseInt(val, 10);
  }

  return isNaN(val) ? 0 : val;
}

