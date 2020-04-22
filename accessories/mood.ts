import { Accessory } from "./accessory";
import { LogFunction } from "../../types";
import { Unit } from "../protocol";

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
    const moodService = this.makeService(this.homebridge.Service.Lightbulb);

    moodService
      .getCharacteristic(this.homebridge.Characteristic.On)
        .on('get', this.getMood.bind(this))
        .on('set', this.setMood.bind(this));

    this.myService = moodService;
    return [moodService];
  }

  getMood(next) {
    next(null, false);
  }
  setMood(value, next) {
    if (this.unit)
      // always set to "off" after send the request.
      this.unit.setState(value)
        .then(() => { 
          this.unit.value = false; 
          // try to update homekit's value to "off" again.
          if (this.myService) 
            this.myService.getCharacteristic(this.homebridge.Characteristic.On).updateValue(false);
          next() 
        })
        .catch(err => next(err));
    else
      next( new Error("accessory -> setState needs to be overridden if no unit is provided.") );
  }

}
