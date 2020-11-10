"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = require("./server/platform");
const protocol_1 = require("./duotecno/protocol");
const types_1 = require("./duotecno/types");
const master_1 = require("./duotecno/master");
console.log("running in directory: " + process.cwd());
function adder(plugin, platform, list) {
    console.log("************* plugin: " + plugin + ", platform: " + platform, list);
}
const platform = new platform_1.Platform(console.log, { debug: true, smappee: true, smartapp: true, socapp: false, system: true,
    manufacturer: "Duotecno", platform: "ssoc" }, { registerPlatformAccessories: adder });
// testing
let m = new master_1.Master(platform.system, types_1.Sanitizers.masterConfig({ name: "master1", address: "12", port: 21, password: "x", active: true, nodenames: {} }));
let n = new protocol_1.Node(m, types_1.Sanitizers.nodeInfo({ name: "node1" }));
let u = new protocol_1.Unit(n, types_1.Sanitizers.unitInfo({ name: "unit|123 $", type: 7 }));
console.log("Testing names -> getName = " + u.getName() + ", getDisplayname = " + u.getDisplayName() + ", type " + u.type + ", extType = " + u.extendedType + ", getTypeName = " + u.typeName());
u = new protocol_1.Unit(n, types_1.Sanitizers.unitInfo({ name: "unit|20", type: 1 }));
console.log("Testing names -> getName = " + u.getName() + ", getDisplayname = " + u.getDisplayName() + ", type " + u.type + ", extType = " + u.extendedType + ", getTypeName = " + u.typeName());
//if (platform) { 
//  platform.accessories((list) => {
//    console.log("Added accessories: ", list);
//  });
//}
//# sourceMappingURL=index.spec.js.map