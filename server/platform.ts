import { LogFunction, PlatformConfig } from "../duotecno/types";
import { System } from "../duotecno/system";
import { Smappee } from "./smappee";
import { SmartApp } from "./smartapp";
import { Dimmer } from "../accessories/dimmer";
import { Unit, Protocol, UnitExtendedType } from "../duotecno/protocol";
import { Switch } from "../accessories/switch";
import { Bulb } from "../accessories/bulb";
import { WindowCovering } from "../accessories/windowcovering";
import { GarageDoor } from "../accessories/garagedoor";
import { Mood } from "../accessories/mood";
import { Temperature } from "../accessories/temperature";
import { Base } from "./base";
import { Accessory } from "../accessories/accessory";
import { SocApp } from "./socapp";
import { Door } from "../accessories/door";
import { Lock } from "../accessories/lock";


export class Platform extends Base {
  homebridge: any;
  config: PlatformConfig;
  system: System;
  smappee: Smappee;
  smartapp: SmartApp;
  smartsoc: SocApp;
  accessoryList: Array<Accessory> = [];
  ready = false;
  startWaiting = 0;

  constructor(log: LogFunction, config: PlatformConfig, homebridge) {
    // set debug to true for new config files
    super("homebridge", (config && ("debug" in config)) ? config.debug : true, log);

    this.config = Object.assign({}, config);
    this.config.debug = (config && ("debug" in config)) ? config.debug : true;

    log("running in directory: " + process.cwd());
    log("with config:" + JSON.stringify(config, null, 2));
    // log("homebridge object:", homebridge);

    this.homebridge = homebridge;

    if (this.config.system) {
      try {
        this.system = new System(this.config.debug, log);
        this.system.openMasters(true);

        this.system.emitter.on('ready', this.systemReady.bind(this));
        this.system.emitter.on('update', this.updateState.bind(this));

      } catch(err) {
        log(err);
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
    const accessory = this.accessoryList.find((acc: Accessory) => unit.isUnit(acc.unit));
    if (accessory) {
      accessory.updateState();
    }
  }

  systemReady() {
    const activeUnits = this.system.allActiveUnits().length
    this.log("=== SYSTEM READY received update -> addMasters: " + activeUnits + " of " + this.system.config.cunits.length + " ===");
    this.ready = (activeUnits == this.system.config.cunits.length);

    // trigger status request of all active units in 2 seconds.
    setTimeout( async() => {
      let units = this.system.allActiveUnits();
      for (let u of units) {
        await u.node.master.requestUnitStatus(u)
      }
    }, 2000);
    
  }

  accessories(callback) {
    // waiting until the database is complete or give up after 5 minutes
    const kMaxWaiting = 5 * 60;

    if (this.ready) {
      this.log("=== running after timeout of " + this.startWaiting + " secs --> " +  this.system.allActiveUnits().length + " == " + this.system.config.cunits.length + " units -> " +  (this.system.allActiveUnits().length == this.system.config.cunits.length) + ", will start in 10 seconds ===");
      setTimeout( () => { this.doAccessories(callback) }, 10 * 1000);

    } else if (this.startWaiting > kMaxWaiting) {
      // give up, retry connection to the masters, a manager like "forever" or "pm2" will restart us.
      this.log("=== giving up after " + kMaxWaiting + " secs -> auto restart system ===");
      process.exit(-1)
    
    } else {
      // wait another 5 seconds.
      this.log("=== waiting >> found " + this.system.allActiveUnits().length + " units out of " + this.system.config.cunits.length + " selected after " + this.startWaiting + " sec ===");
      this.startWaiting += 5;
      setTimeout( () => { this.accessories(callback) }, 5000);
    }
  }
  doAccessories(callback) {
    this.log("platform - accessories() called by Homebridge - System is ready");

    this.addAccessories()
      .then( list => { 
        this.log("platform - addAccessories returned: " + list.length + " accessories.")
        callback(list); 
      })
      .catch( reason => {
        this.log("platform - addAccessories errored: " + reason);
        callback([]);
      });
  }


  async addAccessories() {
    if (!this.system) {
      this.log("platform - No System -> No accessories");
      this.accessoryList = [];
      return;
    }

    // clear our list
    this.accessoryList = [];

    // make a log function
    const logger = this.log.bind(this);

    this.system.allActiveUnits().forEach(unit => {
      this.log("adding accessory: " + unit.getDescription());
      switch (unit.getType()) {
        case UnitExtendedType.kDimmer:
          this.accessoryList.push( new Dimmer(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kSwitch:
          this.accessoryList.push( new Switch(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kLightbulb:
          this.accessoryList.push( new Bulb(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kSwitchingMotor:
          this.accessoryList.push( new WindowCovering(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kGarageDoor:
          this.accessoryList.push( new GarageDoor(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kDoor:
          this.accessoryList.push( new Door(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kLock:
        case UnitExtendedType.kUnlocker:
          this.accessoryList.push( new Lock(logger, this.homebridge, unit) );
          break;
  
        case UnitExtendedType.kMood:
        case UnitExtendedType.kCondition:
        case UnitExtendedType.kInput:
              this.accessoryList.push( new Mood(logger, this.homebridge, unit) );
          break;

        case UnitExtendedType.kTemperature:
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
