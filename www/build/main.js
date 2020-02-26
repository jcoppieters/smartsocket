webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return System; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__master__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var System = /** @class */ (function (_super) {
    __extends(System, _super);
    function System(toastCtrl, events) {
        var _this = _super.call(this, "system", false) || this;
        _this.toastCtrl = toastCtrl;
        _this.isBrowser = true;
        _this.isSplitted = false;
        // rebuild active services (units)
        _this.trigger = null;
        _this.moods = [];
        _this.controls = [];
        _this.temperatures = [];
        _this.stores = [];
        _this.events = events;
        _this.readConfig();
        _this.readGroups();
        // open all masters listed in the config
        _this.masters = [];
        _this.openMasters();
        return _this;
    }
    System.prototype.setBrowser = function (isB) {
        this.isBrowser = isB;
    };
    System.prototype.setLogger = function (logger) {
        this.logger = logger;
        // use my log function
        __WEBPACK_IMPORTED_MODULE_3__protocol__["c" /* Protocol */].logger = logger;
    };
    System.prototype.openMasters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inx, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inx = 0;
                        _a.label = 1;
                    case 1:
                        if (!(inx < this.config.cmasters.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.openMaster(this.config.cmasters[inx], inx)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.log(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        inx++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    System.prototype.closeMasters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inx = 0;
                        _a.label = 1;
                    case 1:
                        if (!(inx < this.masters.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.closeMaster(this.masters[inx])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        inx++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    System.prototype.openMaster = function (config, inx) {
        return __awaiter(this, void 0, void 0, function () {
            var master, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        master = new __WEBPACK_IMPORTED_MODULE_1__master__["a" /* Master */](this, config, this.toastCtrl);
                        this.masters[inx] = master;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        // testing
                        if (!master.config.active)
                            return [2 /*return*/];
                        this.log("opening master: " + master.getAddress());
                        return [4 /*yield*/, master.open()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, master.login()];
                    case 3:
                        if (!(_a.sent()))
                            throw (new Error("Failed to log in"));
                        return [4 /*yield*/, master.getDatabase()];
                    case 4:
                        _a.sent();
                        this.log("master: " + master.getAddress() + " opened with " + master.nodes.length + " nodes.");
                        this.triggerRebuild();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        this.err("failed to open master (" + e_1.toString() + ")");
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    System.prototype.closeMaster = function (master) {
        return __awaiter(this, void 0, void 0, function () {
            var inx, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // non-existing master or not open -> do nothing
                        if ((!master) || (!master.isOpen))
                            return [2 /*return*/];
                        inx = this.findMasterInx(master);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, master.close()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.err("failed to close master on " + master.getAddress() + ":" + master.getConfig().port);
                        return [3 /*break*/, 4];
                    case 4:
                        // remove from list
                        if (inx > -1)
                            this.masters.splice(inx, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    System.prototype.displayDatabases = function () {
        this.masters.forEach(function (m) { return m.displayDatabase(); });
    };
    //////////////////
    // Config stuff //
    //////////////////
    System.prototype.addMaster = function (cmaster) {
        return __awaiter(this, void 0, void 0, function () {
            var inx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!cmaster.address)
                            return [2 /*return*/];
                        inx = this.findCMasterInx(cmaster.address, cmaster.port);
                        if (!(inx < 0)) return [3 /*break*/, 1];
                        this.config.cmasters.push(cmaster);
                        inx = this.masters.length;
                        return [3 /*break*/, 3];
                    case 1: 
                    // close to re-open
                    return [4 /*yield*/, this.closeMaster(this.masters[inx])];
                    case 2:
                        // close to re-open
                        _a.sent();
                        this.config.cmasters[inx] = cmaster;
                        _a.label = 3;
                    case 3:
                        this.writeConfig();
                        return [4 /*yield*/, this.openMaster(cmaster, inx)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    System.prototype.deleteMaster = function (master) {
        return __awaiter(this, void 0, void 0, function () {
            var masterAddress, masterPort, inx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        masterAddress = master.getAddress();
                        masterPort = master.getPort();
                        inx = this.findCMasterInx(masterAddress, masterPort);
                        if (!(inx >= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.closeMaster(master)];
                    case 1:
                        _a.sent();
                        // remove the master, it's nodes and their units from the config
                        this.config.cmasters.splice(inx, 1);
                        this.config.cunits = this.config.cunits.filter(function (unit) {
                            return (unit.masterPort != masterPort) || (unit.masterAddress != masterAddress);
                        });
                        this.config.cnodes = this.config.cnodes.filter(function (node) {
                            return (node.masterPort != masterPort) || (node.masterAddress != masterAddress);
                        });
                        this.writeConfig();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    System.prototype.setActiveState = function (item) {
        if (item instanceof __WEBPACK_IMPORTED_MODULE_3__protocol__["a" /* Node */]) {
            var masterAddress_1 = item.master.getAddress();
            var masterPort_1 = item.master.getPort();
            var config = this.config.cnodes.find(function (cn) {
                return (cn.logicalAddress === item.logicalAddress) &&
                    (cn.masterAddress == masterAddress_1) &&
                    (cn.masterPort == masterPort_1);
            });
            item.active = !!config;
        }
        if (item instanceof __WEBPACK_IMPORTED_MODULE_3__protocol__["e" /* Unit */]) {
            var masterAddress_2 = item.node.master.getAddress();
            var masterPort_2 = item.node.master.getPort();
            var config = this.config.cunits.find(function (cu) {
                return (cu.logicalAddress === item.logicalAddress) &&
                    (cu.logicalNodeAddress === item.logicalNodeAddress) &&
                    (cu.masterAddress === masterAddress_2) &&
                    (cu.masterPort == masterPort_2);
            });
            item.active = !!config;
            if (config) {
                item.group = config.group;
            }
        }
    };
    System.prototype.checkGroups = function () {
        var cgroups = this.config.cgroups;
        var last = cgroups.length - 1;
        // delete last entry if empty and not used
        if (!cgroups[last]) {
            var used_1 = false;
            this.masters.forEach(function (m) { return m.allUnits(function (u) { return used_1 = used_1 || (u.group == last); }); });
            if (!used_1)
                cgroups.pop();
        }
    };
    System.prototype.selectGroup = function (group) {
        if (this.config.multiple) {
            // multiple groups = just turn on/off
            group.visible = !group.visible;
        }
        else {
            // turn of other groups if this one becomes visible
            if (!group.visible)
                this.groups.forEach(function (g) { return g.visible = false; });
            group.visible = !group.visible;
        }
        this.writeGroups();
    };
    //////////////////////////////////////
    // Finding masters, nodes and units //
    //////////////////////////////////////
    System.prototype.findMaster = function (master) {
        return this.masters.find(function (m) { return m && m.same(master); });
    };
    System.prototype.findMasterInx = function (master) {
        return this.masters.findIndex(function (m) { return m && m.same(master); });
    };
    System.prototype.findCMasterInx = function (address, port) {
        return this.config.cmasters.findIndex(function (m) { return (m.address == address) && (m.port == port); });
    };
    System.prototype.findNode = function (master, logicalAddress) {
        master = this.findMaster(master);
        if (master)
            return master.nodes.find(function (n) { return n && (n.logicalAddress === logicalAddress); });
        else
            return null;
    };
    System.prototype.findUnit = function (master, logicalNodeAddress, logicalAddress) {
        var node = this.findNode(master, logicalNodeAddress);
        if (node)
            return node.units.find(function (u) { return u && (u.logicalAddress === logicalAddress); });
        else
            return null;
    };
    System.prototype.findUnitByAddress = function (logicalNodeAddress, logicalAddress) {
        var _this = this;
        var unit = null;
        this.masters.forEach(function (m) {
            if (m) {
                var node = _this.findNode(m, logicalNodeAddress);
                if (node)
                    unit = node.units.find(function (u) { return u && (u.logicalAddress === logicalAddress); });
            }
        });
        return unit;
    };
    System.prototype.findUnitByName = function (master, name) {
        var unit = null;
        this.masters.forEach(function (m) {
            if (m && (m.getAddress() == master)) {
                m.nodes.forEach(function (n) {
                    if (n) {
                        n.units.forEach(function (u) {
                            if ((u.displayName === name) || (u.name === name))
                                unit = u;
                        });
                    }
                });
            }
        });
        return unit;
    };
    //////////////////////////////////////////////////
    // Getting the current state of units and nodes //
    //////////////////////////////////////////////////
    System.prototype.updateGroups = function () {
        // write only the group info, but for now, do it all
        this.updateSystem(true);
    };
    System.prototype.updateSystem = function (dontTrigger) {
        if (dontTrigger === void 0) { dontTrigger = false; }
        this.config.cnodes = this.masters
            .reduce(function (acc, m) { return acc.concat(m.nodes); }, [])
            .filter(function (n) { return n.units.some(function (n) { return n.active; }); })
            .map(function (n) {
            return { active: "Y",
                masterAddress: n.master.getAddress(), masterPort: n.master.getPort(),
                logicalAddress: n.logicalAddress };
        });
        this.config.cunits = this.masters
            .reduce(function (acc, m) { return acc.concat(m.nodes); }, [])
            .reduce(function (acc, n) { return acc.concat(n.units); }, [])
            .filter(function (u) { return u.active; })
            .map(function (u) {
            return { active: "Y", group: u.group,
                masterAddress: u.node.master.getAddress(), masterPort: u.node.master.getPort(),
                logicalNodeAddress: u.node.logicalAddress, logicalAddress: u.logicalAddress };
        });
        this.writeConfig();
        if (dontTrigger)
            this.triggerRebuild();
    };
    System.prototype.triggerRebuild = function (immediate) {
        var _this = this;
        if (immediate === void 0) { immediate = false; }
        this.log("triggerRebuild requested");
        if (this.trigger) {
            this.log("killing pending rebuild");
            clearTimeout(this.trigger);
            this.trigger = null;
        }
        if (immediate) {
            this.rebuildServices();
        }
        else {
            this.trigger = setTimeout(function () {
                _this.trigger = null;
                _this.rebuildServices();
            }, 1000);
        }
    };
    System.prototype.rebuildServices = function () {
        function compare(a, b) {
            var an = a.getSort();
            var bn = b.getSort();
            if (an < bn)
                return -1;
            if (an > bn)
                return 1;
            return 0;
        }
        function compareN(a, b) {
            var aname = a.name.toLowerCase();
            var bname = b.name.toLowerCase();
            if (aname < bname)
                return -1;
            if (aname > bname)
                return 1;
            return 0;
        }
        // sort masters, nodes in masters, units in nodes.
        this.log("rebuildMasters/Nodes");
        this.masters.sort(compare);
        this.masters.forEach(function (m) {
            m.nodes.sort(compare);
            m.nodes.forEach(function (n) { return n.units.sort(compare); });
        });
        // sort selected controls, temperatures and moods.
        this.log("rebuildServices");
        var services = this.masters
            .reduce(function (acc, m) { return acc.concat(m.nodes); }, [])
            .reduce(function (acc, n) { return acc.concat(n.units); }, [])
            .filter(function (u) { return u.active; });
        this.controls = services.filter(function (s) { return s.isCtrl(); }).sort(compareN);
        this.temperatures = services.filter(function (s) { return s.isTemperature(); }).sort(compareN);
        this.moods = services.filter(function (s) { return (s.isMood() || s.isInput()); }).sort(compareN);
        this.stores = this.controls.filter(function (s) { return s.isUpDown(); });
        this.events.publish("refresh");
    };
    //////////////////
    // Config stuff //
    //////////////////
    System.prototype.read = function (type) {
        var fn = 'config.' + type;
        var config = null;
        try {
            var configStr = localStorage.getItem(fn);
            config = JSON.parse(configStr);
        }
        catch (err) {
            this.log("Couldn't read " + fn + " --> Creating empty config.");
        }
        // sanitize the config
        var temp = __WEBPACK_IMPORTED_MODULE_2__types__["a" /* Sanitizers */][type](config);
        // write if we created it (new intallations or new config params)
        if (!config && temp)
            this.write(type, temp);
        return temp;
    };
    System.prototype.write = function (type, config) {
        var fn = 'config.' + type;
        try {
            config = __WEBPACK_IMPORTED_MODULE_2__types__["a" /* Sanitizers */][type](config);
            localStorage.setItem(fn, JSON.stringify(config, null, 2));
            return config;
        }
        catch (err) {
            this.err("Couldn't write config " + fn);
            return config;
        }
    };
    System.prototype.readConfig = function () {
        this.config = this.read("system");
    };
    System.prototype.writeConfig = function () {
        this.write("system", this.config);
    };
    System.prototype.readGroups = function () {
        // support pre v1.1 configs -> convert the old config into new structure
        if ((this.config.cgroups) && (this.config.cgroups.length)) {
            this.groups = this.config.cgroups.map(function (g, inx) { return { name: g, id: inx, visible: true, order: inx }; });
            delete this.config.cgroups;
            this.writeConfig();
            this.writeGroups();
        }
        else {
            this.groups = this.read("groups");
        }
    };
    System.prototype.writeGroups = function () {
        this.groups = this.write("groups", this.groups);
    };
    System = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */]])
    ], System);
    return System;
}(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* Logger */]));

//# sourceMappingURL=system.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_control__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__temperature_temperature__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moods_moods__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_stores__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__system_system__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(system) {
        this.system = system;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__control_control__["a" /* ControlPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__temperature_temperature__["a" /* TemperaturePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__stores_stores__["a" /* StoresPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__moods_moods__["a" /* MoodsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* ConfigPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <ion-tabs>\n      <ion-tab [root]=\"tab1Root\" tabTitle=\"{{'Page.Control' |_ }}\" tabIcon=\"dlights\"></ion-tab>\n      <ion-tab [root]=\"tab2Root\" tabTitle=\"{{'Page.Temperature' |_ }}\" tabIcon=\"dtemperature\"></ion-tab>\n      <ion-tab [root]=\"tab3Root\" [show]=\"system.config.stores\" tabTitle=\"{{'Page.Stores' |_ }}\" tabIcon=\"dstores\"></ion-tab>\n      <ion-tab [root]=\"tab4Root\" tabTitle=\"{{'Page.Moods' |_ }}\" tabIcon=\"dscenes\"></ion-tab>\n      <ion-tab [root]=\"tab5Root\" tabTitle=\"{{'Page.Config' |_ }}\" tabIcon=\"dsettings\"></ion-tab>\n    </ion-tabs>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__system_system__["a" /* System */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stdpage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_system__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlPage = /** @class */ (function () {
    function ControlPage(system) {
        this.system = system;
    }
    ControlPage.prototype.ionViewWillEnter = function () {
        this.stdPage.refreshServices();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__stdpage__["a" /* StdPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__stdpage__["a" /* StdPage */])
    ], ControlPage.prototype, "stdPage", void 0);
    ControlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-control',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <std-header title=\"Page.Control\"></std-header>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding>\n      <std-page services=\"controls\" [showUpDowns]=\"! this.system.config.stores\"></std-page>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__system_system__["a" /* System */]])
    ], ControlPage);
    return ControlPage;
}());

//# sourceMappingURL=control.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__protocol__ = __webpack_require__(43);

///////////////
// Log Class //
///////////////
var Logger = /** @class */ (function () {
    function Logger(type, debug) {
        if (debug === void 0) { debug = false; }
        this.logger = (debug) ? console.log : function () { };
        __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].setLogger(this.logger);
        this.debug = debug || false;
        this.type = type || "base";
    }
    Logger.prototype.info = function (msg) {
        if (this.debug) {
            this.logger(this.type + " - " + msg);
        }
    };
    Logger.prototype.log = function (msg) {
        this.logger(this.type + " - " + msg);
    };
    Logger.prototype.err = function (msg) {
        this.logger(this.type + " - *** " + msg + " ***");
    };
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stdpage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemperaturePage = /** @class */ (function () {
    function TemperaturePage(system) {
        this.system = system;
    }
    TemperaturePage.prototype.ionViewWillEnter = function () {
        this.stdPage.refreshServices();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__stdpage__["a" /* StdPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__stdpage__["a" /* StdPage */])
    ], TemperaturePage.prototype, "stdPage", void 0);
    TemperaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-temperature',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <std-header title=\"Page.Temperature\"></std-header>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding>\n      <std-page services=\"temperatures\"></std-page>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__system_system__["a" /* System */]])
    ], TemperaturePage);
    return TemperaturePage;
}());

//# sourceMappingURL=temperature.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stdpage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoodsPage = /** @class */ (function () {
    function MoodsPage(system) {
        this.system = system;
    }
    MoodsPage.prototype.ionViewWillEnter = function () {
        this.stdPage.refreshServices();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__stdpage__["a" /* StdPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__stdpage__["a" /* StdPage */])
    ], MoodsPage.prototype, "stdPage", void 0);
    MoodsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-moods',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <std-header title=\"Page.Moods\"></std-header>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      <std-page services=\"moods\"></std-page>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__system_system__["a" /* System */]])
    ], MoodsPage);
    return MoodsPage;
}());

//# sourceMappingURL=moods.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stdpage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_system__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoresPage = /** @class */ (function () {
    function StoresPage(system) {
        this.system = system;
    }
    StoresPage.prototype.ionViewWillEnter = function () {
        this.stdPage.refreshServices();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__stdpage__["a" /* StdPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__stdpage__["a" /* StdPage */])
    ], StoresPage.prototype, "stdPage", void 0);
    StoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-stores',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <std-header title=\"Page.Stores\"></std-header>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      <std-page services=\"stores\" [showUpDowns]=\"true\"></std-page>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__system_system__["a" /* System */]])
    ], StoresPage);
    return StoresPage;
}());

