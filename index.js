#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const http = require("http");
const https = require("https");
const fs = require("fs");
const ws_1 = require("ws");
const kPort = 9999;
// Handle new WebSocket client
function handleClient(client, req) {
    let connected = false;
    let target;
    const clientAddr = client._socket.remoteAddress;
    const log = (msg) => console.log(' ' + clientAddr + ': ' + msg);
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
// Process an HTTP static file request
function http_request(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<html><h1>The Great SmartSocket</h1><p>Johan Coppieters, 2020</p></html>');
}
console.log("SmartSocket starting up.");
let webServer;
try {
    // try https
    const cert = fs.readFileSync('ssh.cert');
    const key = fs.readFileSync('ssh.key');
    webServer = https.createServer({ cert, key }, http_request);
    console.log(" - Running in encrypted HTTPS (wss://) mode using: ssh.cert, ssh.key");
}
catch (e) {
    try {
        // fallback to http
        webServer = http.createServer(http_request);
        console.log(" - Running in unencrypted HTTP (ws://) mode");
    }
    catch (e) {
        // give up
        console.log(" - Can't start up: " + e.message);
    }
}
if (webServer) {
    webServer.listen(kPort, () => {
        const wsServer = new ws_1.Server({ server: webServer });
        wsServer.on('connection', handleClient);
    });
}
//# sourceMappingURL=index.js.map