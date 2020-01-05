#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socapp_1 = require("./socapp");
const socServer = new socapp_1.SocApp(9999, console.log);
socServer.serve();
//# sourceMappingURL=index.js.map