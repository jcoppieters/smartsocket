// Handle support commands, those are not passed to a master
//
// Johan Coppieters
// v1, 11/05/2020
//

import * as fs from 'fs';

import { LogFunction } from "../duotecno/types";
import { Base } from "./base";
import { System } from "../duotecno/system";


export class Support extends Base {
  system: System;

  constructor(system: System, type: string, debug: boolean = false, logger?: LogFunction) {
    super(type, debug, logger);
    this.system = system;
  }

  fromTransport(str: string): string {
    return str.replace(/§/g,']');
  }
  toTransport(str: string): string {
    return str.replace(/]/g,'§');
  }

  getFN(type: string) {
    return "./data/" + type + ".json";
  }

  doBackup(type: string, data: string): string {
    try{
      this.log("Backup - " + type + " -> " + data.substr(0, 40) + "...");
      fs.mkdirSync("./data", { recursive: true });
      fs.writeFileSync(this.getFN(type), this.fromTransport(data));

    } catch(e) {
      this.log("error: " + e.message);
    }
    return null;
  }

  doRestore(type: string): string {
    try {
      const data = fs.readFileSync(this.getFN(type)).toString();
      this.log("Restore - " + type + " -> " + data.substr(0, 40) + "...");
      return "[9,R-" + type + ":" + this.toTransport(data) + "]";

    } catch (e) {
      this.log("error: " + e.message);
      return null;
    }
  }
  doScenes(type: string, data: string): string {
    this.doBackup(type, data);
    try {
      this.log("setting scenes to: " + this.fromTransport(data));
      this.system.scenes = JSON.parse(this.fromTransport(data));
    } catch(e) {
      this.log("error: " + e.message);
    }
    return null;
  }

  // Format:
  //  [9,K-type-address:data]
  // K = B(ackup), R(estore), S(end scenes)
  // type = name of config like "system", "scenes", "groups", ...
  // 
  // Writing to, reading from files 
  //  ./data/ipAddress-type.json

  getKind(msg: string): string {
    if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'B'))
      return 'B';
    else if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'R'))
      return 'R';
    else if ((msg[0] == '[') && (msg[1] == '9') && (msg[2] == ',') && (msg[3] == 'S'))
      return 'S';
    else
      return 'X';
  }
  getType(msg: string): string {
    const next = msg.indexOf(":");
    if (next < 0)
      return "";
    else
      return msg.substr(5, next-5)
  }

  handle(msg: string): {done: boolean, answer?: string } {
    const kind = this.getKind(msg);

    // no internal message -> tell it to the caller and let's get out of here
    if (kind === 'X') return { done: false };

    // get type for restore or backup if any
    const type = this.getType(msg);

    // get the msg, remove [], cmd and type.
    msg = msg.substr(type.length+6, msg.length-type.length-8);

    //backup
    if (kind === "B") {
      return { done: true, answer: this.doBackup(type, msg) };
  
    //restore
    } else if (kind === 'R') {
      return { done: true, answer: this.doRestore(type) };

    //scenes
    } else if (kind === 'S') {
      return { done: true, answer: this.doScenes(type, msg) };

    } else {
      // we should not get here...
      return { done: false };
    }
  }
}