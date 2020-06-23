"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_1 = require("../duotecno/protocol");
const accessory_1 = require("./accessory");
// Johan Coppieters Jun 2020
//
// Garagedoor
// - has security, so when opening you need to authenticate
// - TargetDoorState -> Characteristic.CurrentDoorState.OPEN, .STOPPED, .CLOSED
//
//
class GarageDoor extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        // GarageDoorOpener needs authentication
        const garageDoor = this.makeService(this.homebridge.Service.GarageDoorOpener);
        this.attachServices(garageDoor);
        return [garageDoor];
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
        this.log("Received updateState -> Homekit GarageDoor for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status + " / " + this.unit.value + " -> passing to HB: " + value);
        this.me.getCharacteristic(this.homebridge.Characteristic.CurrentDoorState).updateValue(value);
    }
}
exports.GarageDoor = GarageDoor;
//# sourceMappingURL=garagedoor.js.map