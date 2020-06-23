import { Accessory } from "./accessory";
import { UnitType } from "../duotecno/protocol";

// Johan Coppieters Jun 2020
//
// Lock
//
// if name of mood contains $   => "lock"  
//      if name contains * = permanent locked=on/unlocked=off
//      else short press -> unlock, locked again after 1.2 sec



export class Lock extends Accessory {
  targetState;

  constructor(log, homebridge, unit) {
    super(log, homebridge, unit);
    this.log("created Lock -> " + unit.getDescription());
  }

  getAccessoryServices() {
    // Lock needs authentication
    const lock = this.makeService(this.homebridge.Service.LockMechanism);
    this.attachServices(lock)

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
    this.log("HB setting target state of lock: to " + value + " of " + this.unit.getDescription());

    this.unit.setState(!!value)
      .then(() => {
        this.updateState();

        if (this.unit.getType() === UnitType.kUnlocker) {
          // always set to "locked" after sending the request.
          this.unit.resetTimer = setTimeout(() => {
            this.log("Autolock for an unlocker after 1.2 secs of " + this.unit.getDescription())
            this.unit.value = true;
            // try to update homekit's value to "locked" again.
            this.updateState();
          }, 1200);
        }
      
        next()
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
      next(null, this.unit.status);
    });
  }


  // in response to Duotecno status messages
  updateState() {
    this.log("Received updateState -> Homekit Lock for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status);
    this.me.getCharacteristic(this.homebridge.Characteristic.LockCurrentState).updateValue(this.unit.status);
  }

}
