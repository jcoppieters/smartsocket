import * as net from 'net';
import { Server as WSServer } from 'ws';
import * as fs from 'fs';
import * as mime from 'mime-types';
import { WebApp, HttpResponse, Context} from "./webapp";
import { LogFunction } from '../duotecno/types';
import { System } from '../duotecno/system';



// Handle new WebSocket client
function handleClient(client, req) {
  let connected = false;
  let target: net.Socket;
  const clientAddr = client._socket.remoteAddress;
  const log = (msg) => console.log('Proxy - ' + clientAddr + ': '+ msg);

  /////////////////////////////////////
  // url parsing to find ip and port
  const url = (req ? req.url : client.upgradeReq.url).substr(1);
  const parts = url.split(':');
  if (parts.length != 2) {
    log("invalid target address: " + url);
    return;
  }

  const ipAddress = parts[0];
  const portNr = parts[1];

  ////////////////////////////////////
  // Internal functions -> no proxy //
  ////////////////////////////////////
  function handleInternal(msg) {
    function getKind(msg) {
      if ((msg[0] == '[') && (msg[1] == 'B'))
        return 'B';
      else if ((msg[0] == '[') && (msg[1] == 'R'))
        return 'R';
      else
        return "X";
    }
    const kind = getKind(msg);
    
    //backup
    if (kind === "B") {
      try{
        log("Backup - " + portNr);
        fs.mkdirSync("./data", { recursive: true });
        fs.writeFileSync("./data/" + ipAddress + ":" + portNr, msg);
      } catch(e) {
        log("error: " + e.message);
      }
      return true;
  
    //restore
    } else if (kind === 'R') {
      log("Restore - " + portNr);
      const data = fs.readFileSync("./data/" + ipAddress + ":" + portNr);
      client.send(data.toString());
      return true;
  
    } else {
      return false;
    }
  }
  

  log("websocket proxy to ip: " + ipAddress + ", port: " + portNr);

  /////////////////////////////////
  // Target connection handling  //
  /////////////////////////////////
  target = net.createConnection(portNr, ipAddress, () => {
    connected = true;
    target.setNoDelay(); // disable Nagle
    log("connected to target -> " + url);
  });
  target.on('data', (data) => {
    const msg = data.toString();
    log("received from target: " + msg.substr(0, msg.length-1));
    try {
      client.send(msg);
    } catch(e) {
      log("client sending error: " + e.message + ", cleaning up target");
      target.end();
    }
  });
  target.on('end', () => {
      log('target disconnected');
      client.close();
      connected = false;
  });
  target.on('error', (err) => {
      log('target error' + err);
      target.end();
      client.close();
      connected = false;
  });

  ///////////////////////////////////
  // websocket connection handling
  client.on('message', (msg) => {
    // log('got message from websocket: ' + msg.substr(0, msg.length-1));
    // Let's hope the socket is buffering even before the connection is fully open
    // if (! connected) log('Not yet connected!!') else
    if (! handleInternal(msg))
      target.write(msg);
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


////////////////
// Web server //
////////////////
export class SocApp extends WebApp {
  system: System;

  constructor(port: number, type: string, log: LogFunction, system: System) {
    super(port, type, log);
    this.system = system;
  }

  async doRequest(context: Context): Promise<HttpResponse> {
    if (context.request === "") {
      return this.serveFile("/index.html");

    } else {
      try {
        return this.serveFile(context.path);

      } catch(err) {
        this.err("Error serving URL: " + context.req.url);
        return this.notFound(context.req.url);
      }
    }
  }

  serve() {
    this.log("SocApp - Start http server on port " + this.port);
    super.serve(() => {
      const wsServer = new WSServer({server: this.server});
      wsServer.on('connection', handleClient);
    });
  }

  async serveFile(fn: string): Promise<HttpResponse> {
    const data = fs.readFileSync("www"+fn);
    const type = mime.lookup(fn) || "application/text";
    this.log("Serving file: " + fn + " - " + type);
    return { status: 200, data, type };
  }
}