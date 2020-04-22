import { LogFunction, HomebridgeConfig } from "../duotecno/types";
import { System } from "../duotecno/system";
import { Smappee } from "./smappee";
import { SmartApp } from "./smartapp";
import { Dimmer } from "../accessories/dimmer";
import { UnitType } from "../duotecno/protocol";
import { Switch } from "../accessories/switch";
import { Bulb } from "../accessories/bulb";
import { WindowCovering } from "../accessories/windowcovering";
import { GarageDoor } from "../accessories/garagedoor";
import { Mood } from "../accessories/mood";
import { Temperature } from "../accessories/temperature";
import { Base } from "./base";


export class Platform extends Base {
  homebridge: any;
  config: HomebridgeConfig;
  system: System;
  smappee: Smappee;
  smartapp: SmartApp;
  accessoryList = [];

  constructor(log: LogFunction, debug: boolean, config, api) {
    super("homebridge", debug, log);
    this.readConfig();

    this.log("running in directory: " + process.cwd());
    this.homebridge = api;
    
    if (!config.system) {
      this.log("platform - Can't run without a System configuration.");
      return;
    }
    this.system = new System();

    // startup a Smappee MQTT subscriber, if one is configured
    if (config.smappee) {
      this.smappee = new Smappee(this.system, debug, log);
    } else {
      this.log("platform - No Smappee configured.");
    }

    // startup a smartApp if there is a port defined
    if (config.smartapp) {
      this.smartapp = new SmartApp(config.smartapp.port, this.system, this.smappee, this, log);
      this.smartapp.serve();
    } else {
      this.log("platform - No Webapp configured.");
    }
  }


  accessories(callback) {
    this.log("platform - accessories()")

    this.addAccessories()
      .then( list => { 
        this.log("platform - addAccessories returned: " + list.length + " accessories.")
        callback(list); 
      })
      .catch( reason => {
        this.log("platform - addAccessories errored: " + reason);
        callback([]);
      })
  }


  async addAccessories() {
    if (!this.system) {
      this.log("platform - No System -> No accessories");
      return;
    }

    await this.system.openMasters();
    this.log("platform - addAccessories: system masters are all open")

    // clear our list
    this.accessoryList = [];

    // make a log function
    const logger = this.log.bind(this);

    this.system.allActiveUnits().forEach(unit => {
      this.log("adding accessory: " + unit.getDescription());
      switch (unit.getType()) {
        case UnitType.kDimmer:
          this.accessoryList.push( new Dimmer(logger, this.homebridge, unit) );
          break;

        case UnitType.kSwitch:
          this.accessoryList.push( new Switch(logger, this.homebridge, unit) );
          break;

        case UnitType.kLightbulb:
          this.accessoryList.push( new Bulb(logger, this.homebridge, unit) );
          break;

        case UnitType.kSwitchingMotor:
          this.accessoryList.push( new WindowCovering(logger, this.homebridge, unit) );
          break;

        case UnitType.kGarageDoor:
          this.accessoryList.push( new GarageDoor(logger, this.homebridge, unit) );
          break;

        case UnitType.kMood:
          this.accessoryList.push( new Mood(logger, this.homebridge, unit) );
          break;

        case UnitType.kTemperature:
          this.accessoryList.push( new Temperature(logger, this.homebridge, unit) );
          break;

        default:
          this.log("platform - addAccessories: accessory type not yet supported: " + unit.typeName() + 
                   " ("+ unit.getName() + ")")
          break;
      }
    });
    return this.accessoryList;
  }

}
