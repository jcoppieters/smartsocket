import * as fs from 'fs';
import { Protocol } from "../duotecno/protocol";
import { LogFunction, Sanitizers } from "../duotecno/types";


///////////////
// Log Class //
///////////////

export class Base {
  type: string;
  debug: boolean;
  logger: LogFunction;
  config: any;

  constructor(type: string, debug: boolean = false, logger?: LogFunction) {
    this.debug = debug || false;
    this.logger = (this.debug) ? console.log : function() {};
    Protocol.setLogger(this.logger);

    this.type = type || "base";
  }

  info(msg: string) {
    if (this.debug) {
      this.logger(this.type + " - " + msg);
    }
  }
  log(msg: string) {
    this.logger(this.type + " - " + msg);
  }
  err(msg: string) {
    this.logger(this.type + " - *** " + msg + " ***");
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


  read(type: string) {
    const fn = './config.' + type + '.json';
    let config = null;

    try {
      const configBuf = fs.readFileSync(fn);
      const configStr = configBuf.toString();
      config = JSON.parse(configStr);

    } catch(err) {
      this.log("Couldn't read my config file (" + fn + ") -- Creating empty config.")
    }

    // sanitize the config
    const temp = Sanitizers[type](config);

    // write if we created it (new intallations or new config params)
    if (!config && temp) this.write(type, temp);
    return temp;
  }

  write(type: string, config) {
    const fn = './config.' + type + '.json';
    try {
      config = Sanitizers[type](config); 
      fs.writeFileSync(fn, JSON.stringify(config, null, 2));

    } catch(err) {
      this.err("Couldn't write my " + this.type + " config file (" + fn + ")");
    }
    return config;
  }

}
