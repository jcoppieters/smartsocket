"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const fs = require("fs");
const protocol_1 = require("../duotecno/protocol");
const types_1 = require("../duotecno/types");
///////////////
// Log Class //
///////////////
class Base {
    constructor(type, debug = false, logger) {
        this.type = type || "base";
        this.debug = debug || false;
        this.logger = logger || console.log;
        if (this.debug)
            protocol_1.Protocol.setLogger(this.logger, this.logger);
        else
            protocol_1.Protocol.setLogger(this.logger);
    }
    info(msg) {
        if (this.debug) {
            this.logger("[" + this.type + "] " + msg);
        }
    }
    log(msg) {
        this.logger("[" + this.type + "] " + msg);
    }
    err(msg) {
        this.logger("[" + this.type + "] *** " + types_1.now() + " *** " + msg + " ***");
    }
    //////////////////
    // Config stuff //
    //////////////////
    readConfig() {
        this.config = this.read(this.type);
    }
    writeConfig() {
        this.write(this.type, this.config);
    }
    read(type, fname = "") {
        const fn = fname || ('./config.' + type + '.json');
        let config = null;
        try {
            const configBuf = fs.readFileSync(fn);
            const configStr = configBuf.toString();
            config = JSON.parse(configStr);
        }
        catch (err) {
            this.log("Couldn't read my config file (" + fn + ") -- Creating empty config.");
        }
        // sanitize the config
        const temp = types_1.Sanitizers[type](config);
        // write if we created it (new intallations or new config params)
        if (!config && temp)
            this.write(type, temp, fname);
        return temp;
    }
    write(type, config, fname = "") {
        const fn = fname || ('./config.' + type + '.json');
        try {
            config = types_1.Sanitizers[type](config);
            fs.writeFileSync(fn, JSON.stringify(config, null, 2));
        }
        catch (err) {
            this.err("Couldn't write my " + type + " config file (" + fn + ")");
        }
        return config;
    }
}
exports.Base = Base;
//# sourceMappingURL=base.js.map