//# sourceMappingURL=stores.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__master__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__system_types__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rendering_translate_pipe__ = __webpack_require__(204);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigPage = /** @class */ (function () {
    function ConfigPage(modalCtl, alertCtrl, system) {
        this.modalCtl = modalCtl;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.showcomm = false;
        this.what = (this.system.masters.length <= 0) ? "masters" : "general";
    }
    /////////////
    // General //
    /////////////
    ConfigPage.prototype.saveConfig = function () {
        this.system.writeConfig();
    };
    ConfigPage.prototype.allowComm = function () {
        var _this = this;
        if (this.showcomm) {
            this.alertCtrl.create({
                title: Object(__WEBPACK_IMPORTED_MODULE_6__rendering_translate_pipe__["a" /* Translate */])("Config.EnableAdv", this.system),
                message: Object(__WEBPACK_IMPORTED_MODULE_6__rendering_translate_pipe__["a" /* Translate */])("Config.EnterPW", this.system),
                inputs: [{ name: 'Password' }],
                buttons: [{ text: "OK", handler: function (data) {
                            _this.showcomm = (data.Password === "2222");
                        } }]
            }).present();
        }
    };
    ////////////
    // Groups //
    ////////////
    ConfigPage.prototype.addGroup = function () {
        // find max id
        var max = this.system.groups.reduce(function (m, g) { return (g.id > m) ? g.id : m; }, this.system.groups[0].id);
        this.system.groups.push(__assign({}, __WEBPACK_IMPORTED_MODULE_5__system_types__["c" /* kEmptyGroup */], { id: max + 1 }));
    };
    ConfigPage.prototype.saveGroups = function () {
        this.system.writeGroups();
    };
    /////////////
    // Masters //
    /////////////
    ConfigPage.prototype.addMaster = function () {
        this.showEditMaster({});
    };
    ConfigPage.prototype.editMaster = function (master) {
        this.showEditMaster({ masterConfig: master.config });
    };
    ConfigPage.prototype.showEditMaster = function (data) {
        var _this = this;
        var modal = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_3__master__["a" /* MasterPage */], data);
        modal.onDidDismiss(function (data) {
            if (data.masterConfig) {
                try {
                    _this.system.addMaster(data.masterConfig);
                }
                catch (err) {
                    _this.alertCtrl.create({
                        title: "Error from master node",
                        message: err.toString(),
                        buttons: [{ text: "OK" }]
                    }).present();
                }
            }
        });
        modal.present();
    };
    ConfigPage.prototype.deleteMaster = function (master) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Delete master',
            message: 'Are you sure you want to delete this master "' + master.config.name + '" (' + master.config.address + ')',
            buttons: [
                { text: 'No' },
                { text: 'Yes', handler: function () { _this.system.deleteMaster(master); } }
            ]
        }).present();
    };
    ConfigPage.prototype.changeSchedule = function (master) {
        master.setSchedule();
    };
    ///////////
    // Nodes //
    ///////////
    ConfigPage.prototype.editNode = function (node) {
        this.showEditNode(node);
    };
    ConfigPage.prototype.showEditNode = function (node) {
        var _this = this;
        var modal = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_4__node__["a" /* NodePage */], { node: node });
        modal.onDidDismiss(function (data) {
            _this.system.updateSystem();
            node.master.requestNodeStatus(node);
        });
        modal.present();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-config',
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <img src=\"/assets/icon/duotecno.png\" />\n      <ion-title>{{'Page.Config' |_ }}</ion-title>\n      <ion-buttons end *ngIf=\"what === 'groups' || what === 'masters'\">\n        <button ion-button icon-start (click)=\"addGroup()\" *ngIf=\"what === 'groups'\">\n          <ion-icon name=\"add\"></ion-icon>\n          {{\"Config.Group\" |_ }}\n        </button>\n        <button ion-button icon-start (click)=\"addMaster()\" *ngIf=\"what === 'masters'\">\n          <ion-icon name=\"add\"></ion-icon>\n          {{\"Config.Master\" |_ }}\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding>\n    <ion-segment [(ngModel)]=\"what\">\n      <ion-segment-button value=\"general\">\n        <ion-icon name=\"settings\"></ion-icon> {{ \"Config.General\" |_ }}\n      </ion-segment-button>\n      <ion-segment-button value=\"groups\">\n        <ion-icon name=\"folder\"></ion-icon> {{ \"Config.Groups\" |_ }}\n      </ion-segment-button>\n      <ion-segment-button value=\"masters\">\n        <ion-icon name=\"code-working\"></ion-icon> {{ \"Config.Masters\" |_ }}\n      </ion-segment-button>\n    </ion-segment>\n\n\n    <form *ngIf=\"what === 'general'\">\n      <ion-list>\n        <ion-list-group>\n          <ion-item-divider color=\"light\">\n            {{ \"Config.Settings\" |_ }}\n          </ion-item-divider>\n          <ion-item>\n            <ion-label>{{ \"Config.Language\" |_ }}</ion-label>\n            <ion-select name=\"language\" interface=\"popover\" \n                        [(ngModel)]=\"system.config.language\" (ionChange)=\"saveConfig()\">\n              <ion-option value=\"EN\">English</ion-option>\n              <ion-option value=\"NL\">Nederlands</ion-option>\n              <ion-option value=\"FR\">Fran\u00E7ais</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ \"Config.SeparateStores\" |_ }}</ion-label>\n            <ion-toggle name=\"stores\" [(ngModel)]=\"system.config.stores\" (ionChange)=\"saveConfig()\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ \"Config.MultipleGroups\" |_ }}</ion-label>\n            <ion-toggle name=\"multiple\" [(ngModel)]=\"system.config.multiple\" (ionChange)=\"saveConfig()\"></ion-toggle>\n          </ion-item>\n        </ion-list-group>\n\n\n        <ion-list-group>\n          <ion-item-divider color=\"light\">\n          {{ \"Config.Communication\" |_ }} <span class=\"comm\">({{ system.config.socketserver }})</span>\n          </ion-item-divider>\n          <ion-item>\n            <ion-label>{{ \"Config.Advanced\" |_ }}</ion-label>\n            <ion-toggle name=\"communication\" [(ngModel)]=\"showcomm\" (ionChange)=\"allowComm()\"></ion-toggle>\n          </ion-item>\n          <ion-item *ngIf=\"showcomm\">\n            <ion-label stacked>Socket server IP</ion-label>\n            <ion-input name=\"socketserver\" type=\"text\" [(ngModel)]=\"system.config.socketserver\" (ionBlur)=\"saveConfig()\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"showcomm\">\n            <ion-label stacked>Socket server port</ion-label>\n            <ion-input name=\"socketport\" type=\"text\" [(ngModel)]=\"system.config.socketport\" (ionBlur)=\"saveConfig()\"></ion-input>\n          </ion-item>\n        </ion-list-group>\n\n      </ion-list>\n    </form>\n\n    <form *ngIf=\"what === 'groups'\">\n      <ion-list>\n        <ion-item *ngFor=\"let group of system.groups; let inx = index\">\n          <ion-label stacked>Group {{inx+1}}</ion-label>\n          <ion-input type=\"text\" name=\"group{{inx+1}}\" [(ngModel)]=\"group.name\" (ionBlur)=\"saveGroups()\"></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-list *ngIf=\"what === 'masters'\">\n      <ion-list-group *ngFor=\"let master of system.masters; let inx=index\">\n        <ion-item class=\"address\">\n          <ion-icon name=\"code-working\" item-start></ion-icon>\n          <span [class.nonActive]=\"!master.config.active\">{{master.getAddress()}}<br>{{master.config.name}}</span>\n          <ion-buttons item-end>\n            <button ion-button expandable (click)=\"editMaster(master)\" color=\"primary\">\n              <ion-icon name=\"create\"></ion-icon>\n            </button>\n            <button ion-button expandable (click)=\"deleteMaster(master)\" color=\"danger\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item class=\"schedule\" *ngIf=\"master.config.active\">\n          <ion-label stacked>Schedule</ion-label>\n          <ion-select [(ngModel)]=\"master.schedule\" name=\"schedule{{inx}}\" (ionChange)=\"changeSchedule(master)\">\n            <ion-option value=\"0\">{{ \"Config.Week\" |_ }} 1</ion-option>\n            <ion-option value=\"1\">{{ \"Config.Week\" |_ }} 2</ion-option>\n            <ion-option value=\"2\">{{ \"Config.Week\" |_ }} 3</ion-option>\n            <ion-option value=\"3\">{{ \"Config.Holiday\" |_ }}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngFor=\"let node of master.nodes\" (click)=\"editNode(node)\" class=\"nodename\">\n          <ion-icon name=\"list\" item-end></ion-icon>\n          {{node.getName()}} <span class=\"addr\">({{node.getNumber()}}, {{node.units.length}}/{{node.nrUnits}})</span>\n        </ion-item>\n      </ion-list-group>\n    </ion-list>\n    <p class=\"version\"> v1.2.5 \u00A9 Johan Coppieters &amp; Duotecno</p>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__system_system__["a" /* System */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_types__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterPage = /** @class */ (function () {
    function MasterPage(viewCtrl, navParams, system) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.system = system;
    }
    MasterPage.prototype.ngOnInit = function () {
        this.masterConfig = this.navParams.get('masterConfig') || __WEBPACK_IMPORTED_MODULE_3__system_types__["a" /* Sanitizers */].masterConfig();
    };
    MasterPage.prototype.save = function () {
        this.viewCtrl.dismiss({ masterConfig: this.masterConfig });
    };
    MasterPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({});
    };
    MasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-master',
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Master</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form>\n      <ion-list>\n        <ion-item>\n          <ion-label stacked>IP Address</ion-label>\n          <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"masterConfig.address\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Port</ion-label>\n          <ion-input type=\"text\" name=\"port\" [(ngModel)]=\"masterConfig.port\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"masterConfig.password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Name</ion-label>\n          <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"masterConfig.name\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Active</ion-label>\n          <ion-toggle name=\"active\" [(ngModel)]=\"masterConfig.active\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <ion-buttons>\n        <button ion-button (click)=\"save()\" color=\"Primary\">{{\"General.Save\" |_ }}</button>\n        <button ion-button (click)=\"cancel()\">{{\"General.Cancel\" |_ }}</button>\n      </ion-buttons>\n    </form>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__system_system__["a" /* System */]])
    ], MasterPage);
    return MasterPage;
}());

