import { UpDown } from "./updown";

// Johan Coppieters Jan 2019
//
// Garagedoor
// - has security, so when opening you need to authenticate
//


export class GarageDoor extends UpDown {

  constructor(log, homebridge, unit) {
    super(log, homebridge, unit);
  }

  getAccessoryServices() {
    // GarageDoorOpener needs authentication
    const garageDoor = this.makeService(this.homebridge.Service.GarageDoorOpener);

    this.attachServices(garageDoor)

    return [garageDoor];
  }
}
