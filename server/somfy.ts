import * as sgpio from 'rpi-gpio';
import { LogFunction, now } from '../duotecno/types';
const gpio = sgpio.promise;

const s3v3         = 1;   // pin 1
const sGnd         = 3;   // pin 3

const sUp          = 5;   // pin 29
const sDown        = 6;   // pin 31
const sSelect      = 16;  // pin 36
const sStop        = 26;  // pin 37 -- make 0 not to use "stop"

const sScreen1     = 25;  // pin 22
const sScreen2     = 24;  // pin 18
const sScreen3     = 23;  // pin 16
const sScreen4     = 22;  // pin 15

const kWaitPush    = 150;
const kWaitStable  = 200;

let init: boolean;
let busy: boolean;

let curlog = myLogger;

function log (msg) {
  curlog("[somfy] " + msg);
}
export function setlogger(logF: LogFunction) {
  curlog = logF;
}
function myLogger(msg) {
  console.log("[" + now() + "] [somfy] " + msg);
}

async function mS(nr: number) {
  return new Promise(resolve => setTimeout(resolve, nr));
}

async function setup() {
  // use real names (MODE_BCM) or pin numbers(MODE_RPI)
  sgpio.setMode(sgpio.MODE_BCM);

  // set for output
  await gpio.setup(sSelect, gpio.DIR_OUT);
  await gpio.write(sSelect, true);
  await gpio.setup(sUp, gpio.DIR_OUT);
  await gpio.write(sUp, true);
  await gpio.setup(sDown, gpio.DIR_OUT);
  await gpio.write(sDown, true);
  if (sStop) {
    await gpio.setup(sStop, gpio.DIR_OUT);
    await gpio.write(sStop, true);
  }

  // set for input active low
  await gpio.setup(sScreen1, gpio.DIR_IN);
  await gpio.setup(sScreen2, gpio.DIR_IN);
  await gpio.setup(sScreen3, gpio.DIR_IN);
  await gpio.setup(sScreen4, gpio.DIR_IN);
}

async function toggle(pin) {
  await gpio.write(pin, false);
  await mS(kWaitPush);
  await gpio.write(pin, true);
  await mS(kWaitStable);
}

async function selected(screen: number): Promise<boolean> {
  const screens = [false, 
    ! await gpio.read(sScreen1), 
    ! await gpio.read(sScreen2), 
    ! await gpio.read(sScreen3), 
    ! await gpio.read(sScreen4)];
  screens[0] = screens[1] && screens[2] && screens[3] && screens[4];
  if (screens[0]) {
   screens[1] = screens[2] = screens[3] = screens[4] = false;
  }
  log("selected screen: " + screens[0] +" "+ screens[1] +" "+ screens[2] +" "+ screens[3] +" "+ screens[4]+ " <- " + screen + "=" + screens[screen]);
  return screens[screen];
}

async function select(screen: number): Promise<boolean> {
  log("try to select screen " + screen);
  let i = 0;
  do {
   await toggle(sSelect);
   if (await selected(screen)) return true;
   i++;
  } while (i < 5);

  // give up after 5 tries
  log("Error: couldn't select screen " + screen);
  return false;
}

async function waitBusy() {
  // wait the average selection time
  const kWaitingTime = (kWaitStable+kWaitPush) * 2.5;

  let nr = 0;
  while (busy) {
    nr++;
    log("waiting for busy flag - " + Math.round(nr*kWaitingTime) + "mSec")
    await mS(kWaitingTime);
  }
  busy = true;
}

export async function down(screen: number): Promise<boolean> {
  log("down " + screen + ((init) ? "" : " - test mode"));
  if (!init) return true;

  await waitBusy();

  if (await select(screen)) {
    await toggle(sDown);
    busy = false;
    return true;
  }

  busy = false;
  return false;
}

export async function up(screen: number): Promise<boolean> {
  log("up " + screen + ((init) ? "" : " - test mode"));
  if (!init) return true;

  await waitBusy();

  if (await select(screen)) {
    await toggle(sUp);
    busy = false;
    return true;
  }

  busy = false;
  return false;
} 

export async function stop(screen: number): Promise<boolean> {
  log("stop " + screen + ((init) ? "" : " - test mode"));
  if (!init) return true;

  await waitBusy();

  if (sStop) {
    if (await select(screen)) {
      await toggle(sStop);
      busy = false;
      return true;
    }
    busy = false;
    return false;
    
  } else {
    busy = false;
    return true;
  }
}
 
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