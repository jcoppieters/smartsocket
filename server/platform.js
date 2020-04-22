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
class Platform extends base_1.Base {
    constructor(log, debug, config, api) {
        super("homebridge", debug, log);
        this.accessoryList = [];
        this.readConfig();
        this.log("running in directory: " + process.cwd());
        this.homebridge = api;
        if (!config.system) {
            this.log("platform - Can't run without a System configuration.");
            return;
        }
        this.system = new system_1.System();
        // startup a Smappee MQTT subscriber, if one is configured
        if (config.smappee) {
            this.smappee = new smappee_1.Smappee(this.system, debug, log);
        }
        else {
            this.log("platform - No Smappee configured.");
        }
        // startup a smartApp if there is a port defined
        if (config.smartapp) {
            this.smartapp = new smartapp_1.SmartApp(config.smartapp.port, this.system, this.smappee, this, log);
            this.smartapp.serve();
        }
        else {
            this.log("platform - No Webapp configured.");
        }
    }
    accessories(callback) {
        this.log("platform - accessories()");
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
                return;
            }
            yield this.system.openMasters();
            this.log("platform - addAccessories: system masters are all open");
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