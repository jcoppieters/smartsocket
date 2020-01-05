"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const ws_1 = require("ws");
const fs = require("fs");
const mime = require("mime-types");
const webapp_1 = require("./webapp");
// Handle new WebSocket client
function handleClient(client, req) {
    let connected = false;
    let target;
    const clientAddr = client._socket.remoteAddress;
    const log = (msg) => console.log('Proxy - ' + clientAddr + ': ' + msg);
    /////////////////////////////////////
    // url parsing to find ip and port
    const url = (req ? req.url : client.upgradeReq.url).substr(1);
    const parts = url.split(':');
    if (parts.length != 2) {
        log("invalid target address: " + url);
        return;
    }
    log("websocket proxy to ip: " + parts[0] + ", port: " + parts[1]);
    ////////////////////////////////
    // Target connection handling 
    target = net.createConnection(parts[1], parts[0], function () {
        connected = true;
        target.setNoDelay(); // disable Nagle
        log("connected to target -> " + url);
    });
    target.on('data', function (data) {
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
    target.on('end', function () {
        log('target disconnected');
        client.close();
        connected = false;
    });
    target.on('error', function (err) {
        log('target error' + err);
        target.end();
        client.close();
        connected = false;
    });
    ///////////////////////////////////
    // websocket connection handling
    client.on('message', function (msg) {
        log('got message from websocket: ' + msg.substr(0, msg.length - 1));
        // Let's hope the socket is buffering even before the connection is fully open
        // if (! connected) log('Not yet connected!!') else
        target.write(msg);
    });
    client.on('close', function (code, reason) {
        log('websocket disconnected: ' + code + ' [' + reason + ']');
        target.end();
    });
    client.on('error', function (err) {
        log('websocket error: ' + err);
        target.end();
    });
}
class SocApp extends webapp_1.WebApp {
    constructor(port, log) {
        super(port, log);
    }
    doRequest(context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (context.request === "") {
                return this.serveFile("/index.html");
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
        this.server.listen(this.port, () => {
            const wsServer = new ws_1.Server({ server: this.server });
            wsServer.on('connection', handleClient);
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
}
exports.SocApp = SocApp;
//# sourceMappingURL=socapp.js.map