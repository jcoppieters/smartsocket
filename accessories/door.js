"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
const protocol_1 = require("../duotecno/protocol");
// Johan Coppieters Jun 2020
//
// Garagedoor
// - has security, so when opening you need to authenticate
// - TargetDoorState -> Characteristic.CurrentDoorState.OPEN, .STOPPED, .CLOSED
//
//
// Example: https://github.com/benlamonica/homebridge-rasppi-gpio-garagedoor/blob/master/index.js
//
/*
0|homebridge  | homebridge - Set TargetDoorState of up/down, value =1 -> cmd=5
0|homebridge  | sending: SetMotor - [182,5,3,28]
0|homebridge  | received motor = 0
0|homebridge  | homebridge - received updateState up/down, status = 0, value = 0
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> GarageDoor for SB 1 - up/down -> 0 / 0 -> passing to HB: 4
0|homebridge  | received motor = 3
0|homebridge  | homebridge - received updateState up/down, status = 3, value = 3
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> GarageDoor for SB 1 - up/down -> 3 / 3 -> passing to HB: 3
0|homebridge  | received motor = 1
0|homebridge  | homebridge - received updateState up/down, status = 1, value = 1
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> GarageDoor for SB 1 - up/down -> 1 / 1 -> passing to HB: 1


0|homebridge  | homebridge - Set TargetDoorState of up/down, value =0 -> cmd=4
0|homebridge  | *Q* Waiter: timer finished, calling 'do' because nobody else did
0|homebridge  | sending: SetMotor - [182,4,3,28]
0|homebridge  | received motor = 0
0|homebridge  | homebridge - received updateState up/down, status = 0, value = 0
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> GarageDoor for SB 1 - up/down -> 0 / 0 -> passing to HB: 4
0|homebridge  | received motor = 4
0|homebridge  | homebridge - received updateState up/down, status = 4, value = 4
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> GarageDoor for SB 1 - up/down -> 4 / 4 -> passing to HB: 2
0|homebridge  | received motor = 2
0|homebridge  | homebridge - received updateState up/down, status = 2, value = 2
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> GarageDoor for SB 1 - up/down -> 2 / 2 -> passing to HB: 0

*/
class Door extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        // DoorOpener needs authentication
        const door = this.makeService(this.homebridge.Service.Door);
        this.attachServices(door);
        return [door];
    }
    attachServices(door) {
        door.getCharacteristic(this.homebridge.Characteristic.TargetDoorState)
            .on('get', this.getTargetDoorState.bind(this))
            .on('set', this.setDoorState.bind(this));
        door.getCharacteristic(this.homebridge.Characteristic.CurrentDoorState)
            .on('get', this.getDoorState.bind(this));
    }
    DT2HB(status) {
        if (status == protocol_1.UnitState.kOpen)
            return this.homebridge.Characteristic.CurrentDoorState.OPEN;
        else if (status == protocol_1.UnitState.kClosing)
            return this.homebridge.Characteristic.CurrentDoorState.CLOSING;
        else if (status == protocol_1.UnitState.kClosed)
            return this.homebridge.Characteristic.CurrentDoorState.CLOSED;
        else if (status == protocol_1.UnitState.kOpening)
            return this.homebridge.Characteristic.CurrentDoorState.OPENING;
        else if (status == protocol_1.UnitState.kStopped)
            return this.homebridge.Characteristic.CurrentDoorState.STOPPED;
        else
            return this.homebridge.Characteristic.CurrentDoorState.STOPPED; // ????
    }
    HB2DT(state) {
        if (state == this.homebridge.Characteristic.CurrentDoorState.OPEN)
            return protocol_1.UnitMotorCmd.kOpen;
        else if (state == this.homebridge.Characteristic.CurrentDoorState.CLOSED)
            return protocol_1.UnitMotorCmd.kClose;
        else if (state == this.homebridge.Characteristic.CurrentDoorState.STOPPED)
            return protocol_1.UnitMotorCmd.kStop;
        else
            return 0;
    }
    getDoorState(next) {
        try {
            this.unit.reqState(unit => {
                const hb = this.DT2HB(unit.status);
                this.log("Get TargetDoorState of " + this.name + " = " + unit.status + " -> " + hb);
                next(null, hb);
            });
        }
        catch (err) {
            next(err);
        }
    }
    setDoorState(value, next) {
        // homekit is giving OPEN, .STOPPED, .CLOSED
        // for the smartbox -> 5=down, 4=up, 3=stop
        this.targetState = value;
        let cmd = this.HB2DT(value);
        if (cmd) {
            this.log("Set TargetDoorState of " + this.name + ", value =" + value + " -> cmd=" + cmd);
            this.unit.setState(cmd)
                .then(() => next())
                .catch(err => next(err));
        }
        else {
            this.log("Set TargetDoorState of " + this.name + " -> failed for : " + value);
            next(new Error("TargetDoorState of " + this.name + " -> failed"));
        }
    }
    getTargetDoorState(next) {
        this.log("Characteristic.TargetDoorState.get was called of " + this.name + " = " + this.targetState);
        next(null, this.targetState);
    }
    // in response to Duotecno status messages
    updateState() {
        const value = this.DT2HB(this.unit.status);
        this.log("Received updateState -> Homekit Door for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status + " / " + this.unit.value + " -> passing to HB: " + value);
        this.me.getCharacteristic(this.homebridge.Characteristic.CurrentDoorState).updateValue(value);
    }
}
exports.Door = Door;
//# sourceMappingURL=door.js.map