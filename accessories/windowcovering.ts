import { Accessory } from "./accessory";
import { LogFunction } from "../duotecno/types";
import { Unit, UnitState, UnitMotorCmd } from "../duotecno/protocol";
import { UpDown } from "./updown";

// Johan Coppieters Jan 2019
//
// WindowCovering
// - or a Screen, no security for opening.
//


export class WindowCovering extends UpDown {

  constructor(log: LogFunction, homebridge, unit: Unit) {
    super(log, homebridge, unit);
    
  }

  getAccessoryServices() {
    const covering = this.makeService(this.homebridge.Service.WindowCovering);

    this.attachServices(covering)

    return [covering];
  }

}