//# sourceMappingURL=master.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system_system__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodePage = /** @class */ (function () {
    function NodePage(viewCtrl, navParams, system) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.system = system;
    }
    NodePage.prototype.ngOnInit = function () {
        this.node = this.navParams.get('node');
        if ((!this.node.active) || (this.node.nrUnits !== this.node.units.length))
            this.node.master.fetchAllUnits(this.node);
    };
    NodePage.prototype.done = function () {
        this.viewCtrl.dismiss();
        this.system.triggerRebuild(true);
    };
    NodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-node',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Services of {{node.getName()}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding>\n      <ion-list>\n        <ion-item *ngFor=\"let unit of node.units\">\n          <ion-label>{{unit.getName()}}<br/>\n            <span class=\"type\">{{unit.typeName()}}</span>\n            <span class=\"addr\">({{unit.getNumber()}})</span>\n          </ion-label>\n          <ion-checkbox [(ngModel)]=\"unit.active\" color=\"secondary\" [disabled]=\"unit.name[0]==','\"></ion-checkbox>\n          <ion-select *ngIf=\"system.groups.length > 1\" [(ngModel)]=\"unit.group\" interface=\"popover\" [selectOptions]=\"{title: unit.getName()}\">\n            <ion-option *ngFor=\"let group of system.groups\" value=\"{{group.id}}\">{{group.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n    <ion-footer>\n      <ion-buttons>\n        <button ion-button (click)=\"done()\" color=\"Primary\" full=\"true\">Done</button>\n      </ion-buttons>\n    </ion-footer>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__system_system__["a" /* System */]])
    ], NodePage);
    return NodePage;
}());

//# sourceMappingURL=node.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslatePipe; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Translate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translations__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(system) {
        this.system = system;
    }
    TranslatePipe.prototype.transform = function (value) {
        return Translate(value, this.system);
    };
    TranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: '_', pure: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__system_system__["a" /* System */]])
    ], TranslatePipe);
    return TranslatePipe;
}());

function Translate(value, system) {
    if (!value)
        return "[** empty **]";
    var lan = (system && system.config && system.config.language) ?
        system.config.language : "EN";
    if (lan === "XX")
        return "[" + value + "]";
    if (typeof __WEBPACK_IMPORTED_MODULE_2__translations__["a" /* translations */][lan] === "undefined")
        return "[** no-" + lan + ": " + value + " **]";
    var tran = __WEBPACK_IMPORTED_MODULE_2__translations__["a" /* translations */][lan][value];
    if (typeof tran === "undefined")
        return "[** no-trn: " + value + " **]";
    return tran;
}
//# sourceMappingURL=translate.pipe.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_control_control__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_temperature_temperature__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_moods_moods__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_config_config__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_config_master__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_config_node__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rendering_translate_pipe__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rendering_temp_pipe__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rendering_dimmer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rendering_updown__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rendering_switch__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rendering_temperature__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_stores_stores__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rendering_mood__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_stdpage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_stdheader__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app__["a" /* SBox */], __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_stdpage__["a" /* StdPage */], __WEBPACK_IMPORTED_MODULE_21__pages_stdheader__["a" /* StdHeader */],
                __WEBPACK_IMPORTED_MODULE_4__pages_control_control__["a" /* ControlPage */], __WEBPACK_IMPORTED_MODULE_5__pages_temperature_temperature__["a" /* TemperaturePage */], __WEBPACK_IMPORTED_MODULE_6__pages_moods_moods__["a" /* MoodsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_stores_stores__["a" /* StoresPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_config_config__["a" /* ConfigPage */], __WEBPACK_IMPORTED_MODULE_10__pages_config_master__["a" /* MasterPage */], __WEBPACK_IMPORTED_MODULE_11__pages_config_node__["a" /* NodePage */],
                __WEBPACK_IMPORTED_MODULE_12__rendering_translate_pipe__["b" /* TranslatePipe */], __WEBPACK_IMPORTED_MODULE_13__rendering_temp_pipe__["a" /* TemperaturPipe */],
                __WEBPACK_IMPORTED_MODULE_14__rendering_dimmer__["a" /* DimmerControl */], __WEBPACK_IMPORTED_MODULE_15__rendering_updown__["a" /* UpDownControl */], __WEBPACK_IMPORTED_MODULE_16__rendering_switch__["a" /* SwitchControl */], __WEBPACK_IMPORTED_MODULE_17__rendering_temperature__["a" /* TemperatureControl */], __WEBPACK_IMPORTED_MODULE_19__rendering_mood__["a" /* MoodControl */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* SBox */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app__["a" /* SBox */], __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_stdpage__["a" /* StdPage */], __WEBPACK_IMPORTED_MODULE_21__pages_stdheader__["a" /* StdHeader */],
                __WEBPACK_IMPORTED_MODULE_4__pages_control_control__["a" /* ControlPage */], __WEBPACK_IMPORTED_MODULE_5__pages_temperature_temperature__["a" /* TemperaturePage */], __WEBPACK_IMPORTED_MODULE_6__pages_moods_moods__["a" /* MoodsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_stores_stores__["a" /* StoresPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_config_config__["a" /* ConfigPage */], __WEBPACK_IMPORTED_MODULE_10__pages_config_master__["a" /* MasterPage */], __WEBPACK_IMPORTED_MODULE_11__pages_config_node__["a" /* NodePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__system_system__["a" /* System */],
                __WEBPACK_IMPORTED_MODULE_12__rendering_translate_pipe__["b" /* TranslatePipe */], __WEBPACK_IMPORTED_MODULE_13__rendering_temp_pipe__["a" /* TemperaturPipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capacitor_core__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__system_system__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashScreen = __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["a" /* Plugins */].SplashScreen;


var SBox = /** @class */ (function () {
    function SBox(platform, toastCtrl, menuCtrl, system) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.system = system;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            SplashScreen.hide();
            _this.system.setBrowser(platform.is("core"));
        });
    }
    SBox.prototype.select = function (group) {
        this.system.selectGroup(group);
        if (!this.system.config.multiple)
            this.menuCtrl.close();
    };
    SBox.prototype.done = function () {
        this.menuCtrl.close();
    };
    SBox.prototype.splitter = function (e) {
        this.system.isSplitted = e._visible;
    };
    SBox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <ion-split-pane (ionChange)=\"splitter($event)\">\n      <ion-menu [content]=\"content\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>{{ \"Config.Groups\" |_ }}</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n        <ion-content padding>\n          <ion-list>\n            <ion-item *ngFor=\"let group of system.groups\">\n              <ion-label tappable (click)=\"select(group)\">\n                {{group.name}}\n              </ion-label>\n              <ion-checkbox [ngModel]=\"group.visible\" color=\"secondary\" (click)=\"select(group)\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n          <button *ngIf=\"!system.isSplitted || system.multiple\" ion-button (click)=\"done()\">{{ \"General.Done\" |_ }}</button>\n        </ion-content>\n      </ion-menu>\n\n      <ion-nav [root]=\"rootPage\" main #content></ion-nav>\n    </ion-split-pane>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__system_system__["a" /* System */]])
    ], SBox);
    return SBox;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Master; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__protocol__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Q__ = __webpack_require__(294);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//import { Socket } from 'cz.blocshop.socketsforcordova/socket.js';
