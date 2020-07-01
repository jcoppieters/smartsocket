import * as net from 'net';
import { Server as WSServer } from 'ws';
import * as fs from 'fs';
import * as mime from 'mime-types';
import { WebApp, HttpResponse, Context} from "./webapp";
import { LogFunction } from '../duotecno/types';
import { Support } from './support';
import { System } from '../duotecno/system';


////////////////
// Web server //
////////////////
export class SocApp extends WebApp {
  support: Support;
  system: System;

  // hashmap with all connected clients
  clients: { [url:string]: { connected: boolean, lastseen: Date} } = {}; 

  constructor(system: System, type: string, log: LogFunction) {
    super(type, log);
    this.readConfig();
    this.port = this.config.port || this.port || 80;

    this.system = system;
    this.support = new Support(system, log);
  }

  async doRequest(context: Context): Promise<HttpResponse> {
    if (context.request === "") {
      return this.serveFile("/index.html");

    } else if (context.request === "log") {
      return this.renderLog();
      
    } else if (context.request === "restart") {
      setTimeout(() => { process.exit(-1) }, 500);
      // but ofcourse, someone needs to restart the server...
      return this.renderRestart();
      
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
      wsServer.on('connection', this.handleClient.bind(this));
    });
  }

  async serveFile(fn: string): Promise<HttpResponse> {
    const data = fs.readFileSync("www"+fn);
    const type = mime.lookup(fn) || "application/text";
    this.log("Serving file: " + fn + " - " + type);
    return { status: 200, data, type };
  }

  renderLog(): HttpResponse {
    const clientKeys = Object.keys(this.clients);
    const seen = clientKeys.length;
    const connected = clientKeys.reduce((acc, k) => acc + (this.clients[k].connected ? 1 : 0), 0);
    const cList = clientKeys.filter(k => this.clients[k].connected).map(k => `<li>${k}: ${this.clients[k].lastseen}</li>`).join("");
    const sList = clientKeys.filter(k => !this.clients[k].connected).map(k => `<li>${k}: ${this.clients[k].lastseen}</li>`).join("");

    return { status: 200, type: "text/html", data: `
      <html><head><title>Akiworks SmartServer status</title></head>
       <body>
        <h1>Connections: ${seen}</h1>
        <h2>Open: ${connected}</h2>
        <ul>${cList}</ul>
        <h2>closed: ${seen-connected}</h2>
        <ul>${sList}</ul>
       </body>
      </html>
    `};
  }


  // Handle new incomming WebSocket client
  handleClient(client, req) {
    let target: net.Socket;
    const clientAddr = client._socket.remoteAddress;
    const log = (msg) => this.log('Proxy - ' + clientAddr + ': '+ msg);
    const info = (this.config.debug) ?
      (msg) => this.log('Proxy - ' + clientAddr + ': '+ msg) :
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
      this.clients[url] = {connected: true, lastseen: new Date()};
    });
    target.on('data', (data) => {
      const msg = data.toString();
      info("received from target: " + msg.substr(0, msg.length-1));
      try {
        client.send(msg);
        this.clients[url].lastseen = new Date();

      } catch(e) {
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
      } else {
        info('received from client: ' + msg.substr(0, msg.length-1))
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