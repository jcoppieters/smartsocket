"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///////////////
// Log Class //
///////////////
class Logger {
    constructor(type, logger, debug = false) {
        this.logger = logger || console.log;
        this.type = type || "base";
        this.debug = debug;
    }
    info(msg) {
        if (this.debug) {
            this.logger(this.type + " - " + msg);
        }
    }
    log(msg) {
        this.logger(this.type + " - " + msg);
    }
    err(msg) {
        this.logger(this.type + " - *** " + msg + " ***");
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map