// Generic Webapp implementation
// Johan Coppieters, Feb-Apr 2019.
//

import * as ejs from "ejs";
import * as http from "http";
import * as fs from "fs";
import * as url from "url";
import * as qs from "querystring";
import { Base } from './base';
import { LogFunction } from '../duotecno/types';
import * as types from "../duotecno/types";

export interface Params {[key: string]: string | Array<string>};

export interface Spec {
  name: string;
  type?: "string" | "integer" | "strings" | "integers";
  default?: string | number | Array<string> | Array<number>
}

// Dynamic type mapping. Thanks to Ruben
type TypeMap = {
  'integer': number;
  'integers': Array<number>;
  'string': string;
  'strings': Array<string>;
};
export type SpecType<T extends Spec> = TypeMap[T["type"]];


// output  for a web request
export interface HttpResponse {
  status: number;                   // http status 200, 404, ...
  type: string;                     // mime type
  data: string | Buffer;
}

// use to store the entries in our hashmap
export interface WebAppFile {
  content: string;
  type: string;       // "text/html", "text/css", "application/javascript", ...
  filename: string;
}


//////////////////////
// Helper functions //
//////////////////////

// move most of them to types.ts
export function single(val: string | Array<string>): string {
  return (val instanceof Array) ? val[0] : val;
}


///////////////////
// Context Class //
///////////////////
export class Context {
  request: string;                  // second part of URL or through urlparams/body
  method: string;                   // post, get, put, ...
  action: string;                   // first part of URL
  id: string;                       // could be number, but let's be open...
  params: Params;                   // body and urlparams
  path: string;                     // the url path part
  nums: number[];                   // the URL in number if they exist
  req: http.IncomingMessage;        // from http request
  res: http.ServerResponse;         // from http request

  time = types.time;
  hex = types.hex;
  watt = types.watt;
  date = types.date;
  datetime = types.datetime;
  makeInt = types.makeInt;

  constructor(body: string, req: http.IncomingMessage, res: http.ServerResponse) {
    const bodyParams = qs.parse(body)
    const urlParts = url.parse(req.url, true);
    this.params = {...bodyParams, ...urlParts.query};

    // url = /[request]/[action]/[id]
    let path = this.path = urlParts.pathname;
    if (path[0] === "/") path = path.substring(1);
    const parts = path.split("/");  

    // get action and id from the params or if not specified from the url when available
    this.action = single(this.params.action) || ((parts.length > 1) ? parts[1] : "") || single(this.params.daction);
    this.id = single(this.params.id) || ((parts.length > 2) ? parts[2] : "");

    // some easy to use stuff
    this.method = req.method;
    this.request = parts[0];
    this.req = req;
    this.res = res;

    this.nums = [0,0,0];
    // check short urls with numbers a parts
    const p1 = parseInt(this.request);
    if (! isNaN(p1)) this.nums[0] = p1;
    const p2 = parseInt(this.action);
    if (! isNaN(p2)) this.nums[1] = p2;
    const p3 = parseInt(this.id);
    if (! isNaN(p3)) this.nums[2] = p3;
  }

  addr(a: string): {logicalNodeAddress: number, logicalAddress: number } {
    const parts = a.split(";");
    return { logicalNodeAddress: parseInt(parts[0], 16),
             logicalAddress: parseInt((parts.length > 1) ? parts[1] : "0", 16) };
  }

  parseAddress(suggestion): boolean  {
    if (suggestion) {
      const parts = suggestion.split(":");
      if (parts.length > 1) {
        this["masterAddress"] = parts[0];
        this["masterPort"] = parseInt(parts[1]);
        return true;
      }
    }
    return false;
  }

  getMaster(tryName: string, newAction?: string) {
    const suggestion = this[tryName] || <string>this.params[tryName];
    // try "in 1 variable" in the "action" part of the URL
    if (this.parseAddress(suggestion)) {
      // replace action if one was suggested
      if (newAction) this.action = newAction;

    } else {
      const master = (this.params["masterAddress"]) ?
        this.getParam({name: "masterAddress", type: "string"}) :
        this.getParam({name: "master", type: "string"});
      
      // try "in 1 variable" in the "masterAddress" or "master" 
      if (! this.parseAddress(master)) {

        // old fashion way -> in 2 variables
        this["masterAddress"] = master;
        this["masterPort"] = (this.params["masterPort"]) ?
        this.getParam({name: "masterPort", type: "integer", default: 5001}) :
        this.getParam({name: "port", type: "integer", default: 5001})
      }
    }
  }

  getUnit(): {logicalNodeAddress: number, logicalAddress: number } {
    const unitStr = this.getParam({name: "unit", type: "string"});
    if (unitStr.indexOf(";") > 0) {
      // unit=0x23;0x12
      return this.addr(unitStr);
    } else {
      // node=0x23, unit=0x12  or  node=35, unit=17
      return { logicalNodeAddress: this.getParam({name: "node", type: "integer"}),
               logicalAddress: this.getParam({name: "unit", type: "integer"}) };
    }
  }

