"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
// Johan Coppieters Jan 2019
//
// Dimmer
// - a LightBulb to homekit, so a "light"
//
class Dimmer extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
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
            .on('set', this.setPower.bind(this));
        lightbulbService
            .getCharacteristic(this.homebridge.Characteristic.Brightness)
            .on('get', this.getBrightness.bind(this))
            .on('set', this.setBrightness.bind(this));
        return [lightbulbService];
    }
    getBrightness(next) {
        if (this.unit) {
            this.unit.reqState(unit => {
                next(null, unit.value);
                this.log("getBrightness was called for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.value);
            }).catch(err => next(err));
        }
        else {
            next(new Error("accessory - getState needs to be overridden if no unit is provided."));
        }
    }
    setPower(powerOn, next) {
        this.waitingSetPower = true;
        this.log("setPower: *** waiting *** " + powerOn);
        setTimeout(() => {
            if (!this.preventSetPower) {
                this.log("setPower: " + powerOn);
                this.unit.setState(powerOn)
                    .then(() => next())
                    .catch(err => next(err));
            }
            else {
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
            .catch(err => next(err));
    }
    updateState() {
        this.me.getCharacteristic(this.homebridge.Characteristic.On).updateValue(this.unit.status);
        this.me.getCharacteristic(this.homebridge.Characteristic.Brightness).updateValue(this.unit.value);
        this.log("Received status change -> update accessory -> " + this.unit.getName() + " = " + this.unit.status + " / " + this.unit.value);
    }
}
exports.Dimmer = Dimmer;
//# sourceMappingURL=dimmer.js.map