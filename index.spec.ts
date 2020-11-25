import { Platform } from "./server/platform";
import { Unit, Node } from "./duotecno/protocol";
import { Sanitizers } from "./duotecno/types";
import { Master } from "./duotecno/master";
import { System } from "./duotecno/system";
import { SmartApp } from "./server/smartapp";
import { Smappee } from "./server/smappee";

console.log("running in directory: " + process.cwd());

function adder(plugin: string, platform: string, list: any[]) {
  console.log("************* plugin: " + plugin + ", platform: " + platform, list);
}

function tester() {
  const platform = new Platform(console.log, {debug: true, smappee: true, smartapp: true, socapp: false, system: true, 
    manufacturer: "Duotecno", platform: "ssoc"}, {registerPlatformAccessories: adder});


  // testing
  let m = new Master(platform.system, Sanitizers.masterConfig({name: "master1", address: "12", port: 21, password:"x", active: true, nodenames: {}}));
  let n = new Node(m, Sanitizers.nodeInfo({name: "node1"}));
  let u = new Unit(n, Sanitizers.unitInfo({name: "unit|123 $", type: 7}));
  console.log("Testing names -> getName = " + u.getName() + ", getDisplayname = " + u.getDisplayName() + ", type " + u.type + ", extType = " + u.extendedType + ", getTypeName = " + u.typeName());
  u = new Unit(n, Sanitizers.unitInfo({name: "unit|20", type: 1}));
  console.log("Testing names -> getName = " + u.getName() + ", getDisplayname = " + u.getDisplayName() + ", type " + u.type + ", extType = " + u.extendedType + ", getTypeName = " + u.typeName());
}
function alertS(a, b) {
  console.log(a, b);
}

let system;
try {
  system = new System(true, console.log, true);
  system.openMasters(true);      

  try {
    const smappee = new Smappee(system, true, console.log, alertS, true);
    const smartapp = new SmartApp(system, smappee, null, console.log, true);
    smartapp.serve();
  } catch(err) {
    console.log(err);
}

} catch(err) {
  console.log(err);
  if (!system) {
    console.log("Can't run without a System.");
  }
}
