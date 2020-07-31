"use strict";
// Generic Webapp implementation
// Johan Coppieters, Feb-Apr 2019.
//
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
exports.WebApp = exports.Context = exports.single = exports.now = exports.two = exports.char = exports.ascii = void 0;
const ejs = require("ejs");
const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
const base_1 = require("./base");
;
//////////////////////
// Helper functions //
//////////////////////
function ascii(char) {
    return char.charCodeAt(0);
}
exports.ascii = ascii;
function char(ascii) {
    return String.fromCharCode(ascii);
}
exports.char = char;
function two(n) {
    return (n < 10) ? ("0" + n) : n.toString();
}
exports.two = two;
function now() {
    const aDate = new Date();
    return aDate.getFullYear() + "-" +
        two(aDate.getMonth() + 1) + "-" +
        two(aDate.getDate()) + " " +
        two(aDate.getHours()) + ":" +
        two(aDate.getMinutes()) + ":" +
        two(aDate.getSeconds());
}
exports.now = now;
function single(val) {
    return (val instanceof Array) ? val[0] : val;
}
exports.single = single;
///////////////////
// Context Class //
///////////////////
class Context {
    constructor(body, req, res) {
        const bodyParams = qs.parse(body);
        const urlParts = url.parse(req.url, true);
        this.params = Object.assign(Object.assign({}, bodyParams), urlParts.query);
        // url = /[request]/[action]/[id]
        let path = this.path = urlParts.pathname;
        if (path[0] === "/")
            path = path.substring(1);
        const parts = path.split("/");
        // get action and id from the params or if not specified from the url when available
        this.action = single(this.params.action) || ((parts.length > 1) ? parts[1] : "") || single(this.params.daction);
        this.id = single(this.params.id) || ((parts.length > 2) ? parts[2] : "");
        // some easy to use stuff
        this.method = req.method;
        this.request = parts[0];
        this.req = req;
        this.res = res;
    }
    hex(n) {
        n = Math.floor(n);
        return "0x" + n.toString(16);
    }
    makeInt(i) {
        if (i && (i[0] === '0') && (i[1] === 'x'))
            return parseInt(i.substr(2), 16);
        else
            return parseInt(i);
    }
    addr(a) {
        const parts = a.split(";");
        return { logicalNodeAddress: parseInt(parts[0], 16),
            logicalAddress: parseInt((parts.length > 1) ? parts[1] : "0", 16) };
    }
    parseAddress(suggestion) {
        const parts = suggestion.split(":");
        if (parts.length > 1) {
            this["masterAddress"] = parts[0];
            this["masterPort"] = parseInt(parts[1]);
            return true;
        }
        else {
            return false;
        }
    }
    getMaster(tryName, newAction) {
        const suggestion = this[tryName] || this.params[tryName];
        // try "in 1 variable" in the "action" part of the URL
        if (this.parseAddress(suggestion)) {
            // replace action if one was suggested
            if (newAction)
                this.action = newAction;
        }
        else {
            const master = (this.params["masterAddress"]) ?
                this.getParam({ name: "masterAddress", type: "string" }) :
                this.getParam({ name: "master", type: "string" });
            // try "in 1 variable" in the "masterAddress" or "master" 
            if (!this.parseAddress(master)) {
                // old fashion way -> in 2 variables
                this["masterAddress"] = master;
                this["masterPort"] = (this.params["masterPort"]) ?
                    this.getParam({ name: "masterPort", type: "integer", default: 5001 }) :
                    this.getParam({ name: "port", type: "integer", default: 5001 });
            }
        }
    }
    getUnit() {
        const unitStr = this.getParam({ name: "unit", type: "string" });
        if (unitStr.indexOf(";") > 0) {
            // unit=0x23;0x12
            return this.addr(unitStr);
        }
        else {
            // node=0x23, unit=0x12  or  node=35, unit=17
            return { logicalNodeAddress: this.getParam({ name: "node", type: "integer" }),
                logicalAddress: this.getParam({ name: "unit", type: "integer" }) };
        }
    }
    getParam(spec) {
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
            }
            else
                spec.type = "string";
        }
        let val = this.params[spec.name];
        if (spec.type === "integer") {
            let num = this.makeInt(single(val));
            return (isNaN(num) ? spec.default : num);
        }
        else if ((typeof val === "undefined") || (val === null)) {
            return spec.default;
        }
        else if (spec.type === "string") {
            return single(val);
        }
        else if (spec.type === "integers") {
            if (val instanceof Array)
                return val.map(s => parseInt(s));
            else {
                let num = this.makeInt(single(val));
                return (isNaN(num) ? spec.default : [num]);
            }
        }
        else if (spec.type === "strings") {
            if (val instanceof Array)
                return val;
            else {
                return [val];
            }
        }
        else {
            // no type nor default specified 
            return val;
        }
    }
}
exports.Context = Context;
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
class WebApp extends base_1.Base {
    constructor(type, log) {
        super(type, true, log);
        this.port = 80;
        this.log("Creating http server");
        this.files = {};
        this.server = http.createServer((req, res) => {
            this.doServe(req, res).then(result => {
                res.writeHead(result.status, { 'Content-Type': result.type || 'text/html' });
                res.write(result.data);
                res.end();
            }).catch(reason => {
                res.writeHead(501, { 'Content-Type': 'text/html' });
                res.write(reason.toString());
                res.end();
            });
        });
    }
    serve(onConnected) {
        this.log("WebApp - Start serving http on port " + this.port);
        this.server.listen(this.port, onConnected);
    }
    addFile(name, filename, type, enc) {
        this.addContent(name, fs.readFileSync(filename, enc || 'utf-8'), type || "text/html", filename);
    }
    addContent(name, content, type, filename) {
        this.files[name] = { content, type, filename };
    }
    getFile(name) {
        return this.files[name];
    }
    image(filename, type) {
        type = type || "image/jpeg";
        if (type.indexOf("/") < 0)
            type = "image/" + type;
        const data = fs.readFileSync(filename);
        return { status: 200, type: type, data };
    }
    file(name) {
        const file = this.getFile(name);
        return { status: 200, data: file.content, type: file.type };
    }
    html(html) {
        return { status: 200, data: html, type: "text/html" };
    }
    ejs(name, context, objects) {
        const file = this.getFile(name);
        if (file) {
            // copy objects into context
            for (const key in objects)
                context[key] = objects[key];
            try {
                const html = ejs.render(file.content, context, { root: __dirname, filename: file.filename });
                return { status: 200, type: file.type, data: html };
            }
            catch (e) {
                return this.error(context, e.toString());
            }
        }
        else {
            return this.notFound();
        }
    }
    json(objects) {
        return { status: 200, data: JSON.stringify(objects), type: "application/json" };
    }
    doServe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = yield this.parseRequest(req, res);
            try {
                const httpResult = yield this.doRequest(context);
                return httpResult;
            }
            catch (e) {
                return this.error(context, e);
            }
        });
    }
    doRequest(context) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((context.request === "favicon.ico") || (context.request === "404")) {
                return this.notFound();
            }
            else if (context.request === "restart") {
                setTimeout(() => { process.exit(-1); }, 500);
                return this.renderRestart();
            }
            else {
                return { status: 200, type: "text/html",
                    data: "hello there ! " + context.method + ":" + context.request + "/" + context.action };
            }
        });
    }
    notFound(filename = "") {
        return {
            status: 404, type: "text/html",
            data: "<html><head><title>File " + filename + " not found</title></head><body>These are not the droids your are looking for</body></html>"
        };
    }
    error(context, msg = "") {
        return {
            status: 202, type: "text/html",
            data: "<html><head><title>Error in " + context.request + "/" + context.action + "</title></head>" +
                "<body><h1>Error</h1>During " + context.method + " of " + context.request + "/" + context.action + " :</br>" + msg + "</body></html>"
        };
    }
    renderRestart() {
        return { status: 200, type: "text/html",
            data: '<html><meta http-equiv="refresh" content="10; url=/">Restarting...  please wait</html>' };
    }
    parseRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('error', error => {
                    reject(error);
                });
                req.on('end', () => {
                    resolve(new Context(body, req, res));
                });
            });
        });
    }
}
exports.WebApp = WebApp;
//# sourceMappingURL=webapp.js.map