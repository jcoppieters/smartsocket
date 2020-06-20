"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const door_1 = require("./door");
// Johan Coppieters Jun 2020
//
// Garagedoor
// - has security, so when opening you need to authenticate
// - TargetDoorState -> Characteristic.CurrentDoorState.OPEN, .STOPPED, .CLOSED
//
//
class GarageDoor extends door_1.Door {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        // GarageDoorOpener needs authentication
        const garageDoor = this.makeService(this.homebridge.Service.GarageDoorOpener);
        this.attachServices(garageDoor);
        return [garageDoor];
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