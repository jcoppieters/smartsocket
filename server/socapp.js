"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocApp = void 0;
const fs = require("fs");
const mime = require("mime-types");
const net = require("net");
const ws_1 = require("ws");
const support_1 = require("./support");
const webapp_1 = require("./webapp");
////////////////
// Web server //
////////////////
class SocApp extends webapp_1.WebApp {
    constructor(system, type, log, port) {
        super(type, log);
        // hashmap with all connected clients
        this.clients = {};
        this.readConfig();
        this.port = port || this.config.port || this.port || 80;
        this.system = system;
        this.support = new support_1.Support(system, log);
    }
    doRequest(context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (context.request === "") {
                return this.serveFile(context, "/index.html");
            }
            else if (context.request === "log") {
                return this.renderLog();
            }
            else if (context.request === "restart") {
                setTimeout(() => { process.exit(-1); }, 500);
                // but ofcourse, someone needs to restart the server...
                return this.renderRestart();
            }
            else if (context.req.url === "/apple-touch-icon-precomposed.png") {
                return this.serveFile(context, "/assets/imgs/apple-touch-icon-precomposed.png");
            }
            else {
                try {
                    return this.serveFile(context, context.path);
                }
                catch (err) {
                    this.err("Error serving URL: " + context.req.url);
                    return this.serveFile(context, "/index.html");
                    // return this.notFound(context.req.url);
                }
            }
        });
    }
    serve() {
        this.log("SocApp - Start http server on port " + this.port);
        super.serve(() => {
            const wsServer = new ws_1.Server({ server: this.server });
            wsServer.on('connection', this.handleClient.bind(this));
        });
    }
    serveFile(context, fn) {
        var _a, _b;
        const data = fs.readFileSync("www" + fn);
        const type = mime.lookup(fn) || "application/text";
        this.log("Serve - " + (((_b = (_a = context.req) === null || _a === void 0 ? void 0 : _a.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress) || "no-remote") + ": " + fn + " - " + type);
        return { status: 200, data, type };
    }
    renderLog() {
        const clientKeys = Object.keys(this.clients);
        const seen = clientKeys.length;
        const connected = clientKeys.reduce((acc, k) => acc + (this.clients[k].connected ? 1 : 0), 0);
        const cList = clientKeys.filter(k => this.clients[k].connected).map(k => `<li>${k}: ${this.clients[k].lastseen}</li>`).join("");
        const sList = clientKeys.filter(k => !this.clients[k].connected).map(k => `<li>${k}: ${this.clients[k].lastseen}</li>`).join("");
        return { status: 200, type: "text/html", data: `
      <html><header><title>Akiworks SmartServer status</title></header>
       <body>
        <h1>Connections: ${seen}</h1>
        <h2>Open: ${connected}</h2>
        <ul>${cList}</ul>
        <h2>closed: ${seen - connected}</h2>
        <ul>${sList}</ul>
       </body>
      <footer><hr /><small>© Duotechno & Johan Coppieters</small></footer></html>
    ` };
    }
    // Handle new incomming WebSocket client
    handleClient(client, req) {
        let target;
        const clientAddr = client._socket.remoteAddress;
        const log = (msg) => this.log('Proxy - ' + clientAddr + ': ' + msg);
        const info = (this.config.debug) ?
            (msg) => this.log('Proxy - ' + clientAddr + ': ' + msg) :
            (msg) => null;
        /////////////////////////////////////
        // url parsing to find ip and port //
        /////////////////////////////////////
        const url = (req ? req.url : client.upgradeReq.url).substr(1);
        const parts = url.split(':');
        if (parts.length != 2) {
            log("invalid target address: " + url);
            return;
        }
        const ipAddress = parts[0];
        const portNr = parts[1];
        log("websocket proxy to ip: " + ipAddress + ", port: " + portNr);
        /////////////////////////////////
        // Target connection handling  //
        /////////////////////////////////
        target = net.createConnection(portNr, ipAddress, () => {
            target.setNoDelay(); // disable Nagle
            log("connected to target -> " + url);
            this.clients[url] = { connected: true, lastseen: new Date() };
        });
        target.on('data', (data) => {
            const msg = data.toString();
            info("received from target: " + msg.substr(0, msg.length - 1));
            try {
                client.send(msg);
                this.clients[url].lastseen = new Date();
            }
            catch (e) {
                log("client sending error: " + e.message + ", cleaning up target");
                target.end();
            }
        });
        target.on('end', () => {
            log('target disconnected');
            client.close();
            this.clients[url].connected = false;
        });
        target.on('error', (err) => {
            log('target error' + err);
            target.end();
            client.close();
            if (this.clients[url])
                this.clients[url].connected = false;
        });
        ///////////////////////////////////
        // websocket connection handling //
        ///////////////////////////////////
        client.on('message', (msg) => {
            // log('got message from websocket: ' + msg.substr(0, msg.length-1));
            // Let's hope the socket is buffering even before the connection is fully open
            // if (! connected) log('Not yet connected!!') else
            const result = this.support.handle(msg);
            if (result.done) {
                if (result.answer)
                    client.send(result.answer);
            }
            else {
                info('received from client: ' + msg.substr(0, msg.length - 1));
                target.write(msg);
            }
        });
        client.on('close', (code, reason) => {
            log('websocket disconnected: ' + code + ' [' + reason + ']');
            target.end();
        });
        client.on('error', (err) => {
            log('websocket error: ' + err);
            target.end();
        });
    }
}
exports.SocApp = SocApp;
//# sourceMappingURL=socapp.js.map