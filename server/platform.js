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
const system_1 = require("../duotecno/system");
const smappee_1 = require("./smappee");
const smartapp_1 = require("./smartapp");
const dimmer_1 = require("../accessories/dimmer");
const protocol_1 = require("../duotecno/protocol");
const switch_1 = require("../accessories/switch");
const bulb_1 = require("../accessories/bulb");
const windowcovering_1 = require("../accessories/windowcovering");
const garagedoor_1 = require("../accessories/garagedoor");
const mood_1 = require("../accessories/mood");
const temperature_1 = require("../accessories/temperature");
const base_1 = require("./base");
const socapp_1 = require("./socapp");
class Platform extends base_1.Base {
    constructor(log, config, homebridge) {
        // set debug to true for new config files
        super("homebridge", (config && ("debug" in config)) ? config.debug : true, log);
        this.accessoryList = [];
        this.ready = false;
        this.config = Object.assign({}, config);
        this.config.debug = (config && ("debug" in config)) ? config.debug : true;
        console.log("**** config:", config);
        //console.log("homebridge:", homebridge);
        this.log("running in directory: " + process.cwd());
        this.homebridge = homebridge;
        if (this.config.system) {
            try {
                this.system = new system_1.System(this.config.debug, log);
                this.system.openMasters(true);
                this.system.emitter.on('ready', this.addMasters.bind(this));
                this.system.emitter.on('ready', () => console.log("------ received update ------"));
                protocol_1.Protocol.setEmitter(this.system.emitter);
                this.system.emitter.on('update', this.updateState.bind(this));
            }
            catch (err) {
                this.log(err);
                if (!this.system) {
                    this.log("platform - Can't run without a System.");
                    return;
                }
            }
        }
        else {
            this.log("platform - No System configured -> can't run !!!");
            return;
        }
        // startup a Smappee MQTT subscriber, if one is configured
        if (this.config.smappee) {
            try {
                this.smappee = new smappee_1.Smappee(this.system, this.config.debug, log);
            }
            catch (err) {
                this.log(err);
                if (!this.smappee) {
                    this.log("platform - No Smappee started.");
                }
            }
        }
        else {
            this.log("platform - No Smappee configured.");
        }
        // startup a smartApp if configured -> only on Raspberry's
        if (this.config.smartapp) {
            try {
                this.smartapp = new smartapp_1.SmartApp(this.system, this.smappee, this, log);
                this.smartapp.serve();
            }
            catch (err) {
                this.log(err);
                if (!this.smartapp) {
                    this.log("platform - No SmartApp started.");
                }
            }
        }
        else {
            this.log("platform - No SmartApp configured.");
        }
        // startup a SocApp if configured -> for servers
        if (this.config.socapp) {
            try {
                // reuse the config file from the smartapp
                this.smartsoc = new socapp_1.SocApp(this.system, 'smartapp', log);
                this.smartsoc.serve();
            }
            catch (err) {
                this.log(err);
                if (!this.smartsoc) {
                    this.log("platform - No SocApp started.");
                }
            }
        }
        else {
            this.log("platform - No SocApp configured.");
        }
    }
    updateState(unit) {
        this.log("received updateState " + unit.getName() + ", status = " + unit.status + ", value = " + unit.value);
        const accessory = this.accessoryList.find((acc) => unit.isUnit(acc.unit));
        if (accessory) {
            accessory.updateState();
        }
    }
    addMasters(nr) {
        this.log("received update -> addMasters: " + nr);
        this.ready = true;
        // trigger status request of all active units in 2 seconds.
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            let units = this.system.allActiveUnits();
            for (let u of units) {
                yield u.node.master.requestUnitStatus(u);
            }
        }), 2000);
    }
    accessories(callback) {
        // waiting until the database is complete
        if (this.ready) {
            this.log(">>>>> done >>>>>>>");
            this.doAccessories(callback);
        }
        else {
            this.log(">>>>> waiting >>>>>>>");
            setTimeout(() => { this.accessories(callback); }, 1000);
        }
    }
    doAccessories(callback) {
        this.log("platform - accessories() called by Homebridge");
        this.addAccessories()
            .then(list => {
            this.log("platform - addAccessories returned: " + list.length + " accessories.");
            callback(list);
        })
            .catch(reason => {
            this.log("platform - addAccessories errored: " + reason);
            callback([]);
        });
    }
    addAccessories() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.system) {
                this.log("platform - No System -> No accessories");
                this.accessoryList = [];
                return;
            }
            this.log("platform - addAccessories for " + this.system.masters.length + " masters");
            // clear our list
            this.accessoryList = [];
            // make a log function
            const logger = this.log.bind(this);
            this.system.allActiveUnits().forEach(unit => {
                this.log("adding accessory: " + unit.getDescription());
                switch (unit.getType()) {
                    case protocol_1.UnitType.kDimmer:
                        this.accessoryList.push(new dimmer_1.Dimmer(logger, this.homebridge, unit));
                        break;
                    case protocol_1.UnitType.kSwitch:
                        this.accessoryList.push(new switch_1.Switch(logger, this.homebridge, unit));
                        break;
                    case protocol_1.UnitType.kLightbulb:
                        this.accessoryList.push(new bulb_1.Bulb(logger, this.homebridge, unit));
                        break;
                    case protocol_1.UnitType.kSwitchingMotor:
                        this.accessoryList.push(new windowcovering_1.WindowCovering(logger, this.homebridge, unit));
                        break;
                    case protocol_1.UnitType.kGarageDoor:
                        this.accessoryList.push(new garagedoor_1.GarageDoor(logger, this.homebridge, unit));
                        break;
                    case protocol_1.UnitType.kMood:
                    case protocol_1.UnitType.kCondition:
                        this.accessoryList.push(new mood_1.Mood(logger, this.homebridge, unit));
                        break;
                    case protocol_1.UnitType.kTemperature:
                        this.accessoryList.push(new temperature_1.Temperature(logger, this.homebridge, unit));
                        break;
                    default:
                        this.log("platform - addAccessories: accessory type not yet supported: " + unit.typeName() +
                            " (" + unit.getName() + ")");
                        break;
                }
            });
            return this.accessoryList;
        });
    }
}
exports.Platform = Platform;
//# sourceMappingURL=platform.js.map