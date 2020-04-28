"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updown_1 = require("./updown");
// Johan Coppieters Jan 2019
//
// WindowCovering
// - or a Screen, no security for opening.
//
class WindowCovering extends updown_1.UpDown {
    constructor(log, homebridge, unit) {
        super(log, homebridge, unit);
    }
    getAccessoryServices() {
        const covering = this.makeService(this.homebridge.Service.WindowCovering);
        this.attachServices(covering);
        return [covering];
    }
}
exports.WindowCovering = WindowCovering;
//# sourceMappingURL=windowcovering.js.map