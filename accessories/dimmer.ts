import { Accessory } from "./accessory";
import { LogFunction } from "../../types";
import { Unit } from "../protocol";

// Johan Coppieters Jan 2019
//
// Dimmer
// - a LightBulb to homekit, so a "light"
//


export class Dimmer extends Accessory {
  currValue: number;
  preventSetPower: boolean;
  waitingSetPower: boolean;

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
    this.currValue = 0;
    this.preventSetPower = false;
    this.waitingSetPower = false;
  }

  getAccessoryServices() {
    const lightbulbService = this.makeService(this.homebridge.Service.Lightbulb);

    lightbulbService
      .getCharacteristic(this.homebridge.Characteristic.On)
        .on('get', this.getState.bind(this))
        .on('set', this.setPower.bind(this))

    lightbulbService
      .getCharacteristic(this.homebridge.Characteristic.Brightness)
        .on('get', this.getState.bind(this))
        .on('set', this.setBrightness.bind(this))

    return [lightbulbService];
  }


  setPower(powerOn, next) {
    this.waitingSetPower = true;
    this.log("setPower: *** waiting *** " + powerOn);
    setTimeout( () => {
      if (!this.preventSetPower) {
        this.log("setPower: " + powerOn);
        this.unit.setState(powerOn)
          .then(() => next())
          .catch(err => next(err))
      } else {
        this.preventSetPower = false;
        next();
      }
      this.waitingSetPower = false;
    }, 900);
  }

  setBrightness(value, next) {
    this.currValue = value;

    // crush set on/off requests, bug in homekit / homebridge
    if (this.waitingSetPower) {
      this.preventSetPower = true;
      this.log("setBrightness -> setPower: *** cancelled ***");
    } 
    
    this.log("setBrightness " + value);

    this.unit.setState(value)
      .then(() => next())
      .catch(err => next(err))
  }
}
