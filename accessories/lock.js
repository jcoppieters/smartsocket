"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessory_1 = require("./accessory");
const protocol_1 = require("../duotecno/protocol");
// Johan Coppieters Jun 2020
//
// Lock
//
// if name of mood contains $   => "lock"  
//      if name contains * = permanent locked=on/unlocked=off
//      else short press -> unlock, locked again after 1.2 sec
class Lock extends accessory_1.Accessory {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        // Lock needs authentication
        const lock = this.makeService(this.homebridge.Service.LockMechanism);
        this.attachServices(lock);
        return [lock];
    }
    attachServices(door) {
        door.getCharacteristic(this.homebridge.Characteristic.LockTargetState)
            .on('get', this.getTarget.bind(this))
            .on('set', this.setTarget.bind(this));
        door.getCharacteristic(this.homebridge.Characteristic.LockCurrentState)
            .on('get', this.getCurrent.bind(this));
    }
    setTarget(value, next) {
        this.targetState = value;
        this.unit.setState(value)
            .then(() => {
            if (this.unit.getType() === protocol_1.UnitType.kUnlocker) {
                // always set to "locked" after sending the request.
                this.unit.resetTimer = setTimeout(() => {
                    this.unit.value = true;
                    // try to update homekit's value to "locked" again.
                    this.updateState();
                }, 1200);
            }
            next();
        })
            .catch(err => next(err));
    }
    getTarget(next) {
        next(null, this.targetState);
    }
    getCurrent(next) {
        this.unit.reqState(unit => next(null, this.unit.status));
    }
    // in response to Duotecno status messages
    updateState() {
        this.log("Received updateState -> Homekit Lock for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status);
        this.me.getCharacteristic(this.homebridge.Characteristic.LockCurrentState).updateValue(this.unit.status);
    }
}
exports.Lock = Lock;
//# sourceMappingURL=lock.js.map