"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowCovering = void 0;
const accessory_1 = require("./accessory");
const types_1 = require("../duotecno/types");
// Johan Coppieters v1: Jan 2019, v2: Jun 2020
//
// WindowCovering
// - or a Screen, no security for opening.
// - homekit.TargetPosition: closed = 0 - 100 = open
// - duotecno.value: kStopped = 0, kOpen = 2, kClosed = 1, kClosing = 3, kOpening = 4
//
// Example: https://github.com/dxdc/homebridge-blinds/blob/master/index.js
//
/*

[ clicked "Open" ]
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,0
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] received status - motor = 0
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 0 / 0 -> passing: 50
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,4
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] received status - motor = 4
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 4 / 4 -> passing: 75
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [homebridge] Setting targetposition to 100
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [somfy] up 2
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:21:07] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true
...
0|homebridge  | [16/02/2021, 15:22:07] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,2
0|homebridge  | [16/02/2021, 15:22:07] [DuotecnoPlatform] received status - motor = 2
0|homebridge  | [16/02/2021, 15:22:07] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 2 / 2 -> passing: 100
0|homebridge  | [16/02/2021, 15:22:07] [DuotecnoPlatform] [somfy] stop 2
0|homebridge  | [16/02/2021, 15:22:07] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:22:07] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true


[ clicked "close"]
0|homebridge  | [16/02/2021, 15:19:29] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,0
0|homebridge  | [16/02/2021, 15:19:29] [DuotecnoPlatform] received status - motor = 0
0|homebridge  | [16/02/2021, 15:19:29] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 0 / 0 -> passing: 50
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,3
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] received status - motor = 3
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 3 / 3 -> passing: 25
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] [homebridge] Setting targetposition to 0
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] [somfy] down 2
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:19:30] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true
...
0|homebridge  | [16/02/2021, 15:20:30] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,1
0|homebridge  | [16/02/2021, 15:20:30] [DuotecnoPlatform] received status - motor = 1
0|homebridge  | [16/02/2021, 15:20:30] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 1 / 1 -> passing: 0
0|homebridge  | [16/02/2021, 15:20:30] [DuotecnoPlatform] [somfy] stop 2
0|homebridge  | [16/02/2021, 15:20:30] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:20:30] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true

*/
class WindowCovering extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
        this.targetState = 0; // down or closed by default ??
    }
    getAccessoryServices() {
        const covering = this.makeService(this.homebridge.Service.WindowCovering);
        this.attachServices(covering);
        return [covering];
    }
    attachServices(covering) {
        covering.getCharacteristic(this.homebridge.Characteristic.TargetPosition)
            .on('get', this.getTargetPosition.bind(this))
            .on('set', this.setTargetPosition.bind(this));
        covering.getCharacteristic(this.homebridge.Characteristic.CurrentPosition)
            .on('get', this.getCurrentPosition.bind(this));
        covering.getCharacteristic(this.homebridge.Characteristic.PositionState)
            .on('get', this.getPositionState.bind(this));
    }
    DT2HB(val) {
        if (val == types_1.UnitState.kClosed)
            return 0;
        else if (val == types_1.UnitState.kOpen)
            return 100;
        else if (val == types_1.UnitState.kClosing)
            return 25;
        else if (val == types_1.UnitState.kOpening)
            return 75;
        else // don't know
            return 50;
    }
    getPositionState(next) {
        this.log("get PositionState was called of " + this.name + " -> " + this.targetState);
        next(null, this.targetState);
    }
    getCurrentPosition(next) {
        this.log("get CurrentPosition was called of " + this.name);
        this.unit.reqState(unit => {
            if (unit.status == types_1.UnitState.kOpen)
                next(null, 100);
            else if (unit.status == types_1.UnitState.kClosed)
                next(null, 0);
            else
                next(null, 50); // ????
        });
    }
    setTargetPosition(value, next) {
        // homekit is giving 0-100 for windows
        // the smartbox -> 5=down, 4=up, 3=stop
        this.log("set Characteristic.TargetPosition was called with value = " + value);
        let cmd = 0;
        if (value == 100) {
            cmd = types_1.UnitMotorCmd.kOpen;
        }
        else if (value == 0) {
            cmd = types_1.UnitMotorCmd.kClose;
        }
        else {
            cmd = types_1.UnitMotorCmd.kStop;
        }
        this.log("setUpDown, value =" + value + " -> cmd=" + cmd);
        this.unit.setState(cmd)
            .then(() => next())
            .catch(err => next(err));
    }
    getTargetPosition(next) {
        this.log("get Characteristic.TargetPosition was called");
        this.unit.reqState(unit => {
            if (this.unit.status == types_1.UnitState.kOpen)
                next(null, 100);
            else if (this.unit.status == types_1.UnitState.kClosed)
                next(null, 0);
            else
                next(null, 50); // ????
        });
    }
    // called in response to Duotecno status update
    updateState() {
        const value = this.DT2HB(this.unit.status);
        this.log("Received updateState -> Homekit WindowCovering for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status + " / " + this.unit.value + " -> passing: " + value);
        this.me.getCharacteristic(this.homebridge.Characteristic.CurrentPosition).updateValue(value);
        if (this.unit.status == types_1.UnitState.kClosing) {
            this.me.getCharacteristic(this.homebridge.Characteristic.TargetPosition).updateValue(0);
            this.log("Setting targetposition to 0");
        }
        else if (this.unit.status == types_1.UnitState.kOpening) {
            this.me.getCharacteristic(this.homebridge.Characteristic.TargetPosition).updateValue(100);
            this.log("Setting targetposition to 100");
        }
    }
}
exports.WindowCovering = WindowCovering;
//# sourceMappingURL=windowcovering.js.map