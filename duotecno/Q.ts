import { LogFunction } from "./types";

export class Q {
  private timer = null;
  private queue = [];
  logger: LogFunction;

  constructor(logger: LogFunction) {
    this.logger = logger || console.log;
  }

  exec(fn) {
    const len = this.queue.length;
    this.queue.push(fn);

    // start timer to execute this functon if nobody else calls "do"
    // this.logger("*Q* exec, we've put stuff in the queue, start " + (len ? "long timer" : "short timer"));
    this.startWaiter(len ? 500 : 0);
  }

  endWaiter() {
    if (this.timer) {
      // this.logger("*Q* Waiter: clearing timer");
      clearTimeout(this.timer);
    }
  }

  startWaiter(mSecs = 1000) {
    this.endWaiter();

    // this.logger("*Q* Waiter: starting timer for " + mSecs + " mSec");
    this.timer = setTimeout(() => {
      // this.logger("*Q* Waiter: timer finished, calling 'do' because nobody else did");
      this.do();
    }, mSecs);
  }

  do() {
    // this.logger("*Q* Do, qlen="+ this.queue.length);

    // Get the oldest function and execute
    if (this.queue.length > 0) {
      const fn = this.queue[0];
      this.queue.splice(0, 1);
      // this.logger("*Q* Do: calling function");
      fn();
    }

    // Still stuff to execute
    if (this.queue.length > 0) {
      // this.logger("*Q* Do, still stuff in the queue, start timer");
      this.startWaiter();
    } else {
      this.endWaiter();
    }
  }
}