"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
const protocol_1 = require("../protocol");
// Johan Coppieters Jan 2019
//
// Garagedoor
// - has security, so when opening you need to authenticate
//
class GarageDoor extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        // Could also be Window Covering which doesn't need authentication !!
        // Service.WindowCovering
        const garageService = this.makeService(this.homebridge.Service.GarageDoorOpener);
        garageService.getCharacteristic(this.homebridge.Characteristic.TargetDoorState)
            .on('get', this.getState.bind(this))
            .on('set', this.setScreen.bind(this));
        garageService.getCharacteristic(this.homebridge.Characteristic.CurrentDoorState)
            .on('get', this.getState.bind(this));
        return [garageService];
    }
    getState(next) {
        this.unit.reqState()
            .then(val => {
            if (val == protocol_1.UnitState.kClosed)
                next(null, this.homebridge.Characteristic.CurrentDoorState.CLOSED);
            else if (val == protocol_1.UnitState.kOpen)
                next(null, this.homebridge.Characteristic.CurrentDoorState.OPEN);
            else if (val == protocol_1.UnitState.kClosing)
                next(null, this.homebridge.Characteristic.CurrentDoorState.CLOSING);
            else if (val == protocol_1.UnitState.kOpening)
                next(null, this.homebridge.Characteristic.CurrentDoorState.OPENING);
            else // don't know
                next(null, this.homebridge.Characteristic.CurrentDoorState.STOPPED);
        })
            .catch(err => next(err));
    }
    setScreen(value, next) {
        // for the smartbox -> 5=down, 4=up, 3=stop
        let cmd = 0;
        if (value == this.homebridge.Characteristic.TargetDoorState.OPEN) {
            cmd = protocol_1.UnitMotorCmd.kOpen;
        }
        else if (value == this.homebridge.Characteristic.TargetDoorState.CLOSED) {
            cmd = protocol_1.UnitMotorCmd.kClose;
        }
        else if (value == this.homebridge.Characteristic.TargetDoorState.STOP) {
            cmd = protocol_1.UnitMotorCmd.kStop;
        }
        this.unit.setState(cmd)
            .then(() => next())
            .catch(err => next(err));
    }
}
exports.GarageDoor = GarageDoor;
//# sourceMappingURL=garagedoor.js.map