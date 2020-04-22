"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
// Johan Coppieters Jan 2019
//
// Temperature Sensor
// - only has a "get", not sure if homekit likes this.
//
class Temperature extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
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
                .then(val => next(null, val / 10.0))
                .catch(err => next(err));
        else
            next(new Error("accessory -> getTemperature needs a unit."));
    }
}
exports.Temperature = Temperature;
//# sourceMappingURL=temperature.js.map