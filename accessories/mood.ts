import { Accessory } from "./accessory";
import { LogFunction, UnitExtendedType } from "../duotecno/types";
import { Unit } from "../duotecno/protocol";

// Johan Coppieters Jan 2019
//
// Mood
// - is a Switch to homekit, so it doesn't get turned off with the "all lights out"
//


export class Mood extends Accessory {
  myService;

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
    
  }

  getAccessoryServices() {
    const moodService = this.makeService(this.homebridge.Service.Switch);

    moodService
      .getCharacteristic(this.homebridge.Characteristic.On)
        .on('get', this.getMood.bind(this))
        .on('set', this.setMood.bind(this));

    this.myService = moodService;
    return [moodService];
  }

  getMood(next) {
    this.log("getMood was called for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> false");

    next(null, !!this.unit.value);
  }
  setMood(value, next) {
    if (this.unit) {
      this.unit.setState(-1)
        .then(() => { 
          //bypass ip node update mechanism of Duotecno
          this.unit.status = value;
          this.updateState();

          if (this.unit.getType() === UnitExtendedType.kMood) {
            // always set to "off" after sending the request.
            this.unit.resetTimer = setTimeout(() => {
              this.unit.value = false;
              // try to update homekit's value to "off" again.
              this.updateState();
            }, 1200);
          }
          next();
        })
        .catch(err => next(err));

    } else {
      next( new Error("accessory -> setState needs to be overridden if no unit is provided.") );
    }
  }
  updateState() {
    this.me.getCharacteristic(this.homebridge.Characteristic.On).updateValue(!!this.unit.value);
    this.log("Received status change -> update accessory -> " + this.unit.getName() + " -> On = " + !!this.unit.value);
  }

}
