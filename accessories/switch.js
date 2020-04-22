"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
// Johan Coppieters Jan 2019
//
// Switch
// - not a light.
//
class Switch extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        const switchService = this.makeService(this.homebridge.Service.Switch);
        switchService
            .getCharacteristic(this.homebridge.Characteristic.On)
            .on('get', this.getState.bind(this))
            .on('set', this.setPower.bind(this));
        return [switchService];
    }
    setPower(powerOn, next) {
        this.unit.setState(powerOn > 0)
            .then(() => next())
            .catch(err => next(err));
    }
}
exports.Switch = Switch;
//# sourceMappingURL=switch.js.map