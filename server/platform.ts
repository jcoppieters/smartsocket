import { LogFunction, HomebridgeConfig, PlatformConfig } from "../duotecno/types";
import { System } from "../duotecno/system";
import { Smappee } from "./smappee";
import { SmartApp } from "./smartapp";
import { Dimmer } from "../accessories/dimmer";
import { UnitType, Unit, Protocol } from "../duotecno/protocol";
import { Switch } from "../accessories/switch";
import { Bulb } from "../accessories/bulb";
import { WindowCovering } from "../accessories/windowcovering";
import { GarageDoor } from "../accessories/garagedoor";
import { Mood } from "../accessories/mood";
import { Temperature } from "../accessories/temperature";
import { Base } from "./base";
import { Accessory } from "../accessories/accessory";
import { SocApp } from "./socapp";


export class Platform extends Base {
  homebridge: any;
  config: PlatformConfig;
  system: System;
  smappee: Smappee;
  smartapp: SmartApp;
  smartsoc: SocApp;
  accessoryList: Array<Accessory> = [];
  ready = false;

  constructor(log: LogFunction, config: PlatformConfig, homebridge) {
    // set debug to true for new config files
    super("homebridge", (config && ("debug" in config)) ? config.debug : true, log);

    this.config = Object.assign({}, config);
    this.config.debug = (config && ("debug" in config)) ? config.debug : true;
    console.log("**** config:", config);
    //console.log("homebridge:", homebridge);

    this.log("running in directory: " + process.cwd());
    this.homebridge = homebridge;

    if (this.config.system) {
      try {
        this.system = new System(this.config.debug, log);
        this.system.openMasters(true);

        this.system.emitter.on('ready', this.addMasters.bind(this));
        this.system.emitter.on('ready', () => console.log("------ received update ------"));

        Protocol.setEmitter(this.system.emitter);
        this.system.emitter.on('update', this.updateState.bind(this));

      } catch(err) {
        this.log(err);
        if (!this.system) {
          this.log("platform - Can't run without a System.");
          return;
        }
      }
    } else {
      this.log("platform - No System configured -> can't run !!!");
      return;
    }

    // startup a Smappee MQTT subscriber, if one is configured
    if (this.config.smappee) {
      try {
        this.smappee = new Smappee(this.system, this.config.debug, log);

      } catch(err) {
        this.log(err);
        if (!this.smappee) {
          this.log("platform - No Smappee started.");
        }
      }
    } else {
      this.log("platform - No Smappee configured.");
    }

    // startup a smartApp if configured -> only on Raspberry's
    if (this.config.smartapp) {
      try {
        this.smartapp = new SmartApp(this.system, this.smappee, this, log);
        this.smartapp.serve();

      } catch(err) {
        this.log(err);
        if (!this.smartapp) {
          this.log("platform - No SmartApp started.");
        }
      }
    } else {
      this.log("platform - No SmartApp configured.");
    }

    // startup a SocApp if configured -> for servers
    if (this.config.socapp) {
      try {
        // reuse the config file from the smartapp
        this.smartsoc = new SocApp(this.system, 'smartapp', log);
        this.smartsoc.serve();

      } catch(err) {
        this.log(err);
        if (!this.smartsoc) {
          this.log("platform - No SocApp started.");
        }
      }
    } else {
      this.log("platform - No SocApp configured.");
    }
  }

  updateState(unit: Unit) {
    this.log("received updateState " + unit.getName());
    const accessory = this.accessoryList.find((acc: Accessory) => unit.isUnit(acc.unit));
    if (accessory) accessory.updateState();
  }

  addMasters(nr: number) {
    this.log("received update -> addMasters: " + nr);
    this.ready = true;
  }

  accessories(callback) {
    // waiting until the database is complete
    if (this.ready) {
      this.log(">>>>> done >>>>>>>")
      this.doAccessories(callback);
    } else {
      this.log(">>>>> waiting >>>>>>>")
      setTimeout( () => { this.accessories(callback) }, 1000)
    }
  }
  doAccessories(callback) {
    this.log("platform - accessories() called by Homebridge");

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
        case UnitType.kCondition:
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
