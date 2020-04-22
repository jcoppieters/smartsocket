import { Accessory } from "./accessory";
import { LogFunction } from "../../types";
import { Unit } from "../protocol";

// Johan Coppieters Jan 2019
//
// Temperature Sensor
// - only has a "get", not sure if homekit likes this.
//


export class Temperature extends Accessory {

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
    
  }

  getAccessoryServices() {
    const temperatureService = this.makeService(this.homebridge.Service.TemperatureSensor);

    temperatureService
      .getCharacteristic(this.homebridge.Characteristic.CurrentTemperature)
        .setProps({ minValue: -100, maxValue: 100 })
        .on('get', this.getTemperature.bind(this));

    return [temperatureService];
  }

  getTemperature(next) {
    if (this.unit)
      this.unit.reqState()
        .then(val => next(null, <number>val / 10.0))
        .catch(err => next(err));
    else
      next( new Error("accessory -> getTemperature needs a unit.") );
  }
}