  getParam<T extends Spec>(spec: T): any /* SpecType<T> */ {
    // infer a type if non is given
    if (typeof spec.type === "undefined") {
      if (typeof spec.default === "number") 
        spec.type = "integer";
      else if (typeof spec.default === "string") 
        spec.type = "string";
      else if (spec.default instanceof Array) {
        if (spec.default.length > 0)
          spec.type = (typeof spec.default[0] === "number") ? "integers" : "strings";
        else
          spec.type = "string"; 
      } else 
        spec.type = "string";
    }

    let val = this.params[spec.name];

    if (spec.type === "integer") {
      let num = this.makeInt(single(val));
      return (isNaN(num) ? spec.default : num);
    
    } else if ((typeof val === "undefined") || (val === null)) {
      return spec.default;

    } else if (spec.type === "string") {
      return single(val);

    } else if (spec.type === "integers") {
      if (val instanceof Array)
        return val.map(s => parseInt(s));
      else {
        let num = this.makeInt(single(val));
        return (isNaN(num) ? spec.default : [num]);
      }
    } else if (spec.type === "strings") {
      if (val instanceof Array)
        return val;
      else {
        return [val];
      }
    } else {
      // no type nor default specified 
      return val;
    }
  }
}

/* add later: https ->
let webServer: http.Server | https.Server;
try {
  // try https
  const cert = fs.readFileSync('ssh.cert');
  const key = fs.readFileSync('ssh.key');
  webServer = https.createServer({cert, key}, http_request);
  console.log(" - Running in encrypted HTTPS (wss://) mode using: ssh.cert, ssh.key");

} catch(e) {
  try {
    // fallback to http
    webServer = http.createServer(http_request);
    console.log(" - Running in unencrypted HTTP (ws://) mode");

  } catch(e) {
    // give up
    console.log(" - Can't start up: " + e.message);
  }
*/

export class WebApp extends Base {
  files: {[filename: string]: WebAppFile};       // hashmap for serving files, including ejs files for rendering
  server: http.Server;
  port: number;

  constructor(type: string, log: LogFunction) {
    super(type, true, log);
    this.port = 80;

    this.log("Creating http server");
    this.files = {};

    this.server = http.createServer( (req: http.IncomingMessage, res: http.ServerResponse) => {
      this.doServe(req, res).then( 
        result => {
          res.writeHead(result.status, {'Content-Type': result.type || 'text/html'});
          res.write(result.data);
          res.end();
        }
      ).catch(
        reason => {
          res.writeHead(501, {'Content-Type': 'text/html'});
          res.write(reason.toString());
          res.end();
        }
      );        
    });
  }

  serve(onConnected?: () => void) {
    this.log("WebApp - Start serving http on port " + this.port);
    this.server.listen(this.port, onConnected);
  }

  addFile(name: string, filename: string, type?: string, enc?: string) {
    this.addContent(name, fs.readFileSync(filename, enc || 'utf-8'), type || "text/html", filename);
  }
  addContent(name: string, content: string, type: string, filename: string) {
    this.files[name] = { content, type, filename };
  }
  getFile(name: string): WebAppFile {
    return this.files[name];
  }

  image(filename: string, type?: string): HttpResponse {
    type = type || "image/jpeg";
    if (type.indexOf("/") < 0) type = "image/" + type;
    const data = fs.readFileSync(filename);
    return { status: 200, type: type, data }
  }

  file(name: string): HttpResponse {
    const file = this.getFile(name);
    return { status: 200, data: file.content, type: file.type };
  }
  html(html: string): HttpResponse {
    return { status: 200, data: html, type: "text/html" }
  }
  ejs(name: string, context: Context, objects: object): HttpResponse {
    const file = this.getFile(name);
    if (file) {
      // copy objects into context
      for (const key in objects) context[key] = objects[key];
      try {
        const html = ejs.render(file.content, context, { root: __dirname, filename: file.filename });
        return { status: 200, type: file.type, data: html };

      } catch(e) {
        return this.error(context, e.toString());
      }

    } else {
      return this.notFound();
    }
  }
  json(objects: object): HttpResponse {
    return { status: 200, data: JSON.stringify(objects), type: "application/json" };
  }


  async doServe(req: http.IncomingMessage, res: http.ServerResponse): Promise<HttpResponse> {
    const context = await this.parseRequest(req, res);
    try {
      const httpResult = await this.doRequest(context);
      return httpResult;

    } catch (e) {
      return this.error(context, e);
    }
  }

  async doRequest(context: Context): Promise<HttpResponse> {
    if ((context.request === "favicon.ico") || (context.request === "404")) {
      return this.notFound();

    } else if (context.request === "restart") {
      setTimeout(() => { process.exit(-1) }, 500);
      return this.renderRestart();

    } else {
      return {status: 200, type: "text/html", 
              data: "hello there ! " + context.method + ":" + context.request + "/" + (context.action||"")};
    }
  }

  notFound(filename = ""): HttpResponse {
    return {
      status: 404, type: "text/html", 
      data: "<html><head><title>File " + filename + " not found</title></head><body>These are not the droids your are looking for</body></html>"
    };
  }

  error(context: Context, msg = "", json = false): HttpResponse {
    return json ? {
      status: 202, type: "json/application", data: '{"error": "'+msg+'"}'
    } : {
      status: 202, type: "text/html", 
      data: "<html><head><title>Error in " + context.request + "/" + context.action + "</title></head>" + 
            "<body><h1>Error</h1>During " + context.method + " of " + context.request + "/" + context.action + " :</br>" + msg + "</body></html>"
    };
  }

  renderRestart(): HttpResponse {
    return { status: 200, type: "text/html", 
             data: '<html><meta http-equiv="refresh" content="10; url=/">Restarting...  please wait</html>' };
  }


  async parseRequest(req: http.IncomingMessage, res: http.ServerResponse): Promise<Context> {
    return new Promise((resolve, reject) => {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('error', error => {
        reject(error)
      });
      req.on('end', () => {
        resolve(new Context(body, req, res));
      });
    });
  }  
}
