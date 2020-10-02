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
    this.logger = logger || console.log;
    if (debug)
      Protocol.setLogger(this.logger, this.logger);
    else
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
    this.logger(this.type + " - *** " + new Date().toTimeString() + " *** " + msg + " ***");
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


  read(type: string, fname: string = "") {
    const fn = fname || ('./config.' + type + '.json');
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
    if (!config && temp) this.write(type, temp, fname);
    return temp;
  }

  write(type: string, config, fname: string = "") {
    const fn = fname || ('./config.' + type + '.json');
    try {
      config = Sanitizers[type](config); 
      fs.writeFileSync(fn, JSON.stringify(config, null, 2));

    } catch(err) {
      this.err("Couldn't write my " + type + " config file (" + fn + ")");
    }
    return config;
  }

}
