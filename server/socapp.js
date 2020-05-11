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
const net = require("net");
const ws_1 = require("ws");
const fs = require("fs");
const mime = require("mime-types");
const webapp_1 = require("./webapp");
const support_1 = require("./support");
////////////////
// Web server //
////////////////
class SocApp extends webapp_1.WebApp {
    constructor(system, type, log) {
        super(type, log);
        this.connected = false;
        this.system = system;
        this.support = new support_1.Support(system, type, true, log);
    }
    doRequest(context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (context.request === "") {
                return this.serveFile("/index.html");
            }
            else if (context.request === "restart") {
                setTimeout(() => { process.exit(-1); }, 500);
                // but ofcourse, someone needs to restart the server...
                return this.renderRestart();
            }
            else {
                try {
                    return this.serveFile(context.path);
                }
                catch (err) {
                    this.err("Error serving URL: " + context.req.url);
                    return this.notFound(context.req.url);
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
    serveFile(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = fs.readFileSync("www" + fn);
            const type = mime.lookup(fn) || "application/text";
            this.log("Serving file: " + fn + " - " + type);
            return { status: 200, data, type };
        });
    }
    // Handle new incomming WebSocket client
    handleClient(client, req) {
        this.client = client;
        let target;
        const clientAddr = client._socket.remoteAddress;
        const log = (msg) => this.log('Proxy - ' + clientAddr + ': ' + msg);
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
            this.connected = true;
            target.setNoDelay(); // disable Nagle
            log("connected to target -> " + url);
        });
        target.on('data', (data) => {
            const msg = data.toString();
            log("received from target: " + msg.substr(0, msg.length - 1));
            try {
                client.send(msg);
            }
            catch (e) {
                log("client sending error: " + e.message + ", cleaning up target");
                target.end();
            }
        });
        target.on('end', () => {
            log('target disconnected');
            client.close();
            this.connected = false;
        });
        target.on('error', (err) => {
            log('target error' + err);
            target.end();
            client.close();
            this.connected = false;
        });
        ///////////////////////////////////
        // websocket connection handling //
        ///////////////////////////////////
        client.on('message', (msg) => {
            // log('got message from websocket: ' + msg.substr(0, msg.length-1));
            // Let's hope the socket is buffering even before the connection is fully open
            // if (! this.connected) log('Not yet connected!!') else
            const result = this.support.handle(msg);
            if (result.done) {
                if (result.answer)
                    this.client.send(result.answer);
            }
            else {
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