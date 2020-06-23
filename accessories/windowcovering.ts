import { Accessory } from "./accessory";
import { LogFunction } from "../duotecno/types";
import { Unit, UnitState, UnitMotorCmd } from "../duotecno/protocol";

// Johan Coppieters v1: Jan 2019, v2: Jun 2020
//
// WindowCovering
// - or a Screen, no security for opening.
// - homekit.TargetPosition: closed = 0 - 100 = open
// - duotecno.value: kOpen = 2, kClosed = 1, kClosing = 3, kOpening = 4
//
// Example: https://github.com/dxdc/homebridge-blinds/blob/master/index.js
//
/*
0|homebridge  | homebridge - set Characteristic.TargetPosition was called with value = 0
0|homebridge  | homebridge - setUpDown, value =0 -> cmd=5
0|homebridge  | sending: SetMotor - [182,5,3,28]
0|homebridge  | received motor = 0
0|homebridge  | homebridge - received updateState up/down, status = 0, value = 0
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> WindowCovering for SB 1 - up/down -> 0 / 0 -> passing: 50
0|homebridge  | received motor = 3
0|homebridge  | homebridge - received updateState up/down, status = 3, value = 3
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> WindowCovering for SB 1 - up/down -> 3 / 3 -> passing: 50
0|homebridge  | received motor = 1
0|homebridge  | homebridge - received updateState up/down, status = 1, value = 1
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> WindowCovering for SB 1 - up/down -> 1 / 1 -> passing: 0


0|homebridge  | homebridge - set Characteristic.TargetPosition was called with value = 100
0|homebridge  | homebridge - setUpDown, value =100 -> cmd=4
0|homebridge  | sending: SetMotor - [182,4,3,28]
0|homebridge  | received motor = 0
0|homebridge  | homebridge - received updateState up/down, status = 0, value = 0
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> WindowCovering for SB 1 - up/down -> 0 / 0 -> passing: 50
0|homebridge  | received motor = 4
0|homebridge  | homebridge - received updateState up/down, status = 4, value = 4
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> WindowCovering for SB 1 - up/down -> 4 / 4 -> passing: 50
0|homebridge  | received motor = 2
0|homebridge  | homebridge - received updateState up/down, status = 2, value = 2
0|homebridge  | homebridge - passing to homekit accessory
0|homebridge  | homebridge - Received updateState from Master -> WindowCovering for SB 1 - up/down -> 2 / 2 -> passing: 100

*/


export class WindowCovering extends Accessory {
  targetState;

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
    this.targetState = 0; // down or closed by default ??

  }

  getAccessoryServices() {
    const covering = this.makeService(this.homebridge.Service.WindowCovering);
    this.attachServices(covering)

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
    if (val == UnitState.kClosed)
      return 0;

    else if (val == UnitState.kOpen)
      return 100;

    else if (val == UnitState.kClosing)
      return 50;

    else if (val == UnitState.kOpening)
      return 50;

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
      if (unit.status == UnitState.kOpen) 
        next(null, 100);
      else if (unit.status == UnitState.kClosed) 
        next(null, 0);
      else 
        next(null, 50);  // ????
    });
  }


  setTargetPosition(value, next) {
    // homekit is giving 0-100 for windows
    // the smartbox -> 5=down, 4=up, 3=stop

    this.log("set Characteristic.TargetPosition was called with value = " + value);

    let cmd = 0;
    if (value == 100) {
      cmd = UnitMotorCmd.kOpen;
    } else if (value == 0) {
      cmd = UnitMotorCmd.kClose;
    } else {
      cmd = UnitMotorCmd.kStop;
    }
    this.log("setUpDown, value =" + value + " -> cmd="+cmd);

    this.unit.setState(cmd)
      .then(() => next())
      .catch(err => next(err));
  }

  getTargetPosition(next) {
    this.log("get Characteristic.TargetPosition was called");

    this.unit.reqState(unit => {
      if (this.unit.status == UnitState.kOpen) 
        next(null, 100);
      else if (this.unit.status == UnitState.kClosed) 
        next(null, 0);
      else 
        next(null, 50);  // ????
    });
  }

  // called in response to Duotecno status update
  updateState() {
    const value = this.DT2HB(this.unit.status);
    this.log("Received updateState -> Homekit WindowCovering for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status + " / " + this.unit.value + " -> passing: " + value);

    this.me.getCharacteristic(this.homebridge.Characteristic.CurrentPosition).updateValue(value);
  }
}
