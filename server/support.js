"use strict";
// Handle support commands, those are not passed to a master
//
// Johan Coppieters
// v1, 11/05/2020
//
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const base_1 = require("./base");
class Support extends base_1.Base {
    constructor(system, type, debug = false, logger) {
        super(type, debug, logger);
        this.system = system;
    }
    noSB(str) {
        return str.replace('§', ' ').replace(']', '§');
    }
    updateScenes(msg) {
    }
    getFN(type) {
        return "./data/" + type + ".json";
    }
    doBackup(type, data) {
        try {
            this.log("Backup - " + type + " -> " + data.substr(0, 40) + "...");
            fs.mkdirSync("./data", { recursive: true });
            fs.writeFileSync(this.getFN(type), this.noSB(data));
            if (type === "scenes")
                this.updateScenes(data);
        }
        catch (e) {
            this.log("error: " + e.message);
        }
        return "";
    }
    doRestore(type) {
        try {
            const data = fs.readFileSync(this.getFN(type)).toString();
            this.log("Restore - " + type + " -> " + data.substr(0, 40) + "...");
            return "[9,R-" + type + ":" + this.noSB(data) + "]";
        }
        catch (e) {
            this.log("error: " + e.message);
            return null;
        }
    }
    // Format:
    //  [9,K-type-address:data]
    // K = B(ackup), R(estore)
    // type = name of config like "system", "scenes", "groups", ...
    // 
    // Writing to, reading from files 
    //  ./data/ipAddress-type.json
    getKind(msg) {
        if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'B'))
            return 'B';
        else if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'R'))
            return 'R';
        else
            return 'X';
    }
    getType(msg) {
        const next = msg.indexOf(":");
        if (next < 0)
            return "";
        else
            return msg.substr(5, next - 5);
    }
    handle(msg) {
        const kind = this.getKind(msg);
        // no internal message -> tell it to the caller
        if (kind === 'X')
            return { done: false };
        // get type for restore or backup if any
        const type = this.getType(msg);
        // get the msg, remove [], cmd and type.
        msg = msg.substr(type.length + 6, msg.length - type.length - 8);
        //backup
        if (kind === "B") {
            return { done: true, answer: this.doBackup(type, msg) };
            //restore
        }
        else if (kind === 'R') {
            return { done: true, answer: this.doRestore(type) };
        }
        else {
            // we should not get here...
            return { done: false };
        }
    }
}
exports.Support = Support;
//# sourceMappingURL=support.js.map