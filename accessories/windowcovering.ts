import { Accessory } from "./accessory";
import { LogFunction, UnitMotorCmd, UnitState } from "../duotecno/types";
import { Unit } from "../duotecno/protocol";

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
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,0
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] received status - motor = 0
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 0 / 0 -> passing: 50
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,4
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] received status - motor = 4
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 4 / 4 -> passing: 50
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [homebridge] Setting targetposition to 100
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [somfy] up 2
0|homebridge  | [16/02/2021, 15:10:34] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:10:35] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true
0|homebridge  | [16/02/2021, 15:11:01] [DuotecnoPlatform] sending: Heartbeat - [215,1]
0|homebridge  | [16/02/2021, 15:11:01] [DuotecnoPlatform] [master] 192.168.0.8: HeartbeatStatus -> 72,1

0|homebridge  | [16/02/2021, 15:11:31] [DuotecnoPlatform] sending: Heartbeat - [215,1]
0|homebridge  | [16/02/2021, 15:11:31] [DuotecnoPlatform] [master] 192.168.0.8: HeartbeatStatus -> 72,1
0|homebridge  | [16/02/2021, 15:11:34] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,2
0|homebridge  | [16/02/2021, 15:11:34] [DuotecnoPlatform] received status - motor = 2
0|homebridge  | [16/02/2021, 15:11:34] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 2 / 2 -> passing: 100
0|homebridge  | [16/02/2021, 15:11:34] [DuotecnoPlatform] [somfy] stop 2
0|homebridge  | [16/02/2021, 15:11:34] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:11:35] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true


[ clicked "close"]
0|homebridge  | [16/02/2021, 15:09:06] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,0
0|homebridge  | [16/02/2021, 15:09:06] [DuotecnoPlatform] received status - motor = 0
0|homebridge  | [16/02/2021, 15:09:06] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 0 / 0 -> passing: 50
0|homebridge  | [16/02/2021, 15:09:07] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,3
0|homebridge  | [16/02/2021, 15:09:07] [DuotecnoPlatform] received status - motor = 3
0|homebridge  | [16/02/2021, 15:09:07] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 3 / 3 -> passing: 50
0|homebridge  | [16/02/2021, 15:09:07] [DuotecnoPlatform] [somfy] down 2
0|homebridge  | [16/02/2021, 15:09:07] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:09:07] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true
0|homebridge  | [16/02/2021, 15:09:31] [DuotecnoPlatform] sending: Heartbeat - [215,1]
0|homebridge  | [16/02/2021, 15:09:31] [DuotecnoPlatform] [master] 192.168.0.8: HeartbeatStatus -> 72,1


0|homebridge  | [16/02/2021, 15:10:01] [DuotecnoPlatform] sending: Heartbeat - [215,1]
0|homebridge  | [16/02/2021, 15:10:01] [DuotecnoPlatform] [master] 192.168.0.8: HeartbeatStatus -> 72,1
0|homebridge  | [16/02/2021, 15:10:07] [DuotecnoPlatform] [master] 192.168.0.8: Motor -> 38,0,4,2,8,0,1
0|homebridge  | [16/02/2021, 15:10:07] [DuotecnoPlatform] received status - motor = 1
0|homebridge  | [16/02/2021, 15:10:07] [DuotecnoPlatform] [homebridge] Received updateState -> Homekit WindowCovering for Up/Down - Tim rechts -> 1 / 1 -> passing: 0
0|homebridge  | [16/02/2021, 15:10:07] [DuotecnoPlatform] [somfy] stop 2
0|homebridge  | [16/02/2021, 15:10:07] [DuotecnoPlatform] [somfy] try to select screen 2
0|homebridge  | [16/02/2021, 15:10:07] [DuotecnoPlatform] [somfy] selected screen: false false true false false <- 2=true


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
      return 25;

    else if (val == UnitState.kOpening)
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

    if (this.unit.status == UnitState.kClosing) {
      this.me.getCharacteristic(this.homebridge.Characteristic.TargetPosition).updateValue(0);
      this.log("Setting targetposition to 0");
    } else if (this.unit.status == UnitState.kOpening) {
      this.me.getCharacteristic(this.homebridge.Characteristic.TargetPosition).updateValue(100);
      this.log("Setting targetposition to 100");
    }

  }
}
