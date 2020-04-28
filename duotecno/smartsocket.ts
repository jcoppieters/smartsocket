import * as net from "net";

export type SmartSocket = net.Socket;

const kWebSocket = false;

export async function getSocket(address: string, port: number,
                                data: (msg: string) => void, 
                                end: (end: void) => void, 
                                log: (log: string) => void, 
                                err: (err: string) => void): Promise<SmartSocket> {
  if (kWebSocket)
    return getWebSocket(address, port, data, end, log, err);
  else
    return getTCPSocket(address, port, data, end, log, err);
}


async function getTCPSocket(address: string, port: number,
                            data: (msg: string) => void, 
                            end: (end: void) => void, 
                            log: (log: string) => void, 
                            err: (err: string) => void): Promise<SmartSocket> {
  
  const socket = new net.Socket();
  if (!socket) throw( new Error("could create new socket"));

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
      socket.connect({port: port, host: address}, () => {
        socket.setNoDelay(); // disable Nagle
        
        // resolve our promise with the opened socket
        resolve(socket);
      });
    } catch(e) {
      err("Failed to open a connection to : " + address + " on port " + port);
      reject(e);
    }
  });
}


async function getWebSocket(address: string, port: number,
                            data: (msg: string) => void, 
                            end: (end: void) => void, 
                            log: (log: string) => void, 
                            err: (err: string) => void): Promise<SmartSocket> {

  return new Promise((resolve, reject) => {
    try {
      ////////////////////////////////
      // try to open the connection //
      log("opening connection to the SmartSocket Server");
      const wsserver = this.system.config.socketserver + ":" + this.system.config.socketport;
      const tcpserver = address + ":" + port;
      const socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);
      if (!socket) throw(new Error("could create new web socket"));

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


    } catch(e) {
      this.err("Failed to open a connection on port " + this.getPort());
      reject(e);
    }
  });
}