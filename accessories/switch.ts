import { LogFunction } from "../../types";
import { Accessory } from "./accessory";
import { Unit } from "../protocol";

// Johan Coppieters Jan 2019
//
// Switch
// - not a light.
//

export class Switch extends Accessory {

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
    
  }

  getAccessoryServices() {
    const switchService = this.makeService(this.homebridge.Service.Switch)

    switchService
      .getCharacteristic(this.homebridge.Characteristic.On)
        .on('get', this.getState.bind(this))
        .on('set', this.setPower.bind(this));

    return [switchService];
    }

    setPower(powerOn, next) {
      this.unit.setState(powerOn > 0)
        .then(() => next())
        .catch(err => next(err))
    }
}
