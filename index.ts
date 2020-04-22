import { Platform } from "./server/platform";

console.log("running in directory: " + process.cwd());

module.exports = function (homebridge) {
  console.log("registering Duotecno Platform");
  homebridge.registerPlatform("homebridge-duotecno", "DuotecnoPlatform", Platform, false);
};
