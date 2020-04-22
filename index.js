"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_1 = require("./server/platform");
console.log("running in directory: " + process.cwd());
module.exports = function (homebridge) {
    console.log("registering Duotecno Platform");
    homebridge.registerPlatform("homebridge-duotecno", "DuotecnoPlatform", platform_1.Platform, false);
};
//# sourceMappingURL=index.js.map