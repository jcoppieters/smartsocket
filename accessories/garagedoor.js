"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updown_1 = require("./updown");
// Johan Coppieters Jan 2019
//
// Garagedoor
// - has security, so when opening you need to authenticate
//
class GarageDoor extends updown_1.UpDown {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        // GarageDoorOpener needs authentication
        const garageDoor = this.makeService(this.homebridge.Service.GarageDoorOpener);
        this.attachServices(garageDoor);
        return [garageDoor];
    }
}
exports.GarageDoor = GarageDoor;
//# sourceMappingURL=garagedoor.js.map