function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane (ionSplitPaneVisible)=\"splitter($event)\" contentId=\"main\">\n    <ion-menu contentId=\"main\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>{{ \"Config.Groups\" |_ }}</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class=\"ion-padding\">\n        <ion-list *ngIf=\"system.config.multiple\">\n          <ion-item *ngFor=\"let group of system.groups\" lines=\"none\">\n            <ion-label>\n              {{group.name}}\n            </ion-label>\n            <ion-checkbox slot=\"start\" [checked]=\"group.visible\" color=\"secondary\" (ionChange)=\"doCheck($event, group)\"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n\n        <ion-radio-group *ngIf=\"! system.config.multiple\" value=\"{{selected()}}\" (ionChange)=\"doRadio($event)\">\n          <ion-item *ngFor=\"let group of system.groups\" lines=\"none\">\n            <ion-label>\n              {{group.name}}\n            </ion-label>\n            <ion-radio slot=\"start\" color=\"secondary\" value=\"{{group.id}}\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        \n        <ion-button *ngIf=\"!system.isSplitted && system.config.multiple\" (click)=\"done()\">{{ \"General.Done\" |_ }}</ion-button>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-tabs-module */
        "tabs-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs/tabs.module */
        "./src/app/tabs/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./system/system */
    "./src/app/system/system.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, menuCtrl, system) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.system = system;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.system.setBrowser(_this.platform.is('pwa'));
          });
          this.platform.resume.subscribe(function () {
            console.log("resume event");

            _this.system.emitter.emit('refresh');
          });
        }
      }, {
        key: "selected",
        value: function selected() {
          // find the first visible group
          var group = this.system.groups.find(function (g) {
            return g.visible;
          });
          return group ? group.id : 0;
        }
      }, {
        key: "doRadio",
        value: function doRadio(event) {
          var selected = event.detail.value;
          this.system.groups.forEach(function (g) {
            g.visible = g.id == selected;
          });
          this.system.writeGroups();
          event.preventDefault(); // close if the menu controller is open

          this.menuCtrl.close();
        }
      }, {
        key: "doCheck",
        value: function doCheck(event, group) {
          group.visible = !group.visible;
          this.system.writeGroups();
          event.preventDefault();
        }
      }, {
        key: "done",
        value: function done() {
          this.menuCtrl.close();
        }
      }, {
        key: "splitter",
        value: function splitter(e) {
          this.system.isSplitted = e.detail.visible;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_5__["System"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _system_system__WEBPACK_IMPORTED_MODULE_5__["System"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./system/system */
    "./src/app/system/system.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _system_system__WEBPACK_IMPORTED_MODULE_10__["System"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _stdpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stdpage */
    "./src/app/core/stdpage.ts");
    /* harmony import */


    var _translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./translate.pipe */
    "./src/app/core/translate.pipe.ts");
    /* harmony import */


    var _temp_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./temp.pipe */
    "./src/app/core/temp.pipe.ts");
    /* harmony import */


    var _rendering_dimmer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../rendering/dimmer */
    "./src/app/rendering/dimmer.ts");
    /* harmony import */


    var _rendering_updown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../rendering/updown */
    "./src/app/rendering/updown.ts");
    /* harmony import */


    var _rendering_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../rendering/switch */
    "./src/app/rendering/switch.ts");
    /* harmony import */


    var _rendering_mood__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../rendering/mood */
    "./src/app/rendering/mood.ts");
    /* harmony import */


    var _rendering_temperature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../rendering/temperature */
    "./src/app/rendering/temperature.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      providers: [_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _temp_pipe__WEBPACK_IMPORTED_MODULE_7__["TemperaturPipe"]],
      declarations: [_stdpage__WEBPACK_IMPORTED_MODULE_5__["StdPage"], _translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _temp_pipe__WEBPACK_IMPORTED_MODULE_7__["TemperaturPipe"], _rendering_dimmer__WEBPACK_IMPORTED_MODULE_8__["DimmerControl"], _rendering_updown__WEBPACK_IMPORTED_MODULE_9__["UpDownControl"], _rendering_switch__WEBPACK_IMPORTED_MODULE_10__["SwitchControl"], _rendering_temperature__WEBPACK_IMPORTED_MODULE_12__["TemperatureControl"], _rendering_mood__WEBPACK_IMPORTED_MODULE_11__["MoodControl"]],
      exports: [_stdpage__WEBPACK_IMPORTED_MODULE_5__["StdPage"], _translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _temp_pipe__WEBPACK_IMPORTED_MODULE_7__["TemperaturPipe"], _rendering_dimmer__WEBPACK_IMPORTED_MODULE_8__["DimmerControl"], _rendering_updown__WEBPACK_IMPORTED_MODULE_9__["UpDownControl"], _rendering_switch__WEBPACK_IMPORTED_MODULE_10__["SwitchControl"], _rendering_temperature__WEBPACK_IMPORTED_MODULE_12__["TemperatureControl"], _rendering_mood__WEBPACK_IMPORTED_MODULE_11__["MoodControl"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/stdpage.ts":
  /*!*********************************!*\
    !*** ./src/app/core/stdpage.ts ***!
    \*********************************/

  /*! exports provided: StdPage */

  /***/
  function srcAppCoreStdpageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StdPage", function () {
      return StdPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StdPage =
    /*#__PURE__*/
    function () {
      function StdPage(system) {
        _classCallCheck(this, StdPage);

        this.system = system;
        this.showUpDowns = true;
      }

      _createClass(StdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.system.emitter.on('refresh', this.refreshServices.bind(this));
          console.log("ngOnInit - StdPage: " + this.services);
        }
      }, {
        key: "refreshServices",
        value: function refreshServices(event) {
          var services = this.system[this.services];
          console.log('stdPage.refreshServices: ' + this.services + " = " + services.length + ' services'); // request the status of all (real) units used on this page

          if (this.services != "scenes") services.forEach(function (u) {
            return u.reqState();
          }); // see if a group is used

          this.system.groups.forEach(function (g) {
            return g.used = services.some(function (u) {
              return u.group == g.id;
            });
          });
        }
      }, {
        key: "moreGroups",
        value: function moreGroups(group) {
          return !!this.system && !!this.system.groups && this.system.groups.length > 1 && (!this.system.isSplitted || group.visible);
        }
      }, {
        key: "arrow",
        value: function arrow(group) {
          return group.visible ? 'list-open' : '';
        }
      }, {
        key: "toggle",
        value: function toggle(group) {
          group.visible = !group.visible;
        }
      }]);

      return StdPage;
    }();

    StdPage.ctorParameters = function () {
      return [{
        type: _system_system__WEBPACK_IMPORTED_MODULE_1__["System"]
      }];
    };

    StdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'std-page',
      inputs: ['services', 'showUpDowns'],
      template: "\n    <ion-list *ngIf=\"system.masters.length > 0\">\n      <ion-item-group *ngFor=\"let group of system.groups\">\n        <ion-list-header *ngIf=\"group.used && moreGroups(group)\">\n          <ion-label>{{group.name}}</ion-label>\n          <ion-icon *ngIf=\"! system.isSplitted\" [ngClass]=\"arrow(group)\" (click)=\"toggle(group)\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-list-header>\n        <ng-container *ngIf=\"group.used && group.visible\">\n          <ng-container *ngFor=\"let service of system[services]\">\n            <dimmer      [service]=\"service\" *ngIf=\"(service.group == group.id) \n                                                    && service.isDimmer()\"></dimmer>\n            <updown      [service]=\"service\" *ngIf=\"(service.group == group.id) \n                                                    && showUpDowns && service.isUpDown()\"></updown>\n            <switch      [service]=\"service\" *ngIf=\"(service.group == group.id) \n                                                    && service.isSwitch()\"></switch>\n            <mood        [service]=\"service\" *ngIf=\"(service.group == group.id) \n                                                    && (service.isMood() || service.isInput())\"></mood>\n            <temperature [service]=\"service\" *ngIf=\"(service.group == group.id) \n                                                    && service.isTemperature()\"></temperature>\n          </ng-container>\n        </ng-container>\n      </ion-item-group>\n    </ion-list>\n\n    <div *ngIf=\"system.masters.length <= 0\" class=\"noMaster\">\n      <h1>No masters yet?</h1>\n      <p>Go to the tab \"Configure\" -> \"Masters\"<br>\n        Add a master by clicking on the \"+ Master\"<br>\n        Fill out the parameters.<br>\n        <br>\n        Once your first Node or Smartbox is visible<br>\n        Click on it and select the units you want to use.<br>\n        <br>\n        Later you can split the units (switches, temperature, dimmers, scenes, ...) in multiple sections by first adding more groups.<br>\n        <br>\n        Download the <a href=\"https://www.duotecno.be/wp-content/uploads/2020/05/Duotecno-smartbox-app-1.pdf\">manual</a>.\n      </p>\n    </div>\n"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_1__["System"]])], StdPage);
    /***/
  },

  /***/
  "./src/app/core/temp.pipe.ts":
  /*!***********************************!*\
    !*** ./src/app/core/temp.pipe.ts ***!
    \***********************************/

  /*! exports provided: TemperaturPipe */

  /***/
  function srcAppCoreTempPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperaturPipe", function () {
      return TemperaturPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // Johan, 11/11/2020


    var TemperaturPipe =
    /*#__PURE__*/
    function () {
      function TemperaturPipe() {
        _classCallCheck(this, TemperaturPipe);
      }

      _createClass(TemperaturPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value === undefined || value === null) {
            return '-';
          }

          if (typeof value === 'string') {
            value = parseInt(value);
          }

          if (value > 1100 || value < 0) {
            return '-';
          }

          var intp = Math.floor(Math.abs(value / 10)) * (value < 0 ? -1 : 1);
          var decp = Math.round(Math.abs(value) - Math.abs(intp) * 10);
          return "".concat(intp, ",").concat(decp);
        }
      }]);

      return TemperaturPipe;
    }();

    TemperaturPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'temp'
    })], TemperaturPipe);
    /***/
  },

  /***/
  "./src/app/core/translate.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/core/translate.pipe.ts ***!
    \****************************************/

  /*! exports provided: TranslatePipe, Translate */

  /***/
  function srcAppCoreTranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Translate", function () {
      return Translate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var _translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./translations */
    "./src/app/core/translations.ts");

    var TranslatePipe =
    /*#__PURE__*/
    function () {
      function TranslatePipe(system) {
        _classCallCheck(this, TranslatePipe);

        this.system = system;
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(value) {
          return Translate(value, this.system);
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ctorParameters = function () {
      return [{
        type: _system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: '_',
      pure: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], TranslatePipe);

    function Translate(value, system) {
      if (!value) {
        return '[** empty **]';
      }

      var lan = system && system.config && system.config.language ? system.config.language : 'EN';

      if (lan === 'XX') {
        return '[' + value + ']';
      }

      if (typeof _translations__WEBPACK_IMPORTED_MODULE_3__["translations"][lan] === 'undefined') {
        return '[** no-' + lan + ': ' + value + ' **]';
      }

      var tran = _translations__WEBPACK_IMPORTED_MODULE_3__["translations"][lan][value];

      if (typeof tran === 'undefined') {
        return '[** no-trn: ' + value + ' **]';
      }

      return tran;
    }
    /***/

  },

  /***/
  "./src/app/core/translations.ts":
  /*!**************************************!*\
    !*** ./src/app/core/translations.ts ***!
    \**************************************/

  /*! exports provided: translations */

  /***/
  function srcAppCoreTranslationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translations", function () {
      return translations;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var translations = {
      'NL': {
        'Page.Control': 'Lichten',
        'Page.Temperature': 'Temperatuur',
        'Temperature.Asking': 'Gevraagd',
        'Temperature.Off': 'Uit',
        'Page.Moods': 'Sferen',
        'Page.Stores': 'Rolluiken',
        'Page.Config': 'Configureer',
        'Config.Masters': 'Masters',
        'Config.Master': 'Master',
        'Config.Week': 'Week',
        'Config.Holiday': 'Vakantie',
        'Config.NoScheduleSelected': 'Geen plan geselecteerd',
        'Config.Scenes': 'Scenes',
        'Config.Scenes.scene': 'Scene',
        'Config.Scenes.for': 'Instellingen van',
        'Config.Scenes.triggeredBy': 'Opgeroepen door',
        'Config.Scenes.trigger': 'Trigger',
        'Config.Scenes.selectTriggerFor': 'Trigger voor',
        'Config.Scenes.name': 'Naam Schene',
        'scene.trigger.off': 'Uit',
        'scene.trigger.on': 'Aan',
        'scene.trigger.long': 'Lang',
        'Config.Units': 'Units',
        'Config.Groups': 'Groepen',
        'Config.Group': 'Groep',
        'Config.General': 'Algemeen',
        'Config.Settings': 'Instellingen',
        'Config.Language': 'Taal',
        'Config.SeparateStores': 'Rolluiken apart',
        'Config.MultipleGroups': 'Meerdere groepen',
        'Config.Advanced': 'Geavanceerde instellingen',
        'Config.Communication': 'Communicatie',
        'Config.EnableAdv': 'Geavanceerde instellingen aanzetten',
        'Config.EnterPW': 'Geef het wachtwoord',
        'Config.Backup': 'Backup / Restore',
        'Config.Backup.scenes': 'Scene definities',
        'Config.Backup.config': 'Backup config',
        'Config.Backup.get': 'Request config',
        'Config.Backup.restore': 'Ontvangen',
        'Config.Backup.send': 'Verstuur',
        'Config.Backup.fetch': 'Haal op',
        'Config.Backup.replace': 'Vervang',
        'Node.of': 'Units van',
        'General.Done': 'Klaar',
        'General.Save': 'Bewaar',
        'General.Cancel': 'Annuleer',
        'General.Delete': 'Verwijder'
      },
      'FR': {
        'Page.Control': 'Lumières',
        'Page.Temperature': 'Température',
        'Temperature.Asking': 'Demandé',
        'Temperature.Off': 'Désactivé',
        'Page.Moods': 'Atmosphères',
        'Page.Stores': 'Stores',
        'Page.Config': 'Configurer',
        'Config.Masters': 'Masters',
        'Config.Master': 'Master',
        'Config.Week': 'Semaine',
        'Config.Holiday': 'Vacances',
        'Config.NoScheduleSelected': 'Aucun plan sélectionné',
        'Config.Scenes': 'Scènes',
        'Config.Scenes.scene': 'Scènes',
        'Config.Scenes.for': 'Configuration pour',
        'Config.Scenes.triggeredBy': 'Appellé par',
        'Config.Scenes.trigger': 'Trigger',
        'Config.Scenes.selectTriggerFor': 'Trigger for',
        'Config.Scenes.name': 'Nom Scène',
        'scene.trigger.off': 'Off',
        'scene.trigger.on': 'On',
        'scene.trigger.long': 'Longue',
        'Config.Units': 'Unité',
        'Config.Groups': 'Groups',
        'Config.Group': 'Group',
        'Config.General': 'Général',
        'Config.Settings': 'Paramètres',
        'Config.Language': 'Langue',
        'Config.SeparateStores': 'Stores séparés',
        'Config.MultipleGroups': 'Plusiers groups',
        'Config.Advanced': 'Paramètres avancés',
        'Config.Communication': 'Communication',
        'Config.EnableAdv': 'Activer les paramètres avancés',
        'Config.EnterPW': 'Entrez le mot de passe de déverrouillage',
        'Config.Backup': 'Backup / Restore',
        'Config.Backup.scenes': 'Scene definitions',
        'Config.Backup.config': 'Backup config',
        'Config.Backup.get': 'Request config',
        'Config.Backup.restore': 'Reçu',
        'Config.Backup.send': 'Envoyer',
        'Config.Backup.fetch': 'Recevoir',
        'Config.Backup.replace': 'Remplacer',
        'Node.of': 'Unités de',
        'General.Done': 'OK',
        'General.Save': 'Sauver',
        'General.Cancel': 'Annuller',
        'General.Delete': 'Suprimer'
      },
      'EN': {
        'Page.Control': 'Lights',
        'Page.Temperature': 'Temperature',
        'Temperature.Asking': 'Asking',
        'Temperature.Off': 'Off',
        'Page.Moods': 'Scenes',
        'Page.Stores': 'Blinds',
        'Page.Config': 'Configure',
        'Config.Masters': 'Masters',
        'Config.Master': 'Master',
        'Config.Week': 'Week',
        'Config.Holiday': 'Holiday',
        'Config.NoScheduleSelected': 'No schedule selected',
        'Config.Groups': 'Groups',
        'Config.Group': 'Group',
        'Config.Scenes': 'Scenes',
        'Config.Scenes.scene': 'Scene',
        'Config.Scenes.for': 'Settings for',
        'Config.Scenes.triggeredBy': 'Called by',
        'Config.Scenes.trigger': 'Trigger',
        'Config.Scenes.selectTriggerFor': 'Trigger for',
        'Config.Scenes.name': 'Scene name',
        'scene.trigger.off': 'Off',
        'scene.trigger.on': 'On',
        'scene.trigger.long': 'Long',
        'Config.Units': 'Units',
        'Config.General': 'General',
        'Config.Settings': 'Settings',
        'Config.Language': 'Language',
        'Config.SeparateStores': 'Blinds separate',
        'Config.MultipleGroups': 'Multiple groups',
        'Config.Advanced': 'Advanced Settings',
        'Config.Communication': 'Communication',
        'Config.EnableAdv': 'Enable Advanced Settings',
        'Config.EnterPW': 'Enter unlock password',
        'Config.Backup': 'Backup / Restore',
        'Config.Backup.scenes': 'Scene definitions',
        'Config.Backup.config': 'Backup config',
        'Config.Backup.get': 'Request config',
        'Config.Backup.restore': 'Received',
        'Config.Backup.send': 'Send',
        'Config.Backup.fetch': 'Fetch',
        'Config.Backup.replace': 'Replace',
        'Node.of': 'Units of',
        'General.Done': 'Done',
        'General.Save': 'Save',
        'General.Cancel': 'Cancel',
        'General.Delete': 'Delete'
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

    /***/
  },

  /***/
  "./src/app/rendering/dimmer.scss":
  /*!***************************************!*\
    !*** ./src/app/rendering/dimmer.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppRenderingDimmerScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dimmer {\n  position: relative;\n  z-index: 2; }\n  .dimmer ion-label {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  .dimmer__chevron {\n  margin-left: auto;\n  margin-right: 10px; }\n  .dimmer__value {\n  font-size: 0.8rem; }\n  ion-range {\n  --bar-background: #fff;\n  --knob-size: 24px;\n  --knob-background: #fff; }\n  ion-range ion-icon {\n    color: var(--ion-color-primary-contrast); }\n  .dimmer__slider {\n  --background: var(--ion-color-dark);\n  --border-radius: 0;\n  position: relative;\n  z-index: 1;\n  margin-top: -22px;\n  border-bottom-left-radius: var(--duotecno-border-radius);\n  border-bottom-right-radius: var(--duotecno-border-radius); }\n  @media (prefers-color-scheme: dark) {\n  .dimmer__slider {\n    --background: var(--ion-color-step-150); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3JlbmRlcmluZy9kaW1tZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFGZDtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUczQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksc0JBQWlCO0VBQ2pCLGlCQUFZO0VBQ1osdUJBQWtCLEVBQUE7RUFIdEI7SUFNUSx3Q0FBd0MsRUFBQTtFQUdoRDtFQUNJLG1DQUFhO0VBQ2Isa0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHdEQUF3RDtFQUN4RCx5REFBeUQsRUFBQTtFQUU3RDtFQUNJO0lBQ0ksdUNBQWEsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlbmRlcmluZy9kaW1tZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaW1tZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG4uZGltbWVyX19jaGV2cm9uIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGltbWVyX192YWx1ZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5pb24tcmFuZ2Uge1xuICAgIC0tYmFyLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1rbm9iLXNpemU6IDI0cHg7XG4gICAgLS1rbm9iLWJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgfVxufVxuLmRpbW1lcl9fc2xpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luLXRvcDogLTIycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tZHVvdGVjbm8tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWR1b3RlY25vLWJvcmRlci1yYWRpdXMpO1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5kaW1tZXJfX3NsaWRlciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/rendering/dimmer.ts":
  /*!*************************************!*\
    !*** ./src/app/rendering/dimmer.ts ***!
    \*************************************/

  /*! exports provided: DimmerControl */

  /***/
  function srcAppRenderingDimmerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DimmerControl", function () {
      return DimmerControl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DimmerControl =
    /*#__PURE__*/
    function () {
      function DimmerControl() {
        _classCallCheck(this, DimmerControl);

        this.force = false;
      }

      _createClass(DimmerControl, [{
        key: "visible",
        value: function visible() {
          return this.force; // || this.service.status;
        }
      }, {
        key: "arrow",
        value: function arrow() {
          return this.visible() ? 'chevron-up' : 'chevron-down';
        }
      }, {
        key: "labelClick",
        value: function labelClick() {
          this.force = !this.force;
        }
      }, {
        key: "change",
        value: function change() {
          if (this.service.status == 2) {} else {
            this.service.setState(!!this.service.status);
          }
        }
      }, {
        key: "changeValue",
        value: function changeValue(delta) {
          if (delta) {
            this.service.value += delta;
          }

          this.service.setState(this.service.value);
        }
      }]);

      return DimmerControl;
    }();

    DimmerControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dimmer',
      inputs: ['service'],
      template: "\n    <ion-item lines=\"none\" class=\"dimmer\">\n      <ion-label tappable (click)=\"labelClick()\">{{service.getName()}}\n        <ion-icon [name]=\"arrow()\" class=\"dimmer__chevron\"></ion-icon>\n        <span class=\"dimmer__value\">{{service.value}}%</span>\n        <ion-icon class=\"state\" *ngIf=\"service.status == 2\" name=\"time\"></ion-icon>\n      </ion-label>\n\n      <ion-toggle [(ngModel)]=\"service.status\" (ionBlur)=\"change()\"></ion-toggle>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"dimmer__slider\" *ngIf=\"visible()\">\n      <ion-range min=\"1\" max=\"100\" debounce=\"400\" [(ngModel)]=\"service.value\" (ionChange)=\"changeValue()\">\n        <ion-icon slot=\"start\" name=\"remove\" name=\"remove\" (click)=\"changeValue(-5)\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"add\" name=\"add\" (click)=\"changeValue(5)\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dimmer.scss */
      "./src/app/rendering/dimmer.scss")).default]
    })], DimmerControl);
    /***/
  },

  /***/
  "./src/app/rendering/mood.ts":
  /*!***********************************!*\
    !*** ./src/app/rendering/mood.ts ***!
    \***********************************/

  /*! exports provided: MoodControl */

  /***/
  function srcAppRenderingMoodTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoodControl", function () {
      return MoodControl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MoodControl =
    /*#__PURE__*/
    function () {
      function MoodControl(toastCtrl) {
        _classCallCheck(this, MoodControl);

        this.toastCtrl = toastCtrl;
        this.pressed = 0;
      }

      _createClass(MoodControl, [{
        key: "toast",
        value: function toast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1000,
                      position: 'top'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "moodColor",
        value: function moodColor() {
          return this.service.status ? 'primary' : this.service.isInput() ? 'warning' : 'medium';
        }
      }, {
        key: "down",
        value: function down(ev) {
          var _this2 = this;

          ev.preventDefault(); // send long event after 1Sec

          this.pressed = setTimeout(function () {
            _this2.toast(_this2.service.name + ' - long on');

            _this2.service.setState(1);

            _this2.pressed = -1;
          }, 1000);
        }
      }, {
        key: "up",
        value: function up(ev) {
          ev.preventDefault();

          if (this.pressed === -1) {
            // we've already send a long "on"
            this.toast(this.service.name + ' - long off');
            this.service.setState(0);
          } else if (this.pressed) {
            // stop timer for long and send short
            clearTimeout(this.pressed);
            this.toast(this.service.name + ' - short');
            this.service.setState(-1); // short event
          }
        }
      }]);

      return MoodControl;
    }();

    MoodControl.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    MoodControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mood',
      inputs: ['service'],
      template: "\n    <ion-item lines=\"none\">\n      <ion-label>{{service.name}}</ion-label>\n      <ion-button slot=\"end\" shape=\"round\" [color]=\"moodColor()\"\n              (mousedown)=\"down($event)\" (mouseup)=\"up($event)\"\n              (touchstart)=\"down($event)\" (touchend)=\"up($event)\"></ion-button>\n    </ion-item>\n  ",
      styles: ["ion-button { width: 25px; height: 25px }"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], MoodControl);
    /***/
  },

  /***/
  "./src/app/rendering/switch.scss":
  /*!***************************************!*\
    !*** ./src/app/rendering/switch.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppRenderingSwitchScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item ion-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.state {\n  margin-left: auto;\n  font-size: 0.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3JlbmRlcmluZy9zd2l0Y2guc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZW5kZXJpbmcvc3dpdGNoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGF0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/rendering/switch.ts":
  /*!*************************************!*\
    !*** ./src/app/rendering/switch.ts ***!
    \*************************************/

  /*! exports provided: SwitchControl */

  /***/
  function srcAppRenderingSwitchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchControl", function () {
      return SwitchControl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SwitchControl =
    /*#__PURE__*/
    function () {
      function SwitchControl() {
        _classCallCheck(this, SwitchControl);
      }

      _createClass(SwitchControl, [{
        key: "change",
        value: function change(unit) {
          if (this.service.status == 2) {} else {
            unit.setState(unit.status);
          }
        }
      }, {
        key: "toggle",
        value: function toggle(unit) {
          unit.setState(!unit.status);
        }
      }]);

      return SwitchControl;
    }();

    SwitchControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'switch',
      inputs: ['service'],
      template: "\n    <ion-item lines=\"none\">\n      <ion-label tappable (click)=\"toggle(service)\">\n        {{service.getName()}}\n        <ion-icon class=\"state\" *ngIf=\"service.status === 2\" name=\"time\" color=\"primary\"></ion-icon>\n      </ion-label>\n\n      <ion-toggle [(ngModel)]=\"service.status\" \n                  (ionBlur)=\"change(service)\"></ion-toggle>\n    </ion-item>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./switch.scss */
      "./src/app/rendering/switch.scss")).default]
    })], SwitchControl);
    /***/
  },

  /***/
  "./src/app/rendering/temperature.scss":
  /*!********************************************!*\
    !*** ./src/app/rendering/temperature.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRenderingTemperatureScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".temp,\n.presets {\n  margin-bottom: 40px;\n  padding: 20px;\n  border-radius: var(--duotecno-border-radius);\n  background: #fff; }\n\n.temp {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px; }\n\n.temp__name {\n    font-weight: 700; }\n\n.temp__current {\n    margin: 15px 0;\n    font-size: 3.5rem;\n    font-weight: 700; }\n\n.temp__current .temp__celcius {\n      font-size: 1.5rem;\n      line-height: 1.8;\n      font-weight: 400; }\n\n.temp__celcius {\n    margin-bottom: 5px;\n    margin-left: 2px;\n    font-size: 0.7rem;\n    vertical-align: text-top; }\n\n.temp__data {\n    width: calc(100% - 90px); }\n\n.temp ion-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 90px; }\n\n.temp ion-button {\n    --background: var(--ion-background-color);\n    --background-hover: var(--ion-background-color);\n    --border-radius: 4px;\n    --color: var(--ion-color-dark);\n    width: 70px;\n    height: 70px;\n    margin: 10px; }\n\n.temp ion-button ion-icon {\n      font-size: 3rem; }\n\n.presets {\n  padding-bottom: 0; }\n\n.presets ion-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.presets ion-button {\n    --color: var(--ion-color-dark);\n    width: 40px;\n    height: 40px; }\n\n.presets .icons ion-button {\n    --background: var(--ion-background-color);\n    --background-hover: var(--ion-background-color);\n    --border-radius: 4px; }\n\n.presets .icons ion-button.preset-active {\n      --background: var(--ion-color-primary);\n      --background-hover: var(--ion-color-primary);\n      --color: #fff; }\n\n.presets .icontext ion-button {\n    font-size: 0.8rem; }\n\n.presets .icontext ion-button .temp__celcius {\n      font-size: 0.5rem; }\n\n@media (min-width: 375px) {\n  .temp__current {\n    font-size: 4.8rem; }\n    .temp__current .temp__celcius {\n      font-size: 2rem;\n      line-height: 1.8; }\n  .presets ion-button {\n    width: 50px;\n    height: 50px; }\n  .presets .icontext ion-button {\n    font-size: 1rem; }\n    .presets .icontext ion-button .temp__celcius {\n      font-size: 0.7rem; } }\n\n@media (prefers-color-scheme: dark) {\n  .temp,\n  .presets {\n    background: var(--ion-color-step-150); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3JlbmRlcmluZy90ZW1wZXJhdHVyZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRW5CO0lBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFIbkI7TUFNTyxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBOztBQUd4QjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QixFQUFBOztBQUU1QjtJQUNJLHdCQUF3QixFQUFBOztBQTFCaEM7SUE2QlEsb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBOztBQS9CbkI7SUFrQ1EseUNBQWE7SUFDYiwrQ0FBbUI7SUFDbkIsb0JBQWdCO0lBQ2hCLDhCQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBeENwQjtNQTJDWSxlQUFlLEVBQUE7O0FBSTNCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBSVEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQUx0QztJQVFRLDhCQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFWcEI7SUFhUSx5Q0FBYTtJQUNiLCtDQUFtQjtJQUNuQixvQkFBZ0IsRUFBQTs7QUFmeEI7TUFrQlksc0NBQWE7TUFDYiw0Q0FBbUI7TUFDbkIsYUFBUSxFQUFBOztBQXBCcEI7SUF3QlEsaUJBQWlCLEVBQUE7O0FBeEJ6QjtNQTJCWSxpQkFBaUIsRUFBQTs7QUFLN0I7RUFFUTtJQUNJLGlCQUFpQixFQUFBO0lBRHBCO01BSU8sZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBSTVCO0lBRVEsV0FBVztJQUNYLFlBQVksRUFBQTtFQUhwQjtJQU1RLGVBQWUsRUFBQTtJQU52QjtNQVNZLGlCQUFpQixFQUFBLEVBQ3BCOztBQUliO0VBQ0k7O0lBRUkscUNBQXFDLEVBQUEsRUFDeEMiLCJmaWxlIjoic3JjL2FwcC9yZW5kZXJpbmcvdGVtcGVyYXR1cmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wLFxuLnByZXNldHNcbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWR1b3RlY25vLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4udGVtcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgJl9fY3VycmVudCB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAudGVtcF9fY2VsY2l1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2NlbGNpdXMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gICAgfVxuICAgICZfX2RhdGEge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgfVxuICAgIGlvbi1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4ucHJlc2V0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLmljb25zIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICYucHJlc2V0LWFjdGl2ZSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaWNvbnRleHQgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuXG4gICAgICAgIC50ZW1wX19jZWxjaXVzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcbiAgICAudGVtcCB7XG4gICAgICAgICZfX2N1cnJlbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0LjhyZW07XG5cbiAgICAgICAgICAgIC50ZW1wX19jZWxjaXVzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJlc2V0cyB7XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmljb250ZXh0IGlvbi1idXR0b24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIFxuICAgICAgICAgICAgLnRlbXBfX2NlbGNpdXMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC50ZW1wLFxuICAgIC5wcmVzZXRzIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/rendering/temperature.ts":
  /*!******************************************!*\
    !*** ./src/app/rendering/temperature.ts ***!
    \******************************************/

  /*! exports provided: TemperatureControl */

  /***/
  function srcAppRenderingTemperatureTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperatureControl", function () {
      return TemperatureControl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TemperatureControl =
    /*#__PURE__*/

    /*
      unit.status => 0=idle, 1=heating, 2=cooling
      unit.preset => 0=sun, 1=half sun, 2=moon, 3=half moon, -1=off
      unit.sun    => 10x temperature
      unit.hsun   => 10x temperature
      unit.moon   => 10x temperature
      unit.hmoon  => 10x temperature
      unit.value  => 10x temperature
    */
    function () {
      function TemperatureControl() {
        _classCallCheck(this, TemperatureControl);
      }

      _createClass(TemperatureControl, [{
        key: "colorTemp",
        value: function colorTemp() {
          if (this.service.status == 1) {
            return 'danger';
          } else if (this.service.status == 2) {
            return 'cool';
          } else {
            return 'light';
          }
        }
      }, {
        key: "statusTemp",
        value: function statusTemp() {
          if (this.service.status == 1) {
            return 'Heating';
          } else if (this.service.status == 2) {
            return 'Cooling';
          } else if (this.service.status == 0) {
            return 'Off';
          } else {
            return '-';
          }
        }
      }, {
        key: "colorPreset",
        value: function colorPreset(preset) {
          return this.service.preset === preset ? 'preset-active' : '';
        }
      }, {
        key: "getTemp",
        value: function getTemp() {
          switch (this.service.preset) {
            case 0:
              return this.service.sun;

            case 1:
              return this.service.hsun;

            case 2:
              return this.service.moon;

            case 3:
              return this.service.hmoon;
          }
        }
      }, {
        key: "incDecTemp",
        value: function incDecTemp(inc) {
          this.service.doIncDecPreset(inc);
        }
      }, {
        key: "changeTemp",
        value: function changeTemp(delta) {
          this.service.setPreset(this.service.preset, this.service.value + delta);
        }
      }, {
        key: "changePreset",
        value: function changePreset(preset) {
          if (preset == -1) {
            this.service.sensorOnOff(false);
          } else {
            this.service.sensorOnOff(true);
            this.service.preset = preset;
            this.service.temp = this.getTemp();
            this.service.selectPreset(preset);
          }
        }
      }]);

      return TemperatureControl;
    }();

    TemperatureControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'temperature',
      inputs: ['service'],
      template: "\n    <div class=\"temp\">\n      <div class=\"temp__data\">\n        <div class=\"temp__name\">\n          {{service.getName()}}\n          <ion-icon *ngIf=\"service.preset >= 0\" class=\"right\" [color]=\"colorTemp()\" name=\"thermometer\"></ion-icon>\n          <!--span class=\"right\">{{statusTemp()}}</span -->\n        </div>\n        <div class=\"temp__current\">{{service.value | temp}}<span class=\"temp__celcius\">\xB0C</span></div>\n        <div class=\"temp__asking\">{{ \"Temperature.Asking\" |_ }}: {{ getTemp() | temp}}<span class=\"temp__celcius\">\xB0C</span></div>\n      </div>\n\n      <ion-buttons>\n        <ion-button fill=\"solid\" slot=\"icon-only\" (click)=\"incDecTemp(true)\">\n          <ion-icon name=\"chevron-up\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" (click)=\"incDecTemp(false)\">\n          <ion-icon name=\"chevron-down\"></ion-icon></ion-button>\n      </ion-buttons>\n    </div>\n\n    <div class=\"presets\">\n      <ion-buttons class=\"icons\">\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(-1)\" (click)=\"changePreset(-1)\">\n          <ion-icon name=\"close-outline\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(1)\" (click)=\"changePreset(1)\">\n          <ion-icon src=\"/assets/icon/hsun.svg\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(0)\" (click)=\"changePreset(0)\">\n          <ion-icon name=\"sunny\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(3)\" (click)=\"changePreset(3)\">\n          <ion-icon src=\"/assets/icon/hmoon.svg\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(2)\" (click)=\"changePreset(2)\">\n          <ion-icon name=\"moon-sharp\"></ion-icon></ion-button>\n      </ion-buttons>\n\n      <ion-buttons class=\"icontext\">\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(-1)\" color=\"dark\">\n          {{ \"Temperature.Off\" |_ }}</ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(1)\" color=\"dark\">\n          {{service.hsun | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(0)\" color=\"dark\">\n          {{service.sun | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(3)\" color=\"dark\">\n          {{service.hmoon | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(2)\" color=\"dark\">\n          {{service.moon | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n      </ion-buttons>\n    </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./temperature.scss */
      "./src/app/rendering/temperature.scss")).default]
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
    /***/
  },

  /***/
  "./src/app/rendering/updown.scss":
  /*!***************************************!*\
    !*** ./src/app/rendering/updown.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppRenderingUpdownScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-buttons {\n  margin: 0; }\n\n.ios ion-button, .md ion-button {\n  --background: var(--ion-background-color);\n  --background-hover: var(--ion-background-color);\n  --border-radius: 4px;\n  margin-left: 10px; }\n\n.ios ion-button ion-icon, .md ion-button ion-icon {\n    color: var(--ion-color-dark); }\n\n.ios ion-button ion-icon.active, .md ion-button ion-icon.active {\n      color: var(--ion-color-secondary); }\n\n.ios ion-button ion-icon.done, .md ion-button ion-icon.done {\n      color: var(--ion-color-primary); }\n\n.item ion-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.state {\n  margin-left: auto;\n  font-size: 0.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3JlbmRlcmluZy91cGRvd24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUVRLHlDQUFhO0VBQ2IsK0NBQW1CO0VBQ25CLG9CQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFMekI7SUFRWSw0QkFBNEIsRUFBQTs7QUFSeEM7TUFXZ0IsaUNBQWlDLEVBQUE7O0FBWGpEO01BY2dCLCtCQUErQixFQUFBOztBQUsvQztFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZW5kZXJpbmcvdXBkb3duLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luOiAwO1xufVxuLmlvcywgLm1kIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuZG9uZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5pdGVtIGlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/rendering/updown.ts":
  /*!*************************************!*\
    !*** ./src/app/rendering/updown.ts ***!
    \*************************************/

  /*! exports provided: UpDownControl */

  /***/
  function srcAppRenderingUpdownTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpDownControl", function () {
      return UpDownControl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _system_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../system/protocol */
    "./src/app/system/protocol.ts");

    var UpDownControl =
    /*#__PURE__*/
    function () {
      function UpDownControl() {
        _classCallCheck(this, UpDownControl);
      }

      _createClass(UpDownControl, [{
        key: "state",
        value: function state() {
          return this.service.getDispayState();
        }
      }, {
        key: "stateColor",
        value: function stateColor() {
          if (this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kOpen || this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kClosed) {
            return 'done';
          } else if (this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kOpening || this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kClosing) {
            return 'active';
          } else {
            return '';
          }
        }
      }, {
        key: "colorUp",
        value: function colorUp() {
          if (this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kOpen) {
            return 'done';
          } else if (this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kOpening) {
            return 'active';
          } else {
            return '';
          }
        }
      }, {
        key: "doUp",
        value: function doUp() {
          this.service.setState(_system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitMotorCmd"].kOpen);
        }
      }, {
        key: "colorDown",
        value: function colorDown() {
          if (this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kClosed) {
            return 'done';
          } else if (this.service.status === _system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitState"].kClosing) {
            return 'active';
          } else {
            return '';
          }
        }
      }, {
        key: "doDown",
        value: function doDown() {
          this.service.setState(_system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitMotorCmd"].kClose);
        }
      }, {
        key: "doStop",
        value: function doStop() {
          this.service.setState(_system_protocol__WEBPACK_IMPORTED_MODULE_2__["UnitMotorCmd"].kStop);
        }
      }]);

      return UpDownControl;
    }();

    UpDownControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'updown',
      inputs: ['service'],
      template: "\n    <ion-item lines=\"none\" class=\"updown\">\n      <ion-label>{{service.getName()}}\n        <span class=\"state\">{{state()}}</span>\n      </ion-label>\n\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" slot=\"icon-only\" (click)=\"doDown(service)\">\n          <ion-icon name=\"caret-down\" [ngClass]=\"colorDown()\"></ion-icon></ion-button>\n        <ion-button size=\"small\" slot=\"icon-only\" (click)=\"doStop(service)\">\n          <ion-icon name=\"stop\"></ion-icon></ion-button>\n        <ion-button size=\"small\" slot=\"icon-only\" (click)=\"doUp(service)\" [ngClass]=\"colorUp()\">\n          <ion-icon name=\"caret-up\" [ngClass]=\"colorUp()\"></ion-icon></ion-button>\n      </ion-buttons>\n    </ion-item>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./updown.scss */
      "./src/app/rendering/updown.scss")).default]
    })], UpDownControl);
    /***/
  },

  /***/
  "./src/app/system/Q.ts":
  /*!*****************************!*\
    !*** ./src/app/system/Q.ts ***!
    \*****************************/

  /*! exports provided: Q */

  /***/
  function srcAppSystemQTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Q =
    /*#__PURE__*/
    function () {
      function Q(logger) {
        _classCallCheck(this, Q);

        this.timer = null;
        this.queue = [];
        this.logger = logger || console.log;
      }

      _createClass(Q, [{
        key: "exec",
        value: function exec(fn) {
          var len = this.queue.length;
          this.queue.push(fn); // start timer to execute this functon if nobody else calls "do"

          this.logger('*Q* exec, we\'ve put stuff in the queue, start ' + (len ? 'long timer' : 'short timer'));
          this.startWaiter(len ? 500 : 0);
        }
      }, {
        key: "endWaiter",
        value: function endWaiter() {
          if (this.timer) {
            // this.logger("*Q* Waiter: clearing timer");
            clearTimeout(this.timer);
          }
        }
      }, {
        key: "startWaiter",
        value: function startWaiter() {
          var _this3 = this;

          var mSecs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          this.endWaiter(); // this.logger("*Q* Waiter: starting timer for " + mSecs + " mSec");

          this.timer = setTimeout(function () {
            _this3.logger('*Q* Waiter: timer finished, calling \'do\' because nobody else did');

            _this3.do();
          }, mSecs);
        }
      }, {
        key: "do",
        value: function _do() {
          this.logger('*Q* Do, qlen=' + this.queue.length); // Get the oldest function and execute

          if (this.queue.length > 0) {
            var fn = this.queue[0];
            this.queue.splice(0, 1); // this.logger("*Q* Do: calling function");

            fn();
          } // Still stuff to execute


          if (this.queue.length > 0) {
            // this.logger("*Q* Do, still stuff in the queue, start timer");
            this.startWaiter();
          } else {
            this.endWaiter();
          }
        }
      }]);

      return Q;
    }();
    /***/

  },

  /***/
  "./src/app/system/logger.ts":
  /*!**********************************!*\
    !*** ./src/app/system/logger.ts ***!
    \**********************************/

  /*! exports provided: Logger */

  /***/
  function srcAppSystemLoggerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logger", function () {
      return Logger;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _protocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./protocol */
    "./src/app/system/protocol.ts"); ///////////////
    // Log Class //
    ///////////////


    var Logger =
    /*#__PURE__*/
    function () {
      function Logger(type) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Logger);

        this.logger = debug ? console.log : function () {};

        _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].setLogger(this.logger);

        this.debug = debug || false;
        this.type = type || 'base';
      }

      _createClass(Logger, [{
        key: "info",
        value: function info(msg) {
          if (this.debug) {
            this.logger(this.type + ' - ' + msg);
          }
        }
      }, {
        key: "log",
        value: function log(msg) {
          this.logger(this.type + ' - ' + msg);
        }
      }, {
        key: "err",
        value: function err(msg) {
          this.logger(this.type + ' - *** ' + msg + ' ***');
        }
      }]);

      return Logger;
    }();
    /***/

  },

  /***/
  "./src/app/system/master.ts":
  /*!**********************************!*\
    !*** ./src/app/system/master.ts ***!
    \**********************************/

  /*! exports provided: Master */

  /***/
  function srcAppSystemMasterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Master", function () {
      return Master;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _protocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./protocol */
    "./src/app/system/protocol.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./types */
    "./src/app/system/types.ts");
    /* harmony import */


    var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logger */
    "./src/app/system/logger.ts");
    /* harmony import */


    var _Q__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Q */
    "./src/app/system/Q.ts"); // import { Socket } from "cz.blocshop.socketsforcordova/socket.js";


    var Master =
    /*#__PURE__*/
    function (_logger__WEBPACK_IMPO) {
      _inherits(Master, _logger__WEBPACK_IMPO);

      // command was sent, no response received yet

      /*  V2: no groups (store separate in "config.groups")
         system.config: {
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
       
      V3 (no cnodes):
         system.config: {
        "socketserver": "akiworks.be",
        "socketport": 9999,
        "language": "EN",
        "stores": true,
        "multiple": true,
        "remotescenes": true,
        "cmasters": [
          { "name": "Roos",
            "address": "141.135.240.51",
            "port": 5001,
            "password": "duotecno",
            "debug": true,
            "active": true
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
       
      V4 (no cunits): -- still needed ??
          system.config: {
        "version": 3,
        "socketserver": "akiworks.be",
        "socketport": 9999,
        "language": "EN",
        "stores": true,
        "debug": true,
        "multiple": true,
        "remotescenes": true,
        "masters": [
          { "name": "Roos",
            "address": "141.135.240.51",
            "port": 5001,
            "password": "duotecno",
            "active": true,
            "nodes": [
              { "active": "Y",
                "logicalAddress": 7,
                "units": [
                  { "active": "Y",
                    "group": "1",
                    "logicalAddress": 0
                  }, ...
                ]
              }, ...]
          }, ...]
       }
      */
      function Master(system, config, toastCtrl) {
        var _this4;

        _classCallCheck(this, Master);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Master).call(this, "master", system.debug));
        _this4.toastCtrl = toastCtrl;
        _this4.resolveLogin = null;
        _this4.Q = new _Q__WEBPACK_IMPORTED_MODULE_4__["Q"](system.logger); // save my eco system

        _this4.system = system; // save this masters config settings

        _this4.config = _types__WEBPACK_IMPORTED_MODULE_2__["Sanitizers"].masterConfig(config); // all nodes in this master

        _this4.nodes = [];
        _this4.nrNodes = 0;
        _this4.schedule = 0; // connection to an IP node / smartbox

        _this4.socket = null;
        _this4.isOpen = false;
        _this4.isLoggedIn = false;
        _this4.closeRequested = false; // incoming data

        _this4.buffer = "";
        return _this4;
      }

      _createClass(Master, [{
        key: "toast",
        value: function toast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1000,
                      position: "top"
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.config.name || "master";
        }
      }, {
        key: "getSort",
        value: function getSort() {
          return this.getName().toLowerCase();
        }
      }, {
        key: "log",
        value: function log(msg) {
          // overwrite to add IP address
          _get(_getPrototypeOf(Master.prototype), "log", this).call(this, this.type + " " + this.getAddress() + ": " + msg);
        }
      }, {
        key: "writeConfig",
        value: function writeConfig(config, fn) {// overwrite: don't do anything, all is stored in the system-config
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          return this.config;
        }
      }, {
        key: "hasAddress",
        value: function hasAddress(ip) {
          return this.config.address === ip;
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          return this.config.address;
        }
      }, {
        key: "getPort",
        value: function getPort() {
          return this.config.port;
        }
      }, {
        key: "hasPort",
        value: function hasPort(port) {
          return this.config.port == port;
        }
      }, {
        key: "getURL",
        value: function getURL() {
          return this.config.address + ":" + this.config.port;
        }
      }, {
        key: "inMultiNode",
        value: function inMultiNode() {
          return this.nodes.length > 1;
        }
      }, {
        key: "same",
        value: function same(master, port) {
          if (typeof master === "string") {
            if (typeof port === "undefined") {
              // master is probably url ip:port
              var url = master.split(":");
              master = url[0];
              port = parseInt(url[1] || "5001");
            }

            return this.hasAddress(master) && this.hasPort(port);
          } else {
            return master && this.hasAddress(master.getAddress()) && this.hasPort(master.getPort());
          }
        }
        /* ************* */

        /* Communication */

        /* ************* */

      }, {
        key: "open",
        value: function open() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", this.openWeb());

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openTCP",
        value: function openTCP() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", this.openWeb());

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openWeb",
        value: function openWeb() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      try {
                        ////////////////////////////////
                        // try to open the connection //
                        _this5.log("opening connection to the SmartSocket Server");

                        var wsserver = _this5.system.config.socketserver + ":" + _this5.system.config.socketport;
                        var tcpserver = _this5.config.address + ":" + _this5.config.port;
                        _this5.socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);

                        if (!_this5.socket) {
                          _this5.err("could create new web socket to " + wsserver + "/" + tcpserver);

                          resolve(false);
                        } ///////////////////////
                        // set data listener //


                        _this5.socket.onmessage = function (message) {
                          // messages need to be buffered until "]" is received
                          _this5.handleData(message.data);
                        }; ///////////////////////////
                        // set an error listener //


                        _this5.socket.onerror = function (err) {
                          _this5.err("Socket: " + err + " on " + wsserver + "/" + tcpserver);
                        }; ///////////////////////////////////////////
                        // set end: the server closed the socket //


                        _this5.socket.onclose = function () {
                          _this5.isOpen = false;
                          _this5.isLoggedIn = false;

                          _this5.log("end -> socket got disconnected");

                          if (!_this5.closeRequested) {
                            // unexpected close
                            _this5.err("Socket: closed unexpectedly");
                          }
                        };

                        _this5.socket.onopen = function () {
                          _this5.isOpen = true; // request a connection to the real socket

                          _this5.log("connection open on " + wsserver + "/" + tcpserver); // resolve our promise with the opened socket


                          resolve(true);
                        };
                      } catch (e) {
                        _this5.err("Failed to open a connection on port " + _this5.getPort());

                        resolve(false);
                      }
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var message;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.isOpen) {
                      _context6.next = 11;
                      break;
                    }

                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildDisconnect();
                    _context6.prev = 2;
                    this.closeRequested = true;
                    _context6.next = 6;
                    return this.send(message);

                  case 6:
                    _context6.next = 11;
                    break;

                  case 8:
                    _context6.prev = 8;
                    _context6.t0 = _context6["catch"](2);
                    this.err("Disconnect failure: " + _context6.t0);

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[2, 8]]);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      var message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildLogin(_this6.config.password);

                      try {
                        _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].write(_this6.socket, message); // to be called when logged in


                        _this6.resolveLogin = resolve;
                      } catch (err) {
                        _this6.resolveLogin = null;

                        _this6.err("Login call failed: " + err);

                        reject(false);
                      }
                    }));

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "getSocket",
        value: function getSocket() {
          return this.socket;
        }
      }, {
        key: "send",
        value: function send(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", this.Q.exec(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                if (this.isOpen) {
                                  _context8.next = 7;
                                  break;
                                }

                                _context8.next = 3;
                                return this.open();

                              case 3:
                                _context8.next = 5;
                                return this.login();

                              case 5:
                                if (_context8.sent) {
                                  _context8.next = 7;
                                  break;
                                }

                                return _context8.abrupt("return", _types__WEBPACK_IMPORTED_MODULE_2__["WriteError"].writeFatal);

                              case 7:
                                return _context8.abrupt("return", _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].write(this.socket, message));

                              case 8:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "handleData",
        value: function handleData(message) {
          // put the incoming data into a buffer and only use complete data
          this.buffer += message;

          while (this.buffer.length > 0 && this.processData()) {}
        }
      }, {
        key: "processData",
        value: function processData() {
          // fetch next message and store the rest of unused data (if any)
          var next = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].nextMessage(this.buffer);

          this.buffer = next.rest;

          if (!next.cmd) {
            return false;
          } else {
            this.log("incoming msg=" + Object(_protocol__WEBPACK_IMPORTED_MODULE_1__["recName"])(next.cmd) + ", status=" + next.isStatus + ", data=" + (next.message ? next.message.join(",") : "--"));
            this.Q.do();

            if (next.isStatus) {
              this.receiveStatus(next);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].Info) {
              this.receiveInfo(next);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].ConnectStatus) {
              this.receiveLogin(next.message);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].ScheduleStatus) {
              this.receiveSchedule(next.message);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].Internal) {
              this.receiveInternal(next.raw);
            } else {
              this.log("what to do with: " + next.message);
            }

            return true;
          }
        } ///////////////////////
        // Internal messages //
        ///////////////////////

      }, {
        key: "receiveInternal",
        value: function receiveInternal(msg) {
          var separ = msg.indexOf(":");
          if (separ < 0) return;
          var type = msg.substr(5, separ - 5);
          var data = msg.substr(type.length + 6, msg.length - type.length - 6);

          if (msg[2] === 'R') {
            this.system.doReceiveBackup(type, data);
          }
        } ///////////////////
        // Login message //
        ///////////////////

      }, {
        key: "receiveLogin",
        value: function receiveLogin(message) {
          this.isLoggedIn = message[2] === 1;

          if (this.resolveLogin) {
            this.toast("Login " + (this.isLoggedIn ? "OK" : "FAIL") + " for " + this.config.address);
            this.resolveLogin(this.isLoggedIn);
            this.resolveLogin = null;
          } else {
            this.err("unexpected ConnectStatus ?");
          }
        } ///////////////////
        // Info messages //
        ///////////////////

      }, {
        key: "receiveInfo",
        value: function receiveInfo(next) {
          if (next.message[1] === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].DBInfo) {
            this.receiveDBInfo(next.message);
          } else if (next.message[1] === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].NodeInfo) {
            this.receiveNodeInfo(next.message);
          } else if (next.message[1] === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].UnitInfo) {
            this.receiveUnitInfo(next.message);
          } else {
            this.err("What is this? info type = " + next.message[1] + ", message: " + next.message);
          }

          this.system.triggerRebuild();
        }
      }, {
        key: "receiveSchedule",
        value: function receiveSchedule(message) {
          this.schedule = message[2];
          this.info("received week schedule = " + this.schedule);
        }
      }, {
        key: "receiveDBInfo",
        value: function receiveDBInfo(message) {
          var dbInfo = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].makeDBInfo(message);

          this.nrNodes = dbInfo.nrNodes;

          for (var nodeInx = 0; nodeInx < this.nrNodes; nodeInx++) {
            this.fetchNode(nodeInx);
          }
        }
      }, {
        key: "receiveNodeInfo",
        value: function receiveNodeInfo(message) {
          var nodeInfo = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].makeNodeInfo(message);

          var node = this.findNode(nodeInfo.logicalAddress);

          if (!node) {
            node = new _protocol__WEBPACK_IMPORTED_MODULE_1__["Node"](this, nodeInfo);
            this.nodes.push(node);
          } else {
            _types__WEBPACK_IMPORTED_MODULE_2__["Sanitizers"].nodeInfo(nodeInfo, node);
          }

          this.system.setActiveState(node);

          if (node.active && node.nrUnits !== node.units.length) {
            this.fetchAllUnits(node);
          } else {
            this.log("Skipping node: " + node.getDescription());
          }
        }
      }, {
        key: "receiveUnitInfo",
        value: function receiveUnitInfo(message) {
          var unitInfo = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].makeUnitInfo(message);

          var unit = this.findUnit(unitInfo.logicalNodeAddress, unitInfo.logicalAddress);

          if (!unit) {
            var node = this.findNode(unitInfo.logicalNodeAddress);

            if (node) {
              unit = new _protocol__WEBPACK_IMPORTED_MODULE_1__["Unit"](node, unitInfo);
              node.units.push(unit);
            } else {
              this.err("Node not found: " + unitInfo.logicalNodeAddress);
            }
          } else {
            _types__WEBPACK_IMPORTED_MODULE_2__["Sanitizers"].unitInfo(unitInfo, unit);
          }

          this.system.setActiveState(unit);
        }
      }, {
        key: "fetchAllUnits",
        value: function fetchAllUnits(node) {
          for (var unitInx = 0; unitInx < node.nrUnits; unitInx++) {
            this.fetchUnit(node, unitInx);
          }
        }
      }, {
        key: "fetchDbInfo",
        value: function fetchDbInfo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildDBInfo());

                  case 3:
                    _context10.next = 5;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildRequestSchedule());

                  case 5:
                    _context10.next = 10;
                    break;

                  case 7:
                    _context10.prev = 7;
                    _context10.t0 = _context10["catch"](0);
                    this.err("dbInfo call failed -> " + _context10.t0);

                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[0, 7]]);
          }));
        }
      }, {
        key: "fetchNode",
        value: function fetchNode(nodeInx) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var message;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildNodeInfo(nodeInx);
                    _context11.prev = 1;
                    _context11.next = 4;
                    return this.send(message);

                  case 4:
                    _context11.next = 9;
                    break;

                  case 6:
                    _context11.prev = 6;
                    _context11.t0 = _context11["catch"](1);
                    this.err("nodeInfo call failed -> " + _context11.t0);

                  case 9:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[1, 6]]);
          }));
        }
      }, {
        key: "fetchUnit",
        value: function fetchUnit(node, unitInx) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var message;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildUnitInfo(node, unitInx);
                    _context12.prev = 1;
                    _context12.next = 4;
                    return this.send(message);

                  case 4:
                    _context12.next = 9;
                    break;

                  case 6:
                    _context12.prev = 6;
                    _context12.t0 = _context12["catch"](1);
                    this.err("unitInfo call failed -> " + _context12.t0);

                  case 9:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[1, 6]]);
          }));
        }
      }, {
        key: "getDatabase",
        value: function getDatabase() {
          var readUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.nodes = [];
                    _context13.next = 3;
                    return this.fetchDbInfo();

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "allNodes",
        value: function allNodes(callback) {
          this.nodes.forEach(function (node) {
            callback(node);
          });
        }
      }, {
        key: "allUnits",
        value: function allUnits(callback) {
          this.nodes.forEach(function (node) {
            node.units.forEach(function (unit) {
              callback(unit);
            });
          });
        }
      }, {
        key: "displayDatabase",
        value: function displayDatabase() {
          var _this8 = this;

          var onlyNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.log("Showing " + this.nodes.length + " nodes");
          this.nodes.forEach(function (node, nodeInx) {
            if (onlyNodes) {
              _this8.log("===================================================================================");
            }

            _this8.log(nodeInx + ". " + node.name + ", type = " + node.typeName() + ", nrUnits = " + node.nrUnits + ", logical address = " + node.logicalAddress);

            if (onlyNodes) {
              _this8.log("-----------------------------------------------------------------------------------");

              node.units.forEach(function (unit, unitInx) {
                _this8.log("> " + unitInx + ". '" + unit.name + "' => '" + unit.getName() + "', type = " + unit.typeName() + ", logical address: " + unit.logicalAddress + ", value: " + unit.value + (unit.status ? ", status = " + unit.status : ""));
              });
            }
          });
        }
      }, {
        key: "findUnit",
        value: function findUnit(logicalNodeAddress, logicalAddress) {
          var node = this.findNode(logicalNodeAddress);

          if (node) {
            return node.units.find(function (u) {
              return u.logicalAddress === logicalAddress;
            });
          } else {
            return null;
          }
        }
      }, {
        key: "findNode",
        value: function findNode(logicalAddress) {
          return this.nodes.find(function (n) {
            return n && n.logicalAddress === logicalAddress;
          });
        }
      }, {
        key: "getNodeAndUnit",
        value: function getNodeAndUnit(node, unit) {
          // allow for index numbers or real nodes to be passed
          if (typeof node === "number") {
            if (node >= this.nodes.length) {
              this.err("getNodeAndUnit -> node nr " + node + " out of bounds");
              node = null;
            } else {
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
            } else {
              unit = node.units[unit];
            }
          }

          if (!unit) {
            this.err("getNodeAndUnit -> unit not found");
            return null;
          }

          return {
            node: node,
            unit: unit
          };
        }
        /* ****************************************************************************** */

        /* Status requests                                                                */

        /*   Database (all known nodes)                                                   */

        /*   Node (all known units in this node)                                          */

        /*   Unit (only dimmer, switch, input, temperature, motor and mood implemented)   */

        /* ****************************************************************************** */

      }, {
        key: "receiveStatus",
        value: function receiveStatus(next) {
          // called when an incoming message was received and classified as a status message
          // find node
          var nodeLogical = next.message[2];
          var node = this.nodes.find(function (node) {
            return node && node.logicalAddress == nodeLogical;
          });

          if (!node) {
            this.err("status message " + next.cmd + " for unknown node = " + nodeLogical);
            return;
          } // find unit


          var unitLogical = next.message[3];
          var unit = node.units.find(function (unit) {
            return unit && unit.logicalAddress == unitLogical;
          });

          if (!unit) {
            // this.err("status message " + next.cmd + " for unknown unit = " + unitLogical +
            //          " in node = " + nodeLogical);
            return;
          } // Parse the status into the unit


          _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].receiveStatus(next, unit);
          /*
          // inform the system if a change was detected or if macro command (69)
          if ((currValue != unit.value) || (currStatus != unit.status) || (next.cmd == 69))
            this.system.informStatusChange(this, unit);
          */

        }
      }, {
        key: "requestStatus",
        value: function requestStatus() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var nodeInx, node, unitInx;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    nodeInx = 0;

                  case 1:
                    if (!(nodeInx < this.nodes.length)) {
                      _context14.next = 14;
                      break;
                    }

                    node = this.nodes[nodeInx];

                    if (!node.active) {
                      _context14.next = 11;
                      break;
                    }

                    unitInx = 0;

                  case 5:
                    if (!(unitInx < node.units.length)) {
                      _context14.next = 11;
                      break;
                    }

                    _context14.next = 8;
                    return this.requestUnitStatus(node.units[unitInx]);

                  case 8:
                    unitInx++;
                    _context14.next = 5;
                    break;

                  case 11:
                    nodeInx++;
                    _context14.next = 1;
                    break;

                  case 14:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "requestNodeStatus",
        value: function requestNodeStatus(node) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var unitInx;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    unitInx = 0;

                  case 1:
                    if (!(unitInx < node.units.length)) {
                      _context15.next = 8;
                      break;
                    }

                    if (!node.units[unitInx].active) {
                      _context15.next = 5;
                      break;
                    }

                    _context15.next = 5;
                    return this.requestUnitStatus(node.units[unitInx]);

                  case 5:
                    unitInx++;
                    _context15.next = 1;
                    break;

                  case 8:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "requestUnitStatus",
        value: function requestUnitStatus(unit) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var message, res;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildRequestUnitStatus(unit.node, unit);
                    _context16.next = 3;
                    return this.send(message);

                  case 3:
                    res = _context16.sent;
                    // results will be set by the data event listener
                    this.info("get value of " + unit.node.getName() + "-" + unit.getName());

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "setUnitStatus",
        value: function setUnitStatus(unit, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var params;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    params = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSetCmd(unit.node, unit, value);

                    if (!params.cmd) {
                      _context17.next = 4;
                      break;
                    }

                    _context17.next = 4;
                    return this.send(params.message);

                  case 4:
                    this.system.checkScenes(unit);

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "setPreset",
        value: function setPreset(unit, preset, temp) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSetPreset(unit.node, unit, preset, temp));

                  case 2:
                    this.info("set temp preset: " + preset + " of " + unit.node.getName() + "-" + unit.getName() + " to temp " + temp);

                  case 3:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "selectPreset",
        value: function selectPreset(unit, preset) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSelectPreset(unit.node, unit, preset));

                  case 2:
                    this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + " to: " + preset);

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "setSchedule",
        value: function setSchedule() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSendSchedule(this.schedule));

                  case 2:
                    this.info("set schedule to week nr: " + this.schedule);

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "setTempOnOff",
        value: function setTempOnOff(unit, on) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSensorOnOff(unit.node, unit, on));

                  case 2:
                    this.info("turn temp sensor of " + unit.node.getName() + "-" + unit.getName() + ": " + (on ? "on" : "off"));

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "doIncDecPreset",
        value: function doIncDecPreset(unit, inc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildIncDecPreset(unit.node, unit, inc));

                  case 2:
                    this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + ": " + (inc ? "up" : "down"));

                  case 3:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }]);

      return Master;
    }(_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]);
    /***/

  },

  /***/
  "./src/app/system/protocol.ts":
  /*!************************************!*\
    !*** ./src/app/system/protocol.ts ***!
    \************************************/

  /*! exports provided: cmdName, Rec, recName, NodeType, UnitState, UnitMotorCmd, UnitType, Node, Unit, Protocol */

  /***/
  function srcAppSystemProtocolTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cmdName", function () {
      return cmdName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rec", function () {
      return Rec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "recName", function () {
      return recName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeType", function () {
      return NodeType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitState", function () {
      return UnitState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitMotorCmd", function () {
      return UnitMotorCmd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitType", function () {
      return UnitType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Node", function () {
      return Node;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Unit", function () {
      return Unit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Protocol", function () {
      return Protocol;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./types */
    "./src/app/system/types.ts"); // Duotecno master IP protocol implementation
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
      Cmd[Cmd["Internal"] = 9] = "Internal";
      Cmd[Cmd["SetSwitch"] = 163] = "SetSwitch";
      Cmd[Cmd["SetDimmer"] = 162] = "SetDimmer";
      Cmd[Cmd["SetControl"] = 168] = "SetControl";
      Cmd[Cmd["SetMotor"] = 182] = "SetMotor";
      Cmd[Cmd["SetSensor"] = 136] = "SetSensor";
      Cmd[Cmd["Login"] = 214] = "Login";
      Cmd[Cmd["Heartbeat"] = 215] = "Heartbeat";
      Cmd[Cmd["DatabaseInfo"] = 209] = "DatabaseInfo";
      Cmd[Cmd["SetSchedule"] = 217] = "SetSchedule";
    })(Cmd || (Cmd = {})); // for Set Switch/Dimmer/Control


    var reqDim = 3;
    var reqOff = 9;
    var reqOn = 10; // for Login

    var reqDisconnect = 0;
    var reqConnect = 3; // for DatabaseInfo = 209;

    var reqDBInfo = 0;
    var reqNodeInfo = 1;
    var reqUnitInfo = 2;
    var reqUnitStatus = 3; // for Schedule

    var reqSchedule = 218;

    function cmdName(cmd) {
      return Cmd[cmd] || 'cmd' + cmd;
    } //////////////////////
    // Received results //
    //////////////////////


    var Rec;

    (function (Rec) {
      // return info from cmdDatabaseInfo
      Rec[Rec["DBInfo"] = 0] = "DBInfo";
      Rec[Rec["NodeInfo"] = 1] = "NodeInfo";
      Rec[Rec["UnitInfo"] = 2] = "UnitInfo";
      Rec[Rec["Internal"] = 9] = "Internal";
      Rec[Rec["ErrorMessage"] = 17] = "ErrorMessage";
      Rec[Rec["ConnectStatus"] = 67] = "ConnectStatus";
      Rec[Rec["ScheduleStatus"] = 73] = "ScheduleStatus"; // return info from recDBInfo

      Rec[Rec["Info"] = 64] = "Info"; // return info from reqUnitStatus

      Rec[Rec["Mood"] = 4] = "Mood";
      Rec[Rec["Dimmer"] = 5] = "Dimmer";
      Rec[Rec["Switch"] = 6] = "Switch";
      Rec[Rec["Sensor"] = 7] = "Sensor";
      Rec[Rec["Motor"] = 38] = "Motor";
      Rec[Rec["Macro"] = 69] = "Macro";
    })(Rec || (Rec = {}));

    function recName(rec) {
      return Rec[rec] || 'rec' + rec;
    } // Node types


    var NodeType;

    (function (NodeType) {
      NodeType[NodeType["kNoNode"] = 0] = "kNoNode";
      NodeType[NodeType["kStandardNode"] = 1] = "kStandardNode";
      NodeType[NodeType["kGatewayNode"] = 4] = "kGatewayNode";
      NodeType[NodeType["kModemNode"] = 8] = "kModemNode";
      NodeType[NodeType["kGUINode"] = 32] = "kGUINode";
    })(NodeType || (NodeType = {}));

    ; // States

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
      UnitType[UnitType["kCondition"] = 103] = "kCondition";
      UnitType[UnitType["kNoType"] = 0] = "kNoType";
    })(UnitType || (UnitType = {}));

    ; // kLightbulb  == kSwitch with no "#" in the name
    // kGarageDoor == kSwitchingMotor with "!" in the name
    // kCondition  == kMood with "*" in the name
    /////////////////////////
    // Node in the network //
    /////////////////////////

    var Node =
    /*#__PURE__*/
    function () {
      function Node(master, params) {
        _classCallCheck(this, Node);

        this.master = master;

        _types__WEBPACK_IMPORTED_MODULE_1__["Sanitizers"].nodeInfo(params, this);

        this.units = []; // remove | in names

        var separ = this.name.indexOf('|');
        this.name = separ < 0 ? this.name : this.name.substring(0, separ) + ' ' + this.name.substring(separ + 1);
      }

      _createClass(Node, [{
        key: "inMultiNode",
        value: function inMultiNode() {
          return this.master.inMultiNode();
        }
      }, {
        key: "typeName",
        value: function typeName() {
          switch (this.type) {
            case NodeType.kStandardNode:
              return 'Standard';

            case NodeType.kGatewayNode:
              return 'Gateway';

            case NodeType.kModemNode:
              return 'Modem';

            case NodeType.kGUINode:
              return 'GUI';

            default:
              return 'Unknown node type (' + this.type + ')';
          }
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.name;
        }
      }, {
        key: "getSort",
        value: function getSort() {
          return this.getName().toLowerCase();
        }
      }, {
        key: "getNumber",
        value: function getNumber() {
          return Object(_types__WEBPACK_IMPORTED_MODULE_1__["hex"])(this.logicalAddress);
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          return this.getName() + ', active: ' + this.active + ', type: ' + this.typeName() + ', node: ' + this.getName();
        }
      }, {
        key: "findUnit",
        value: function findUnit(logicalAddress) {
          return this.units.find(function (u) {
            return u && u.logicalAddress === logicalAddress;
          });
        }
      }, {
        key: "findUnitIndex",
        value: function findUnitIndex(logicalAddress) {
          return this.units.findIndex(function (u) {
            return u && u.logicalAddress === logicalAddress;
          });
        }
      }]);

      return Node;
    }(); /////////////////////////
    // Unit within a Node  //
    /////////////////////////


    var Unit =
    /*#__PURE__*/
    function () {
      function Unit(node, params) {
        _classCallCheck(this, Unit);

        this.group = 0;
        this.node = node;

        _types__WEBPACK_IMPORTED_MODULE_1__["Sanitizers"].unitInfo(params, this); // make a display name for homekit, without the |
        // if the display name is empty make a N[nodeAdr]-U[unitAdr] name.


        var separ = this.name.indexOf('|');
        this.name = separ < 0 ? this.name : this.name.substring(0, separ) + ' ' + this.name.substring(separ + 1);
        this.displayName = separ < 0 ? this.name : this.name.substring(separ + 1) + ' ' + this.name.substring(0, separ);

        if (!this.displayName) {
          this.displayName = this.getSerialNr();
        }
      }

      _createClass(Unit, [{
        key: "isUnit",
        value: function isUnit(master, port, nodeLogicalAddress, unitLogicalAddress) {
          if (master instanceof Unit) {
            var unit = master;
            return this.node.master.same(unit.node.master.getAddress(), unit.node.master.getPort()) && this.node.logicalAddress == unit.node.logicalAddress && this.logicalAddress == unit.logicalAddress;
          } else {
            /* if (typeof master === "string") */
            return this.node.master.same(master, port) && this.node.logicalAddress == nodeLogicalAddress && this.logicalAddress == unitLogicalAddress;
          }
        }
      }, {
        key: "sameValue",
        value: function sameValue(value) {
          if (this.type === UnitType.kSwitchingMotor || this.type === UnitType.kGarageDoor) {
            return this.value == UnitState.kOpening && value == 4 || this.value == UnitState.kClosing && value == 5 || this.value <= UnitState.kOpen && value == 3;
          } else {
            return this.value == value;
          }
        }
      }, {
        key: "typeName",
        value: function typeName() {
          switch (this.type) {
            case UnitType.kDimmer:
              return 'Dimmer';

            case UnitType.kSwitch:
              return 'Switch/Relay';

            case UnitType.kLightbulb:
              return 'Lightbulb';

            case UnitType.kInput:
              return 'Control input';

            case UnitType.kTemperature:
              return 'Temperature sensor';

            case UnitType.kExtendedAudio:
              return 'Extended audio';

            case UnitType.kMood:
              return 'Virtual mood';

            case UnitType.kCondition:
              return 'Condidtion';

            case UnitType.kSwitchingMotor:
              return 'Switch motor';

            case UnitType.kGarageDoor:
              return 'Garagedoor';

            case UnitType.kAudio:
              return 'Basic audio';

            case UnitType.kAV:
              return 'AV Matrix';

            case UnitType.kIRTX:
              return 'IRTX';

            case UnitType.kVideo:
              return 'Video multiplexer';

            default:
              return 'Unknown unit type (' + this.type + ')';
          }
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.name;
        }
      }, {
        key: "getDisplayName",
        value: function getDisplayName() {
          if (this.inMultiNode) {
            return this.displayName + ' on ' + this.node.getName();
          } else {
            return this.displayName;
          }
        }
      }, {
        key: "getNumber",
        value: function getNumber() {
          return this.node.getNumber() + ';' + Object(_types__WEBPACK_IMPORTED_MODULE_1__["hex"])(this.logicalAddress);
        }
      }, {
        key: "getSort",
        value: function getSort() {
          var name = this.getName().toLowerCase();

          switch (this.type) {
            case UnitType.kTemperature:
              return "01|" + name;

            case UnitType.kSwitchingMotor:
              return "02|" + name;

            case UnitType.kGarageDoor:
              return "02|" + name;

            case UnitType.kDimmer:
              return "03|" + name;

            case UnitType.kLightbulb:
              return "04|" + name;

            case UnitType.kSwitch:
              return "04|" + name;

            case UnitType.kInput:
              return "11|" + name;

            case UnitType.kExtendedAudio:
              "12|" + name;

            case UnitType.kMood:
              return "09|" + name;

            case UnitType.kCondition:
              return "10|" + name;

            case UnitType.kAudio:
              return "12|" + name;

            case UnitType.kAV:
              return "13|" + name;

            case UnitType.kIRTX:
              return "19|" + name;

            case UnitType.kVideo:
              return "14|" + name;

            default:
              return "99|" + name;
          }
        }
      }, {
        key: "getType",
        value: function getType() {
          // Extension on Duotecno's types
          //  updown =>
          //      if name contains !   => "door""
          //      else                 => "window-covering"
          //  mood =>
          //      if name contains *   => "condition" (2 state, don't reset after "on")
          //      else                 => "mood" (turns of 1.2 seconds after being turned on)
          //  switch =>
          //      if name contains #   => "switch"     (used to be stk)
          //      else                 => "lightbulb" 
          //
          // exceptions
          if (this.type === UnitType.kSwitch && this.name.indexOf('#') < 0) {
            return UnitType.kLightbulb;
          }

          if (this.type === UnitType.kSwitchingMotor && this.name.indexOf('!') >= 0) {
            return UnitType.kGarageDoor;
          }

          if (this.type === UnitType.kMood && this.name.indexOf('*') >= 0) {
            return UnitType.kCondition;
          }

          return this.type;
        }
      }, {
        key: "getSerialNr",
        value: function getSerialNr() {
          if (this.inMultiNode) {
            return this.node.getName() + '-N' + this.logicalNodeAddress + '-U' + this.logicalAddress;
          } else {
            return 'N' + this.logicalNodeAddress + '-U' + this.logicalAddress;
          }
        }
      }, {
        key: "isCtrl",
        value: function isCtrl() {
          return this.isSwitch() || this.isDimmer() || this.isUpDown();
        }
      }, {
        key: "isSwitch",
        value: function isSwitch() {
          return this.type === UnitType.kSwitch || this.type === UnitType.kLightbulb;
        }
      }, {
        key: "isMood",
        value: function isMood() {
          return this.type === UnitType.kMood || this.type === UnitType.kCondition;
        }
      }, {
        key: "isInput",
        value: function isInput() {
          return this.type === UnitType.kInput;
        }
      }, {
        key: "isTemperature",
        value: function isTemperature() {
          return this.type === UnitType.kTemperature;
        }
      }, {
        key: "isDimmer",
        value: function isDimmer() {
          return this.type === UnitType.kDimmer;
        }
      }, {
        key: "isUpDown",
        value: function isUpDown() {
          return this.type === UnitType.kGarageDoor || this.type === UnitType.kSwitchingMotor;
        }
      }, {
        key: "setPreset",
        value: function setPreset(preset, temp) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.node.master.setPreset(this, preset, temp);

                  case 2:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "selectPreset",
        value: function selectPreset(preset) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.node.master.selectPreset(this, preset);

                  case 2:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "sensorOnOff",
        value: function sensorOnOff(on) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.node.master.setTempOnOff(this, on);

                  case 2:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "doIncDecPreset",
        value: function doIncDecPreset(inc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.node.master.doIncDecPreset(this, inc);

                  case 2:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "inMultiNode",
        value: function inMultiNode() {
          return this.node.inMultiNode();
        }
      }, {
        key: "reqState",
        value: function reqState() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.node.master.requestUnitStatus(this);

                  case 2:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "setState",
        value: function setState(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.node.master.setUnitStatus(this, value);

                  case 2:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "getDispayState",
        value: function getDispayState() {
          switch (this.type) {
            case UnitType.kDimmer:
              return (this.status ? 'on' : 'off') + ' (' + this.value + '%)';

            case UnitType.kSwitch:
            case UnitType.kLightbulb:
              return this.status ? 'on' : 'off';

            case UnitType.kInput:
              return this.status ? 'on' : 'off';

            case UnitType.kTemperature:
              return isNaN(this.value) ? "-" : this.value / 10.0 + 'C';

            case UnitType.kCondition:
            case UnitType.kMood:
              return this.status ? 'on' : 'off';

            case UnitType.kGarageDoor:
            case UnitType.kSwitchingMotor:
              if (this.status === UnitState.kOpening) {
                return 'opening';
              }

              if (this.status === UnitState.kClosing) {
                return 'closing';
              }

              if (this.status === UnitState.kOpen) {
                return 'open';
              }

              if (this.status === UnitState.kClosed) {
                return 'closed';
              }

              if (this.status === UnitState.kStopped) {
                return 'stopped';
              }

          }

          return typeof this.status != "undefined" ? this.status.toString() : 'unknown';
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          return this.getDisplayName() + ', active: ' + this.active + ', type: ' + this.typeName() + ', status: ' + this.status + ', value: ' + this.value;
        }
      }]);

      return Unit;
    }(); /////////////////////////////////////
    // IP node protocol implementation //
    /////////////////////////////////////


    var Protocol = {
      // set to a different value if needed.
      logger: console.log,
      emitter: null,
      setLogger: function setLogger(logger) {
        this.logger = logger;
      },
      setEmitter: function setEmitter(emitter) {
        this.emitter = emitter;
      },
      ////////////////////
      // Helper methods //
      ////////////////////
      getStr: function getStr(arr, at) {
        return arr.slice(at + 1, at + arr[at] + 1).map(function (val) {
          return String.fromCharCode(val);
        }).join('');
      },
      makeLong: function makeLong(arr, at) {
        return arr[at + 0] * 256 * 256 * 256 + arr[at + 1] * 256 * 256 + arr[at + 2] * 256 + arr[at + 3];
      },
      isStatus: function isStatus(cmd) {
        return cmd === Rec.Mood || cmd === Rec.Dimmer || cmd === Rec.Switch || cmd === Rec.Sensor || cmd === Rec.Motor || cmd === Rec.Macro;
      },
      //////////////////////////
      // Code to String stuff //
      //////////////////////////
      translateError: function translateError(err) {
        if (err[0] != Rec.ErrorMessage) {
          return 'received unexpected data: ' + err;
        }

        switch (err[1]) {
          case 11:
            return 'Wrong object method received for ' + err[2] + '/' + err[3];

          case 12:
            return 'Wrong Message Code received: ' + err[2];

          case 18:
            return 'This function can only be executed when this node is the master';

          case 128:
            return 'The node database is not ready';

          case 129:
            return 'Node ' + err[2] + ' could not be found in the database';

          case 130:
            return 'Wrong node index: ' + err[2];

          case 131:
            return 'Unit ' + err[2] + ' with address ' + err[3] + ' could not be found in the database';

          case 132:
            return 'Wrong unit index ' + err[3] + ' for this node ' + err[2];

          case 133:
            return 'Unit ' + err[3] + ' of node ' + err[2] + ' is of a different type';

          case 140:
            return 'The requested operation is not allowed';

          case 141:
            return 'The requested operation is not allowed because a wrong access code is used';

          case 142:
            return 'The requested operation is not implemented in this software version';

          default:
            return 'Unknown error';
        }
      },
      ////////////////////
      // Socket methods //
      ////////////////////
      write: function write(socket
      /* | Socket */
      , data) {
        var cmd = parseInt(data[0]);

        if (data instanceof Array) {
          data = data.join(',');
        }

        if (typeof data === 'string') {
          // if no enclosing "[...]", add them
          if (data[0] != '[') {
            data = '[' + data + ']';
          }

          this.logger('sending: ' + cmdName(cmd) + ' - ' + data);

          try {
            // append a LF char and send
            socket.send(data + String.fromCharCode(10));
            return _types__WEBPACK_IMPORTED_MODULE_1__["WriteError"].writeOK;
          } catch (err) {
            this.logger('error sending through socket ' + err.message);
            return _types__WEBPACK_IMPORTED_MODULE_1__["WriteError"].writeFatal;
          }
        } else {
          throw new Error('wrong data type for sending');
        }
      },
      //////////////////////////////
      // Handle incoming data     //
      //  strip []                //
      //  convert to array        //
      //  convert chars to ints   //
      //////////////////////////////
      nextMessage: function nextMessage(buffer) {
        // pre return result
        var nextRec = {
          rest: buffer,
          isStatus: false,
          message: null,
          cmd: 0,
          raw: ""
        }; // no "start-of-data" -> discard buffer || else -> trim buffer

        var begin = buffer.indexOf('[');

        if (begin < 0) {
          nextRec.rest = '';
        } else if (begin != 0) {
          nextRec.rest = buffer.substring(begin);
        } // we either have valid start data or nothing


        if (nextRec.rest.length > 0) {
          // do we have an "end-of-data" in our buffer
          var end = nextRec.rest.indexOf(']'); // if no end-of-data was found:
          // leave it in the buffer and hope more data will arrive soon
          // TODO: set up a timer that clears the buffer if nothing comes through

          if (end >= 0) {
            // fetch the first available message (discard the [ and ])
            nextRec.raw = nextRec.rest.substring(1, end); // delete the used message from the input buffer
            // if there, also delete the trailing LF (0x0A)

            if (end <= nextRec.rest.length && nextRec.rest.charCodeAt(end + 1) === 0x0A) {
              end++;
            }

            nextRec.rest = nextRec.rest.substring(end + 1); // convert to array and turn strings into numbers

            nextRec.message = nextRec.raw.split(',').map(function (c) {
              return parseInt(c);
            }); // get the first byte to see what kind of incoming data

            nextRec.cmd = nextRec.message[0];
            nextRec.isStatus = this.isStatus(nextRec.cmd); // this.logger("processing: " + (nextRec.isStatus ? "status -> " : "") + msg);
          }
        }

        return nextRec;
      },
      buildLogin: function buildLogin(password) {
        password = password || this.config.password;
        return [Cmd.Login, reqConnect, password.length].concat(_toConsumableArray(password.split('').map(function (c) {
          return c.charCodeAt(0);
        })));
      },
      buildDisconnect: function buildDisconnect() {
        return [Cmd.Login, reqDisconnect];
      },
      /////////////////////////////////////
      // Collect info of all found nodes //
      /////////////////////////////////////
      buildDBInfo: function buildDBInfo() {
        return [Cmd.DatabaseInfo, reqDBInfo];
      },
      buildNodeInfo: function buildNodeInfo(nodeInx) {
        return [Cmd.DatabaseInfo, reqNodeInfo, nodeInx];
      },
      buildUnitInfo: function buildUnitInfo(node, unitInx) {
        return [Cmd.DatabaseInfo, reqUnitInfo, node.logicalAddress, unitInx];
      },
      buildRequestUnitStatus: function buildRequestUnitStatus(node, unit) {
        return [Cmd.DatabaseInfo, reqUnitStatus, node.logicalAddress, unit.logicalAddress, unit.type];
      },
      buildRequestSchedule: function buildRequestSchedule() {
        return [reqSchedule, 0];
      },
      getCmdAndMethod: function getCmdAndMethod(unit, value) {
        switch (unit.type) {
          case UnitType.kDimmer:
            if (typeof value === 'boolean') {
              return {
                cmd: Cmd.SetDimmer,
                method: value ? reqOn : reqOff
              };
            } else if (value <= 0) {
              return {
                cmd: Cmd.SetDimmer,
                method: reqOff
              };
            } else {
              return {
                cmd: Cmd.SetDimmer,
                method: reqDim,
                value: Math.max(Math.min(value, 99), 1)
              };
            }

          case UnitType.kSwitch:
            return {
              cmd: Cmd.SetSwitch,
              method: value ? 3 : 2
            };

          case UnitType.kInput:
          case UnitType.kMood:
          case UnitType.kCondition:
            if (value < 0) {
              return {
                cmd: Cmd.SetControl,
                method: 2
              };
            } // short pulse
            else {
                return {
                  cmd: Cmd.SetControl,
                  method: 3,
                  value: value ? 1 : 0
                };
              }

          // long event + 0/1

          case UnitType.kSwitchingMotor:
            return {
              cmd: Cmd.SetMotor,
              method: value
            };
          // 5 close, 4 open, 3 is stop

          case UnitType.kTemperature:
            return {
              cmd: Cmd.SetSensor,
              method: 13
              /* select preset */
              ,
              value: value
            };

          case UnitType.kExtendedAudio:
          case UnitType.kAudio:
          case UnitType.kAV:
          case UnitType.kIRTX:
          case UnitType.kVideo:
          default:
            // "Unknown unit type (" + unit.type + ")";
            this.err('setting ' + unit.type + ' not yet implemented');
            return {
              cmd: 0,
              method: 0,
              value: 0
            };
        }
      },
      buildSetCmd: function buildSetCmd(node, unit, value) {
        var params = this.getCmdAndMethod(unit, value);

        if (params.cmd) {
          params.message = [params.cmd, params.method, node.logicalAddress, unit.logicalAddress];

          if (typeof params.value != 'undefined') {
            params.message.push(params.value);
          } // some need a requestStatus afterwards


          params.reqStatus = params.cmd === Cmd.SetDimmer && params.method === reqDim;
        }

        return params;
      },

      /* Temperature / Presets */
      buildSelectPreset: function buildSelectPreset(node, unit, preset) {
        var params = this.getCmdAndMethod(unit, preset);
        return [params.cmd, 13, node.logicalAddress, unit.logicalAddress, preset];
      },
      buildSetPreset: function buildSetPreset(node, unit, preset, value) {
        return [Cmd.SetSensor, 1, node.logicalAddress, unit.logicalAddress, preset, Math.floor(value / 256), value % 256];
      },
      buildIncDecPreset: function buildIncDecPreset(node, unit, inc) {
        return [Cmd.SetSensor, inc ? 5 : 6, node.logicalAddress, unit.logicalAddress];
      },
      buildSensorOnOff: function buildSensorOnOff(node, unit, on) {
        return [Cmd.SetSensor, 3, node.logicalAddress, unit.logicalAddress, on ? 1 : 0];
      },

      /* Schedule commands */
      buildSendSchedule: function buildSendSchedule(schedule) {
        return [Cmd.SetSchedule, 0, Math.max(0, Math.min(3, schedule))];
      },
      ///////////////////
      // Received info //
      ///////////////////
      receiveStatus: function receiveStatus(next, unit) {
        if (next.cmd === Rec.Sensor) {
          // sensor -> value
          unit.value = next.message[9] * 256 + next.message[10]; // 10x current temperature

          unit.status = next.message[7]; // 0=idle, 1=heating, 2=cooling

          unit.preset = next.message[6] ? next.message[8] : -1; // 0=sun, 1=half sun, 2=moon, 3=half moon, -1 = off

          unit.sun = next.message[11] * 256 + next.message[12]; // 10x temperature

          unit.hsun = next.message[13] * 256 + next.message[14]; // 10x temperature

          unit.moon = next.message[15] * 256 + next.message[16]; // 10x temperature

          unit.hmoon = next.message[17] * 256 + next.message[18]; // 10x temperature

          this.logger('received temperature = ' + unit.value / 10.0);
        } else if (next.cmd === Rec.Switch) {
          // switch -> boolean
          unit.status = next.message[6];
          unit.value = next.message[6] > 0;
        } else if (next.cmd === Rec.Dimmer) {
          // dimmer -> 0 .. 99
          unit.status = next.message[6];
          unit.value = next.message[7];
        } else if (next.cmd === Rec.Mood) {
          // control -> boolean
          unit.status = next.message[6];
          unit.value = next.message[6] != 0;
        } else if (next.cmd === Rec.Motor) {
          // motor -> boolean/status
          unit.status = next.message[6]; // 0 = stopped, 1 stopped/down, 2 = stopped/up, busy/down, busy/up

          unit.value = next.message[6]; // (unit.status == 1);    // true=closed
        } else if (next.cmd = Rec.Macro) {
          // = EV_UNITMACROCOMMANDO
          // example: On 50%: [69,0,NodeAddress,UnitAddress,6,1,50]
          //          Off:    [69,0,NodeAddress,UnitAddress,6,0,0]
          unit.status = next.message[5];
          unit.value = next.message[6];
        }

        this.emitter.emit('update', unit);
      },
      makeDBInfo: function makeDBInfo(res) {
        return {
          nrNodes: res[2]
        };
      },
      makeNodeInfo: function makeNodeInfo(res) {
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
      makeUnitInfo: function makeUnitInfo(res) {
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
    /***/
  },

  /***/
  "./src/app/system/system.ts":
  /*!**********************************!*\
    !*** ./src/app/system/system.ts ***!
    \**********************************/

  /*! exports provided: System */

  /***/
  function srcAppSystemSystemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "System", function () {
      return System;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./master */
    "./src/app/system/master.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./types */
    "./src/app/system/types.ts");
    /* harmony import */


    var _protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./protocol */
    "./src/app/system/protocol.ts");
    /* harmony import */


    var _logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logger */
    "./src/app/system/logger.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! events */
    "./node_modules/events/events.js");
    /* harmony import */


    var events__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_7__);

    var System =
    /*#__PURE__*/
    function (_logger__WEBPACK_IMPO2) {
      _inherits(System, _logger__WEBPACK_IMPO2);

      function System(toastCtrl) {
        var _this9;

        _classCallCheck(this, System);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(System).call(this, "system", true));
        _this9.toastCtrl = toastCtrl;
        _this9.backup = null;
        _this9.isBrowser = true;
        _this9.isSplitted = false; // rebuild active services (units) and spread unit updates

        _this9.trigger = null;
        _this9.moods = [];
        _this9.controls = [];
        _this9.temperatures = [];
        _this9.stores = [];
        _this9.trigger = null;
        _this9.emitter = new events__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();

        _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].setEmitter(_this9.emitter); //this.emitter.on('update', this.checkScenes.bind(this));


        _this9.readConfig();

        _this9.readGroups();

        _this9.readScenes(); // open all masters listed in the config


        _this9.masters = [];

        _this9.openMasters();

        return _this9;
      }

      _createClass(System, [{
        key: "setBrowser",
        value: function setBrowser(isB) {
          this.isBrowser = isB;
        }
      }, {
        key: "setLogger",
        value: function setLogger(logger) {
          this.logger = logger; // use my log function

          _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].logger = logger;
        }
      }, {
        key: "openMasters",
        value: function openMasters() {
          // don"t wait for the real open of the sockets
          // some errors: the socket to the proxy opens, but the socket to the hardware fails
          for (var inx = 0; inx < this.config.cmasters.length; inx++) {
            this.openMaster(this.config.cmasters[inx], inx);
          }
        }
      }, {
        key: "closeMasters",
        value: function closeMasters() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            var inx;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    inx = 0;

                  case 1:
                    if (!(inx < this.masters.length)) {
                      _context29.next = 7;
                      break;
                    }

                    _context29.next = 4;
                    return this.closeMaster(this.masters[inx]);

                  case 4:
                    inx++;
                    _context29.next = 1;
                    break;

                  case 7:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "openMaster",
        value: function openMaster(config, inx) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            var master;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    master = new _master__WEBPACK_IMPORTED_MODULE_2__["Master"](this, config, this.toastCtrl);
                    this.masters[inx] = master;

                    if (master.config.active) {
                      _context30.next = 4;
                      break;
                    }

                    return _context30.abrupt("return");

                  case 4:
                    this.log("opening master: " + master.getAddress());
                    _context30.next = 7;
                    return master.open();

                  case 7:
                    if (!_context30.sent) {
                      _context30.next = 20;
                      break;
                    }

                    _context30.next = 10;
                    return master.login();

                  case 10:
                    if (!_context30.sent) {
                      _context30.next = 17;
                      break;
                    }

                    _context30.next = 13;
                    return master.getDatabase();

                  case 13:
                    this.log("master: " + master.getAddress() + " opened with " + master.nodes.length + " nodes.");
                    this.triggerRebuild();
                    _context30.next = 18;
                    break;

                  case 17:
                    this.err("failed to log in on " + master.getAddress());

                  case 18:
                    _context30.next = 21;
                    break;

                  case 20:
                    this.err("failed to open connection on " + master.getAddress());

                  case 21:
                    return _context30.abrupt("return", master);

                  case 22:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "closeMaster",
        value: function closeMaster(master) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            var inx;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    if (!(!master || !master.isOpen)) {
                      _context31.next = 2;
                      break;
                    }

                    return _context31.abrupt("return");

                  case 2:
                    // find its index (we need it to delete it from the list)
                    inx = this.findMasterInx(master); // close

                    _context31.prev = 3;
                    _context31.next = 6;
                    return master.close();

                  case 6:
                    _context31.next = 11;
                    break;

                  case 8:
                    _context31.prev = 8;
                    _context31.t0 = _context31["catch"](3);
                    this.err("failed to close master on " + master.getAddress() + ":" + master.getConfig().port);

                  case 11:
                    // remove from list
                    if (inx > -1) {
                      this.masters.splice(inx, 1);
                    }

                  case 12:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this, [[3, 8]]);
          }));
        }
      }, {
        key: "displayDatabases",
        value: function displayDatabases() {
          this.masters.forEach(function (m) {
            return m.displayDatabase();
          });
        } //////////////////
        // Config stuff //
        //////////////////

      }, {
        key: "addMaster",
        value: function addMaster(cmaster) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            var inx;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    if (cmaster.address) {
                      _context32.next = 2;
                      break;
                    }

                    return _context32.abrupt("return");

                  case 2:
                    // see if this master already exists
                    inx = this.findCMasterInx(cmaster.address, cmaster.port); // store in config if not yet known

                    if (!(inx < 0)) {
                      _context32.next = 8;
                      break;
                    }

                    this.config.cmasters.push(cmaster);
                    inx = this.masters.length;
                    _context32.next = 11;
                    break;

                  case 8:
                    _context32.next = 10;
                    return this.closeMaster(this.masters[inx]);

                  case 10:
                    this.config.cmasters[inx] = cmaster;

                  case 11:
                    this.writeConfig();
                    _context32.next = 14;
                    return this.openMaster(cmaster, inx);

                  case 14:
                    return _context32.abrupt("return", _context32.sent);

                  case 15:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }, {
        key: "deleteMaster",
        value: function deleteMaster(master) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            var masterAddress, masterPort, inx;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    masterAddress = master.getAddress();
                    masterPort = master.getPort();
                    inx = this.findCMasterInx(masterAddress, masterPort);

                    if (!(inx >= 0)) {
                      _context33.next = 9;
                      break;
                    }

                    _context33.next = 6;
                    return this.closeMaster(master);

                  case 6:
                    // remove the master, it's nodes and their units from the config
                    this.config.cmasters.splice(inx, 1);
                    this.config.cunits = this.config.cunits.filter(function (unit) {
                      return unit.masterPort != masterPort || unit.masterAddress != masterAddress;
                    });
                    this.writeConfig();

                  case 9:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "setActiveState",
        value: function setActiveState(item) {
          if (item instanceof _protocol__WEBPACK_IMPORTED_MODULE_4__["Node"]) {
            var masterAddress = item.master.getAddress();
            var masterPort = item.master.getPort();
            var unitConfig = this.config.cunits.find(function (cu) {
              return cu.logicalNodeAddress === item.logicalAddress && cu.masterAddress === masterAddress && cu.masterPort == masterPort;
            }); // node is used, it exists in configured units

            item.active = !!unitConfig;
          }

          if (item instanceof _protocol__WEBPACK_IMPORTED_MODULE_4__["Unit"]) {
            var _masterAddress = item.node.master.getAddress();

            var _masterPort = item.node.master.getPort();

            var _unitConfig = this.config.cunits.find(function (cu) {
              return cu.logicalAddress === item.logicalAddress && cu.logicalNodeAddress === item.logicalNodeAddress && cu.masterAddress === _masterAddress && cu.masterPort == _masterPort;
            });

            item.active = !!_unitConfig; // unit is used, it exists in configured units

            if (_unitConfig) {
              item.group = _unitConfig.group;
            }
          }
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup(group) {
          if (this.groups.length > 1) {
            // delete the group
            var inx = this.groups.indexOf(group);
            this.groups.splice(inx, 1); // renumber

            this.groups.sort(function (a, b) {
              return a.order - b.order;
            });
            this.groups.forEach(function (g, i) {
              return g.order = i;
            }); // set all items of the deleted group to group 0

            var first = this.groups[0].id;
            this.masters.forEach(function (m) {
              return m.allUnits(function (u) {
                if (u.group == group.id) u.group = first;
              });
            }); // save groups and changes units

            this.writeGroups();
            this.updateSystem(false);
          }
        } //////////////////////////////////////
        // Finding masters, nodes and units //
        //////////////////////////////////////

      }, {
        key: "findMaster",
        value: function findMaster(master, port) {
          if (typeof master === "string") {
            if (typeof port === "undefined") port = 5001;
            return this.masters.find(function (m) {
              return m && m.same(master, port);
            });
          } else {
            return this.masters.find(function (m) {
              return m && m.same(master);
            });
          }
        }
      }, {
        key: "findMasterInx",
        value: function findMasterInx(master) {
          return this.masters.findIndex(function (m) {
            return m && m.same(master);
          });
        }
      }, {
        key: "findCMasterInx",
        value: function findCMasterInx(address, port) {
          return this.config.cmasters.findIndex(function (m) {
            return m.address == address && m.port == port;
          });
        }
      }, {
        key: "findNode",
        value: function findNode(master, logicalAddress) {
          master = this.findMaster(master);

          if (master) {
            return master.nodes.find(function (n) {
              return n && n.logicalAddress === logicalAddress;
            });
          } else {
            return null;
          }
        }
      }, {
        key: "findUnit",
        value: function findUnit(master, A, B, C) {
          var nodeNr = A;
          var unitNr = B;

          if (typeof master === "string") {
            master = this.findMaster(master, A);
            nodeNr = B;
            unitNr = C;
          }

          var node = this.findNode(master, nodeNr);
          if (node) return node.units.find(function (u) {
            return u && u.logicalAddress === unitNr;
          });else return null;
        }
      }, {
        key: "findUnitByAddress",
        value: function findUnitByAddress(logicalNodeAddress, logicalAddress) {
          var _this10 = this;

          var unit = null;
          this.masters.forEach(function (m) {
            if (m) {
              var node = _this10.findNode(m, logicalNodeAddress);

              if (node) {
                unit = node.units.find(function (u) {
                  return u && u.logicalAddress === logicalAddress;
                });
              }
            }
          });
          return unit;
        }
      }, {
        key: "findUnitByName",
        value: function findUnitByName(master, A, name) {
          var unit = null;

          if (typeof master === "string") {
            master = this.findMaster(master, A);
          } else {
            name = A;
          }

          this.masters.forEach(function (m) {
            if (m && m.same(master)) {
              m.nodes.forEach(function (n) {
                if (n) {
                  n.units.forEach(function (u) {
                    if (u.displayName === name || u.name === name) unit = u;
                  });
                }
              });
            }
          });
          return unit;
        }
      }, {
        key: "allActiveUnits",
        value: function allActiveUnits() {
          return this.masters.reduce(function (acc, m) {
            return acc.concat(m.nodes);
          }, []).reduce(function (acc, n) {
            return acc.concat(n.units);
          }, []).filter(function (u) {
            return u.active;
          });
        } //////////////////////////////////////////////////
        // Getting the current state of units and nodes //
        //////////////////////////////////////////////////

      }, {
        key: "updateSystem",
        value: function updateSystem() {
          var dontTrigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.config.cunits = this.allActiveUnits().map(function (u) {
            return {
              active: "Y",
              group: u.group,
              masterAddress: u.node.master.getAddress(),
              masterPort: u.node.master.getPort(),
              logicalNodeAddress: u.node.logicalAddress,
              logicalAddress: u.logicalAddress
            };
          });
          this.writeConfig();

          if (dontTrigger) {
            this.triggerRebuild();
          }
        }
      }, {
        key: "triggerRebuild",
        value: function triggerRebuild() {
          var _this11 = this;

          var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.log("triggerRebuild requested");

          if (this.trigger) {
            this.log("killing pending rebuild");
            clearTimeout(this.trigger);
            this.trigger = null;
          }

          if (immediate) {
            this.rebuildServices();
          } else {
            this.trigger = setTimeout(function () {
              _this11.trigger = null;

              _this11.rebuildServices();
            }, 1000);
          }
        }
      }, {
        key: "rebuildServices",
        value: function rebuildServices() {
          function compare(a, b) {
            var an = a.getSort();
            var bn = b.getSort();
            if (an < bn) return -1;
            if (an > bn) return 1;
            return 0;
          }

          function compareN(a, b) {
            var aname = a.name.toLowerCase();
            var bname = b.name.toLowerCase();
            if (aname < bname) return -1;
            if (aname > bname) return 1;
            return 0;
          } // sort masters, nodes in masters, units in nodes.


          this.log("rebuildMasters/Nodes");
          this.masters.sort(compare);
          this.masters.forEach(function (m) {
            m.nodes.sort(compare);
            m.nodes.forEach(function (n) {
              return n.units.sort(compare);
            });
          }); // sort selected controls, temperatures and moods.

          this.log("rebuildServices");
          var services = this.allActiveUnits();
          this.controls = services.filter(function (s) {
            return s.isCtrl();
          }).sort(compareN);
          this.temperatures = services.filter(function (s) {
            return s.isTemperature();
          }).sort(compareN);
          this.moods = services.filter(function (s) {
            return s.isMood() || s.isInput();
          }).sort(compareN);
          this.stores = this.controls.filter(function (s) {
            return s.isUpDown();
          });
          this.emitter.emit('refresh');
        } ////////////
        // Scenes //
        ////////////

      }, {
        key: "checkScenes",
        value: function checkScenes(unit) {
          var _this12 = this;

          // do local scene implementation only if not handle by server
          if (this.config.remotescenes) return; // used when local-scenes = true.

          var scene = this.scenes.find(function (s) {
            return unit.isUnit(s.trigger.masterAddress, s.trigger.masterPort, s.trigger.logicalNodeAddress, s.trigger.logicalAddress);
          });

          if (scene) {
            this.log("scene found -> " + scene.name + ", value = " + scene.trigger.value + " unit = " + unit.value);
            console.log(scene); //if (unit.sameValue(scene.trigger.value)) {

            scene.units.forEach(function (u) {
              _this12.log("Find unit: " + u.masterAddress + ", " + u.masterPort + ", " + u.logicalNodeAddress + ", " + u.logicalAddress);

              var unit = _this12.findUnit(u.masterAddress, u.masterPort, u.logicalNodeAddress, u.logicalAddress);

              if (unit) {
                _this12.log(" - unit found " + unit.getDisplayName() + " -> " + u.value);

                unit.setState(u.value);
              }
            }); //}
          }
        } //////////////////////
        // Backup - Restore //
        //////////////////////

        /* Example backup:
        "{"groups":[{"name":"twee","id":1,"order":0,"visible":true,"used":false},{"name":"drie","id":2,"order":1,"visible":true,"used":false},{"name":"een","id":0,"order":2,"visible":true,"used":false}],"scenes":[{"name":"Bad+Paal+Trap","trigger":{"logicalNodeAddress":0,"logicalAddress":0,"masterAddress":"","masterPort":5001,"value":true},"order":0,"units":[{"logicalNodeAddress":7,"logicalAddress":34,"masterAddress":"141.135.240.51","masterPort":5001,"value":true},{"logicalNodeAddress":7,"logicalAddress":30,"masterAddress":"141.135.240.51","masterPort":5001,"value":8},{"logicalNodeAddress":7,"logicalAddress":31,"masterAddress":"141.135.240.51","masterPort":5001,"value":10}]},{"name":"Scene Bad+Keuken","trigger":{"logicalNodeAddress":3,"logicalAddress":2,"masterAddress":"178.118.70.181","masterPort":5001,"value":1},"order":1,"units":[{"logicalNodeAddress":7,"logicalAddress":34,"masterAddress":"141.135.240.51","masterPort":5001,"value":true},{"logicalNodeAddress":7,"logicalAddress":36,"masterAddress":"141.135.240.51","masterPort":5001,"value":true}]}],"config":{"cmasters":[{"name":"Appartement","address":"141.135.240.51","port":5001,"password":"duotecno","debug":true,"regime":"0","active":false},{"name":"Smartbox 1","address":"178.118.70.181","port":5001,"password":"duotecno","debug":true,"regime":"0","active":false},{"name":"Toonzaal","address":"host.duotecno-ip.be","port":5001,"password":"#Dt2019*","debug":false,"active":false},{"name":"Peter Thuis","address":"81.83.0.10","port":5003,"password":"peter1710","debug":false,"active":false},{"name":"Smartbox Intern","address":"192.168.0.98","port":5001,"password":"duotecno","debug":false,"active":true}],"cunits":[{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":0},{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":1},{"active":"Y","group":1,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":28},{"active":"Y","group":1,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":29},{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":2},{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":3},{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":12},{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":13},{"active":"Y","group":0,"masterAddress":"192.168.0.98","masterPort":5001,"logicalNodeAddress":3,"logicalAddress":14}],"socketserver":"localhost","socketport":"5002","language":"NL","localhost":"akiworks.be","stores":true,"multiple":true,"remotescenes":false}}"
        */
        // format [9,[cmd]-[master ip address]-[type of config]:[extra data]]
        // cmd = B(ackup), R(estore), S(end scenes)
        // in data the "]" are placed by "§"

      }, {
        key: "toTransport",
        value: function toTransport(obj) {
          return JSON.stringify(obj).replace(/§/g, ' ').replace(/\]/g, '§');
        }
      }, {
        key: "fromTransport",
        value: function fromTransport(str) {
          try {
            return JSON.parse(str.replace(/§/g, ']'));
          } catch (e) {
            this.log("error in input from server: " + e);
            return {};
          }
        }
      }, {
        key: "findOpenMaster",
        value: function findOpenMaster() {
          return this.masters.find(function (m) {
            return m.isOpen;
          });
        }
      }, {
        key: "doBackup",
        value: function doBackup() {
          var master = this.findOpenMaster();

          if (master) {
            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,B-' + master.getAddress() + '-system:' + this.toTransport({
              groups: this.groups,
              scenes: this.scenes,
              config: this.config
            }) + ']');
          }
        }
      }, {
        key: "sendScenes",
        value: function sendScenes() {
          var master = this.findOpenMaster();

          if (master) {
            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,S-' + master.getAddress() + '-scenes:' + this.toTransport(this.scenes) + ']');
          }
        }
      }, {
        key: "doRequestBackup",
        value: function doRequestBackup() {
          // request restore (will come in async)
          var master = this.findOpenMaster();

          if (master) {
            this.log("requesting backup from " + master.getAddress());

            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,R-' + master.getAddress() + '-system:]');
          }
        }
      }, {
        key: "doReceiveBackup",
        value: function doReceiveBackup(type, data) {
          console.log(data);
          this.backup = this.fromTransport(data);
          this.log("received backup: groups = " + this.backup.groups.length + ", scenes: " + this.backup.scenes.length + ", masters: " + this.backup.config.cmasters.length + ", units: " + this.backup.config.cunits.length);
          console.log(data);
        }
      }, {
        key: "doRestoreBackup",
        value: function doRestoreBackup() {
          this.log("restoring backup: groups = " + this.backup.groups.length + ", scenes: " + this.backup.scenes.length + ", masters: " + this.backup.config.cmasters.length + ", units: " + this.backup.config.cunits.length);
          this.scenes = this.backup.scenes;
          this.groups = this.backup.groups;
          this.config = this.backup.config;
          this.backup = null;
        } //////////////////
        // Config stuff //
        //////////////////

      }, {
        key: "read",
        value: function read(type) {
          var fn = "config." + type;
          var config = null;

          try {
            var configStr = localStorage.getItem(fn);
            config = JSON.parse(configStr);
          } catch (err) {
            this.log("Couldn't read " + fn + " --> Creating empty config.");
          } // sanitize the config


          var temp = _types__WEBPACK_IMPORTED_MODULE_3__["Sanitizers"][type](config); // write if we created it (new intallations or new config params)


          if (!config && temp) {
            this.write(type, temp);
          }

          return temp;
        }
      }, {
        key: "write",
        value: function write(type, config) {
          var fn = "config." + type;

          try {
            config = _types__WEBPACK_IMPORTED_MODULE_3__["Sanitizers"][type](config);
            localStorage.setItem(fn, JSON.stringify(config, null, 2));
            return config;
          } catch (err) {
            this.err("Couldn't write config " + fn);
            return config;
          }
        } ///////////////////
        // System config //
        ///////////////////

      }, {
        key: "readConfig",
        value: function readConfig() {
          this.config = this.read("system");
        }
      }, {
        key: "writeConfig",
        value: function writeConfig() {
          this.write("system", this.config);
        } //////////////////
        // Group config //
        //////////////////

      }, {
        key: "readGroups",
        value: function readGroups() {
          // support pre v1.1 configs -> convert the old config into new structure
          if (this.config.cgroups && this.config.cgroups.length) {
            this.groups = this.config.cgroups.map(function (g, inx) {
              return {
                name: g,
                id: inx,
                visible: true,
                order: inx
              };
            });
            delete this.config.cgroups;
            this.writeConfig();
            this.writeGroups();
          } else {
            this.groups = this.read("groups");
          } // order the groups and reset the order indices


          this.groups.sort(function (a, b) {
            return a.order - b.order;
          });
          this.groups.forEach(function (g, i) {
            return g.order = i;
          });
        }
      }, {
        key: "writeGroups",
        value: function writeGroups() {
          this.groups = this.write("groups", this.groups);
        } //////////////////
        // Scene config //
        //////////////////

      }, {
        key: "readScenes",
        value: function readScenes() {
          this.scenes = this.read("scenes");
        }
      }, {
        key: "writeScenes",
        value: function writeScenes() {
          // delete trigger-units and scene-units before saving if they were added
          var sceneConfigs = _types__WEBPACK_IMPORTED_MODULE_3__["Sanitizers"].scenes(this.scenes);

          this.write("scenes", sceneConfigs);
        }
      }]);

      return System;
    }(_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]);

    System.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }];
    };

    System = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], System);
    /***/
  },

  /***/
  "./src/app/system/types.ts":
  /*!*********************************!*\
    !*** ./src/app/system/types.ts ***!
    \*********************************/

  /*! exports provided: kEmptyUnit, kEmptyUnitScene, kEmptyScene, kEmptyGroup, WriteError, kEmptyCommRecord, Sanitizers, ascii, char, two, hex, now, single */

  /***/
  function srcAppSystemTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kEmptyUnit", function () {
      return kEmptyUnit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kEmptyUnitScene", function () {
      return kEmptyUnitScene;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kEmptyScene", function () {
      return kEmptyScene;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kEmptyGroup", function () {
      return kEmptyGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WriteError", function () {
      return WriteError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kEmptyCommRecord", function () {
      return kEmptyCommRecord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sanitizers", function () {
      return Sanitizers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ascii", function () {
      return ascii;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "char", function () {
      return char;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "two", function () {
      return two;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hex", function () {
      return hex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "now", function () {
      return now;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "single", function () {
      return single;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _protocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./protocol */
    "./src/app/system/protocol.ts"); // Johan Coppieters.
    //
    // v1 - server version Apr 2019
    // v2 - app version
    // v3 - added scenes May 2020
    // v3.1 - brought in line with server version


    ;
    ;
    ;
    ;
    var kEmptyUnit = {
      masterAddress: "0.0.0.0",
      masterPort: 5001,
      name: "unit",
      logicalAddress: 0,
      logicalNodeAddress: 0
    };
    ;
    ;
    ;
    var kEmptyUnitScene = Object.assign({}, kEmptyUnit, {
      value: true
    });
    ;
    var kEmptyScene = {
      name: 'Scene',
      trigger: kEmptyUnitScene,
      order: 0,
      units: []
    };
    ;
    var kEmptyGroup = {
      name: 'Home',
      id: 0,
      order: 0,
      visible: true
    };
    ;
    ;
    ;
    var WriteError;

    (function (WriteError) {
      WriteError[WriteError["writeFatal"] = -1] = "writeFatal";
      WriteError[WriteError["writeError"] = 0] = "writeError";
      WriteError[WriteError["writeOK"] = 1] = "writeOK";
    })(WriteError || (WriteError = {}));

    ;
    var kEmptyCommRecord = {
      status: false,
      cmd: -1,
      message: [-1, 0, 0],
      rest: ''
    }; ////////////////
    // Sanitizers //
    ////////////////

    var Sanitizers = {
      masterConfig: function masterConfig(config) {
        if (!config) {
          config = {};
        }

        config.name = config.name || 'Smartbox';
        config.address = config.address || '';
        config.port = config.port || 0;

        if (typeof config.port === 'string') {
          config.port = parseInt(config.port);
        }

        config.password = config.password || '';
        config.debug = config.debug || false;

        if (typeof config.active === 'undefined') {
          config.active = true;
        }

        config.active = !!config.active;
        return config;
      },
      system: function system(config) {
        var _this13 = this;

        if (!config) {
          config = {};
        }

        config.language = config.language || 'EN';
        config.stores = config.stores || false;
        config.multiple = config.multiple || false;
        config.remotescenes = config.remotescenes || false;
        config.socketserver = config.socketserver || 'akiworks.be';
        config.socketport = config.socketport || 9999;
        config.cmasters = config.cmasters || [];
        delete config["cnodes"];
        config.cunits = config.cunits || [];
        config.cunits.forEach(function (u) {
          return _this13.unitConfig(u);
        }); // support old style groups, pre v1.1

        if (typeof config.cgroups != 'undefined') {
          config.cgroups = config.cgroups || ['Home'];
        }

        return config;
      },
      ////////////
      // Groups //
      group: function group(config) {
        if (!config) {
          return Object.assign({}, kEmptyGroup);
        }

        config.name = config.name || kEmptyGroup.name;

        if (typeof config.id === 'string') {
          config.id = parseInt(config.id);
        }

        config.id = config.id || kEmptyGroup.id;

        if (typeof config.order === 'string') {
          config.order = parseInt(config.order);
        }

        config.order = config.order || kEmptyGroup.order;
        config.visible = typeof config.visible === 'boolean' ? config.visible : kEmptyGroup.visible;
        return config;
      },
      groups: function groups(config) {
        var _this14 = this;

        if (!config) {
          return [this.group()];
        }

        config.forEach(function (g) {
          return _this14.group(g);
        });
        return config;
      },
      ///////////
      // Nodes //
      nodeConfig: function nodeConfig(config) {
        if (!config) {
          config = {};
        }

        config.active = config.active || 'N';
        config.masterAddress = config.masterAddress || '';
        config.masterPort = config.masterPort || 5001;
        config.logicalAddress = config.logicalAddress || 0;
        return config;
      },
      ///////////
      // Units //
      unitConfig: function unitConfig(config) {
        if (!config) {
          config = {};
        }

        this.unitDef(config);
        config.active = config.active || 'N';

        if (typeof config.group === 'string') {
          config.group = parseInt(config.group);
        }

        config.group = config.group || 0;
        return config;
      },
      unitScene: function unitScene(config) {
        // change + create new clean record for writing to config files
        if (!config) {
          config = {};
        }

        this.unitDef(config);
        if (typeof config.value === "undefined") config.value = 0;
        if (typeof config.value === "string") config.value = parseInt(config.value);
        return {
          logicalNodeAddress: config.logicalNodeAddress,
          logicalAddress: config.logicalAddress,
          masterAddress: config.masterAddress,
          masterPort: config.masterPort,
          value: config.value
        };
      },
      unitInfo: function unitInfo(info, into) {
        info.name = info.name || '';
        info.logicalReqNodeAddress = info.logicalReqNodeAddress || 0;
        info.index = info.index || -1;
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.type = info.type || _protocol__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kNoType;
        info.flags = info.flags || 0;

        if (into) {
          Object.keys(info).forEach(function (prop) {
            return into[prop] = info[prop];
          });
        }

        return info;
      },
      ////////////
      // Scenes //
      sceneConfig: function sceneConfig(config) {
        var _this15 = this;

        // don't change -> create new clean record for writing to config files
        if (!config) {
          return Object.assign({}, kEmptyScene);
        }

        var newConfig = Object.assign({}, kEmptyScene);
        newConfig.name = config.name || kEmptyScene.name;

        if (typeof config.order === 'string') {
          newConfig.order = parseInt(config.order);
        }

        newConfig.order = config.order || kEmptyScene.order;
        newConfig.trigger = this.unitScene(config.trigger);
        config.units = config.units || kEmptyScene.units;
        newConfig.units = config.units.map(function (u) {
          return _this15.unitScene(u);
        });
        return newConfig;
      },
      scenes: function scenes(config) {
        var _this16 = this;

        if (!config) {
          return [this.sceneConfig()];
        }

        config.forEach(function (s) {
          return _this16.sceneConfig(s);
        });
        return config;
      },
      ////////////////////////////////////////////
      // Data coming from the hardware or prefs //
      nodeInfo: function nodeInfo(info, into) {
        info.name = info.name || '';
        info.index = info.index || -1;
        info.logicalAddress = info.logicalAddress || 0;
        info.physicalAddress = info.physicalAddress || 0;
        info.type = info.type || _protocol__WEBPACK_IMPORTED_MODULE_1__["NodeType"].kNoNode;
        info.flags = info.flags || 0;
        info.nrUnits = info.nrUnits || 0;

        if (into) {
          Object.keys(info).forEach(function (prop) {
            return into[prop] = info[prop];
          });
        }

        return info;
      },
      unitDef: function unitDef(info, into) {
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.masterAddress = info.masterAddress || '';
        info.masterPort = info.masterPort || 5001;
        return info;
      }
    }; //////////////////////
    // Helper functions //
    //////////////////////

    function ascii(char) {
      return char.charCodeAt(0);
    }

    function char(ascii) {
      return String.fromCharCode(ascii);
    }

    function two(n) {
      return n < 10 ? '0' + n : n.toString();
    }

    function hex(n) {
      n = Math.floor(n);
      return '0x' + n.toString(16);
    }

    function now() {
      var aDate = new Date();
      return aDate.getFullYear() + '-' + two(aDate.getMonth() + 1) + '-' + two(aDate.getDate()) + ' ' + two(aDate.getHours()) + ':' + two(aDate.getMinutes()) + ':' + two(aDate.getSeconds());
    }

    function single(val) {
      return val instanceof Array ? val[0] : val;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/johan/Library/Mobile Documents/com~apple~CloudDocs/Projects/Duotecno/smartsystem/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map