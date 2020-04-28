import { Accessory } from "./accessory";
import { LogFunction } from "../duotecno/types";
import { Unit } from "../duotecno/protocol";

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
    if (this.unit) {
      this.unit.reqState(unit => {
        this.log("reqState/getTemperature returned a value for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.value);
        next(null, <number>unit.value / 10.0);
      })
      .catch(err => next(err));
    } else {
      next( new Error("accessory -> getTemperature needs a unit.") );
    }
  }

  updateState() {
    this.me.getCharacteristic(this.homebridge.Characteristic.CurrentTemperature).updateValue((<number>this.unit.value) / 10.0);
    this.log("Received status change -> update temperature -> " + this.unit.getName() + " = " + this.unit.status + " / " + (<number>this.unit.value) / 10.0);
  }

}
