import { Platform } from "./server/platform";

console.log("index.ts - running in directory: " + process.cwd());

module.exports = function (homebridge) {
  console.log("registering Duotecno Platform");
  homebridge.registerPlatform("homebridge-smartsystem", "DuotecnoPlatform", Platform, true);
};
