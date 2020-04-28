import { Accessory } from "./accessory";
import { LogFunction } from "../duotecno/types";
import { Unit } from "../duotecno/protocol";

// Johan Coppieters Jan 2019
//
// Bulb
// - does same thing as a switch, but we tell homekit that we are a light
//   so when asking to Siri to turn off all lights, these get turned off too.
// - does same thing as a dimmer (which is also a LightBulb), but we don't supper Brightness.


export class Bulb extends Accessory {

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
  }


  getAccessoryServices() {
    const lightbulbService = this.makeService(this.homebridge.Service.Lightbulb);

    lightbulbService
      .getCharacteristic(this.homebridge.Characteristic.On)
        .on('get', this.getState.bind(this))
        .on('set', this.setPower.bind(this));

    return [lightbulbService];
  }


  setPower(powerOn, next) {
    this.unit.setState(powerOn ? 100 : 0)
      .then(() => next())
      .catch(err => next(err))
  }
  setBrightness(value, next) {
    this.unit.setState(value)
      .then(() => next())
      .catch(err => next(err))
  }
}
