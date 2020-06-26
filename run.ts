import { SocApp } from "./server/socapp";

console.log("run.ts - running in directory: " + process.cwd());

const socServer = new SocApp(null, "server", console.log);
socServer.serve();