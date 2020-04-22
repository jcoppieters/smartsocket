"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
// Johan Coppieters Jan 2019
//
// Mood
// - is a Switch to homekit, so it doesn't get turned off with the "all lights out"
//
class Mood extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
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
                next();
            })
                .catch(err => next(err));
        else
            next(new Error("accessory -> setState needs to be overridden if no unit is provided."));
    }
}
exports.Mood = Mood;
//# sourceMappingURL=mood.js.map