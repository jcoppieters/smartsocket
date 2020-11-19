import * as sgpio from 'rpi-gpio';
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
  console.log("selected screen: " + screens[0] +" "+ screens[1] +" "+ screens[2] +" "+ screens[3] +" "+ screens[4]);
  return screens[screen];
}

async function select(screen: number): Promise<boolean> {
  console.log("try to select screen " + screen);
  let i = 0;
  do {
   await toggle(sSelect);
   if (await selected(screen)) return true;
   i++;
  } while (i < 5);

  // give up after 5 tries
  console.log("Error: couldn't select screen " + screen);
  return false;
}

export async function down(screen: number): Promise<boolean> {
  console.log("down " + screen + ((init) ? "" : " - test mode"));
  if (!init) return true;

  if (await select(screen)) {
    await toggle(sDown);
    return true;
  }
  return false;
}

export async function up(screen: number): Promise<boolean> {
  console.log("up " + screen + ((init) ? "" : " - test mode"));
  if (!init) return true;

  if (await select(screen)) {
    await toggle(sUp);
    return true;
  }
  return false;
} 

export async function stop(screen: number): Promise<boolean> {
  console.log("stop " + screen + ((init) ? "" : " - test mode"));
  if (!init) return true;

  if (sStop) {
    if (await select(screen)) {
      await toggle(sStop);
      return true;
    }
    return false;
    
  } else {
    return true;
  }
}
 
// async function testing() {
//   await setup();
//   await down(3);
//   await up(2);
// }
  

setup().then(() => {
  console.log("gpio package initialized");
  init = true;
}).catch((e) => {
  console.log("error setting up gpio package - running test mode");
  console.log(e);
  init = false;
});