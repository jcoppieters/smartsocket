"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
const protocol_1 = require("../protocol");
// Johan Coppieters Jan 2019
//
// WindowCovering
// - or a Screen, no security for opening.
// - no correct value for intermediate values 
//   (for now we always return 50% when opening of closing)
//
class WindowCovering extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        const covering = this.makeService(this.homebridge.Service.WindowCovering);
        covering.getCharacteristic(this.homebridge.Characteristic.TargetPosition)
            .on('get', this.getState.bind(this))
            .on('set', this.setScreen.bind(this));
        covering.getCharacteristic(this.homebridge.Characteristic.CurrentPosition)
            .on('get', this.getState.bind(this));
        covering.getCharacteristic(this.homebridge.Characteristic.PositionState)
            .on('get', this.getState.bind(this));
        return [covering];
    }
    getState(next) {
        this.unit.reqState()
            .then(val => {
            this.log("getScreen : " + val);
            if (val == protocol_1.UnitState.kClosed) {
                this.log("getScreen -> 0 / closed");
                next(null, 0); // fully closed
            }
            else if (val == protocol_1.UnitState.kOpen) {
                this.log("getScreen -> 100 / opened");
                next(null, 100); // fully open
            }
            else if (val == protocol_1.UnitState.kClosing) {
                next(null, 50); // not correct -> homekit reports 50%
            }
            else if (val == protocol_1.UnitState.kOpening) {
                next(null, 50); // not correct -> homekit reports 50%
            }
            else { // don't know
                next(null, this.homebridge.Characteristic.CurrentPosition.STOPPED);
            }
        })
            .catch(err => next(err));
    }
    setScreen(value, next) {
        // homekit is giving 0-100
        // for the smartbox -> 5=down, 4=up, 3=stop
        this.log("setscreen : " + value);
        let cmd = 0;
        if (value == 100) {
            cmd = protocol_1.UnitMotorCmd.kOpen;
        }
        else if (value == 0) {
            cmd = protocol_1.UnitMotorCmd.kClose;
        }
        else {
            cmd = protocol_1.UnitMotorCmd.kStop;
        }
        this.unit.setState(cmd)
            .then(() => next())
            .catch(err => next(err));
    }
}
exports.WindowCovering = WindowCovering;
//# sourceMappingURL=windowcovering.js.map