var Master = /** @class */ (function (_super) {
    __extends(Master, _super);
    // command was sent, no response received yet
    /* system.config: {
      "socketserver": "akiworks.be",
      "socketport": 9999,
      "language": "EN",
      "stores": true,
      "multiple": true,
      "cmasters": [
        { "name": "Roos",
          "address": "141.135.240.51",
          "port": 5001,
          "password": "duotecno",
          "debug": true,
          "active": true
        }, ...],
      "cnodes": [
        { "active": "Y",
          "masterAddress": "141.135.240.51",
          "masterPort": 5001,
          "logicalAddress": 7
        }, ...],
      "cunits": [
        { "active": "Y",
          "group": "1",
          "masterAddress": "141.135.240.51",
          "masterPort": 5001,
          "logicalNodeAddress": 7,
          "logicalAddress": 0
        }, ...
      ]
    }
    */
    function Master(system, config, toastCtrl) {
        var _this = _super.call(this, "master", system.debug) || this;
        _this.toastCtrl = toastCtrl;
        _this.resolveLogin = null;
        _this.Q = new __WEBPACK_IMPORTED_MODULE_3__Q__["a" /* Q */](system.logger);
        // save my eco system
        _this.system = system;
        // save this masters config settings
        _this.config = __WEBPACK_IMPORTED_MODULE_1__types__["a" /* Sanitizers */].masterConfig(config);
        // all nodes in this master
        _this.nodes = [];
        _this.nrNodes = 0;
        _this.schedule = 0;
        // connection to an IP node / smartbox
        _this.socket = null;
        _this.isOpen = false;
        _this.isLoggedIn = false;
        _this.closeRequested = false;
        // incoming data
        _this.buffer = "";
        return _this;
    }
    Master.prototype.toast = function (message) {
        var toast = this.toastCtrl.create({
            message: message, duration: 1000, position: 'top'
        });
        toast.present();
    };
    Master.prototype.getName = function () {
        return this.config.name || "master";
    };
    Master.prototype.getSort = function () {
        return this.getName().toLowerCase();
    };
    Master.prototype.log = function (msg) {
        // overwrite to add IP address
        _super.prototype.log.call(this, this.type + " " + this.getAddress() + ": " + msg);
    };
    Master.prototype.writeConfig = function (config, fn) {
        // overwrite: don't do anything, all is stored in the system-config
    };
    Master.prototype.getConfig = function () {
        return this.config;
    };
    Master.prototype.hasAddress = function (ip) {
        return this.config.address === ip;
    };
    Master.prototype.getAddress = function () {
        return this.config.address;
    };
    Master.prototype.getPort = function () {
        return this.config.port;
    };
    Master.prototype.hasPort = function (port) {
        return this.config.port == port;
    };
    Master.prototype.inMultiNode = function () {
        return (this.nodes.length > 1);
    };
    Master.prototype.same = function (m) {
        return m && this.hasAddress(m.getAddress()) && this.hasPort(m.getPort());
    };
    /* ************* */
    /* Communication */
    /* ************* */
    Master.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openWeb()];
                    case 1: 
                    // test:
                    // if (!this.system.isBrowser) {
                    //   try {
                    //     let x = new Socket();
                    //     if (x) 
                    //       this.toast("socket is created")
                    //     else
                    //       this.toast("socket return null");
                    //   } catch(e) {
                    //     this.toast("socket throwed error: " + e);
                    //   }
                    // }
                    //if (this.system.isBrowser) 
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Master.prototype.openTCP = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.openWeb()];
            });
        });
    };
    Master.prototype.openWeb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            ////////////////////////////////
                            // try to open the connection //
                            _this.log("opening connection to the SmartSocket Server");
                            var wsserver = _this.system.config.socketserver + ":" + _this.system.config.socketport;
                            var tcpserver = _this.config.address + ":" + _this.config.port;
                            _this.socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);
                            if (!_this.socket)
                                throw (new Error("could create new web socket"));
                            ///////////////////////
                            // set data listener //
                            _this.socket.onmessage = function (message) {
                                // messages need to be buffered until "]" is received
                                _this.handleData(message.data);
                            };
                            ///////////////////////////
                            // set an error listener //
                            _this.socket.onerror = function (err) {
                                _this.err("Socket: " + err);
                            };
                            ///////////////////////////////////////////
                            // set end: the server closed the socket //
                            _this.socket.onclose = function () {
                                _this.isOpen = false;
                                _this.isLoggedIn = false;
                                _this.log("end -> socket got disconnected");
                                if (!_this.closeRequested) {
                                    // unexpected close
                                    _this.err("Socket: closed unexpectedly");
                                }
                            };
                            _this.socket.onopen = function () {
                                _this.isOpen = true;
                                // request a connection to the real socket
                                _this.log("connection open on " + _this.config.address + " on port " + _this.config.port);
                                // resolve our promise with the opened socket
                                resolve(_this.socket);
                            };
                        }
                        catch (e) {
                            _this.err("Failed to open a connection on port " + _this.getPort());
                            reject(e);
                        }
                    })];
            });
        });
    };
    Master.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isOpen) return [3 /*break*/, 4];
                        message = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildDisconnect();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.closeRequested = true;
                        return [4 /*yield*/, this.send(message)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.err("Disconnect failure: " + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var message = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildLogin(_this.config.password);
                        try {
                            __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].write(_this.socket, message);
                            // to be called when logged in
                            _this.resolveLogin = resolve;
                        }
                        catch (err) {
                            _this.resolveLogin = null;
                            _this.err("Login call failed: " + err);
                            reject(false);
                        }
                    })];
            });
        });
    };
    Master.prototype.send = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.Q.exec(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!this.isOpen) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.open()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.login()];
                                case 2:
                                    if (!(_a.sent())) {
                                        return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_1__types__["b" /* WriteError */].writeFatal];
                                    }
                                    _a.label = 3;
                                case 3: return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].write(this.socket, message)];
                            }
                        });
                    }); })];
            });
        });
    };
    Master.prototype.handleData = function (message) {
        // put the incoming data into a buffer and only use complete data
        this.buffer += message;
        while ((this.buffer.length > 0) && this.processData())
            ;
    };
    Master.prototype.processData = function () {
        // fetch next message and store the rest of unused data (if any)
        var next = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].nextMessage(this.buffer);
        this.buffer = next.rest;
        if (!next.cmd) {
            return false;
        }
        else {
            this.log("incoming msg=" + Object(__WEBPACK_IMPORTED_MODULE_0__protocol__["i" /* recName */])(next.cmd) + ", status=" + next.isStatus +
                ", data=" + ((next.message) ? next.message.join(",") : "--"));
            this.Q.do();
            //this.q.pop();
            if (next.isStatus) {
                this.receiveStatus(next);
            }
            else if (next.cmd === __WEBPACK_IMPORTED_MODULE_0__protocol__["d" /* Rec */].Info) {
                this.receiveInfo(next);
            }
            else if (next.cmd === __WEBPACK_IMPORTED_MODULE_0__protocol__["d" /* Rec */].ConnectStatus) {
                this.receiveLogin(next.message);
            }
            else if (next.cmd === __WEBPACK_IMPORTED_MODULE_0__protocol__["d" /* Rec */].ScheduleStatus) {
                this.receiveSchedule(next.message);
            }
            else {
                this.log("what to do with: " + next.message);
            }
            return true;
        }
    };
    ///////////////////
    // Login message //
    ///////////////////
    Master.prototype.receiveLogin = function (message) {
        this.isLoggedIn = (message[2] === 1);
        if (this.resolveLogin) {
            this.toast("Login " + (this.isLoggedIn ? "OK" : "FAIL") + " for " + this.config.address);
            this.resolveLogin(this.isLoggedIn);
            this.resolveLogin = null;
        }
        else {
            this.err("unexpected ConnectStatus ?");
        }
    };
    ///////////////////
    // Info messages //
    ///////////////////
    Master.prototype.receiveInfo = function (next) {
        if (next.message[1] === __WEBPACK_IMPORTED_MODULE_0__protocol__["d" /* Rec */].DBInfo) {
            this.receiveDBInfo(next.message);
        }
        else if (next.message[1] === __WEBPACK_IMPORTED_MODULE_0__protocol__["d" /* Rec */].NodeInfo) {
            this.receiveNodeInfo(next.message);
        }
        else if (next.message[1] === __WEBPACK_IMPORTED_MODULE_0__protocol__["d" /* Rec */].UnitInfo) {
            this.receiveUnitInfo(next.message);
        }
        else {
            this.err("What is this? info type = " + next.message[1] + ", message: " + next.message);
        }
        this.system.triggerRebuild();
    };
    Master.prototype.receiveSchedule = function (message) {
        this.schedule = message[2];
        this.info("received week schedule = " + this.schedule);
    };
    Master.prototype.receiveDBInfo = function (message) {
        var dbInfo = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].makeDBInfo(message);
        this.nrNodes = dbInfo.nrNodes;
        for (var nodeInx = 0; nodeInx < this.nrNodes; nodeInx++) {
            this.fetchNode(nodeInx);
        }
    };
    Master.prototype.receiveNodeInfo = function (message) {
        var nodeInfo = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].makeNodeInfo(message);
        var node = this.findNode(nodeInfo.logicalAddress);
        if (!node) {
            node = new __WEBPACK_IMPORTED_MODULE_0__protocol__["a" /* Node */](this, nodeInfo);
            this.nodes.push(node);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__types__["a" /* Sanitizers */].nodeInfo(nodeInfo, node);
        }
        this.system.setActiveState(node);
        if (node.active && (node.nrUnits !== node.units.length)) {
            this.fetchAllUnits(node);
        }
        else {
            this.log("Skipping node: " + node.getDescription());
        }
    };
    Master.prototype.receiveUnitInfo = function (message) {
        var unitInfo = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].makeUnitInfo(message);
        var unit = this.findUnit(unitInfo.logicalNodeAddress, unitInfo.logicalAddress);
        if (!unit) {
            var node = this.findNode(unitInfo.logicalNodeAddress);
            if (node) {
                unit = new __WEBPACK_IMPORTED_MODULE_0__protocol__["e" /* Unit */](node, unitInfo);
                node.units.push(unit);
            }
            else {
                this.err("Node not found: " + unitInfo.logicalNodeAddress);
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__types__["a" /* Sanitizers */].unitInfo(unitInfo, unit);
        }
        this.system.setActiveState(unit);
    };
    Master.prototype.fetchAllUnits = function (node) {
        for (var unitInx = 0; unitInx < node.nrUnits; unitInx++) {
            this.fetchUnit(node, unitInx);
        }
    };
    Master.prototype.fetchDbInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildDBInfo())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildRequestSchedule())];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        this.err("dbInfo call failed -> " + err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.fetchNode = function (nodeInx) {
        return __awaiter(this, void 0, void 0, function () {
            var message, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildNodeInfo(nodeInx);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.send(message)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.err("nodeInfo call failed -> " + err_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.fetchUnit = function (node, unitInx) {
        return __awaiter(this, void 0, void 0, function () {
            var message, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildUnitInfo(node, unitInx);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // unit with index "unitInx" in node "logicalAddress"
                        return [4 /*yield*/, this.send(message)];
                    case 2:
                        // unit with index "unitInx" in node "logicalAddress"
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        this.err("unitInfo call failed -> " + err_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.getDatabase = function (readUnits) {
        if (readUnits === void 0) { readUnits = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nodes = [];
                        return [4 /*yield*/, this.fetchDbInfo()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.allNodes = function (callback) {
        this.nodes.forEach(function (node) {
            callback(node);
        });
    };
    Master.prototype.allUnits = function (callback) {
        this.nodes.forEach(function (node) {
            node.units.forEach(function (unit) {
                callback(unit);
            });
        });
    };
    Master.prototype.displayDatabase = function (onlyNodes) {
        var _this = this;
        if (onlyNodes === void 0) { onlyNodes = false; }
        this.log("Showing " + this.nodes.length + " nodes");
        this.nodes.forEach(function (node, nodeInx) {
            if (onlyNodes)
                _this.log("===================================================================================");
            _this.log(nodeInx + ". " + node.name +
                ", type = " + node.typeName() +
                ", nrUnits = " + node.nrUnits +
                ", logical address = " + node.logicalAddress);
            if (onlyNodes) {
                _this.log("-----------------------------------------------------------------------------------");
                node.units.forEach(function (unit, unitInx) {
                    _this.log("> " + unitInx + ". '" + unit.name + "' => '" + unit.getName() +
                        "', type = " + unit.typeName() +
                        ", logical address: " + unit.logicalAddress +
                        ", value: " + unit.value +
                        (unit.status ? (", status = " + unit.status) : ""));
                });
            }
        });
    };
    Master.prototype.findUnit = function (logicalNodeAddress, logicalAddress) {
        var node = this.findNode(logicalNodeAddress);
        if (node)
            return node.units.find(function (u) { return u.logicalAddress === logicalAddress; });
        else
            return null;
    };
    Master.prototype.findNode = function (logicalAddress) {
        return this.nodes.find(function (n) { return n && (n.logicalAddress === logicalAddress); });
    };
    Master.prototype.getNodeAndUnit = function (node, unit) {
        // allow for index numbers or real nodes to be passed
        if (typeof node === "number") {
            if (node >= this.nodes.length) {
                this.err("getNodeAndUnit -> node nr " + node + " out of bounds");
                node = null;
            }
            else {
                node = this.nodes[node];
            }
        }
        if (!node) {
            this.err("getNodeAndUnit -> node not found ");
            return null;
        }
        if (typeof unit === "number") {
            if (unit >= node.units.length) {
                this.err("getNodeAndUnit -> unit nr " + unit + " out of bounds");
                unit = null;
            }
            else {
                unit = node.units[unit];
            }
        }
        if (!unit) {
            this.err("getNodeAndUnit -> unit not found");
            return null;
        }
        return { node: node, unit: unit };
    };
    /* ****************************************************************************** */
    /* Status requests                                                                */
    /*   Database (all known nodes)                                                   */
    /*   Node (all known units in this node)                                          */
    /*   Unit (only dimmer, switch, input, temperature, motor and mood implemented)   */
    /* ****************************************************************************** */
    Master.prototype.receiveStatus = function (next) {
        // called when an incoming message was received and classified as a status message
        // find node 
        var nodeLogical = next.message[2];
        var node = this.nodes.find(function (node) { return node && (node.logicalAddress == nodeLogical); });
        if (!node) {
            this.err("status message " + next.cmd + " for unknown node = " + nodeLogical);
            return;
        }
        // find unit 
        var unitLogical = next.message[3];
        var unit = node.units.find(function (unit) { return unit && (unit.logicalAddress == unitLogical); });
        if (!unit) {
            //this.err("status message " + next.cmd + " for unknown unit = " + unitLogical + 
            //          " in node = " + nodeLogical);
            return;
        }
        // Parse the status into the unit
        __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].receiveStatus(next, unit);
        /*
        // inform the system if a change was detected or if macro command (69)
        if ((currValue != unit.value) || (currStatus != unit.status) || (next.cmd == 69))
          this.system.informStatusChange(this, unit);
        */
    };
    Master.prototype.requestStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nodeInx, node, unitInx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nodeInx = 0;
                        _a.label = 1;
                    case 1:
                        if (!(nodeInx < this.nodes.length)) return [3 /*break*/, 6];
                        node = this.nodes[nodeInx];
                        if (!node.active) return [3 /*break*/, 5];
                        unitInx = 0;
                        _a.label = 2;
                    case 2:
                        if (!(unitInx < node.units.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.requestUnitStatus(node.units[unitInx])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        unitInx++;
                        return [3 /*break*/, 2];
                    case 5:
                        nodeInx++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.requestNodeStatus = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var unitInx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        unitInx = 0;
                        _a.label = 1;
                    case 1:
                        if (!(unitInx < node.units.length)) return [3 /*break*/, 4];
                        if (!node.units[unitInx].active) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.requestUnitStatus(node.units[unitInx])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        unitInx++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.requestUnitStatus = function (unit) {
        return __awaiter(this, void 0, void 0, function () {
            var message, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildRequestUnitStatus(unit.node, unit);
                        return [4 /*yield*/, this.send(message)];
                    case 1:
                        res = _a.sent();
                        // results will be set by the data event listener
                        this.info("get value of " + unit.node.getName() + "-" + unit.getName());
                        return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.setUnitStatus = function (unit, value) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = __WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildSetCmd(unit.node, unit, value);
                        if (!params.cmd) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.send(params.message)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.setPreset = function (unit, preset, temp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildSetPreset(unit.node, unit, preset, temp))];
                    case 1:
                        _a.sent();
                        this.info("set temp preset: " + preset + " of " + unit.node.getName() + "-" + unit.getName() + " to temp " + temp);
                        return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.selectPreset = function (unit, preset) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildSelectPreset(unit.node, unit, preset))];
                    case 1:
                        _a.sent();
                        this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + " to: " + preset);
                        return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.setSchedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildSendSchedule(this.schedule))];
                    case 1:
                        _a.sent();
                        this.info("set schedule to week nr: " + this.schedule);
                        return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.setTempOnOff = function (unit, on) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildSensorOnOff(unit.node, unit, on))];
                    case 1:
                        _a.sent();
                        this.info("turn temp sensor of " + unit.node.getName() + "-" + unit.getName() + ": " + (on ? "on" : "off"));
                        return [2 /*return*/];
                }
            });
        });
    };
    Master.prototype.doIncDecPreset = function (unit, inc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send(__WEBPACK_IMPORTED_MODULE_0__protocol__["c" /* Protocol */].buildIncDecPreset(unit.node, unit, inc))];
                    case 1:
                        _a.sent();
                        this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + ": " + (inc ? "up" : "down"));
                        return [2 /*return*/];
                }
            });
        });
    };
    return Master;
}(__WEBPACK_IMPORTED_MODULE_2__logger__["a" /* Logger */]));

//# sourceMappingURL=master.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Q; });
var Q = /** @class */ (function () {
    function Q(logger) {
        this.timer = null;
        this.queue = [];
        this.logger = logger || console.log;
    }
    Q.prototype.exec = function (fn) {
        var len = this.queue.length;
        this.queue.push(fn);
        // start timer to execute this functon if nobody else calls "do"
        this.logger("*Q* exec, we've put stuff in the queue, start " + (len ? "long timer" : "short timer"));
        this.startWaiter(len ? 500 : 0);
    };
    Q.prototype.endWaiter = function () {
        if (this.timer) {
            // this.logger("*Q* Waiter: clearing timer");
            clearTimeout(this.timer);
        }
    };
    Q.prototype.startWaiter = function (mSecs) {
        var _this = this;
        if (mSecs === void 0) { mSecs = 1000; }
        this.endWaiter();
        // this.logger("*Q* Waiter: starting timer for " + mSecs + " mSec");
        this.timer = setTimeout(function () {
            _this.logger("*Q* Waiter: timer finished, calling 'do' because nobody else did");
            _this.do();
        }, mSecs);
    };
    Q.prototype.do = function () {
        this.logger("*Q* Do, qlen=" + this.queue.length);
        // Get the oldest function and execute
        if (this.queue.length > 0) {
            var fn = this.queue[0];
            this.queue.splice(0, 1);
            // this.logger("*Q* Do: calling function");
            fn();
        }
        // Still stuff to execute
        if (this.queue.length > 0) {
            // this.logger("*Q* Do, still stuff in the queue, start timer");
            this.startWaiter();
        }
        else {
            this.endWaiter();
        }
    };
    return Q;
}());

