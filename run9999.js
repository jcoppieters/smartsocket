"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socapp_1 = require("./server/socapp");
console.log("run.ts - running in directory: " + process.cwd());
const socServer = new socapp_1.SocApp(null, "server", console.log, 9999);
socServer.serve();
//# sourceMappingURL=run9999.js.map