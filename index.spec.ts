import { Platform } from "./server/platform";

console.log("running in directory: " + process.cwd());

function adder(plugin: string, platform: string, list: any[]) {
  console.log("************* plugin: " + plugin + ", platform: " + platform, list);
}

const platform = new Platform(console.log, {debug: true, smappee: true, smartapp: true, socapp: false, system: true, 
                              manufacturer: "Duotecno", platform: "ssoc"}, {registerPlatformAccessories: adder});

//if (platform) { 
//  platform.accessories((list) => {
//    console.log("Added accessories: ", list);
//  });
//}
