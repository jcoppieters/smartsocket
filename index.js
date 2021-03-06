"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = require("./server/platform");
console.log("index.ts - running in directory: " + process.cwd());
module.exports = function (homebridge) {
    console.log("registering Duotecno Platform");
    homebridge.registerPlatform("homebridge-smartsystem", "DuotecnoPlatform", platform_1.Platform, true);
};
//# sourceMappingURL=index.js.map