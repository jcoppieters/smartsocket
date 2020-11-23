"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = exports.up = exports.down = exports.setlogger = void 0;
const sgpio = require("rpi-gpio");
const types_1 = require("../duotecno/types");
const gpio = sgpio.promise;
const s3v3 = 1; // pin 1
const sGnd = 3; // pin 3
const sUp = 5; // pin 29
const sDown = 6; // pin 31
const sSelect = 16; // pin 36
const sStop = 26; // pin 37 -- make 0 not to use "stop"
const sScreen1 = 25; // pin 22
const sScreen2 = 24; // pin 18
const sScreen3 = 23; // pin 16
const sScreen4 = 22; // pin 15
const kWaitPush = 150;
const kWaitStable = 200;
let init;
let busy;
let log = myLogger;
function setlogger(logF) {
    log = logF;
}
exports.setlogger = setlogger;
function myLogger(msg) {
    console.log("[" + types_1.now() + "] [Somfy] gpio - " + msg);
}
function mS(nr) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, nr));
    });
}
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        // use real names (MODE_BCM) or pin numbers(MODE_RPI)
        sgpio.setMode(sgpio.MODE_BCM);
        // set for output
        yield gpio.setup(sSelect, gpio.DIR_OUT);
        yield gpio.write(sSelect, true);
        yield gpio.setup(sUp, gpio.DIR_OUT);
        yield gpio.write(sUp, true);
        yield gpio.setup(sDown, gpio.DIR_OUT);
        yield gpio.write(sDown, true);
        if (sStop) {
            yield gpio.setup(sStop, gpio.DIR_OUT);
            yield gpio.write(sStop, true);
        }
        // set for input active low
        yield gpio.setup(sScreen1, gpio.DIR_IN);
        yield gpio.setup(sScreen2, gpio.DIR_IN);
        yield gpio.setup(sScreen3, gpio.DIR_IN);
        yield gpio.setup(sScreen4, gpio.DIR_IN);
    });
}
function toggle(pin) {
    return __awaiter(this, void 0, void 0, function* () {
        yield gpio.write(pin, false);
        yield mS(kWaitPush);
        yield gpio.write(pin, true);
        yield mS(kWaitStable);
    });
}
function selected(screen) {
    return __awaiter(this, void 0, void 0, function* () {
        const screens = [false, !(yield gpio.read(sScreen1)),
            !(yield gpio.read(sScreen2)),
            !(yield gpio.read(sScreen3)),
            !(yield gpio.read(sScreen4))];
        screens[0] = screens[1] && screens[2] && screens[3] && screens[4];
        if (screens[0]) {
            screens[1] = screens[2] = screens[3] = screens[4] = false;
        }
        log("selected screen: " + screens[0] + " " + screens[1] + " " + screens[2] + " " + screens[3] + " " + screens[4]);
        return screens[screen];
    });
}
function select(screen) {
    return __awaiter(this, void 0, void 0, function* () {
        log("try to select screen " + screen);
        let i = 0;
        do {
            yield toggle(sSelect);
            if (yield selected(screen))
                return true;
            i++;
        } while (i < 5);
        // give up after 5 tries
        log("Error: couldn't select screen " + screen);
        return false;
    });
}
function waitBusy() {
    return __awaiter(this, void 0, void 0, function* () {
        // wait the average selection time
        const kWaitingTime = (kWaitStable + kWaitPush) * 2.5;
        let nr = 0;
        while (busy) {
            nr++;
            log("waiting for busy flag - " + Math.round(nr * kWaitingTime) + "mSec");
            yield mS(kWaitingTime);
        }
        busy = true;
    });
}
function down(screen) {
    return __awaiter(this, void 0, void 0, function* () {
        log("down " + screen + ((init) ? "" : " - test mode"));
        if (!init)
            return true;
        yield waitBusy();
        if (yield select(screen)) {
            yield toggle(sDown);
            busy = false;
            return true;
        }
        busy = false;
        return false;
    });
}
exports.down = down;
function up(screen) {
    return __awaiter(this, void 0, void 0, function* () {
        log("up " + screen + ((init) ? "" : " - test mode"));
        if (!init)
            return true;
        yield waitBusy();
        if (yield select(screen)) {
            yield toggle(sUp);
            busy = false;
            return true;
        }
        busy = false;
        return false;
    });
}
exports.up = up;
function stop(screen) {
    return __awaiter(this, void 0, void 0, function* () {
        log("stop " + screen + ((init) ? "" : " - test mode"));
        if (!init)
            return true;
        yield waitBusy();
        if (sStop) {
            if (yield select(screen)) {
                yield toggle(sStop);
                busy = false;
                return true;
            }
            busy = false;
            return false;
        }
        else {
            busy = false;
            return true;
        }
    });
}
exports.stop = stop;
// async function testing() {
//   await setup();
//   await down(3);
//   await up(2);
// }
busy = true;
setup().then(() => {
    log("gpio package initialized");
    init = true;
    busy = false;
}).catch((e) => {
    log("error setting up gpio package - running test mode");
    log(e);
    init = false;
    busy = false;
});
//# sourceMappingURL=somfy.js.map