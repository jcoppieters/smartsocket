import { Platform } from "./server/platform";
import { Unit, Node } from "./duotecno/protocol";
import { Sanitizers } from "./duotecno/types";
import { Master } from "./duotecno/master";

console.log("running in directory: " + process.cwd());

function adder(plugin: string, platform: string, list: any[]) {
  console.log("************* plugin: " + plugin + ", platform: " + platform, list);
}


const platform = new Platform(console.log, {debug: true, smappee: true, smartapp: true, socapp: false, system: true, 
                              manufacturer: "Duotecno", platform: "ssoc"}, {registerPlatformAccessories: adder});

// testing
let m = new Master(platform.system, Sanitizers.masterConfig({name: "master1", address: "12", port: 21, password:"x", active: true}));
let n = new Node(m, Sanitizers.nodeInfo({name: "node1"}));
let u = new Unit(n, Sanitizers.unitInfo({name: "unit|123 $"}));
console.log("name = " + u.name + ", getName = " + u.getName() + ", displayname = " + u.displayName + ", getDisplayname = " + u.getDisplayName());

//if (platform) { 
//  platform.accessories((list) => {
//    console.log("Added accessories: ", list);
//  });
//}