//# sourceMappingURL=Q.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return translations; });
var translations = {
    "NL": {
        "Page.Control": "Lichten",
        "Page.Temperature": "Temperatuur",
        "Temperature.Asking": "Gevraagd",
        "Temperature.Off": "Uit",
        "Page.Moods": "Sferen",
        "Page.Stores": "Rolluiken",
        "Page.Config": "Configureer",
        "Config.Masters": "Masters",
        "Config.Groups": "Groepen",
        "Config.Master": "Master",
        "Config.Group": "Groep",
        "Config.Week": "Week",
        "Config.Holiday": "Vakantie",
        "Config.General": "Algemeen",
        "Config.Settings": "Instellingen",
        "Config.Language": "Taal",
        "Config.SeparateStores": "Rolluiken apart",
        "Config.MultipleGroups": "Meerdere groepen",
        "Config.Advanced": "Geavanceerde instellingen",
        "Config.Communication": "Communicatie",
        "Config.EnableAdv": "Geavanceerde instellingen aanzetten",
        "Config.EnterPW": "Geef het wachtwoord",
        "General.Done": "Klaar",
        "General.Save": "Bewaar",
        "General.Cancel": "Annuleer"
    },
    "FR": {
        "Page.Control": "Lumières",
        "Page.Temperature": "Température",
        "Temperature.Asking": "Demandé",
        "Temperature.Off": "Désactivé",
        "Page.Moods": "Atmosphères",
        "Page.Stores": "Stores",
        "Page.Config": "Configurer",
        "Config.Masters": "Masters",
        "Config.Groups": "Groups",
        "Config.Master": "Master",
        "Config.Group": "Group",
        "Config.Week": "Semaine",
        "Config.Holiday": "Vacances",
        "Config.General": "Général",
        "Config.Settings": "Paramètres",
        "Config.Language": "Langue",
        "Config.SeparateStores": "Stores séparés",
        "Config.MultipleGroups": "Plusiers groups",
        "Config.Advanced": "Paramètres avancés",
        "Config.Communication": "Communication",
        "Config.EnableAdv": "Activer les paramètres avancés",
        "Config.EnterPW": "Entrez le mot de passe de déverrouillage",
        "General.Done": "OK",
        "General.Save": "Sauver",
        "General.Cancel": "Annuller"
    },
    "EN": {
        "Page.Control": "Lights",
        "Page.Temperature": "Temperature",
        "Temperature.Asking": "Asking",
        "Temperature.Off": "Off",
        "Page.Moods": "Scenes",
        "Page.Stores": "Blinds",
        "Page.Config": "Configure",
        "Config.Masters": "Masters",
        "Config.Groups": "Groups",
        "Config.Master": "Master",
        "Config.Group": "Group",
        "Config.Week": "Week",
        "Config.Holiday": "Holiday",
        "Config.General": "General",
        "Config.Settings": "Settings",
        "Config.Language": "Language",
        "Config.SeparateStores": "Blinds separate",
        "Config.MultipleGroups": "Multiple groups",
        "Config.Advanced": "Advanced Settings",
        "Config.Communication": "Communication",
        "Config.EnableAdv": "Enable Advanced Settings",
        "Config.EnterPW": "Enter unlock password",
        "General.Done": "Done",
        "General.Save": "Save",
        "General.Cancel": "Cancel"
    }
};
/* old stuff from DPT
export default {
  start_menu: 'Start menu',
  scene_builder: 'Scene builder',
  users: 'Users',
  logout: 'Logout',
  favorites: 'Favorites',
  rooms: 'Rooms',
  scenes: 'Scenes',
  add_scene: 'Add scene',
  cannot_be_empty: 'Cannot be empty',
  enter_a_valid_name: 'Please enter a valid name',
  added_scene: 'Added scene {name}',
  selected_image: 'Selected image, press the image to take another picture.',
  room_management_info: 'Room management info',
  add_room: 'Add room',


  username_label: 'Your administrator email',
  username_login: 'John.doe@example.com',
  password_login: 'Enter your password',
  password_label: 'Your password',
  name_room_label: 'The name of the room',
  placeholder_device_name: 'Enter the name of the device.',

  admin_room: 'Manage rooms',
  admin_devices: 'Manage devices',
  exit_admin: 'Logout',
  admin_login: 'Admin login',
  select_image: 'Select image',
  image_preview: 'Image preview',
  resolve_the_following_errors: 'Resolve the following errors:',
  change_image: 'Change image',
  enter_a_valid_room_name: 'Enter a valid room name',
  user_management: 'User management',
  settings: 'Settings',
  devices: 'Devices',
  updated_device: 'Updated device',

  enabled_scene: 'Activated scene {name}',

  deleted_room: 'Deleted room',

  updated_room: 'Updated room',
  edit_room: 'Edit room',
  use_image: 'Use image',
  update_room: 'Update room',
  failed_to_update_room: 'Failed to update room',
  failed_to_add_room:  'Failed to add room',
  failed_to_delete_room: 'Failed to delete room',
  failed_to_update_image: 'Failed to update image',
  updated_image: 'Updated image',
  manage_rooms: 'Manage rooms',
  manage_devices: 'Manage devices',
  there_are_currently_no_lights_in_the_system: 'There are currently no lights in the system.',

  categorize_on: 'Categorize on',
  category: 'Category',
  type: 'Type',
  address: 'Address',
  name: 'Name',
  overview: 'Overview',

  click_to_change_image: 'Click to change image',
  delete_room_info: 'Are you sure you want to delete the room: <span class="warning"> {name}</span>? This action cannot be undone.',
  there_are_currently_no_roller_shutters_in_the_system: 'There are currently no roller shutters in the system',
  there_are_currently_no_camera_settings_in_the_system: 'There are currently no camera settings in the system',
  there_are_currently_no_audio_devices_in_the_system: 'There are currently no audio devices in the system',
  there_are_currently_no_temperature_settings_in_the_system: 'There are curently no temperature settings in the system',
  there_are_currently_no_security_settings_in_the_system:' There are currently no security settings in the system',
  there_are_currently_no_switches_in_the_system: 'There are currently no switches in the system',

  installer: 'Installer',

  lights: 'Lights',
  rollershutters: 'Rollershutters',
  security: 'Security',
  camera: 'Camera',
  temperature: 'Temperature',
  switches: 'Switches',
  audio: 'Audio',
  wifi: 'Wifi',
  assign_device_to_category: 'Assign device to category',

  // new labels
  displayType: 'Display type',
  exit: 'Exit',
  room: 'Room',
  edit_room: 'Edit room',
  select_an_image: 'Select an image by clicking on the button below',
  category_1: 'Lights',
  category_2: 'Switches',
  category_3: 'Rollershutters',
  category_4: 'Temperatures',
  category_5: 'Audio',
  category_5: 'Audio',

}

*/ 
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperaturPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// Johan, 11/11/2020
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperaturPipe = /** @class */ (function () {
    function TemperaturPipe() {
    }
    TemperaturPipe.prototype.transform = function (value) {
        if (value === undefined || value === null)
            return "-";
        if (typeof value === "string")
            value = parseInt(value);
        if (value > 1100 || value < 0)
            return "-";
        var intp = Math.floor(Math.abs(value / 10)) * ((value < 0) ? -1 : 1);
        var decp = Math.round((Math.abs(value) - Math.abs(intp) * 10));
        return intp + "," + decp + "\u02DAC";
    };
    TemperaturPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'temp'
        })
    ], TemperaturPipe);
    return TemperaturPipe;
}());

//# sourceMappingURL=temp.pipe.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimmerControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DimmerControl = /** @class */ (function () {
    function DimmerControl() {
        this.force = false;
    }
    DimmerControl.prototype.visible = function () {
        return this.force; // || this.service.status;
    };
    DimmerControl.prototype.arrow = function () {
        return (this.visible()) ? 'md-arrow-dropup' : 'md-arrow-dropdown';
    };
    DimmerControl.prototype.labelClick = function () {
        this.force = !this.force;
    };
    DimmerControl.prototype.change = function () {
        if (this.service.status == 2) {
        }
        else {
            this.service.setState(!!this.service.status);
        }
    };
    DimmerControl.prototype.changeValue = function (delta) {
        if (delta)
            this.service.value += delta;
        this.service.setState(this.service.value);
    };
    DimmerControl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dimmer',
            inputs: ['service'],
            template: "\n    <ion-item class=\"dimmer\">\n      <ion-label tappable (click)=\"labelClick()\">{{service.getName()}}\n        <ion-icon [name]=\"arrow()\"></ion-icon>\n        <span class=\"dimmer__value\">{{service.value}}%</span>\n        <ion-icon class=\"state\" *ngIf=\"service.status == 2\" name=\"time\" color=\"primary\"></ion-icon>\n      </ion-label>\n\n      <ion-toggle [(ngModel)]=\"service.status\" (ionChange)=\"change()\"></ion-toggle>\n    </ion-item>\n    <ion-item class=\"dimmer__slider\" *ngIf=\"visible()\">\n      <ion-range min=1 max=100 debounce=400 [(ngModel)]=\"service.value\" (ionChange)=\"changeValue()\">\n        <ion-icon range-left name=\"remove\" name=\"ios-remove\" (click)=\"changeValue(-5)\"></ion-icon>\n        <ion-icon range-right name=\"add\" name=\"ios-add\" (click)=\"changeValue(5)\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  "
        })
    ], DimmerControl);
    return DimmerControl;
}());

//# sourceMappingURL=dimmer.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpDownControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_protocol__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UpDownControl = /** @class */ (function () {
    function UpDownControl() {
    }
    UpDownControl.prototype.state = function () {
        return this.service.getDispayState();
    };
    UpDownControl.prototype.stateColor = function () {
        if ((this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kOpen) || (this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kClosed))
            return "bright";
        else if ((this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kOpening) || (this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kClosing))
            return "secondary";
        else
            return "";
    };
    UpDownControl.prototype.colorUp = function () {
        if (this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kOpen)
            return "bright";
        else if (this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kOpening)
            return "secondary";
        else
            return "light";
    };
    UpDownControl.prototype.doUp = function () {
        this.service.setState(__WEBPACK_IMPORTED_MODULE_1__system_protocol__["f" /* UnitMotorCmd */].kOpen);
    };
    UpDownControl.prototype.colorDown = function () {
        if (this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kClosed)
            return "bright";
        else if (this.service.status === __WEBPACK_IMPORTED_MODULE_1__system_protocol__["g" /* UnitState */].kClosing)
            return "secondary";
        else
            return "light";
    };
    UpDownControl.prototype.doDown = function () {
        this.service.setState(__WEBPACK_IMPORTED_MODULE_1__system_protocol__["f" /* UnitMotorCmd */].kClose);
    };
    UpDownControl.prototype.doStop = function () {
        this.service.setState(__WEBPACK_IMPORTED_MODULE_1__system_protocol__["f" /* UnitMotorCmd */].kStop);
    };
    UpDownControl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'updown',
            inputs: ['service'],
            template: "\n    <ion-item>\n      <ion-label>{{service.getName()}} \n        <span class=\"state\">{{state()}}</span>\n      </ion-label>\n\n      <ion-buttons item-content end>\n        <button ion-button small icon-only (click)=\"doDown(service)\" [color]=\"colorDown()\">\n          <ion-icon name=\"ios-arrow-down\"></ion-icon></button>\n        <button ion-button small color=\"light\" icon-only (click)=\"doStop(service)\">\n          <ion-icon name=\"md-square\"></ion-icon></button>\n        <button ion-button small icon-only (click)=\"doUp(service)\" [color]=\"colorUp()\">\n          <ion-icon name=\"ios-arrow-up\"></ion-icon></button>\n      </ion-buttons>\n    </ion-item>\n  "
        })
    ], UpDownControl);
    return UpDownControl;
}());

//# sourceMappingURL=updown.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SwitchControl = /** @class */ (function () {
    function SwitchControl() {
    }
    SwitchControl.prototype.change = function (unit) {
        if (this.service.status == 2) {
        }
        else {
            unit.setState(unit.status);
        }
    };
    SwitchControl.prototype.toggle = function (unit) {
        unit.setState(!unit.status);
    };
    SwitchControl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switch',
            inputs: ['service'],
            template: "\n    <ion-item>\n      <ion-label tappable (click)=\"toggle(service)\">\n        {{service.getName()}}\n        <ion-icon class=\"state\" *ngIf=\"service.status === 2\" name=\"time\" color=\"primary\"></ion-icon>\n      </ion-label>\n\n      <ion-toggle [(ngModel)]=\"service.status\" \n                  (ionChange)=\"change(service)\"></ion-toggle>    \n    </ion-item>\n  "
        })
    ], SwitchControl);
    return SwitchControl;
}());

