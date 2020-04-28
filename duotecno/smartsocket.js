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
const kWebSocket = false;
function getSocket(address, port, data, end, log, err) {
    return __awaiter(this, void 0, void 0, function* () {
        if (kWebSocket)
            return getWebSocket(address, port, data, end, log, err);
        else
            return getTCPSocket(address, port, data, end, log, err);
    });
}
exports.getSocket = getSocket;
function getTCPSocket(address, port, data, end, log, err) {
    return __awaiter(this, void 0, void 0, function* () {
        const socket = new net.Socket();
        if (!socket)
            throw (new Error("could create new socket"));
        return new Promise((resolve, reject) => {
            ///////////////////////
            // set data listener //
            socket.on("data", (message) => {
                // messages need to be buffered until "]" is received
                data(message.toString());
            });
            ////////////////////////////////////////////////////////////////
            // set an error listener, if available reject pending promise //
            socket.on('error', (e) => {
                err("TCP Socket: " + e);
            });
            ///////////////////////////////////////////
            // set end: the server closed the socket //
            socket.on("end", () => {
                end();
            });
            ////////////////////////////////
            // try to open the connection //
            try {
                log("starting connection to " + address + " on port " + port);
                socket.connect({ port: port, host: address }, () => {
                    socket.setNoDelay(); // disable Nagle
                    // resolve our promise with the opened socket
                    resolve(socket);
                });
            }
            catch (e) {
                err("Failed to open a connection to : " + address + " on port " + port);
                reject(e);
            }
        });
    });
}
function getWebSocket(address, port, data, end, log, err) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                ////////////////////////////////
                // try to open the connection //
                log("opening connection to the SmartSocket Server");
                const wsserver = this.system.config.socketserver + ":" + this.system.config.socketport;
                const tcpserver = address + ":" + port;
                const socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);
                if (!socket)
                    throw (new Error("could create new web socket"));
                ///////////////////////
                // set data listener //
                this.socket.onmessage = (message) => {
                    // messages need to be buffered until "]" is received
                    data(message.data);
                };
                ///////////////////////////
                // set an error listener //
                this.socket.onerror = (e) => {
                    err("Socket: " + e);
                };
                ///////////////////////////////////////////
                // set end: the server closed the socket //
                this.socket.onclose = () => {
                    end();
                };
                this.socket.onopen = () => {
                    resolve(this.socket);
                };
            }
            catch (e) {
                this.err("Failed to open a connection on port " + this.getPort());
                reject(e);
            }
        });
    });
}
//# sourceMappingURL=smartsocket.js.map