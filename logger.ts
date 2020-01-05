// coming from app or from unit tests
export type LogFunction = (message: any, ...optionalParams: any[]) => void;

///////////////
// Log Class //
///////////////

export class Logger {
  type: string;
  debug: boolean;
  logger: LogFunction;

  constructor(type: string, logger?: LogFunction, debug: boolean = false) {
    this.logger = logger || console.log;
    this.type = type || "base";
    this.debug = debug;
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

}