//# sourceMappingURL=switch.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TemperatureControl = /** @class */ (function () {
    /*
      unit.status => 0=idle, 1=heating, 2=cooling
      unit.preset => 0=sun, 1=half sun, 2=moon, 3=half moon, -1=off
      unit.sun    => 10x temperature
      unit.hsun   => 10x temperature
      unit.moon   => 10x temperature
      unit.hmoon  => 10x temperature
      unit.value  => 10x temperature
    */
    function TemperatureControl() {
    }
    TemperatureControl.prototype.colorTemp = function () {
        if (this.service.status == 1)
            return "danger";
        else if (this.service.status == 2)
            return "cool";
        else
            return "light";
    };
    TemperatureControl.prototype.statusTemp = function () {
        if (this.service.status == 1)
            return "Heating";
        else if (this.service.status == 2)
            return "Cooling";
        else if (this.service.status == 0)
            return "Off";
        else
            return "-";
    };
    TemperatureControl.prototype.colorPreset = function (preset) {
        return (this.service.preset === preset) ? 'danger' : 'light';
    };
    TemperatureControl.prototype.getTemp = function () {
        switch (this.service.preset) {
            case 0: return this.service.sun;
            case 1: return this.service.hsun;
            case 2: return this.service.moon;
            case 3: return this.service.hmoon;
        }
    };
    TemperatureControl.prototype.incDecTemp = function (inc) {
        this.service.doIncDecPreset(inc);
    };
    TemperatureControl.prototype.changeTemp = function (delta) {
        this.service.setPreset(this.service.preset, this.service.value + delta);
    };
    TemperatureControl.prototype.changePreset = function (preset) {
        if (preset == -1) {
            this.service.sensorOnOff(false);
        }
        else {
            this.service.sensorOnOff(true);
            this.service.preset = preset;
            this.service.temp = this.getTemp();
            this.service.selectPreset(preset);
        }
    };
    TemperatureControl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'temperature',
            inputs: ['service'],
            template: "\n    <ion-item class=\"temp\">\n      <ion-label>\n        <h3>\n          <span class=\"left\">{{service.getName()}}</span>\n          <ion-icon *ngIf=\"service.preset >= 0\" class=\"right\" [color]=\"colorTemp()\" name=\"thermometer\"></ion-icon>\n          <!--span class=\"right\">{{statusTemp()}}</span -->\n        </h3>\n        <h1>{{service.value | temp}}</h1>\n        <h2>{{ \"Temperature.Asking\" |_ }}: {{ getTemp() | temp}}</h2>\n      \n        <ion-buttons class=\"updown\">\n          <button ion-button color=\"light\" icon-only (click)=\"incDecTemp(true)\"><ion-icon name=\"ios-arrow-up\"></ion-icon></button>\n          <button ion-button color=\"light\" icon-only (click)=\"incDecTemp(false)\"><ion-icon name=\"ios-arrow-down\"></ion-icon></button>\n        </ion-buttons>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"presets\">\n      <ion-label>\n    \n        <ion-buttons class=\"icons\">\n          <button ion-button icon-only [color]=\"colorPreset(-1)\" (click)=\"changePreset(-1)\"> \n            <ion-icon name=\"close\"></ion-icon></button>\n          <button ion-button icon-only [color]=\"colorPreset(1)\" (click)=\"changePreset(1)\"> \n            <ion-icon name=\"hsun\"></ion-icon></button>\n          <button ion-button icon-only [color]=\"colorPreset(0)\" (click)=\"changePreset(0)\">\n            <ion-icon name=\"sun\"></ion-icon></button>\n          <button ion-button icon-only [color]=\"colorPreset(3)\" (click)=\"changePreset(3)\">\n            <ion-icon name=\"hmoon\"></ion-icon></button>\n          <button ion-button icon-only [color]=\"colorPreset(2)\" (click)=\"changePreset(2)\">\n            <ion-icon name=\"moon\"></ion-icon></button>\n        </ion-buttons>\n\n        <ion-buttons class=\"icontext\">\n          <button ion-button clear (click)=\"changePreset(-1)\" color=\"dark\"> \n            <span>{{ \"Temperature.Off\" |_ }}</span></button>\n          <button ion-button clear (click)=\"changePreset(1)\" color=\"dark\"> \n            <span>{{service.hsun | temp}}</span></button>\n          <button ion-button clear (click)=\"changePreset(0)\" color=\"dark\">\n            <span>{{service.sun | temp}}</span></button>\n          <button ion-button clear (click)=\"changePreset(3)\" color=\"dark\">\n            <span>{{service.hmoon | temp}}</span></button>\n          <button ion-button clear (click)=\"changePreset(2)\" color=\"dark\">\n            <span>{{service.moon | temp}}</span></button>\n        </ion-buttons>\n      </ion-label>\n    </ion-item>\n\n  "
        })
        /*
          unit.status => 0=idle, 1=heating, 2=cooling
          unit.preset => 0=sun, 1=half sun, 2=moon, 3=half moon, -1=off
          unit.sun    => 10x temperature
          unit.hsun   => 10x temperature
          unit.moon   => 10x temperature
          unit.hmoon  => 10x temperature
          unit.value  => 10x temperature
        */
    ], TemperatureControl);
    return TemperatureControl;
}());

//# sourceMappingURL=temperature.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoodControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoodControl = /** @class */ (function () {
    function MoodControl(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.pressed = 0;
    }
    MoodControl.prototype.toast = function (message) {
        var toast = this.toastCtrl.create({
            message: message, duration: 1000, position: 'top'
        });
        toast.present();
    };
    MoodControl.prototype.moodColor = function () {
        return this.service.status ? "primary" : "push";
    };
    MoodControl.prototype.down = function (ev) {
        var _this = this;
        ev.preventDefault();
        // send long event after 1Sec
        this.pressed = setTimeout(function () {
            _this.toast(_this.service.name + " - long on");
            _this.service.setState(1);
            _this.pressed = -1;
        }, 1000);
    };
    MoodControl.prototype.up = function (ev) {
        ev.preventDefault();
        if (this.pressed === -1) {
            // we've already send a long "on"
            this.toast(this.service.name + " - long off");
            this.service.setState(0);
        }
        else if (this.pressed) {
            // stop timer for long and send short
            clearTimeout(this.pressed);
            this.toast(this.service.name + " - short");
            this.service.setState(-1); // short event
        }
    };
    MoodControl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mood',
            inputs: ['service'],
            template: "\n    <ion-item>\n      <ion-label>{{service.name}}</ion-label>\n      <button ion-button item-end round=\"true\" [color]=\"moodColor()\"\n              (mousedown)=\"down($event)\" (mouseup)=\"up($event)\"\n              (touchstart)=\"down($event)\" (touchend)=\"up($event)\"></button>\n    </ion-item>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], MoodControl);
    return MoodControl;
}());

//# sourceMappingURL=mood.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StdHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_system__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StdHeader = /** @class */ (function () {
    function StdHeader(system) {
        this.system = system;
    }
    StdHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'std-header',
            inputs: ['title'],
            template: "\n    <button ion-button menuToggle>\n      <img src=\"/assets/icon/duotecno.png\" />\n      <ion-icon name=\"{{ system.isSplitted ? '' : 'menu'}}\"></ion-icon>\n    </button>\n    <ion-title>{{ title |_ }}</ion-title>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__system_system__["a" /* System */]])
    ], StdHeader);
    return StdHeader;
}());

//# sourceMappingURL=stdheader.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__system_system__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StdPage = /** @class */ (function () {
    function StdPage(system) {
        this.system = system;
        this.showUpDowns = true;
        this.system.events.subscribe("refresh", this.refreshServices.bind(this));
    }
    StdPage.prototype.refreshServices = function () {
        var services = this.system[this.services];
        console.log("stdPage.refreshServices: " + this.services.length + " services");
        // request the status of all units used on this page
        services.forEach(function (u) { return u.reqState(); });
        // see if a group is used
        this.system.groups.forEach(function (g) { return g.used = services.some(function (u) { return u.group == g.id; }); });
    };
    StdPage.prototype.moreGroups = function (group) {
        return !!this.system && !!this.system.groups && (this.system.groups.length > 1) &&
            (!this.system.isSplitted || group.visible);
    };
    StdPage.prototype.toggle = function (group) {
        this.system.selectGroup(group);
    };
    StdPage.prototype.arrow = function (group) {
        return group.visible ? 'md-arrow-dropup' : 'md-arrow-dropdown';
    };
    StdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'std-page',
            inputs: ['services', 'showUpDowns'],
            template: "  \n    <ion-list *ngIf=\"system.masters.length > 0\">\n      <ion-list-group *ngFor=\"let group of system.groups\">\n        <ion-item-divider color=\"light\" *ngIf=\"group.used && moreGroups(group)\">\n          <ion-label tappable (click)=\"toggle(group)\">\n            <ion-icon *ngIf=\"! system.isSplitted\" [name]=\"arrow(group)\"></ion-icon>\n            {{group.name}}\n          </ion-label>\n        </ion-item-divider>\n        <ng-container *ngIf=\"group.used && group.visible\">\n          <ng-container *ngFor=\"let service of system[services]\">\n            <dimmer      [service]=\"service\" *ngIf=\"(service.group == group.id) && service.isDimmer()\"></dimmer>\n            <updown      [service]=\"service\" *ngIf=\"(service.group == group.id) && showUpDowns && service.isUpDown()\"></updown>\n            <switch      [service]=\"service\" *ngIf=\"(service.group == group.id) && service.isSwitch()\"></switch>\n            <mood        [service]=\"service\" *ngIf=\"(service.group == group.id) && service.isMood()\"></mood>\n            <temperature [service]=\"service\" *ngIf=\"(service.group == group.id) && service.isTemperature()\"></temperature>\n          </ng-container>\n        </ng-container>\n      </ion-list-group>\n    </ion-list>\n\n    <div *ngIf=\"system.masters.length <= 0\" class=\"noMaster\">\n      <h1>No masters yet?</h1>\n      <p>Go to the tab \"Configure\" -> \"Masters\"<br>\n        Add a master by clicking on the \"+ Master\"<br>\n        Fill out the parameters.<br>\n        <br>\n        Once your first Node or Smartbox is visible<br>\n        Click on it and select the units you want to use.<br>\n        <br>\n        Later you can split the units (switches, temperature, dimmers, scenes, ...) in multiple sections by first adding more groups.\n    </div>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__system_system__["a" /* System */]])
    ], StdPage);
    return StdPage;
}());

