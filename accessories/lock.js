"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lock = void 0;
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
        this.log("created Lock -> " + unit.getDescription());
        // set default for Unlocked to Locked
        if (this.unit.getType() === protocol_1.UnitExtendedType.kUnlocker)
            unit.setState(1);
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
        // unlocker is a mood, a lock is a switch
        const dtVal = (this.unit.getType() === protocol_1.UnitExtendedType.kUnlocker) ? -1 : value;
        this.log("HB setting target state of lock: to " + value + " of " + this.unit.getDescription() + " (duotecno: " + dtVal + ")");
        this.unit.setState(dtVal)
            .then(() => {
            //bypass ip node update mechanism of Duotecno
            this.unit.status = value;
            this.updateState();
            if (this.unit.getType() === protocol_1.UnitExtendedType.kUnlocker) {
                // always set to "locked" after sending the request.
                this.unit.resetTimer = setTimeout(() => {
                    this.log("Autolock for an unlocker after 2 secs of " + this.unit.getDescription());
                    this.targetState = 1;
                    this.me.getCharacteristic(this.homebridge.Characteristic.LockTargetState).updateValue(1);
                    this.unit.status = 1;
                    this.me.getCharacteristic(this.homebridge.Characteristic.LockCurrentState).updateValue(1);
                }, 2000);
            }
            next();
        })
            .catch(err => next(err));
    }
    getTarget(next) {
        this.log("HB getting target state of lock = " + this.unit.status + " of " + this.unit.getDescription());
        next(null, this.targetState);
    }
    getCurrent(next) {
        this.unit.reqState(unit => {
            this.log("HB getting current state of lock = " + this.unit.status + " of " + this.unit.getDescription());
            next(null, !!this.unit.status);
        });
    }
    // in response to Duotecno status messages
    updateState() {
        this.log("Received updateState -> Homekit Lock for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status);
        this.me.getCharacteristic(this.homebridge.Characteristic.LockCurrentState).updateValue(this.unit.status);
    }
}
exports.Lock = Lock;
//# sourceMappingURL=lock.js.map