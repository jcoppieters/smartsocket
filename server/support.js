"use strict";
// Handle support commands, those are not passed to a master
//
// Johan Coppieters
// v1, 11/05/2020
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Support = void 0;
const fs = require("fs");
class Support {
    constructor(system, logger) {
        this.log = logger || console.log;
        this.system = system;
    }
    fromTransport(str) {
        return str.replace(/§/g, ']');
    }
    toTransport(str) {
        return str.replace(/]/g, '§');
    }
    getFN(name) {
        return "./data/" + name + ".json";
    }
    doBackup(name, data) {
        try {
            this.log("Backup - " + name + " -> " + data.substr(0, 40) + "...");
            fs.mkdirSync("./data", { recursive: true });
            fs.writeFileSync(this.getFN(name), this.fromTransport(data));
        }
        catch (e) {
            this.log("error: " + e.message);
        }
        return null;
    }
    doRestore(name) {
        try {
            const data = fs.readFileSync(this.getFN(name)).toString();
            this.log("Restore - " + name + " -> " + data.substr(0, 40) + "...");
            return "[9,R-" + name + ":" + this.toTransport(data) + "]";
        }
        catch (e) {
            this.log("error: " + e.message);
            return null;
        }
    }
    doScenes(name, data) {
        this.doBackup(name, data);
        try {
            // works only for local server installations
            if (this.system) {
                this.log("setting scenes to: " + this.fromTransport(data));
                this.system.scenes = JSON.parse(this.fromTransport(data));
            }
            else {
                this.log("only server side scenes for local server installations !");
            }
        }
        catch (e) {
            this.log("error: " + e.message);
        }
        return null;
    }
    doSendAudio(name) {
        try {
            const data = fs.readFileSync(this.getFN(name)).toString();
            this.log("Send Audio - " + name + " -> " + data.substr(0, 40) + "...");
            return "[9,A-" + name + ":" + this.toTransport(data) + "]";
        }
        catch (e) {
            this.log("error: " + e.message);
            return null;
        }
    }
    // Format:
    //  [9,K-type-address:data]
    // K = B(ackup), R(estore), S(end scenes)
    // type = name of config like "system", "scenes", "groups", ...
    // 
    // Writing to, reading from files 
    //  ./data/ipAddress-name-type.json
    getKind(msg) {
        if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'B'))
            return 'B';
        else if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'R'))
            return 'R';
        else if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'A'))
            return 'A';
        else if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'S'))
            return 'S';
        else
            return 'X';
    }
    getName(msg) {
        const next = msg.indexOf(":");
        if (next < 0)
            return "";
        else
            return msg.substr(5, next - 5);
    }
    handle(msg) {
        const kind = this.getKind(msg);
        // no internal message -> tell it to the caller and let's get out of here
        if (kind === 'X')
            return { done: false };
        // get type for restore or backup if any
        const name = this.getName(msg);
        // get the msg, remove [], cmd and type.
        msg = msg.substr(name.length + 6, msg.length - name.length - 8);
        //backup
        if (kind === "B") {
            return { done: true, answer: this.doBackup(name, msg) };
            //restore
        }
        else if (kind === 'R') {
            return { done: true, answer: this.doRestore(name) };
            //scenes
        }
        else if (kind === 'S') {
            return { done: true, answer: this.doScenes(name, msg) };
            //send audio config
        }
        else if (kind === 'A') {
            return { done: true, answer: this.doSendAudio(name) };
        }
        else {
            // we should not get here...
            return { done: false };
        }
    }
}
exports.Support = Support;
//# sourceMappingURL=support.js.map