//# sourceMappingURL=stdpage.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cmdName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Rec; });
/* harmony export (immutable) */ __webpack_exports__["i"] = recName;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UnitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UnitMotorCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UnitType; });
/* unused harmony export hex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Protocol; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(44);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Duotecno master IP protocol implementation
// Johan Coppieters
//
// Dec 2018 - v1 - first version based on 1 smartbox
// Mar 2019 - v2 - rewrite to support multiple masters
//
// Dec 2019 - v3 - for app side only
///////////////////////////
// Commands + attributes //
///////////////////////////
var Cmd;
(function (Cmd) {
    Cmd[Cmd["SetSwitch"] = 163] = "SetSwitch";
    Cmd[Cmd["SetDimmer"] = 162] = "SetDimmer";
    Cmd[Cmd["SetControl"] = 168] = "SetControl";
    Cmd[Cmd["SetMotor"] = 182] = "SetMotor";
    Cmd[Cmd["SetSensor"] = 136] = "SetSensor";
    Cmd[Cmd["Login"] = 214] = "Login";
    Cmd[Cmd["Heartbeat"] = 215] = "Heartbeat";
    Cmd[Cmd["DatabaseInfo"] = 209] = "DatabaseInfo";
    Cmd[Cmd["SetSchedule"] = 217] = "SetSchedule";
})(Cmd || (Cmd = {}));
// for Set Switch/Dimmer/Control
var reqDim = 3;
var reqOff = 9;
var reqOn = 10;
// for Login
var reqDisconnect = 0;
var reqConnect = 3;
// for DatabaseInfo = 209;
var reqDBInfo = 0;
var reqNodeInfo = 1;
var reqUnitInfo = 2;
var reqUnitStatus = 3;
// for Schedule
var reqSchedule = 218;
function cmdName(cmd) {
    return Cmd[cmd] || "cmd" + cmd;
}
//////////////////////
// Received results //
//////////////////////
var Rec;
(function (Rec) {
    // return info from cmdDatabaseInfo
    Rec[Rec["DBInfo"] = 0] = "DBInfo";
    Rec[Rec["NodeInfo"] = 1] = "NodeInfo";
    Rec[Rec["UnitInfo"] = 2] = "UnitInfo";
    Rec[Rec["ErrorMessage"] = 17] = "ErrorMessage";
    Rec[Rec["ConnectStatus"] = 67] = "ConnectStatus";
    Rec[Rec["ScheduleStatus"] = 73] = "ScheduleStatus";
    // return info from recDBInfo
    Rec[Rec["Info"] = 64] = "Info";
    // return info from reqUnitStatus
    Rec[Rec["Mood"] = 4] = "Mood";
    Rec[Rec["Dimmer"] = 5] = "Dimmer";
    Rec[Rec["Switch"] = 6] = "Switch";
    Rec[Rec["Sensor"] = 7] = "Sensor";
    Rec[Rec["Motor"] = 38] = "Motor";
    Rec[Rec["Macro"] = 69] = "Macro";
})(Rec || (Rec = {}));
;
function recName(rec) {
    return Rec[rec] || "rec" + rec;
}
// Node types
var NodeType;
(function (NodeType) {
    NodeType[NodeType["kNoNode"] = 0] = "kNoNode";
    NodeType[NodeType["kStandardNode"] = 1] = "kStandardNode";
    NodeType[NodeType["kGatewayNode"] = 4] = "kGatewayNode";
    NodeType[NodeType["kModemNode"] = 8] = "kModemNode";
    NodeType[NodeType["kGUINode"] = 32] = "kGUINode";
})(NodeType || (NodeType = {}));
;
// States
var UnitState;
(function (UnitState) {
    UnitState[UnitState["kOpening"] = 4] = "kOpening";
    UnitState[UnitState["kClosing"] = 3] = "kClosing";
    UnitState[UnitState["kOpen"] = 2] = "kOpen";
    UnitState[UnitState["kClosed"] = 1] = "kClosed";
    UnitState[UnitState["kStopped"] = 0] = "kStopped";
})(UnitState || (UnitState = {}));
;
var UnitMotorCmd;
(function (UnitMotorCmd) {
    UnitMotorCmd[UnitMotorCmd["kClose"] = 5] = "kClose";
    UnitMotorCmd[UnitMotorCmd["kOpen"] = 4] = "kOpen";
    UnitMotorCmd[UnitMotorCmd["kStop"] = 3] = "kStop";
})(UnitMotorCmd || (UnitMotorCmd = {}));
;
var UnitType;
(function (UnitType) {
    UnitType[UnitType["kNoUnit"] = 0] = "kNoUnit";
    UnitType[UnitType["kDimmer"] = 1] = "kDimmer";
    UnitType[UnitType["kSwitch"] = 2] = "kSwitch";
    UnitType[UnitType["kInput"] = 3] = "kInput";
    UnitType[UnitType["kTemperature"] = 4] = "kTemperature";
    UnitType[UnitType["kExtendedAudio"] = 5] = "kExtendedAudio";
    UnitType[UnitType["kMood"] = 7] = "kMood";
    UnitType[UnitType["kSwitchingMotor"] = 8] = "kSwitchingMotor";
    UnitType[UnitType["kAudio"] = 10] = "kAudio";
    UnitType[UnitType["kAV"] = 11] = "kAV";
    UnitType[UnitType["kIRTX"] = 12] = "kIRTX";
    UnitType[UnitType["kVideo"] = 14] = "kVideo";
    UnitType[UnitType["kLightbulb"] = 101] = "kLightbulb";
    UnitType[UnitType["kGarageDoor"] = 102] = "kGarageDoor";
    UnitType[UnitType["kNoType"] = 0] = "kNoType";
})(UnitType || (UnitType = {}));
;
// kLightbulb  == kSwitch with no "stk" in the name
// kGarageDoor == kSwitchingMotor with "!" in the name
function hex(n) {
    n = Math.floor(n);
    return "0x" + n.toString(16);
}
/////////////////////////
// Node in the network //
/////////////////////////
var Node = /** @class */ (function () {
    function Node(master, params) {
        this.master = master;
        __WEBPACK_IMPORTED_MODULE_0__types__["a" /* Sanitizers */].nodeInfo(params, this);
        this.units = [];
        // remove | in names
        var separ = this.name.indexOf("|");
        this.name = (separ < 0) ? this.name : this.name.substring(0, separ) + " " + (this.name.substring(separ + 1));
    }
    Node.prototype.inMultiNode = function () {
        return this.master.inMultiNode();
    };
    Node.prototype.typeName = function () {
        switch (this.type) {
            case NodeType.kStandardNode: return "Standard";
            case NodeType.kGatewayNode: return "Gateway";
            case NodeType.kModemNode: return "Modem";
            case NodeType.kGUINode: return "GUI";
            default: return "Unknown node type (" + this.type + ")";
        }
    };
    Node.prototype.getName = function () {
        return this.name;
    };
    Node.prototype.getSort = function () {
        return this.getName().toLowerCase();
    };
    Node.prototype.getNumber = function () {
        return hex(this.logicalAddress);
    };
    Node.prototype.getDescription = function () {
        return this.getName() + ", active: " + this.active + ", type: " + this.typeName() + ", node: " + this.getName();
    };
    Node.prototype.findUnit = function (logicalAddress) {
        return this.units.find(function (u) { return u && (u.logicalAddress === logicalAddress); });
    };
    Node.prototype.findUnitIndex = function (logicalAddress) {
        return this.units.findIndex(function (u) { return u && (u.logicalAddress === logicalAddress); });
    };
    return Node;
}());

