import { Platform } from "./server/platform";
import { Unit, Node, UnitExtendedType } from "./duotecno/protocol";
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
let u = new Unit(n, Sanitizers.unitInfo({name: "unit|123 $", type: 7}));
console.log("Testing names -> getName = " + u.getName() + ", getDisplayname = " + u.getDisplayName() + ", type " + u.type + ", extType = " + u.extendedType + ", getTypeName = " + u.typeName());
u = new Unit(n, Sanitizers.unitInfo({name: "unit|20", type: 1}));
console.log("Testing names -> getName = " + u.getName() + ", getDisplayname = " + u.getDisplayName() + ", type " + u.type + ", extType = " + u.extendedType + ", getTypeName = " + u.typeName());

//if (platform) { 
//  platform.accessories((list) => {
//    console.log("Added accessories: ", list);
//  });
//}
