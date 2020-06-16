"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
const protocol_1 = require("../duotecno/protocol");
////////////////
// DEPRECATED //  -> it's either a (garage) door or a window covering -- Johan Jun 2020
////////////////
// Johan Coppieters Jan 2019
//
// UpDown
// for implementing GarageDoors and WindowCovering
//
// - no correct value for intermediate values 
//   (for now we always return 50% when opening of closing)
// Behavior 
// window was closed, clicked on button
//  received setTarget 100 => send cmd 4 (= DT.open) -> SetMotor - [182,4,3,28]
//  received 0/0 => stored 4 (= HB.stopped)
//  received 4/4 => stored 2 (= HB.opening)
// after some time
//  received 2/2 => stored 0 (= HB.open)
// => Windows was open
// ... clicked on button
//  received setTartget(0) => send cmd 5 (DT.close) -> SetMotor - [182,5,3,28]
//  received 0/0 => stored 4 (= HB.stopped)
//  received 3/3 => stored 3 (= HB.closing)
// after some time
//  received 1/1 => stored 1 (= HB.closed)
// => Windows was closed
/*
homebridge - Received updateState from Master -> UpDown for SB 1 - up/down -> 2 / 2 -> passing: 0
  EventedHTTPServer [::ffff:192.168.0.104] Sending HTTP event '3.17' with data: {"characteristics":[{"aid":3,"iid":17,"value":0}]} +49s
homebridge - setting CurrentPosition to 100
  EventedHTTPServer [::ffff:192.168.0.104] Sending HTTP event '3.10' with data: {"characteristics":[{"aid":3,"iid":10,"value":100}]} +1ms

homebridge - Received updateState from Master -> UpDown for SB 1 - up/down -> 0 / 0 -> passing: 4
  EventedHTTPServer [::ffff:192.168.0.105] Sending HTTP event '3.17' with data: {"characteristics":[{"aid":3,"iid":17,"value":4}]} +1ms
homebridge - received updateState up/down
homebridge - Received updateState from Master -> UpDown for SB 1 - up/down -> 3 / 3 -> passing: 3

homebridge - Received updateState from Master -> UpDown for SB 1 - up/down -> 1 / 1 -> passing: 1
  EventedHTTPServer [::ffff:192.168.0.104] Sending HTTP event '3.17' with data: {"characteristics":[{"aid":3,"iid":17,"value":1}]} +53s
homebridge - setting CurrentPosition to 0
  EventedHTTPServer [::ffff:192.168.0.104] Sending HTTP event '3.10' with data: {"characteristics":[{"aid":3,"iid":10,"value":0}]} +0ms
*/
class UpDown extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        this.log("*** Error *** needs to be overridden");
        return [];
    }
    attachServices(covering) {
        covering.getCharacteristic(this.homebridge.Characteristic.TargetPosition)
            .on('get', this.getCurrentPosition.bind(this))
            .on('set', this.setUpDown.bind(this));
        covering.getCharacteristic(this.homebridge.Characteristic.CurrentDoorState)
            .on('get', this.getDoorState.bind(this));
        covering.getCharacteristic(this.homebridge.Characteristic.CurrentPosition)
            .on('get', this.getCurrentPosition.bind(this));
    }
    getHBState(val) {
        if (val == protocol_1.UnitState.kClosed)
            return this.homebridge.Characteristic.CurrentDoorState.CLOSED;
        else if (val == protocol_1.UnitState.kOpen)
            return this.homebridge.Characteristic.CurrentDoorState.OPEN;
        else if (val == protocol_1.UnitState.kClosing)
            return this.homebridge.Characteristic.CurrentDoorState.CLOSING;
        else if (val == protocol_1.UnitState.kOpening)
            return this.homebridge.Characteristic.CurrentDoorState.OPENING;
        else // don't know
            return this.homebridge.Characteristic.CurrentDoorState.STOPPED;
    }
    getDoorState(next) {
        this.log("get Characteristic.CurrentDoorState was called");
        this.unit.reqState(unit => {
            this.log("getDoorState was called for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status + " / " + this.unit.value + " -> passing: " + this.getHBState(this.unit.status));
            next(null, this.getHBState(this.unit.status));
        }).catch(err => next(err));
    }
    getCurrentPosition(next) {
        this.log("get Characteristic.CurrentPosition was called");
        this.unit.reqState(unit => {
            if (unit.status == protocol_1.UnitState.kOpen)
                next(null, 100);
            else if (unit.status == protocol_1.UnitState.kClosed)
                next(null, 0);
            else
                next(null, 50); // ????
        });
    }
    setUpDown(value, next) {
        // homekit is giving 0-100
        // for the smartbox -> 5=down, 4=up, 3=stop
        this.log("set Characteristic.TargetPosition was called with value = " + value);
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
        this.log("setUpDown, value =" + value + " -> cmd=" + cmd);
        this.unit.setState(cmd)
            .then(() => next())
            .catch(err => next(err));
    }
    getUpDown(next) {
        this.log("get Characteristic.TargetPosition was called");
        this.unit.reqState(unit => {
            if (this.unit.status == protocol_1.UnitState.kOpen)
                next(null, 100);
            else if (this.unit.status == protocol_1.UnitState.kClosed)
                next(null, 0);
            else
                next(null, 50); // ????
        });
    }
    updateState() {
        const value = this.getHBState(this.unit.status);
        this.log("Received updateState from Master -> UpDown for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status + " / " + this.unit.value + " -> passing: " + value);
        this.me.getCharacteristic(this.homebridge.Characteristic.CurrentDoorState).updateValue(value);
        // set door state if close of opened
        if (value === this.homebridge.Characteristic.CurrentDoorState.OPEN) {
            this.log("setting CurrentPosition to 100");
            this.me.getCharacteristic(this.homebridge.Characteristic.CurrentPosition).updateValue(100);
        }
        if (value === this.homebridge.Characteristic.CurrentDoorState.CLOSED) {
            this.log("setting CurrentPosition to 0");
            this.me.getCharacteristic(this.homebridge.Characteristic.CurrentPosition).updateValue(0);
        }
    }
}
exports.UpDown = UpDown;
//# sourceMappingURL=updown.js.map