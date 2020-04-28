"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = require("./server/platform");
console.log("running in directory: " + process.cwd());
function adder(plugin, platform, list) {
    console.log("************* plugin: " + plugin + ", platform: " + platform, list);
}
const platform = new platform_1.Platform(console.log, { debug: true, smappee: true, smartapp: true, system: true, manufacturer: "Duotecno", platform: "ssoc" }, { registerPlatformAccessories: adder });
//if (platform) { 
//  platform.accessories((list) => {
//    console.log("Added accessories: ", list);
//  });
//}
//# sourceMappingURL=index.spec.js.map