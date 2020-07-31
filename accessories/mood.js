"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mood = void 0;
const accessory_1 = require("./accessory");
const protocol_1 = require("../duotecno/protocol");
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
        const moodService = this.makeService(this.homebridge.Service.Switch);
        moodService
            .getCharacteristic(this.homebridge.Characteristic.On)
            .on('get', this.getMood.bind(this))
            .on('set', this.setMood.bind(this));
        this.myService = moodService;
        return [moodService];
    }
    getMood(next) {
        this.log("getMood was called for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> false");
        next(null, false);
    }
    setMood(value, next) {
        if (this.unit) {
            this.unit.setState(value)
                .then(() => {
                if (this.unit.getType() === protocol_1.UnitType.kMood) {
                    // always set to "off" after sending the request.
                    this.unit.resetTimer = setTimeout(() => {
                        this.unit.value = false;
                        // try to update homekit's value to "off" again.
                        this.updateState();
                    }, 1200);
                }
                next();
            })
                .catch(err => next(err));
        }
        else {
            next(new Error("accessory -> setState needs to be overridden if no unit is provided."));
        }
    }
}
exports.Mood = Mood;
//# sourceMappingURL=mood.js.map