/////////////////////////
// Unit within a Node  //
/////////////////////////
var Unit = /** @class */ (function () {
    function Unit(node, params) {
        this.group = 0;
        this.node = node;
        __WEBPACK_IMPORTED_MODULE_0__types__["a" /* Sanitizers */].unitInfo(params, this);
        // make a display name for homekit, without the |
        // if the display name is empty make a N[nodeAdr]-U[unitAdr] name.
        var separ = this.name.indexOf("|");
        this.name = (separ < 0) ? this.name : this.name.substring(0, separ) + " " + (this.name.substring(separ + 1));
        this.displayName = (separ < 0) ? this.name : (this.name.substring(separ + 1) + " " + this.name.substring(0, separ));
        if (!this.displayName)
            this.displayName = this.getSerialNr();
    }
    Unit.prototype.isUnit = function (nodeLogicalAddress, unitLogicalAddress) {
        return ((this.node.logicalAddress == nodeLogicalAddress) && (this.logicalAddress == unitLogicalAddress));
    };
    Unit.prototype.sameValue = function (value) {
        if ((this.type === UnitType.kSwitchingMotor) || (this.type === UnitType.kGarageDoor))
            return (((this.value == UnitState.kOpening) && (value == 4)) ||
                ((this.value == UnitState.kClosing) && (value == 5)) ||
                ((this.value <= UnitState.kOpen) && (value == 3)));
        else
            return this.value == value;
    };
    Unit.prototype.typeName = function () {
        switch (this.type) {
            case UnitType.kDimmer: return "Dimmer";
            case UnitType.kSwitch: return "Switch/Relay";
            case UnitType.kLightbulb: return "Lightbulb";
            case UnitType.kInput: return "Control input";
            case UnitType.kTemperature: return "Temperature sensor";
            case UnitType.kExtendedAudio: return "Extended audio";
            case UnitType.kMood: return "Virtual mood";
            case UnitType.kSwitchingMotor: return "Switch motor";
            case UnitType.kGarageDoor: return "Garagedoor";
            case UnitType.kAudio: return "Basic audio";
            case UnitType.kAV: return "AV Matrix";
            case UnitType.kIRTX: return "IRTX";
            case UnitType.kVideo: return "Video multiplexer";
            default: return "Unknown unit type (" + this.type + ")";
        }
    };
    Unit.prototype.getName = function () {
        return this.name;
    };
    Unit.prototype.getDisplayName = function () {
        if (this.inMultiNode)
            return this.displayName + " on " + this.node.getName();
        else
            return this.displayName;
    };
    Unit.prototype.getNumber = function () {
        return this.node.getNumber() + ";" + hex(this.logicalAddress);
    };
    Unit.prototype.getSort = function () {
        var name = this.getName().toLowerCase();
        switch (this.type) {
            case UnitType.kTemperature: return "01|" + name;
            case UnitType.kSwitchingMotor: return "02|" + name;
            case UnitType.kGarageDoor: return "02|" + name;
            case UnitType.kDimmer: return "03|" + name;
            case UnitType.kLightbulb: return "04|" + name;
            case UnitType.kSwitch: return "04|" + name;
            case UnitType.kInput: return "11|" + name;
            case UnitType.kExtendedAudio: "12|" + name;
            case UnitType.kMood: return "09|" + name;
            case UnitType.kAudio: return "12|" + name;
            case UnitType.kAV: return "13|" + name;
            case UnitType.kIRTX: return "19|" + name;
            case UnitType.kVideo: return "14|" + name;
            default: return "99|" + name;
        }
    };
    Unit.prototype.getType = function () {
        // as default we consider a switch as a light unless it has "stk" in the name
        if ((this.type === UnitType.kSwitch) &&
            (this.name.indexOf("STK") < 0) && (this.name.indexOf("stk") < 0) && (this.name.indexOf("Stk") < 0))
            return UnitType.kLightbulb;
        // as default we consider a switch-motor as a window covering unless it has "!" in the name
        if ((this.type === UnitType.kSwitchingMotor) &&
            (this.name.indexOf("!") >= 0))
            return UnitType.kGarageDoor;
        return this.type;
    };
    Unit.prototype.getSerialNr = function () {
        if (this.inMultiNode)
            return this.node.getName() + "-N" + this.logicalNodeAddress + "-U" + this.logicalAddress;
        else
            return "N" + this.logicalNodeAddress + "-U" + this.logicalAddress;
    };
    Unit.prototype.isCtrl = function () {
        return this.isSwitch() || this.isDimmer() || this.isUpDown();
    };
    Unit.prototype.isSwitch = function () {
        return (this.type === UnitType.kSwitch) || (this.type === UnitType.kLightbulb);
    };
    Unit.prototype.isMood = function () {
        return (this.type === UnitType.kMood);
    };
    Unit.prototype.isInput = function () {
        return (this.type === UnitType.kInput);
    };
    Unit.prototype.isTemperature = function () {
        return (this.type === UnitType.kTemperature);
    };
    Unit.prototype.isDimmer = function () {
        return (this.type === UnitType.kDimmer);
    };
    Unit.prototype.isUpDown = function () {
        return (this.type === UnitType.kGarageDoor) || (this.type === UnitType.kSwitchingMotor);
    };
    Unit.prototype.setPreset = function (preset, temp) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.node.master.setPreset(this, preset, temp)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Unit.prototype.selectPreset = function (preset) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.node.master.selectPreset(this, preset)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Unit.prototype.sensorOnOff = function (on) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.node.master.setTempOnOff(this, on)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Unit.prototype.doIncDecPreset = function (inc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.node.master.doIncDecPreset(this, inc)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Unit.prototype.inMultiNode = function () {
        return this.node.inMultiNode();
    };
    Unit.prototype.reqState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.node.master.requestUnitStatus(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Unit.prototype.setState = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.node.master.setUnitStatus(this, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Unit.prototype.getDispayState = function () {
        switch (this.type) {
            case UnitType.kDimmer: return ((this.status) ? "on" : "off") + " (" + this.value + "%)";
            case UnitType.kSwitch:
            case UnitType.kLightbulb: return (this.status) ? "on" : "off";
            case UnitType.kInput: return (this.status) ? "on" : "off";
            case UnitType.kTemperature: return (this.value / 10.0) + "C";
            case UnitType.kMood: return (this.status) ? "on" : "off";
            case UnitType.kGarageDoor:
            case UnitType.kSwitchingMotor:
                if (this.status === UnitState.kOpening)
                    return "opening";
                if (this.status === UnitState.kClosing)
                    return "closing";
                if (this.status === UnitState.kOpen)
                    return "open";
                if (this.status === UnitState.kClosed)
                    return "closed";
                if (this.status === UnitState.kStopped)
                    return "stopped";
        }
        return (this.status) ? this.status.toString() : "unknown";
    };
    Unit.prototype.getDescription = function () {
        return this.getDisplayName() + ", active: " + this.active + ", type: " + this.typeName() + ", status: " + this.status + ", value: " + this.value;
    };
    return Unit;
}());

/////////////////////////////////////
// IP node protocol implementation //
/////////////////////////////////////
var Protocol = {
    // set to a different value if needed.
    logger: console.log,
    setLogger: function (logger) {
        this.logger = logger;
    },
    ////////////////////
    // Helper methods //
    ////////////////////
    getStr: function (arr, at) {
        return arr.slice(at + 1, at + arr[at] + 1)
            .map(function (val) { return String.fromCharCode(val); })
            .join("");
    },
    makeLong: function (arr, at) {
        return arr[at + 0] * 256 * 256 * 256 +
            arr[at + 1] * 256 * 256 +
            arr[at + 2] * 256 +
            arr[at + 3];
    },
    isStatus: function (cmd) {
        return (cmd === Rec.Mood) ||
            (cmd === Rec.Dimmer) ||
            (cmd === Rec.Switch) ||
            (cmd === Rec.Sensor) ||
            (cmd === Rec.Motor) ||
            (cmd === Rec.Macro);
    },
    //////////////////////////
    // Code to String stuff //
    //////////////////////////
    translateError: function (err) {
        if (err[0] != Rec.ErrorMessage)
            return "received unexpected data: " + err;
        switch (err[1]) {
            case 11: return "Wrong object method received for " + err[2] + "/" + err[3];
            case 12: return "Wrong Message Code received: " + err[2];
            case 18: return "This function can only be executed when this node is the master";
            case 128: return "The node database is not ready";
            case 129: return "Node " + err[2] + " could not be found in the database";
            case 130: return "Wrong node index: " + err[2];
            case 131: return "Unit " + err[2] + " with address " + err[3] + " could not be found in the database";
            case 132: return "Wrong unit index " + err[3] + " for this node " + err[2];
            case 133: return "Unit " + err[3] + " of node " + err[2] + " is of a different type";
            case 140: return "The requested operation is not allowed";
            case 141: return "The requested operation is not allowed because a wrong access code is used";
            case 142: return "The requested operation is not implemented in this software version";
            default:
                return "Unknown error";
        }
    },
    ////////////////////
    // Socket methods //
    ////////////////////
    write: function (socket /* | Socket */, data) {
        var cmd = parseInt(data[0]);
        if (data instanceof Array) {
            data = data.join(",");
        }
        if (typeof data === "string") {
            // if no enclosing "[...]", add them
            if (data[0] != "[")
                data = "[" + data + "]";
            this.logger("sending: " + cmdName(cmd) + " - " + data);
            try {
                // append a LF char and send
                socket.send(data + String.fromCharCode(10));
                return __WEBPACK_IMPORTED_MODULE_0__types__["b" /* WriteError */].writeOK;
            }
            catch (err) {
                this.logger("error sending through socket " + err.message);
                return __WEBPACK_IMPORTED_MODULE_0__types__["b" /* WriteError */].writeFatal;
            }
        }
        else {
            throw (new Error("wrong data type for sending"));
        }
    },
    //////////////////////////////
    // Handle incoming data     //
    //  strip []                //
    //  convert to array        //
    //  convert chars to ints   //
    //////////////////////////////
    nextMessage: function (buffer) {
        // pre return result
        var nextRec = { rest: buffer, isStatus: false, message: null, cmd: 0 };
        // no "start-of-data" -> discard buffer || else -> trim buffer
        var begin = buffer.indexOf("[");
        if (begin < 0) {
            nextRec.rest = "";
        }
        else if (begin != 0) {
            nextRec.rest = buffer.substring(begin);
        }
        // we either have valid start data or nothing
        if (nextRec.rest.length > 0) {
            // do we have an "end-of-data" in our buffer
            var end = nextRec.rest.indexOf("]");
            // if no end-of-data was found:
            // leave it in the buffer and hope more data will arrive soon
            //TODO: set up a timer that clears the buffer if nothing comes through
            if (end >= 0) {
                // fetch the first available message (discard the [ and ])
                var msg = nextRec.rest.substring(1, end);
                // delete the used message from the input buffer
                // if there, also delete the trailing LF (0x0A)
                if ((end <= nextRec.rest.length) && (nextRec.rest.charCodeAt(end + 1) === 0x0A))
                    end++;
                nextRec.rest = nextRec.rest.substring(end + 1);
                // convert to array and turn strings into numbers
                nextRec.message = msg.split(",").map(function (c) { return parseInt(c); });
                // get the first byte to see what kind of incoming data
                nextRec.cmd = nextRec.message[0];
                nextRec.isStatus = this.isStatus(nextRec.cmd);
                // this.logger("processing: " + (nextRec.isStatus ? "status -> " : "") + msg);
            }
        }
        return nextRec;
    },
    buildLogin: function (password) {
        password = password || this.config.password;
        return [Cmd.Login, reqConnect, password.length].concat(password.split('').map(function (c) { return c.charCodeAt(0); }));
    },
    buildDisconnect: function () {
        return [Cmd.Login, reqDisconnect];
    },
    /////////////////////////////////////
    // Collect info of all found nodes //
    /////////////////////////////////////
    buildDBInfo: function () {
        return [Cmd.DatabaseInfo, reqDBInfo];
    },
    buildNodeInfo: function (nodeInx) {
        return [Cmd.DatabaseInfo, reqNodeInfo, nodeInx];
    },
    buildUnitInfo: function (node, unitInx) {
        return [Cmd.DatabaseInfo, reqUnitInfo, node.logicalAddress, unitInx];
    },
    buildRequestUnitStatus: function (node, unit) {
        return [Cmd.DatabaseInfo, reqUnitStatus, node.logicalAddress, unit.logicalAddress, unit.type];
    },
    buildRequestSchedule: function () {
        return [reqSchedule, 0];
    },
    getCmdAndMethod: function (unit, value) {
        switch (unit.type) {
            case UnitType.kDimmer:
                if (typeof value === "boolean")
                    return { cmd: Cmd.SetDimmer, method: (value) ? reqOn : reqOff };
                else if (value <= 0)
                    return { cmd: Cmd.SetDimmer, method: reqOff };
                else
                    return { cmd: Cmd.SetDimmer, method: reqDim, value: Math.max(Math.min(value, 99), 1) };
            case UnitType.kSwitch:
                return { cmd: Cmd.SetSwitch, method: (value) ? 3 : 2 };
            case UnitType.kInput:
            case UnitType.kMood:
                if (value < 0)
                    return { cmd: Cmd.SetControl, method: 2 }; // short pulse
                else
                    return { cmd: Cmd.SetControl, method: 3, value: (value) ? 1 : 0 }; // long event + 0/1
            case UnitType.kSwitchingMotor:
                return { cmd: Cmd.SetMotor, method: value }; // 5 close, 4 open, 3 is stop
            case UnitType.kTemperature:
                return { cmd: Cmd.SetSensor, method: 13 /* select preset */, value: value };
            case UnitType.kExtendedAudio:
            case UnitType.kAudio:
            case UnitType.kAV:
            case UnitType.kIRTX:
            case UnitType.kVideo:
            default: // "Unknown unit type (" + unit.type + ")";
                this.err("setting " + unit.type + " not yet implemented");
                return { cmd: 0, method: 0, value: 0 };
        }
    },
    buildSetCmd: function (node, unit, value) {
        var params = this.getCmdAndMethod(unit, value);
        if (params.cmd) {
            params.message = [params.cmd, params.method, node.logicalAddress, unit.logicalAddress];
            if (typeof params.value != "undefined")
                params.message.push(params.value);
            // some need a requestStatus afterwards
            params.reqStatus = ((params.cmd === Cmd.SetDimmer) && (params.method === reqDim));
        }
        return params;
    },
    /* Temperature / Presets */
    buildSelectPreset: function (node, unit, preset) {
        var params = this.getCmdAndMethod(unit, preset);
        return [params.cmd, 13, node.logicalAddress, unit.logicalAddress, preset];
    },
    buildSetPreset: function (node, unit, preset, value) {
        return [Cmd.SetSensor, 1, node.logicalAddress, unit.logicalAddress, preset, Math.floor(value / 256), value % 256];
    },
    buildIncDecPreset: function (node, unit, inc) {
        return [Cmd.SetSensor, (inc) ? 5 : 6, node.logicalAddress, unit.logicalAddress];
    },
    buildSensorOnOff: function (node, unit, on) {
        return [Cmd.SetSensor, 3, node.logicalAddress, unit.logicalAddress, (on) ? 1 : 0];
    },
    /* Schedule commands */
    buildSendSchedule: function (schedule) {
        return [Cmd.SetSchedule, 0, Math.max(0, Math.min(3, schedule))];
    },
    ///////////////////
    // Received info //
    ///////////////////
    receiveStatus: function (next, unit) {
        if (next.cmd === Rec.Sensor) {
            // sensor -> value
            unit.value = next.message[9] * 256 + next.message[10]; // 10x current temperature
            unit.status = next.message[7]; // 0=idle, 1=heating, 2=cooling
            unit.preset = (next.message[6]) ? next.message[8] : -1; // 0=sun, 1=half sun, 2=moon, 3=half moon, -1 = off
            unit.sun = next.message[11] * 256 + next.message[12]; // 10x temperature
            unit.hsun = next.message[13] * 256 + next.message[14]; // 10x temperature
            unit.moon = next.message[15] * 256 + next.message[16]; // 10x temperature
            unit.hmoon = next.message[17] * 256 + next.message[18]; // 10x temperature
            this.logger("received temperature = " + unit.value / 10.0);
        }
        else if (next.cmd === Rec.Switch) {
            // switch -> boolean
            unit.status = next.message[6];
            unit.value = (next.message[6] > 0);
        }
        else if (next.cmd === Rec.Dimmer) {
            // dimmer -> 0 .. 99
            unit.status = next.message[6];
            unit.value = next.message[7];
        }
        else if (next.cmd === Rec.Mood) {
            // control -> boolean
            unit.status = next.message[6];
            unit.value = (next.message[6] != 0);
        }
        else if (next.cmd === Rec.Motor) {
            // motor -> boolean/status
            unit.status = next.message[6]; // 0 = stopped, 1 stopped/down, 2 = stopped/up, busy/down, busy/up
            unit.value = next.message[6]; // (unit.status == 1);    // true=closed
        }
        else if (next.cmd = Rec.Macro) {
            // = EV_UNITMACROCOMMANDO
            // example: On 50%: [69,0,NodeAddress,UnitAddress,6,1,50]
            //          Off:    [69,0,NodeAddress,UnitAddress,6,0,0]
            unit.status = next.message[5];
            unit.value = next.message[6];
        }
    },
    makeDBInfo: function (res) {
        return { nrNodes: res[2] };
    },
    makeNodeInfo: function (res) {
        var name = this.getStr(res, 8);
        var offset = name.length;
        return {
            name: name,
            index: res[2],
            logicalAddress: res[3],
            physicalAddress: this.makeLong(res, 4),
            nrUnits: res[offset + 9],
            type: res[offset + 10],
            flags: res[offset + 11]
        };
    },
    makeUnitInfo: function (res) {
        var name = this.getStr(res, 6);
        var offset = name.length;
        return {
            name: name,
            logicalReqNodeAddress: res[2],
            index: res[3],
            logicalNodeAddress: res[4],
            logicalAddress: res[5],
            type: res[offset + 7],
            flags: res[offset + 8]
        };
    }
};
//# sourceMappingURL=protocol.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WriteError; });
/* unused harmony export kEmptyCommRecord */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return kEmptyGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sanitizers; });
/* unused harmony export ascii */
/* unused harmony export char */
/* unused harmony export two */
/* unused harmony export now */
/* unused harmony export single */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__protocol__ = __webpack_require__(43);
// Johan Coppieters. 
//
// v1 - server version Apr 2019
// v2 - app version

;
;
;
;
;
;
;
var WriteError;
(function (WriteError) {
    WriteError[WriteError["writeFatal"] = -1] = "writeFatal";
    WriteError[WriteError["writeError"] = 0] = "writeError";
    WriteError[WriteError["writeOK"] = 1] = "writeOK";
})(WriteError || (WriteError = {}));
var kEmptyCommRecord = { status: false, cmd: -1, message: [-1, 0, 0], rest: "" };
var kEmptyGroup = { name: "Home", id: 0, order: 0, visible: true };
////////////////
// Sanitizers //
////////////////
var Sanitizers = {
    masterConfig: function (config) {
        if (!config)
            config = {};
        config.name = config.name || "Smartbox";
        config.address = config.address || "";
        config.port = config.port || 0;
        if (typeof config.port === "string")
            config.port = parseInt(config.port);
        config.password = config.password || "";
        config.debug = config.debug || false;
        if (typeof config.active === "undefined")
            config.active = true;
        config.active = !!config.active;
        return config;
    },
    system: function (config) {
        if (!config)
            config = {};
        config.language = config.language || "EN";
        config.stores = config.stores || false;
        config.multiple = config.multiple || false;
        config.socketserver = config.socketserver || "akiworks.be";
        config.socketport = config.socketport || 9999;
        config.cmasters = config.cmasters || [];
        config.cnodes = config.cnodes || [];
        config.cunits = config.cunits || [];
        // support old style groups, pre v1.1
        if (typeof config.cgroups != "undefined")
            config.cgroups = config.cgroups || ["Home"];
        return config;
    },
    group: function (config) {
        if (!config)
            return kEmptyGroup;
        config.name = config.name || kEmptyGroup.name;
        config.id = config.id || kEmptyGroup.id;
        config.order = config.order || kEmptyGroup.order;
        config.visible = (typeof config.visible === "boolean") ? config.visible : kEmptyGroup.visible;
        return config;
    },
    groups: function (config) {
        if (!config)
            return [kEmptyGroup];
        config.forEach(function (g) { return Sanitizers["group"](g); });
        return config;
    },
    nodeConfig: function (config) {
        if (!config)
            config = {};
        config.active = config.active || "N";
        config.masterAddress = config.masterAddress || "";
        config.masterPort = config.masterPort || 5001;
        config.logicalAddress = config.logicalAddress || 0;
        return config;
    },
    unitConfig: function (config) {
        if (!config)
            config = {};
        config.active = config.active || "N";
        config.logicalAddress = config.logicalAddress || 0;
        config.logicalNodeAddress = config.logicalNodeAddress || 0;
        config.masterAddress = config.masterAddress || "";
        config.masterPort = config.masterPort || 5001;
        if (typeof config.group === "string")
            config.group = parseInt(config.group);
        config.group = config.group || 0;
        return config;
    },
    // for data coming from the hardware or prefs
    nodeInfo: function (info, into) {
        info.name = info.name || "";
        info.index = info.index || -1;
        info.logicalAddress = info.logicalAddress || 0;
        info.physicalAddress = info.physicalAddress || 0;
        info.type = info.type || __WEBPACK_IMPORTED_MODULE_0__protocol__["b" /* NodeType */].kNoNode;
        info.flags = info.flags || 0;
        info.nrUnits = info.nrUnits || 0;
        if (into)
            Object.keys(info).forEach(function (prop) { return into[prop] = info[prop]; });
        return info;
    },
    unitInfo: function (info, into) {
        info.name = info.name || "";
        info.logicalReqNodeAddress = info.logicalReqNodeAddress || 0;
        info.index = info.index || -1;
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.type = info.type || __WEBPACK_IMPORTED_MODULE_0__protocol__["h" /* UnitType */].kNoType;
        info.flags = info.flags || 0;
        if (into)
            Object.keys(info).forEach(function (prop) { return into[prop] = info[prop]; });
        return info;
    }
};
//////////////////////
// Helper functions //
//////////////////////
function ascii(char) {
    return char.charCodeAt(0);
}
function char(ascii) {
    return String.fromCharCode(ascii);
}
function two(n) {
    return (n < 10) ? ("0" + n) : n.toString();
}
function now() {
    var aDate = new Date();
    return aDate.getFullYear() + "-" +
        two(aDate.getMonth() + 1) + "-" +
        two(aDate.getDate()) + " " +
        two(aDate.getHours()) + ":" +
        two(aDate.getMinutes()) + ":" +
        two(aDate.getSeconds());
}
function single(val) {
    return (val instanceof Array) ? val[0] : val;
}
//# sourceMappingURL=types.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map