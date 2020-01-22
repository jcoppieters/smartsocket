import * as net from 'net';
import * as url from "url";
import { Server as WSServer } from 'ws';
import * as fs from 'fs';
import * as mime from 'mime-types';
import { WebApp, HttpResponse, Context} from "./webapp";
import { LogFunction } from './logger';


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

  log("websocket proxy to ip: " + parts[0] + ", port: " + parts[1]);

  ////////////////////////////////
  // Target connection handling 
  target = net.createConnection(parts[1], parts[0], function() {
    connected = true;
    target.setNoDelay(); // disable Nagle
    log("connected to target -> " + url);
  });
  target.on('data', function(data) {
    const msg = data.toString();
    // log("received from target: " + msg.substr(0, msg.length-1));
    try {
      client.send(msg);
    } catch(e) {
      log("client sending error: " + e.message + ", cleaning up target");
      target.end();
    }
  });
  target.on('end', function() {
      log('target disconnected');
      client.close();
      connected = false;
  });
  target.on('error', function(err) {
      log('target error' + err);
      target.end();
      client.close();
      connected = false;
  });

  ///////////////////////////////////
  // websocket connection handling
  client.on('message', function(msg) {
    // log('got message from websocket: ' + msg.substr(0, msg.length-1));
    // Let's hope the socket is buffering even before the connection is fully open
    // if (! connected) log('Not yet connected!!') else
    target.write(msg);
  });
  client.on('close', function(code, reason) {
    log('websocket disconnected: ' + code + ' [' + reason + ']');
    target.end();
  });
  client.on('error', function(err) {
    log('websocket error: ' + err);
    target.end();
  });
}

export class SocApp extends WebApp {

  constructor(port: number, log: LogFunction) {
    super(port, log);
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
    this.server.listen(this.port, () => {
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