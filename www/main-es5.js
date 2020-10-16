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
          console.log("radio: ", event, "groups: ", this.system.groups);
          this.system.writeGroups();
          event.preventDefault(); // close if the menu controller is open

          this.menuCtrl.close();
        }
      }, {
        key: "doCheck",
        value: function doCheck(event, group) {
          group.visible = event.detail.checked;
          console.log("check: ", event, "groups: ", this.system.groups);
          this.system.writeGroups();
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
      template: "\n    <ion-app>\n      <ion-split-pane (ionSplitPaneVisible)=\"splitter($event)\" contentId=\"main\">\n        <ion-menu contentId=\"main\">\n          <ion-header>\n            <ion-toolbar>\n              <ion-title>{{ \"Config.Groups\" |_ }}</ion-title>\n            </ion-toolbar>\n          </ion-header>\n\n          <ion-content class=\"ion-padding\">\n            <ion-list *ngIf=\"system.config.multiple\">\n              <ion-item *ngFor=\"let group of system.groups\" lines=\"none\">\n                <ion-label>\n                  {{group.name}}\n                </ion-label>\n                <ion-checkbox slot=\"start\" (ionChange)=\"doCheck($event, group)\" [checked]=\"group.visible\"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n\n            <ion-radio-group *ngIf=\"! system.config.multiple\" value=\"{{selected()}}\" (ionChange)=\"doRadio($event)\">\n              <ion-item *ngFor=\"let group of system.groups\" lines=\"none\">\n                <ion-label>\n                  {{group.name}}\n                </ion-label>\n                <ion-radio slot=\"start\" color=\"secondary\" value=\"{{group.id}}\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n            \n            <ion-button *ngIf=\"!system.isSplitted && system.config.multiple\" (click)=\"done()\">{{ \"General.Done\" |_ }}</ion-button>\n          </ion-content>\n        </ion-menu>\n\n        <ion-router-outlet id=\"main\"></ion-router-outlet>\n      </ion-split-pane>\n    </ion-app>\n  "
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


    var _ctrllist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ctrllist */
    "./src/app/core/ctrllist.ts");
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
    /* harmony import */


    var _rendering_scene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../rendering/scene */
    "./src/app/rendering/scene.ts");
    /* harmony import */


    var _ctrlheader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./ctrlheader */
    "./src/app/core/ctrlheader.ts");
    /* harmony import */


    var _rendering_media__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../rendering/media */
    "./src/app/rendering/media.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      providers: [_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _temp_pipe__WEBPACK_IMPORTED_MODULE_7__["TemperaturPipe"]],
      declarations: [_ctrllist__WEBPACK_IMPORTED_MODULE_5__["CtrlList"], _ctrlheader__WEBPACK_IMPORTED_MODULE_14__["CtrlHeader"], _translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _temp_pipe__WEBPACK_IMPORTED_MODULE_7__["TemperaturPipe"], _rendering_dimmer__WEBPACK_IMPORTED_MODULE_8__["DimmerControl"], _rendering_updown__WEBPACK_IMPORTED_MODULE_9__["UpDownControl"], _rendering_switch__WEBPACK_IMPORTED_MODULE_10__["SwitchControl"], _rendering_temperature__WEBPACK_IMPORTED_MODULE_12__["TemperatureControl"], _rendering_mood__WEBPACK_IMPORTED_MODULE_11__["MoodControl"], _rendering_scene__WEBPACK_IMPORTED_MODULE_13__["SceneControl"], _rendering_media__WEBPACK_IMPORTED_MODULE_15__["MediaControl"]],
      exports: [_ctrllist__WEBPACK_IMPORTED_MODULE_5__["CtrlList"], _ctrlheader__WEBPACK_IMPORTED_MODULE_14__["CtrlHeader"], _translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _temp_pipe__WEBPACK_IMPORTED_MODULE_7__["TemperaturPipe"], _rendering_dimmer__WEBPACK_IMPORTED_MODULE_8__["DimmerControl"], _rendering_updown__WEBPACK_IMPORTED_MODULE_9__["UpDownControl"], _rendering_switch__WEBPACK_IMPORTED_MODULE_10__["SwitchControl"], _rendering_temperature__WEBPACK_IMPORTED_MODULE_12__["TemperatureControl"], _rendering_mood__WEBPACK_IMPORTED_MODULE_11__["MoodControl"], _rendering_scene__WEBPACK_IMPORTED_MODULE_13__["SceneControl"], _rendering_media__WEBPACK_IMPORTED_MODULE_15__["MediaControl"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/ctrlheader.ts":
  /*!************************************!*\
    !*** ./src/app/core/ctrlheader.ts ***!
    \************************************/

  /*! exports provided: CtrlHeader */

  /***/
  function srcAppCoreCtrlheaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlHeader", function () {
      return CtrlHeader;
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


    var _ctrllist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ctrllist */
    "./src/app/core/ctrllist.ts");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CtrlHeader =
    /*#__PURE__*/
    function () {
      function CtrlHeader(system, routes) {
        _classCallCheck(this, CtrlHeader);

        this.system = system;
        this.routes = routes;
      }

      _createClass(CtrlHeader, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.stdPage.refreshServices();
        }
      }, {
        key: "goConfig",
        value: function goConfig() {
          this.routes.navigateByUrl("/tabs/config");
        }
      }]);

      return CtrlHeader;
    }();

    CtrlHeader.ctorParameters = function () {
      return [{
        type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ctrllist__WEBPACK_IMPORTED_MODULE_2__["CtrlList"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ctrllist__WEBPACK_IMPORTED_MODULE_2__["CtrlList"])], CtrlHeader.prototype, "stdPage", void 0);
    CtrlHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ctrl-header',
      inputs: ['title'],
      template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-menu-toggle slot=\"start\">\n        <img src=\"/assets/icon/duotecno.png\" />\n        <ion-icon name=\"{{ system.isSplitted ? '' : 'menu'}}\"></ion-icon>\n      </ion-menu-toggle>\n\n      <ion-title>{{ title }}</ion-title>\n\n      <ion-buttons slot=\"end\" class=\"config-adder\">\n        <ion-button (click)=\"goConfig()\">\n          <ion-icon name=\"settings-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n  </ion-header>"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_3__["System"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], CtrlHeader);
    /***/
  },

  /***/
  "./src/app/core/ctrllist.ts":
  /*!**********************************!*\
    !*** ./src/app/core/ctrllist.ts ***!
    \**********************************/

  /*! exports provided: CtrlList */

  /***/
  function srcAppCoreCtrllistTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlList", function () {
      return CtrlList;
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

    var CtrlList =
    /*#__PURE__*/
    function () {
      function CtrlList(system) {
        _classCallCheck(this, CtrlList);

        this.system = system;
        this.showUpDowns = true;
      }

      _createClass(CtrlList, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.system.emitter.on('refresh', this.refreshServices.bind(this));
          console.log("ngOnInit - StdPage: " + this.services);
        }
      }, {
        key: "refreshServices",
        value: function refreshServices(event) {
          var services = this.system[this.services];
          console.log('stdPage.refreshServices: ' + this.services + " = " + services.length + ' services');
          console.log('stdPage.refreshServices: #scenes = ' + this.system.scenes.length); // request the status of all (real) units used on this page

          if (this.services != "scenes") services.forEach(function (u) {
            return u.reqState();
          }); // see if a group is used, either in a service or in a custom-scene when on the moods page
          // this.system.groups.forEach((g: GroupConfig) => g.used = 
          //   services.some(u => u.group == g.id) || 
          //     ((this.services == "mood") && this.system.scenes.some(s => s.group == g.id))
          // );
        }
      }, {
        key: "used",
        value: function used(group) {
          return !!this.system[this.services].find(function (u) {
            return u.group == group.id || u.group == -1;
          }) || this.services == "moods" && !!this.system.scenes.find(function (s) {
            return s.group == group.id || s.group == -1;
          });
        }
      }, {
        key: "toggle",
        value: function toggle(event, inx) {
          this.system.groups[inx].visible = !this.system.groups[inx].visible;

          if (!this.system.config.multiple) {
            var now = !this.system.groups[inx].visible;
            this.system.groups.forEach(function (g, i) {
              if (i != inx) g.visible = now;
            });
          }

          event.preventDefault();
        }
      }]);

      return CtrlList;
    }();

    CtrlList.ctorParameters = function () {
      return [{
        type: _system_system__WEBPACK_IMPORTED_MODULE_1__["System"]
      }];
    };

    CtrlList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ctrl-list',
      // services= "moods", "stores", "controls", "media", ...
      inputs: ['services', 'showUpDowns'],
      template: "\n    <ion-list *ngIf=\"system.masters.length > 0\">\n      <ion-item-group *ngFor=\"let group of system.groups; let inx = index\">\n        <ion-list-header *ngIf=\"used(group) && (group.visible || system.config.multiple)\">\n          <ion-label (click)=\"toggle($event, inx)\">{{group.name}}</ion-label>\n          <ion-icon *ngIf=\"(! system.isSplitted) && system.config.multiple\" [class.list-open]=\"group.visible\" \n                    (click)=\"toggle($event, inx)\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-list-header>\n\n        <ng-container *ngIf=\"group.visible\">\n          <!-- add our own scenes to the app -->\n          <ng-container *ngIf=\"services == 'moods'\">\n            <ng-container *ngFor=\"let scene of system.scenes\">\n              <scene [scene]=\"scene\" *ngIf=\"((scene.group == group.id) || (scene.group == -1))\"></scene>\n            </ng-container>\n          </ng-container>\n\n          <ng-container *ngFor=\"let service of system[services]\">\n            <dimmer      [service]=\"service\" *ngIf=\"((service.group == group.id) || (service.group == -1)) \n                                                    && service.isDimmer()\"></dimmer>\n            <updown      [service]=\"service\" *ngIf=\"((service.group == group.id) || (service.group == -1))\n                                                    && showUpDowns && service.isUpDown()\"></updown>\n            <switch      [service]=\"service\" *ngIf=\"((service.group == group.id) || (service.group == -1)) \n                                                    && service.isSwitch()\"></switch>\n            <mood        [service]=\"service\" *ngIf=\"((service.group == group.id) || (service.group == -1)) \n                                                    && (service.isMood() || service.isInput())\"></mood>\n            <temperature [service]=\"service\" *ngIf=\"((service.group == group.id) || (service.group == -1)) \n                                                    && service.isTemperature()\"></temperature>\n            <media       [service]=\"service\" *ngIf=\"((service.group == group.id) || (service.group == -1)) \n                                                    && service.isMedia()\"></media>\n\n          </ng-container>\n        </ng-container>\n      </ion-item-group>\n    </ion-list>\n\n    <div *ngIf=\"system.masters.length <= 0\" class=\"noMaster\">\n      <h1>No masters yet?</h1>\n      <p>Go to \"Configure\" (top right icon) -> \"Masters\"<br>\n        Add a master by clicking on the \"+ Master\"<br>\n        Fill out the parameters.<br>\n        <br>\n        Once your first Node or Smartbox is visible<br>\n        Click on it and select the units you want to use.<br>\n        <br>\n        Later you can split the units (switches, temperature, dimmers, scenes, ...) in multiple sections by first adding more groups.<br>\n        <br>\n        Download the <a href=\"https://www.duotecno.be/wp-content/uploads/2020/05/Duotecno-smartbox-app-1.pdf\">manual</a>.\n      </p>\n    </div>\n"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_1__["System"]])], CtrlList);
    /***/
  },

  /***/
  "./src/app/core/stdUX.ts":
  /*!*******************************!*\
    !*** ./src/app/core/stdUX.ts ***!
    \*******************************/

  /*! exports provided: doAlert, doAsk, doModal, doToast */

  /***/
  function srcAppCoreStdUXTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "doAlert", function () {
      return doAlert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "doAsk", function () {
      return doAsk;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "doModal", function () {
      return doModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "doToast", function () {
      return doToast;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function doAlert(alertCtrl, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var buttons, alert;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!options) options = {};
                  if (!options.buttons) options.buttons = [{
                    text: "OK",
                    id: "OK"
                  }];
                  buttons = options.buttons.map(function (b) {
                    return {
                      text: b.text,
                      handler: function handler() {
                        return resolve(b.id);
                      }
                    };
                  });
                  _context.next = 5;
                  return alertCtrl.create({
                    header: 'Duotecno',
                    subHeader: options.title,
                    message: options.message,
                    buttons: buttons
                  });

                case 5:
                  alert = _context.sent;
                  _context.next = 8;
                  return alert.present();

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      });
    }

    function doAsk(alertCtrl, options) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var buttons, alert;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!options) options = {};
                  if (!options.buttons) options.buttons = [{
                    text: "OK",
                    id: "OK"
                  }];
                  buttons = options.buttons.map(function (b) {
                    return {
                      text: b.text,
                      handler: function handler(data) {
                        b.handler && b.handler(data);
                        resolve(data);
                      }
                    };
                  });
                  _context2.next = 5;
                  return alertCtrl.create({
                    header: 'Duotecno',
                    subHeader: options.title,
                    message: options.message,
                    buttons: buttons,
                    inputs: options.inputs
                  });

                case 5:
                  alert = _context2.sent;
                  _context2.next = 8;
                  return alert.present();

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
      });
    }

    function doModal(modalCtl, modalComponent, options) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var modal, _ref, data;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return modalCtl.create({
                  component: modalComponent,
                  componentProps: options
                });

              case 2:
                modal = _context3.sent;
                _context3.next = 5;
                return modal.present();

              case 5:
                _context3.next = 7;
                return modal.onDidDismiss();

              case 7:
                _ref = _context3.sent;
                data = _ref.data;
                return _context3.abrupt("return", data || {});

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }

    function doToast(toastCtl, message) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 800;
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var toast;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return toastCtl.create({
                  message: message,
                  duration: duration,
                  position: 'top'
                });

              case 2:
                toast = _context4.sent;
                toast.present();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }
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
        'Page.Media': 'Media',
        'Media.Off': 'Uit',
        'Page.Config': 'Configureer',
        'Config.Masters': 'Masters',
        'Config.Master': 'Master',
        'Config.Week': 'Week',
        'Config.Holiday': 'Vakantie',
        'Config.NoScheduleSelected': 'Geen plan geselecteerd',
        'Config.GetAudioRooms': 'Lees Audio Rooms',
        'Config.Scenes': 'Scenes',
        'Config.Scenes.scene': 'Scene',
        'Config.Scenes.group': 'Groep',
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
        'Config.GroupsAll': 'Alle groepen',
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
        'Config.Backup.name': 'Naam',
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
        'Page.Media': 'Media',
        'Media.Off': 'Off',
        'Page.Config': 'Configurer',
        'Config.Masters': 'Masters',
        'Config.Master': 'Master',
        'Config.Week': 'Semaine',
        'Config.Holiday': 'Vacances',
        'Config.NoScheduleSelected': 'Aucun plan sélectionné',
        'Config.GetAudioRooms': 'Lire Audio Rooms',
        'Config.Scenes': 'Scènes',
        'Config.Scenes.scene': 'Scènes',
        'Config.Scenes.for': 'Configuration pour',
        'Config.Scenes.group': 'Group',
        'Config.Scenes.triggeredBy': 'Appellé par',
        'Config.Scenes.trigger': 'Trigger',
        'Config.Scenes.selectTriggerFor': 'Trigger pour',
        'Config.Scenes.name': 'Nom Scène',
        'scene.trigger.off': 'Off',
        'scene.trigger.on': 'On',
        'scene.trigger.long': 'Longue',
        'Config.Units': 'Unité',
        'Config.Groups': 'Groups',
        'Config.Group': 'Group',
        'Config.GroupsAll': 'Tous les groupes',
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
        'Config.Backup.name': 'Nom',
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
        'Page.Media': 'Media',
        'Media.Off': 'Off',
        'Page.Config': 'Configure',
        'Config.Masters': 'Masters',
        'Config.Master': 'Master',
        'Config.Week': 'Week',
        'Config.Holiday': 'Holiday',
        'Config.NoScheduleSelected': 'No schedule selected',
        'Config.GetAudioRooms': 'Get Audio Rooms',
        'Config.Groups': 'Groups',
        'Config.Group': 'Group',
        'Config.GroupsAll': 'All groups',
        'Config.Scenes': 'Scenes',
        'Config.Scenes.scene': 'Scene',
        'Config.Scenes.for': 'Settings for',
        'Config.Scenes.group': 'Group',
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
        'Config.Backup.name': 'Name',
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

        this.showSlider = false;
      }

      _createClass(DimmerControl, [{
        key: "arrow",
        value: function arrow() {
          return this.showSlider ? 'chevron-up' : 'chevron-down';
        }
      }, {
        key: "labelClick",
        value: function labelClick() {
          this.showSlider = !this.showSlider;
        }
      }, {
        key: "change",
        value: function change() {
          if (this.service.status == 2) {// don't do anything on timed PIR status
          } else {
            this.service.setState(!!this.service.status); // make boolean
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
      template: "\n    <ion-item lines=\"none\" class=\"dimmer\">\n      <ion-label tappable (click)=\"labelClick()\">{{service.getName()}}\n        <ion-icon [name]=\"arrow()\" class=\"dimmer__chevron\"></ion-icon>\n        <span class=\"dimmer__value\">{{service.value}}%</span>\n        <ion-icon class=\"state\" *ngIf=\"service.status == 2\" name=\"time\"></ion-icon>\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"service.status\" (ionChange)=\"change()\"></ion-toggle>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"dimmer__slider\" *ngIf=\"showSlider\">\n      <ion-range min=\"1\" max=\"100\" debounce=\"400\" [(ngModel)]=\"service.value\" (ionChange)=\"changeValue()\">\n        <ion-icon slot=\"start\" name=\"remove\" (click)=\"changeValue(-5)\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"add\" (click)=\"changeValue(5)\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dimmer.scss */
      "./src/app/rendering/dimmer.scss")).default]
    })], DimmerControl);
    /***/
  },

  /***/
  "./src/app/rendering/media.scss":
  /*!**************************************!*\
    !*** ./src/app/rendering/media.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppRenderingMediaScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".media {\n  position: relative;\n  z-index: 2; }\n  .media ion-label {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  .media__chevron {\n  margin-left: auto;\n  margin-right: 5px; }\n  .volume__value {\n  font-size: 0.8rem;\n  width: 27px;\n  text-align: right; }\n  ion-range {\n  --bar-background: #fff;\n  --knob-size: 24px;\n  --knob-background: #fff; }\n  ion-range ion-icon {\n    color: var(--ion-color-primary-contrast); }\n  .dark {\n  --background: var(--ion-color-dark);\n  background-color: var(--ion-color-dark);\n  --border-radius: 0;\n  position: relative;\n  z-index: 1;\n  margin-top: -22px;\n  border-bottom-left-radius: var(--duotecno-border-radius);\n  border-bottom-right-radius: var(--duotecno-border-radius); }\n  .volume__slider ion-range {\n  margin-top: 10px;\n  padding-left: 0;\n  padding-right: 0; }\n  .choices {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: white; }\n  .choices ion-select {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    margin: 0 0 0 -10px;\n    max-width: inherit;\n    font-size: 13px; }\n  .choices ion-icon.desticon {\n    margin: 0 0 4px 0; }\n  .choices ion-icon {\n    color: var(--ion-color-primary-contrast); }\n  .choices .source {\n    max-width: inherit; }\n  .choices .source ion-icon {\n      font-size: 24px;\n      margin-bottom: -5px;\n      margin-left: 0; }\n  .choices .source ion-select {\n      margin-right: 0; }\n  ion-item.first {\n  padding-top: 20px; }\n  .basic span {\n  height: 64px; }\n  .basic ion-buttons {\n  margin-left: 0; }\n  .basic ion-buttons ion-icon {\n    margin-top: 0px;\n    font-size: 35px !important; }\n  .basic ion-buttons ion-icon:first-child {\n    margin-right: 25px; }\n  .basic ion-select {\n  color: var(--ion-color-primary-contrast);\n  margin-top: 15px; }\n  .player ion-buttons {\n  padding: 0 0 0 3px !important; }\n  .player ion-buttons ion-icon {\n    font-size: 24px !important; }\n  .controls ion-buttons {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding: 0; }\n  .controls ion-buttons ion-icon {\n    font-size: 36px;\n    color: var(--ion-color-primary-contrast); }\n  .controls ion-buttons ion-icon.toggle {\n    color: var(--ion-color-primary); }\n  .controls ion-buttons ion-icon.side {\n    width: 22px !important;\n    min-width: 22px !important; }\n  .controls ion-buttons.keypad {\n  max-width: 320px; }\n  .controls ion-buttons.keypad ion-button {\n    color: white;\n    border: 1px solid white;\n    padding: 0px;\n    width: 70px;\n    border-radius: 8px; }\n  .controls ion-buttons.keypad span {\n    width: 73px; }\n  .controls ion-buttons.noborder {\n  max-width: 320px; }\n  .controls ion-buttons.noborder ion-button {\n    border: none !important; }\n  @media (prefers-color-scheme: dark) {\n  .dark {\n    --background: var(--ion-color-step-150);\n    background-color: var(--ion-color-step-150); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3JlbmRlcmluZy9tZWRpYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUZaO0lBS0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0VBRW5CO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTtFQUVuQjtFQUNFLHNCQUFpQjtFQUNqQixpQkFBWTtFQUNaLHVCQUFrQixFQUFBO0VBSHBCO0lBTUksd0NBQXdDLEVBQUE7RUFHNUM7RUFDRSxtQ0FBYTtFQUNiLHVDQUF1QztFQUN2QyxrQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsd0RBQXdEO0VBQ3hELHlEQUF5RCxFQUFBO0VBRTNEO0VBRUksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFBRSxnQkFBZ0IsRUFBQTtFQUlyQztFQUNFLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBO0VBRmQ7SUFLSSwyQkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBUm5CO0lBV0ksaUJBQWlCLEVBQUE7RUFYckI7SUFjSSx3Q0FBd0MsRUFBQTtFQWQ1QztJQWtCSSxrQkFBa0IsRUFBQTtFQWxCdEI7TUFvQk0sZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixjQUFjLEVBQUE7RUF0QnBCO01BeUJNLGVBQ0YsRUFBQTtFQUlKO0VBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7RUFFSSxZQUFZLEVBQUE7RUFGaEI7RUFLSSxjQUFjLEVBQUE7RUFMbEI7SUFPTSxlQUFlO0lBQ2YsMEJBQTBCLEVBQUE7RUFSaEM7SUFXTSxrQkFBa0IsRUFBQTtFQVh4QjtFQWVJLHdDQUF3QztFQUN4QyxnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLDZCQUE2QixFQUFBO0VBRC9CO0lBR0ksMEJBQTBCLEVBQUE7RUFJOUI7RUFFSSx5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxVQUFVLEVBQUE7RUFKZDtJQU1NLGVBQWU7SUFDZix3Q0FBd0MsRUFBQTtFQVA5QztJQVVNLCtCQUErQixFQUFBO0VBVnJDO0lBYU0sc0JBQXNCO0lBQ3RCLDBCQUEwQixFQUFBO0VBZGhDO0VBbUJJLGdCQUFnQixFQUFBO0VBbkJwQjtJQXNCTSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUExQnhCO0lBOEJNLFdBQVcsRUFBQTtFQTlCakI7RUFrQ0ksZ0JBQWdCLEVBQUE7RUFsQ3BCO0lBcUNNLHVCQUNGLEVBQUE7RUFJSjtFQUNJO0lBQ0ksdUNBQWE7SUFDYiwyQ0FBMkMsRUFBQSxFQUM5QyIsImZpbGUiOiJzcmMvYXBwL3JlbmRlcmluZy9tZWRpYS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZGlhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4ubWVkaWFfX2NoZXZyb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udm9sdW1lX192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aWR0aDogMjdweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5pb24tcmFuZ2Uge1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWtub2Itc2l6ZTogMjRweDtcbiAgLS1rbm9iLWJhY2tncm91bmQ6ICNmZmY7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIH1cbn1cbi5kYXJrIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1kdW90ZWNuby1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWR1b3RlY25vLWJvcmRlci1yYWRpdXMpO1xufVxuLnZvbHVtZV9fc2xpZGVyIHtcbiAgaW9uLXJhbmdlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMDsgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4uY2hvaWNlcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGlvbi1zZWxlY3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbjogMCAwIDAgLTEwcHg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBpb24taWNvbi5kZXN0aWNvbiB7XG4gICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIH1cblxuICAuc291cmNlIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMFxuICAgIH1cbiAgfVxufVxuXG5pb24taXRlbS5maXJzdCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uYmFzaWMge1xuICBzcGFuIHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gIH1cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taWNvbjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG4gIGlvbi1zZWxlY3Qge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxufVxuXG4ucGxheWVyIGlvbi1idXR0b25zIHsgXG4gIHBhZGRpbmc6IDAgMCAwIDNweCAhaW1wb3J0YW50O1xuICBpb24taWNvbntcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29udHJvbHMge1xuICBpb24tYnV0dG9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICB9XG4gICAgaW9uLWljb24udG9nZ2xlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbiAgICB9XG4gICAgaW9uLWljb24uc2lkZSB7XG4gICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbnMua2V5cGFkIHtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgd2lkdGg6IDczcHg7XG4gICAgfVxuICB9XG4gIGlvbi1idXR0b25zLm5vYm9yZGVyIHtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudFxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgLmRhcmsge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/rendering/media.ts":
  /*!************************************!*\
    !*** ./src/app/rendering/media.ts ***!
    \************************************/

  /*! exports provided: MediaControl */

  /***/
  function srcAppRenderingMediaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaControl", function () {
      return MediaControl;
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


    var _core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../system/types */
    "./src/app/system/types.ts");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../system/system */
    "./src/app/system/system.ts");

    var MediaControl =
    /*#__PURE__*/
    function () {
      function MediaControl(toastCtrl, alertCtrl, system) {
        _classCallCheck(this, MediaControl);

        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.showSlider = false;
        this.clicked = false;
        this.keypad = false;
      }

      _createClass(MediaControl, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          console.log("ngOnInit -> checking up on input service -> ", this.service); // set a destination if no selected

          if (!this.service.destination && this.service.destinations) {
            this.service.destination = this.service.destinations.find(function (d) {
              return d.id == _this4.service.destinationId;
            });
          }

          if (!this.service.destination && this.service.destinations.length > 0) {
            this.service.destinationId = this.service.destinations[0].id;
            this.service.destination = this.service.destinations[0];
          } // see if a source if selected (even if 255 == "off")


          if (this.service.destination) {
            this.service.destinationId = this.service.destination.id;
          } else {
            //doAlert(this.alertCtrl, {title: "audio troubles", 
            //  message: "The unit " + this.service.displayName + " (" + this.service.getNumber() + ") has no destinations"
            //});
            console.log("****  The unit " + this.service.displayName + " (" + this.service.getNumber() + ") has no destinations");
          }
        }
      }, {
        key: "basic",
        value: function basic() {
          return this.service.type === _system_types__WEBPACK_IMPORTED_MODULE_4__["UnitType"].kAudio;
        }
      }, {
        key: "arrow",
        value: function arrow() {
          return this.showSlider ? 'chevron-up' : 'chevron-down';
        }
      }, {
        key: "labelClick",
        value: function labelClick() {
          this.showSlider = !this.showSlider;
        }
      }, {
        key: "click",
        value: function click() {
          var _this5 = this;

          // guard for not having ionChange trigger when status changes come in 
          this.clicked = true;
          setTimeout(function () {
            return _this5.clicked = false;
          }, 1000);
        }
      }, {
        key: "onoff",
        value: function onoff() {
          if (this.clicked) this.service.setState(!!this.service.status); // make boolean
        }
      }, {
        key: "updown",
        value: function updown(_updown) {
          var _this6 = this;

          Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doToast"])(this.toastCtrl, _updown ? "Volume up" : "Volume down");
          this.service.setState(_updown ? -2 : -1); // stop the volume change for basic audio devices

          if (this.basic()) {
            setTimeout(function () {
              return _this6.service.setState(true);
            }, 300);
          }
        }
      }, {
        key: "change",
        value: function change() {
          if (this.clicked) {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doToast"])(this.toastCtrl, "change volume " + this.service.value);
            this.service.setState(this.service.value);
          }
        }
      }, {
        key: "changeDest",
        value: function changeDest() {
          if (this.service.destination.source == 255) this.service.setState(false);else this.service.audioSrcDest(this.service.destination.source, this.service.destinationId);
        }
      }, {
        key: "changeSrc",
        value: function changeSrc() {
          if (this.service.destination.source == 255) this.service.setState(false);else this.service.audioSrcDest(this.service.destination.source, this.service.destinationId);
        }
      }, {
        key: "action",
        value: function action(_action) {
          this.service.audioAction(_action);
        }
      }, {
        key: "toggleKeypad",
        value: function toggleKeypad() {
          this.keypad = !this.keypad;
        }
      }, {
        key: "actionKeypad",
        value: function actionKeypad(action) {
          this.service.audioAction("function", action);
        }
      }, {
        key: "same",
        value: function same(a, b) {
          return a * 1 == b * 1;
        }
      }]);

      return MediaControl;
    }();

    MediaControl.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_5__["System"]
      }];
    };

    MediaControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'media',
      inputs: ['service'],
      template: "\n    <ion-item lines=\"none\" class=\"media\" *ngIf=\"service.destinations.length\">\n      <ion-label tappable (click)=\"labelClick()\">{{service.getName()}}\n        <ion-icon [name]=\"arrow()\" class=\"media__chevron\"></ion-icon>\n        <span class=\"volume__value\">{{service.value}}%</span>\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"service.status\" (ionChange)=\"onoff()\" (click)=\"click()\"></ion-toggle>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"dark volume__slider\" *ngIf=\"showSlider && ! basic()\">\n      <ion-range min=\"1\" max=\"100\" debounce=\"400\" [(ngModel)]=\"service.value\" \n                 (ionChange)=\"change()\" (click)=\"click()\">\n        <ion-icon slot=\"start\" name=\"remove\" (click)=\"updown(false)\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"add\" (click)=\"updown(true)\"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"dark choices\" *ngIf=\"showSlider && ! basic()\">\n      <span class=\"source\">\n        <ion-icon name=\"musical-notes\" slot=\"start\"></ion-icon>\n        <ion-select [(ngModel)]=\"service.destination.source\" interface=\"popover\" slot=\"start\"\n                    [compareWith]=\"same\" (ionChange)=\"changeSrc()\">\n          <ion-select-option value=\"255\">{{\"Media.Off\" |_ }}</ion-select-option>\n          <ion-select-option *ngFor=\"let src of service.destination.sources\" value=\"{{src.id}}\">{{src.name}}</ion-select-option>\n        </ion-select>\n      </span>\n      <ion-icon slot=\"end\" name=\"volume-medium\" *ngIf=\"(service.destinations.length > 1)\" class=\"desticon\"></ion-icon>\n      <ion-select [(ngModel)]=\"service.destinationId\" interface=\"popover\" slot=\"end\"\n                  [compareWith]=\"same\" (ionChange)=\"changeDest()\" class=\"destination\"\n                  *ngIf=\"(service.destinations.length > 1)\">\n        <ion-select-option *ngFor=\"let dest of service.destinations\" value=\"{{dest.id}}\">{{dest.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"dark choices basic\" *ngIf=\"showSlider && basic()\">\n      <span class=\"source\">\n        <ion-icon name=\"musical-notes\" slot=\"start\"></ion-icon>\n        <ion-select [(ngModel)]=\"service.destination.source\" interface=\"popover\" slot=\"start\"\n                    [compareWith]=\"same\" (ionChange)=\"changeSrc()\">\n          <ion-select-option value=\"255\">{{\"Media.Off\" |_ }}</ion-select-option>\n          <ion-select-option *ngFor=\"let src of service.destination.sources\" value=\"{{src.id}}\">{{src.name}}</ion-select-option>\n        </ion-select>\n      </span>\n      <ion-buttons slot=\"end\" >\n        <ion-icon *ngIf=\"basic()\" name=\"remove-circle\" (click)=\"updown(false)\"></ion-icon>\n        <ion-icon *ngIf=\"basic()\" name=\"add-circle\" (click)=\"updown(true)\"></ion-icon>\n      </ion-buttons>\n    </ion-item>\n\n\n    <ion-item lines=\"none\" class=\"dark controls player\" *ngIf=\"showSlider\">\n      <ion-buttons>\n        <ion-icon name=\"play-back\" (click)=\"action('back')\"></ion-icon>\n        <ion-icon name=\"play\" (click)=\"action('play')\"></ion-icon>\n        <ion-icon name=\"stop\" (click)=\"action('stop')\"></ion-icon>\n        <ion-icon name=\"pause\" (click)=\"action('pause')\"></ion-icon>\n        <ion-icon name=\"play-forward\" (click)=\"action('forward')\"></ion-icon>\n        <ion-icon name=\"keypad\" (click)=\"toggleKeypad()\" class=\"toggle\"></ion-icon>\n      </ion-buttons>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"dark controls first\" *ngIf=\"showSlider && keypad\">\n      <ion-buttons class=\"keypad\">\n        <ion-button (click)=\"actionKeypad('1')\">1</ion-button>\n        <ion-button (click)=\"actionKeypad('2')\">2</ion-button>\n        <ion-button (click)=\"actionKeypad('3')\">3</ion-button>\n        <span></span>\n        <ion-icon name=\"caret-up-circle\" (click)=\"action('skipforward')\" class=\"side\"></ion-icon>\n      </ion-buttons>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"dark controls\" *ngIf=\"showSlider && keypad\">\n        <ion-buttons class=\"keypad\">\n          <ion-button (click)=\"actionKeypad('4')\">4</ion-button>\n          <ion-button (click)=\"actionKeypad('5')\">5</ion-button>\n          <ion-button (click)=\"actionKeypad('6')\">6</ion-button>\n          <span></span>\n          <ion-icon name=\"caret-down-circle\" (click)=\"action('skipback')\" class=\"side\"></ion-icon>\n        </ion-buttons>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"dark controls\" *ngIf=\"showSlider && keypad\">\n        <ion-buttons class=\"keypad\">\n          <ion-button (click)=\"actionKeypad('7')\">7</ion-button>\n          <ion-button (click)=\"actionKeypad('8')\">8</ion-button>\n          <ion-button (click)=\"actionKeypad('9')\">9</ion-button>\n          <span></span>\n          <ion-icon class=\"side\"></ion-icon>\n        </ion-buttons>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"dark controls\" *ngIf=\"showSlider && keypad\">\n        <ion-buttons class=\"keypad\">\n          <ion-button (click)=\"actionKeypad('-')\">./..</ion-button>\n          <ion-button (click)=\"actionKeypad('0')\">0</ion-button>\n          <span></span>\n          <span></span>\n          <ion-icon name=\"menu\" (click)=\"action('menu')\" class=\"side\"></ion-icon>\n        </ion-buttons>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"dark controls\" *ngIf=\"showSlider && keypad\">\n        <ion-buttons class=\"keypad noborder\">\n          <span></span>\n          <ion-button (click)=\"actionKeypad('up')\"><ion-icon name=\"caret-up\"></ion-icon></ion-button>\n          <span></span>\n          <span></span>\n          <ion-icon name=\"reader\" (click)=\"action('guide')\" class=\"side\"></ion-icon>\n        </ion-buttons>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"dark controls\" *ngIf=\"showSlider && keypad\">\n        <ion-buttons class=\"keypad noborder\">\n          <ion-button (click)=\"actionKeypad('left')\"><ion-icon name=\"caret-back\"></ion-icon></ion-button>\n          <ion-button (click)=\"actionKeypad('enter')\">OK</ion-button>\n          <ion-button (click)=\"actionKeypad('right')\"><ion-icon name=\"caret-forward\"></ion-icon></ion-button>\n          <span></span>\n          <ion-icon name=\"information-circle\" (click)=\"action('info')\" class=\"side\"></ion-icon>\n        </ion-buttons>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"dark controls\" *ngIf=\"showSlider && keypad\">\n        <ion-buttons class=\"keypad noborder\">\n          <span></span>\n          <ion-button (click)=\"actionKeypad('down')\"><ion-icon name=\"caret-down\"></ion-icon></ion-button>\n          <span></span>\n          <span></span>\n          <ion-icon name=\"exit\" (click)=\"action('exit')\" class=\"side\"></ion-icon>\n        </ion-buttons>\n    </ion-item>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./media.scss */
      "./src/app/rendering/media.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _system_system__WEBPACK_IMPORTED_MODULE_5__["System"]])], MediaControl);
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
    /* harmony import */


    var _core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/stdUX */
    "./src/app/core/stdUX.ts");

    var MoodControl =
    /*#__PURE__*/
    function () {
      function MoodControl(toastCtrl) {
        _classCallCheck(this, MoodControl);

        this.toastCtrl = toastCtrl;
        this.pressed = 0;
      }

      _createClass(MoodControl, [{
        key: "moodColor",
        value: function moodColor() {
          return this.service.status ? 'primary' : this.service.isInput() ? 'warning' : 'medium';
        }
      }, {
        key: "down",
        value: function down(ev) {
          var _this7 = this;

          ev.preventDefault(); // send long event after 1Sec

          this.pressed = setTimeout(function () {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doToast"])(_this7.toastCtrl, _this7.service.name + ' - long on');

            _this7.service.setState(1);

            _this7.pressed = -1;
          }, 1000);
        }
      }, {
        key: "up",
        value: function up(ev) {
          ev.preventDefault();

          if (this.pressed === -1) {
            // we've already send a long "on"
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doToast"])(this.toastCtrl, this.service.name + ' - long off');
            this.service.setState(0);
          } else if (this.pressed) {
            // stop timer for long and send short
            clearTimeout(this.pressed);
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doToast"])(this.toastCtrl, this.service.name + ' - short');
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
      template: "\n    <ion-item lines=\"none\">\n      <ion-label>{{service.getName()}}</ion-label>\n      <ion-button slot=\"end\" shape=\"round\" [color]=\"moodColor()\"\n              (mousedown)=\"down($event)\" (mouseup)=\"up($event)\"\n              (touchstart)=\"down($event)\" (touchend)=\"up($event)\"></ion-button>\n    </ion-item>\n  ",
      styles: ["ion-button { width: 25px; height: 25px }"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], MoodControl);
    /***/
  },

  /***/
  "./src/app/rendering/scene.ts":
  /*!************************************!*\
    !*** ./src/app/rendering/scene.ts ***!
    \************************************/

  /*! exports provided: SceneControl */

  /***/
  function srcAppRenderingSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SceneControl", function () {
      return SceneControl;
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


    var _core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _system_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../system/system */
    "./src/app/system/system.ts");

    var SceneControl =
    /*#__PURE__*/
    function () {
      function SceneControl(toastCtrl, system) {
        _classCallCheck(this, SceneControl);

        this.toastCtrl = toastCtrl;
        this.system = system;
        this.pressed = 0;
      } // we could add a long/short click, where the long click would mean: edit the scene


      _createClass(SceneControl, [{
        key: "click",
        value: function click() {
          var _this8 = this;

          Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doToast"])(this.toastCtrl, this.scene.name + ": " + this.scene.units.map(function (u) {
            return u.name;
          }).join(", "));
          this.scene.units.forEach(function (unitDef) {
            var unit = _this8.system.findUnit(unitDef.masterAddress, unitDef.masterPort, unitDef.logicalNodeAddress, unitDef.logicalAddress); //console.log(" -> calling " + unitDef.name + " (" + ((unit) ? "found" : "not-found") + ") <- " + unitDef.value);


            if (unit) unit.setState(unitDef.value);
          });
        }
      }]);

      return SceneControl;
    }();

    SceneControl.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_4__["System"]
      }];
    };

    SceneControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scene',
      inputs: ['scene'],
      template: "\n    <ion-item lines=\"none\">\n      <ion-label>{{scene.name}}</ion-label>\n      <ion-button slot=\"end\" shape=\"round\" color=\"warning\"\n                  (click)=\"click()\"></ion-button>\n    </ion-item>\n  ",
      styles: ["ion-button { width: 25px; height: 25px }"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _system_system__WEBPACK_IMPORTED_MODULE_4__["System"]])], SceneControl);
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
        value: function change() {
          if (this.service.status == 2) {// don't do anything on timed PIR status
          } else {
            this.service.setState(!!this.service.status); // make boolean
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.service.setState(!this.service.status);
        }
      }]);

      return SwitchControl;
    }();

    SwitchControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'switch',
      inputs: ['service'],
      template: "\n    <ion-item lines=\"none\">\n      <ion-label tappable (click)=\"toggle()\">\n        {{service.getName()}}\n        <ion-icon class=\"state\" *ngIf=\"service.status === 2\" name=\"time\" color=\"primary\"></ion-icon>\n      </ion-label>\n\n      <ion-toggle [(ngModel)]=\"service.status\" \n                  (ionChange)=\"change()\"></ion-toggle>\n    </ion-item>\n  ",
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


    __webpack_exports__["default"] = ".temp,\n.presets {\n  margin-bottom: 14px;\n  padding: 16px;\n  border-radius: var(--duotecno-border-radius);\n  background: #fff; }\n\n.temp {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px; }\n\n.temp__name {\n    font-weight: 700;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.temp__name ion-icon {\n      font-size: 20px; }\n\n.temp__current {\n    margin: 10px 0;\n    font-size: 60px;\n    line-height: 1;\n    font-weight: normal; }\n\n.temp__current .temp__celcius {\n      font-size: 20px; }\n\n.temp__asking {\n    font-size: 20px; }\n\n.temp__asking .temp__celcius {\n      font-size: 12px; }\n\n.temp__celcius {\n    line-height: 1;\n    margin-bottom: 5px;\n    margin-left: 2px;\n    vertical-align: text-top; }\n\n.temp__data {\n    width: calc(100% - 90px);\n    text-align: center;\n    font-size: 25px; }\n\n.temp ion-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 90px;\n    -webkit-box-align: end;\n            align-items: flex-end; }\n\n.temp ion-button {\n    --background: var(--ion-background-color);\n    --background-hover: var(--ion-background-color);\n    --border-radius: 4px;\n    --color: var(--ion-color-dark);\n    width: 45px;\n    height: 45px;\n    margin: 5px;\n    margin-right: 0; }\n\n.temp ion-button ion-icon {\n      font-size: 3rem; }\n\n.presets {\n  margin-top: -30px;\n  padding-bottom: 0; }\n\n.presets ion-buttons {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n\n.presets ion-button {\n    --color: var(--ion-color-dark);\n    width: calc(20% - 7px) !important;\n    height: 22px; }\n\n.presets .icons ion-button {\n    --background: var(--ion-background-color);\n    --background-hover: var(--ion-background-color);\n    --border-radius: 4px; }\n\n.presets .icons ion-button.preset-active {\n      --background: var(--ion-color-primary);\n      --background-hover: var(--ion-color-primary);\n      --color: #fff; }\n\n.presets .icontext ion-button {\n    font-size: 12px; }\n\n.presets .icontext ion-button .temp__celcius {\n      font-size: 8px; }\n\n@media (min-width: 375px) {\n  .temp__current {\n    font-size: 60px; }\n    .temp__current .temp__celcius {\n      font-size: 20px;\n      line-height: 1.8; }\n  .presets ion-button {\n    width: 50px;\n    height: 50px; }\n  .presets .icontext ion-button {\n    font-size: 12px; }\n    .presets .icontext ion-button .temp__celcius {\n      font-size: 8px; } }\n\n@media (prefers-color-scheme: dark) {\n  .temp,\n  .presets {\n    background: var(--ion-color-step-150); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3JlbmRlcmluZy90ZW1wZXJhdHVyZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUVuQjtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQUovQjtNQUtZLGVBQWUsRUFBQTs7QUFFNUI7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTs7QUFKcEI7TUFPRyxlQUFlLEVBQUE7O0FBR25CO0lBQ0UsZUFBZSxFQUFBOztBQURoQjtNQUlHLGVBQWUsRUFBQTs7QUFHbkI7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3QkFBd0IsRUFBQTs7QUFHMUI7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGVBQ0YsRUFBQTs7QUF6Q0Y7SUEyQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTs7QUE5Q3pCO0lBaURJLHlDQUFhO0lBQ2IsK0NBQW1CO0lBQ25CLG9CQUFnQjtJQUNoQiw4QkFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWUsRUFBQTs7QUF4RG5CO01BMERNLGVBQWUsRUFBQTs7QUFJckI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBRm5CO0lBS00sb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQU5wQztJQVNNLDhCQUFRO0lBQ1IsaUNBQWlDO0lBQUUsWUFFdkMsRUFBQTs7QUFaRjtJQWNJLHlDQUFhO0lBQ2IsK0NBQW1CO0lBQ25CLG9CQUFnQixFQUFBOztBQWhCcEI7TUFtQk0sc0NBQWE7TUFDYiw0Q0FBbUI7TUFDbkIsYUFBUSxFQUFBOztBQXJCZDtJQXlCSSxlQUFlLEVBQUE7O0FBekJuQjtNQTRCTSxjQUNGLEVBQUE7O0FBSUo7RUFFTTtJQUNFLGVBQWUsRUFBQTtJQURoQjtNQUlLLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQUl4QjtJQUVJLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFIaEI7SUFNSSxlQUFjLEVBQUE7SUFObEI7TUFTUSxjQUFjLEVBQUEsRUFDakI7O0FBSVQ7RUFDSTs7SUFFSSxxQ0FBcUMsRUFBQSxFQUN4QyIsImZpbGUiOiJzcmMvYXBwL3JlbmRlcmluZy90ZW1wZXJhdHVyZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbXAsXG4ucHJlc2V0cyB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWR1b3RlY25vLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnRlbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgJl9fbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMjBweDt9XG4gIH1cbiAgJl9fY3VycmVudCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAudGVtcF9fY2VsY2l1cyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG4gICZfX2Fza2luZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgLnRlbXBfX2NlbGNpdXMge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuICAmX19jZWxjaXVzIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIH1cblxuICAmX19kYXRhIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweFxuICB9XG4gIGlvbi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gIH1cbn1cbi5wcmVzZXRzIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gIGlvbi1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB3aWR0aDogY2FsYygyMCUgLSA3cHgpICFpbXBvcnRhbnQ7IGhlaWdodDogMjJweFxuXG4gIH1cbiAgLmljb25zIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJi5wcmVzZXQtYWN0aXZlIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuICAuaWNvbnRleHQgaW9uLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgLnRlbXBfX2NlbGNpdXMge1xuICAgICAgZm9udC1zaXplOiA4cHhcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XG4gICAgLnRlbXAge1xuICAgICAgJl9fY3VycmVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcblxuICAgICAgICAudGVtcF9fY2VsY2l1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wcmVzZXRzIHtcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgfVxuICAgICAgLmljb250ZXh0IGlvbi1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6MTJweDtcblxuICAgICAgICAudGVtcF9fY2VsY2l1cyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAudGVtcCxcbiAgICAucHJlc2V0cyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgfVxufSJdfQ== */";
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
        key: "getCurrent",
        value: function getCurrent() {
          return this.service.value;
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

          return this.service.sun;
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
      template: "\n    <div class=\"temp\">\n      <div class=\"temp__name\">\n        {{service.getName()}}\n        <ion-icon *ngIf=\"service.preset >= 0\" [color]=\"colorTemp()\" name=\"thermometer\"></ion-icon>\n        <!--span class=\"right\">{{statusTemp()}}</span -->\n      </div>\n      <div class=\"temp__data\">\n        <div class=\"temp__current\">{{getCurrent() | temp}}<span class=\"temp__celcius\">\xB0C</span></div>\n        <div class=\"temp__asking\">{{ \"Temperature.Asking\" |_ }}: {{ getTemp() | temp}}<span class=\"temp__celcius\">\xB0C</span></div>\n      </div>\n\n      <ion-buttons>\n        <ion-button fill=\"solid\" slot=\"icon-only\" (click)=\"incDecTemp(true)\">\n          <ion-icon name=\"chevron-up\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" (click)=\"incDecTemp(false)\">\n          <ion-icon name=\"chevron-down\"></ion-icon></ion-button>\n      </ion-buttons>\n    </div>\n\n    <div class=\"presets\">\n      <ion-buttons class=\"icons\">\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(-1)\" (click)=\"changePreset(-1)\">\n          <ion-icon name=\"close-outline\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(1)\" (click)=\"changePreset(1)\">\n          <ion-icon src=\"/assets/icon/hsun.svg\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(0)\" (click)=\"changePreset(0)\">\n          <ion-icon name=\"sunny\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(3)\" (click)=\"changePreset(3)\">\n          <ion-icon src=\"/assets/icon/hmoon.svg\"></ion-icon></ion-button>\n        <ion-button fill=\"solid\" slot=\"icon-only\" [ngClass]=\"colorPreset(2)\" (click)=\"changePreset(2)\">\n          <ion-icon name=\"moon-sharp\"></ion-icon></ion-button>\n      </ion-buttons>\n\n      <ion-buttons class=\"icontext\">\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(-1)\" color=\"dark\">\n          {{ \"Temperature.Off\" |_ }}</ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(1)\" color=\"dark\">\n          {{service.hsun | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(0)\" color=\"dark\">\n          {{service.sun | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(3)\" color=\"dark\">\n          {{service.hmoon | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n        <ion-button fill=\"clear\" mode=\"ios\" (click)=\"changePreset(2)\" color=\"dark\">\n          {{service.moon | temp}}<span class=\"temp__celcius\">\xB0C</span></ion-button>\n      </ion-buttons>\n    </div>\n  ",
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
      template: "\n    <ion-item lines=\"none\" class=\"updown\">\n      <ion-label>{{service.getName()}}\n        <span class=\"state\">{{state()}}</span>\n      </ion-label>\n\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" slot=\"icon-only\" (click)=\"doDown()\">\n          <ion-icon name=\"caret-down\" [ngClass]=\"colorDown()\"></ion-icon></ion-button>\n        <ion-button size=\"small\" slot=\"icon-only\" (click)=\"doStop()\">\n          <ion-icon name=\"stop\"></ion-icon></ion-button>\n        <ion-button size=\"small\" slot=\"icon-only\" (click)=\"doUp()\" [ngClass]=\"colorUp()\">\n          <ion-icon name=\"caret-up\" [ngClass]=\"colorUp()\"></ion-icon></ion-button>\n      </ion-buttons>\n    </ion-item>\n  ",
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
          // this.logger('*Q* exec, we\'ve put stuff in the queue, start ' + (len ? 'long timer' : 'short timer'));

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
          var _this9 = this;

          var mSecs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          this.endWaiter(); // this.logger("*Q* Waiter: starting timer for " + mSecs + " mSec");

          this.timer = setTimeout(function () {
            _this9.logger('*Q* Waiter: timer finished, calling \'do\' because nobody else did');

            _this9.do();
          }, mSecs);
        }
      }, {
        key: "do",
        value: function _do() {
          // this.logger('*Q* Do, qlen='+ this.queue.length);
          // Get the oldest function and execute
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
    "./src/app/system/Q.ts");
    /* harmony import */


    var _core_stdUX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/stdUX */
    "./src/app/core/stdUX.ts"); // import { Socket } from "cz.blocshop.socketsforcordova/socket.js";


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
        var _this10;

        _classCallCheck(this, Master);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Master).call(this, "master", system.debug));
        _this10.toastCtrl = toastCtrl;
        _this10.resolveLogin = null;
        _this10.Q = new _Q__WEBPACK_IMPORTED_MODULE_4__["Q"](system.logger); // save my eco system

        _this10.system = system; // save this masters config settings

        _this10.config = _types__WEBPACK_IMPORTED_MODULE_2__["Sanitizers"].masterConfig(config); // all nodes in this master

        _this10.nodes = [];
        _this10.nrNodes = 0;
        _this10.schedule = 0;
        _this10.date = null; // connection to an IP node / smartbox

        _this10.socket = null;
        _this10.isOpen = false;
        _this10.isLoggedIn = false;
        _this10.closeRequested = false; // incoming data

        _this10.buffer = "";
        return _this10;
      }

      _createClass(Master, [{
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
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", this.openWeb());

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openTCP",
        value: function openTCP() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", this.openWeb());

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openWeb",
        value: function openWeb() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      try {
                        ////////////////////////////////
                        // try to open the connection //
                        _this11.log("opening connection to the SmartSocket Server");

                        var wsserver = _this11.system.config.socketserver + ":" + _this11.system.config.socketport;
                        var tcpserver = _this11.config.address + ":" + _this11.config.port;
                        _this11.socket = new WebSocket("ws://" + wsserver + "/" + tcpserver);

                        if (!_this11.socket) {
                          _this11.err("could create new web socket to " + wsserver + "/" + tcpserver);

                          resolve(false);
                        } ///////////////////////
                        // set data listener //


                        _this11.socket.onmessage = function (message) {
                          // messages need to be buffered until "]" is received
                          _this11.handleData(message.data);
                        }; ///////////////////////////
                        // set an error listener //


                        _this11.socket.onerror = function (err) {
                          _this11.err("Socket: " + err + " on " + wsserver + "/" + tcpserver);
                        }; ///////////////////////////////////////////
                        // set end: the server closed the socket //


                        _this11.socket.onclose = function () {
                          _this11.isOpen = false;
                          _this11.isLoggedIn = false;

                          _this11.log("end -> socket got disconnected");

                          if (!_this11.closeRequested) {
                            // unexpected close
                            _this11.err("Socket: closed unexpectedly");
                          }
                        };

                        _this11.socket.onopen = function () {
                          _this11.isOpen = true; // request a connection to the real socket

                          _this11.log("connection open on " + wsserver + "/" + tcpserver); // resolve our promise with the opened socket


                          resolve(true);
                        };
                      } catch (e) {
                        _this11.err("Failed to open a connection on port " + _this11.getPort());

                        resolve(false);
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
        key: "close",
        value: function close() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var message;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!this.isOpen) {
                      _context8.next = 11;
                      break;
                    }

                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildDisconnect();
                    _context8.prev = 2;
                    this.closeRequested = true;
                    _context8.next = 6;
                    return this.send(message);

                  case 6:
                    _context8.next = 11;
                    break;

                  case 8:
                    _context8.prev = 8;
                    _context8.t0 = _context8["catch"](2);
                    this.err("Disconnect failure: " + _context8.t0);

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[2, 8]]);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      try {
                        var message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildLogin(_this12.config.password);

                        _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].write(_this12.socket, message); // to be called when logged in


                        _this12.resolveLogin = resolve;
                      } catch (err) {
                        _this12.resolveLogin = null;

                        _this12.err("Login call failed: " + err);

                        reject(false);
                      }
                    }));

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
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
          regeneratorRuntime.mark(function _callee11() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    return _context11.abrupt("return", this.Q.exec(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                if (this.isOpen) {
                                  _context10.next = 7;
                                  break;
                                }

                                _context10.next = 3;
                                return this.open();

                              case 3:
                                _context10.next = 5;
                                return this.login();

                              case 5:
                                if (_context10.sent) {
                                  _context10.next = 7;
                                  break;
                                }

                                return _context10.abrupt("return", _types__WEBPACK_IMPORTED_MODULE_2__["WriteError"].writeFatal);

                              case 7:
                                return _context10.abrupt("return", _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].write(this.socket, message));

                              case 8:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
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
            if (next.cmd != _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].Internal) {
              if (next.cmd != 7) // don't log temperature
                this.log("incoming msg=" + Object(_protocol__WEBPACK_IMPORTED_MODULE_1__["recName"])(next.cmd) + ", status=" + next.isStatus + ", data=" + (next.message ? next.message.join(",") : "--"));
            } else {
              this.log("incoming msg=" + Object(_protocol__WEBPACK_IMPORTED_MODULE_1__["recName"])(next.cmd) + ", data=" + (next.raw ? next.raw.substr(0, 50) : "--"));
            }

            this.Q.do();

            if (next.isStatus) {
              this.receiveStatus(next); // non-unit specific
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].TimeDateStatus) {
              this.receiveDateTime(next.message);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].Info) {
              this.receiveInfo(next);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].ConnectStatus) {
              this.receiveLogin(next.message);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].ScheduleStatus) {
              this.receiveSchedule(next.message);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].Internal) {
              this.receiveInternal(next.raw);
            } else if (next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].AudioExtendedStatus || next.cmd === _protocol__WEBPACK_IMPORTED_MODULE_1__["Rec"].AudioStatus) {
              this.receiveAudioStatus(next);
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
            this.system.doReceiveBackup(this, data);
          } else if (msg[2] === 'A') {
            this.system.doReceiveAudio(this, data);
          }
        } ///////////////////
        // Login message //
        ///////////////////

      }, {
        key: "receiveLogin",
        value: function receiveLogin(message) {
          this.isLoggedIn = message[2] === 1;

          if (this.resolveLogin) {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doToast"])(this.toastCtrl, "Login " + (this.isLoggedIn ? "OK" : "FAIL") + " for " + this.config.address);
            this.resolveLogin(this.isLoggedIn);
            this.resolveLogin = null;
          } else {
            this.err("unexpected ConnectStatus ?");
          }
        } ///////////
        // Audio //
        ///////////

      }, {
        key: "requestAudio",
        value: function requestAudio() {
          this.system.doRequestAudio(this);
        }
      }, {
        key: "receiveAudioStatus",
        value: function receiveAudioStatus(next) {
          var unit = this.findUnit(next.message[2], next.message[3]);

          if (unit) {
            _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].receiveAudioStatus(unit, next);
          } else {
            this.err("could not find unit (" + Object(_types__WEBPACK_IMPORTED_MODULE_2__["hex"])(next.message[2]) + ", " + Object(_types__WEBPACK_IMPORTED_MODULE_2__["hex"])(next.message[3]) + ")");
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
        key: "receiveDateTime",
        value: function receiveDateTime(message) {
          // 71,0,9,37,3,3,4,3,21,20 -> 09:37:03 Wednesday(3) 4 march 2120
          this.date = new Date((message[8] - 1) * 100 + message[9], message[7] - 1, message[6], message[2], message[3], message[4]);
          this.log("Received date/time: " + this.date);
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
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.prev = 0;
                    _context12.next = 3;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildDBInfo());

                  case 3:
                    _context12.next = 5;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildRequestSchedule());

                  case 5:
                    _context12.next = 10;
                    break;

                  case 7:
                    _context12.prev = 7;
                    _context12.t0 = _context12["catch"](0);
                    this.err("dbInfo call failed -> " + _context12.t0);

                  case 10:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[0, 7]]);
          }));
        }
      }, {
        key: "fetchNode",
        value: function fetchNode(nodeInx) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var message;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildNodeInfo(nodeInx);
                    _context13.prev = 1;
                    _context13.next = 4;
                    return this.send(message);

                  case 4:
                    _context13.next = 9;
                    break;

                  case 6:
                    _context13.prev = 6;
                    _context13.t0 = _context13["catch"](1);
                    this.err("nodeInfo call failed -> " + _context13.t0);

                  case 9:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[1, 6]]);
          }));
        }
      }, {
        key: "fetchUnit",
        value: function fetchUnit(node, unitInx) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var message;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildUnitInfo(node, unitInx);
                    _context14.prev = 1;
                    _context14.next = 4;
                    return this.send(message);

                  case 4:
                    _context14.next = 9;
                    break;

                  case 6:
                    _context14.prev = 6;
                    _context14.t0 = _context14["catch"](1);
                    this.err("unitInfo call failed -> " + _context14.t0);

                  case 9:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[1, 6]]);
          }));
        }
      }, {
        key: "getDatabase",
        value: function getDatabase() {
          var readDB = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this14 = this;

            var hasNames;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.nodes = [];
                    hasNames = this.system.config.cunits.filter(function (u) {
                      return _this14.same(u.masterAddress, u.masterPort);
                    }).some(function (u) {
                      return u.name;
                    });

                    if (!(readDB || !hasNames)) {
                      _context15.next = 7;
                      break;
                    }

                    _context15.next = 5;
                    return this.fetchDbInfo();

                  case 5:
                    _context15.next = 9;
                    break;

                  case 7:
                    // loop over all nodes/units in the config with a matching ip address
                    //  fill: this.nrNodes
                    //  call: kind of receive-Node/Unit-Info
                    this.log("building db from config file");
                    this.system.config.cunits.filter(function (u) {
                      return _this14.same(u.masterAddress, u.masterPort);
                    }).forEach(function (u) {
                      var node = _this14.findNode(u.logicalNodeAddress);

                      if (!node) {
                        node = new _protocol__WEBPACK_IMPORTED_MODULE_1__["Node"](_this14, {
                          logicalAddress: u.logicalNodeAddress,
                          name: "Node-" + u.logicalNodeAddress
                        });

                        _this14.nodes.push(node);

                        _this14.system.setActiveState(node);

                        _this14.log("new node: " + node.getName());
                      }

                      var unit = _this14.findUnit(u.logicalNodeAddress, u.logicalAddress);

                      if (!unit) {
                        unit = new _protocol__WEBPACK_IMPORTED_MODULE_1__["Unit"](node, u);
                        node.units.push(unit);

                        _this14.log("new unit: " + unit.getName() + " -> " + u.logicalAddress);
                      }

                      _this14.system.setActiveState(unit);
                    });

                  case 9:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
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
          var _this15 = this;

          var onlyNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.log("Showing " + this.nodes.length + " nodes");
          this.nodes.forEach(function (node, nodeInx) {
            if (onlyNodes) {
              _this15.log("===================================================================================");
            }

            _this15.log(nodeInx + ". " + node.name + ", type = " + node.typeName() + ", nrUnits = " + node.nrUnits + ", logical address = " + node.logicalAddress);

            if (onlyNodes) {
              _this15.log("-----------------------------------------------------------------------------------");

              node.units.forEach(function (unit, unitInx) {
                _this15.log("> " + unitInx + ". '" + unit.name + "' => '" + unit.getName() + "', type = " + unit.typeName() + ", logical address: " + unit.logicalAddress + ", value: " + unit.value + (unit.status ? ", status = " + unit.status : ""));
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
            // this.err("status message " + next.cmd + " for unknown node = " + nodeLogical);
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
          regeneratorRuntime.mark(function _callee16() {
            var nodeInx, node, unitInx;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.log("requesting status of all units");
                    nodeInx = 0;

                  case 2:
                    if (!(nodeInx < this.nodes.length)) {
                      _context16.next = 15;
                      break;
                    }

                    node = this.nodes[nodeInx];

                    if (!node.active) {
                      _context16.next = 12;
                      break;
                    }

                    unitInx = 0;

                  case 6:
                    if (!(unitInx < node.units.length)) {
                      _context16.next = 12;
                      break;
                    }

                    _context16.next = 9;
                    return this.requestUnitStatus(node.units[unitInx]);

                  case 9:
                    unitInx++;
                    _context16.next = 6;
                    break;

                  case 12:
                    nodeInx++;
                    _context16.next = 2;
                    break;

                  case 15:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "requestNodeStatus",
        value: function requestNodeStatus(node) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var unitInx;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    unitInx = 0;

                  case 1:
                    if (!(unitInx < node.units.length)) {
                      _context17.next = 8;
                      break;
                    }

                    if (!node.units[unitInx].active) {
                      _context17.next = 5;
                      break;
                    }

                    _context17.next = 5;
                    return this.requestUnitStatus(node.units[unitInx]);

                  case 5:
                    unitInx++;
                    _context17.next = 1;
                    break;

                  case 8:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "requestUnitStatus",
        value: function requestUnitStatus(unit) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var message, res;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    message = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildRequestUnitStatus(unit.node, unit);
                    _context18.next = 3;
                    return this.send(message);

                  case 3:
                    res = _context18.sent;
                    // results will be set by the data event listener
                    this.info("get value of " + unit.node.getName() + "-" + unit.getName());

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "setUnitStatus",
        value: function setUnitStatus(unit, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var params;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    params = _protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSetCmd(unit.node, unit, value);

                    if (!params.cmd) {
                      _context19.next = 4;
                      break;
                    }

                    _context19.next = 4;
                    return this.send(params.message);

                  case 4:
                    this.system.checkScenes(unit);

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "setPreset",
        value: function setPreset(unit, preset, temp) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSetPreset(unit.node, unit, preset, temp));

                  case 2:
                    this.info("set temp preset: " + preset + " of " + unit.node.getName() + "-" + unit.getName() + " to temp " + temp);

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "selectPreset",
        value: function selectPreset(unit, preset) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSelectPreset(unit.node, unit, preset));

                  case 2:
                    this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + " to: " + preset);

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "setSchedule",
        value: function setSchedule() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSendSchedule(this.schedule));

                  case 2:
                    this.info("set schedule to week nr: " + this.schedule);

                  case 3:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "setTempOnOff",
        value: function setTempOnOff(unit, on) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildSensorOnOff(unit.node, unit, on));

                  case 2:
                    this.info("turn temp sensor of " + unit.node.getName() + "-" + unit.getName() + ": " + (on ? "on" : "off"));

                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "doIncDecPreset",
        value: function doIncDecPreset(unit, inc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildIncDecPreset(unit.node, unit, inc));

                  case 2:
                    this.info("set temp preset of " + unit.node.getName() + "-" + unit.getName() + ": " + (inc ? "up" : "down"));

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "setAudioSrcDest",
        value: function setAudioSrcDest(unit, source, destination) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildAudioSrcDest(unit.node, unit, source, destination));

                  case 2:
                    this.info("send source " + source + " to " + destination + " of " + unit.getName());

                  case 3:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "sendAudioAction",
        value: function sendAudioAction(unit, action, fnc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.send(_protocol__WEBPACK_IMPORTED_MODULE_1__["Protocol"].buildAudioAction(unit.node, unit, action, fnc));

                  case 2:
                    this.info("send action " + action + " to " + unit.getName());

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
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

  /*! exports provided: cmdName, Rec, recName, UnitState, UnitMotorCmd, Node, Unit, Protocol */

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


    __webpack_require__.d(__webpack_exports__, "UnitState", function () {
      return UnitState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitMotorCmd", function () {
      return UnitMotorCmd;
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
      Cmd[Cmd["SetBasicAudio"] = 159] = "SetBasicAudio";
      Cmd[Cmd["SetExtendedAudio"] = 208] = "SetExtendedAudio";
      Cmd[Cmd["SetAVMatrix"] = 202] = "SetAVMatrix";
      Cmd[Cmd["SetSwitch"] = 163] = "SetSwitch";
      Cmd[Cmd["SetDimmer"] = 162] = "SetDimmer";
      Cmd[Cmd["SetControl"] = 168] = "SetControl";
      Cmd[Cmd["SetMotor"] = 182] = "SetMotor";
      Cmd[Cmd["SetSensor"] = 136] = "SetSensor";
      Cmd[Cmd["SetSchedule"] = 217] = "SetSchedule";
      Cmd[Cmd["Login"] = 214] = "Login";
      Cmd[Cmd["Heartbeat"] = 215] = "Heartbeat";
      Cmd[Cmd["DatabaseInfo"] = 209] = "DatabaseInfo";
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
      return Cmd[cmd] || "cmd" + cmd;
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
      Rec[Rec["AudioStatus"] = 23] = "AudioStatus";
      Rec[Rec["AudioExtendedStatus"] = 70] = "AudioExtendedStatus";
      Rec[Rec["TimeDateStatus"] = 71] = "TimeDateStatus";
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
    } // States


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

    ; /////////////////////////
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
            case _types__WEBPACK_IMPORTED_MODULE_1__["NodeType"].kStandardNode:
              return 'Standard';

            case _types__WEBPACK_IMPORTED_MODULE_1__["NodeType"].kGatewayNode:
              return 'Gateway';

            case _types__WEBPACK_IMPORTED_MODULE_1__["NodeType"].kModemNode:
              return 'Modem';

            case _types__WEBPACK_IMPORTED_MODULE_1__["NodeType"].kGUINode:
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

        _types__WEBPACK_IMPORTED_MODULE_1__["Sanitizers"].unitInfo(params, this);

        this.extendedType = this.calcExtendedType(); // remove the |

        this.name = this.name.replace(/\|/g, " "); // delete all type modifiers ( $, * and ! )
        // if the display name is empty make a N[nodeAdr]-U[unitAdr] name.

        this.displayName = this.name.replace(/\$|\*|\!/g, '') || this.getSerialNr();

        if (this.isMedia()) {}
      }

      _createClass(Unit, [{
        key: "hasSpecials",
        value: function hasSpecials() {
          var special = this.name.indexOf("|20");
          if (special < 0) special = this.name.indexOf("|50");
          if (special < 0) special = this.name.indexOf("|90");
          if (special < 0) special = this.name.indexOf("|OFF");
          return special >= 0;
        }
      }, {
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
          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor) {
            return this.value == UnitState.kOpening && value == 4 || this.value == UnitState.kClosing && value == 5 || this.value <= UnitState.kOpen && value == 3;
          } else {
            return this.value == value;
          }
        }
      }, {
        key: "typeName",
        value: function typeName() {
          switch (this.getType()) {
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kDimmer:
              return 'Dimmer';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kSwitch:
              return 'Switch/Relay';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kLightbulb:
              return 'Lightbulb';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kInput:
              return 'Control input';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kTemperature:
              return 'Temperature sensor';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kExtendedAudio:
              return 'Extended audio';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kMood:
              return 'Virtual mood';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kCondition:
              return 'Condition';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kSwitchingMotor:
              return 'Switch motor';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kGarageDoor:
              return 'Garagedoor';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kDoor:
              return 'Door';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kLock:
              return 'Lock';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kUnlocker:
              return 'Unlocker';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kAudio:
              return 'Basic audio';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kAV:
              return 'AV Matrix';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kIRTX:
              return 'IRTX';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kVideo:
              return 'Video multiplexer';

            default:
              return 'Unknown unit type (' + this.type + ')';
          }
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.displayName;
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
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kTemperature:
              return "01|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor:
              return "02|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kDimmer:
              return "03|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitch:
              return "04|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kMood:
              return "09|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kInput:
              return "11|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kExtendedAudio:
              "12|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAudio:
              return "12|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAV:
              return "13|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kIRTX:
              return "19|" + name;

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kVideo:
              return "14|" + name;

            default:
              return "99|" + name;
          }
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.extendedType;
        }
      }, {
        key: "calcExtendedType",
        value: function calcExtendedType() {
          // General idea extention on DuoTecno's types
          //
          // $,! -> kind of lock -> needs authentication
          // *   -> toggle
          //
          // Extension on Duotecno's types
          //  updown =>
          //      if name contains $   => "garagedoor"
          //      if name contains *   => "door"
          //      else                 => "window-covering"
          //  mood =>
          //      if name contains $   => "unlock", locks again after 1.2 sec
          //      if name contains *   => permanent locked=on/unlocked=off
          //      else                 => "mood" (turns of 1.2 seconds after being turned on)
          //  switch =>
          //      if name contains $   => "lock"
          //      if name contains *   => "switch" (also still works with "stk", "STK" and "Stk")
          //      else                 => "lightbulb" 
          //
          ////////////
          // Switch //
          ////////////
          // Switch -> with * or STK -> Switch
          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitch && (this.name.indexOf("STK") >= 0 || this.name.indexOf("stk") >= 0 || this.name.indexOf("Stk") >= 0 || this.name.indexOf("*") >= 0)) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kSwitch; // Switch -> with $ -> Door

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitch && this.name.indexOf("$") >= 0) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kLock; // Switch -> default -> LightBulb

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitch) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kLightbulb; /////////////
          // Up/Down //
          /////////////
          // UpDown -> with $ -> GarageDoor

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor && this.name.indexOf("$") >= 0) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kGarageDoor; // UpDown with * -> Door

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor && this.name.indexOf("*") >= 0) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kDoor; // UpDown -> default -> WindowCovering

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kSwitchingMotor; ///////////
          // Moods //
          ///////////
          // Mood -> with $ -> Lock (re-closes after 1.2 secs)

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kMood && this.name.indexOf("$") >= 0) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kUnlocker; // Mood -> with * -> Mood with state

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kMood && this.name.indexOf("*") >= 0) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kCondition; // Mood -> default -> Mood (turn off after 1.2 secs)

          if (this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kMood) return _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kMood; ///////////////////////
          // All other default //
          ///////////////////////

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
        key: "getModelName",
        value: function getModelName() {
          return this.typeName() + " " + Object(_types__WEBPACK_IMPORTED_MODULE_1__["hex"])(this.node.logicalAddress) + ";" + Object(_types__WEBPACK_IMPORTED_MODULE_1__["hex"])(this.logicalAddress);
        }
      }, {
        key: "isCtrl",
        value: function isCtrl() {
          return this.isSwitch() || this.isDimmer() || this.isUpDown();
        }
      }, {
        key: "isSwitch",
        value: function isSwitch() {
          return this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitch;
        }
      }, {
        key: "isMood",
        value: function isMood() {
          return this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kMood;
        }
      }, {
        key: "isInput",
        value: function isInput() {
          return this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kInput;
        }
      }, {
        key: "isTemperature",
        value: function isTemperature() {
          return this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kTemperature;
        }
      }, {
        key: "isDimmer",
        value: function isDimmer() {
          return this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kDimmer;
        }
      }, {
        key: "isUpDown",
        value: function isUpDown() {
          return this.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor;
        }
      }, {
        key: "isMedia",
        value: function isMedia() {
          return this.type == _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAudio || this.type == _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAV || this.type == _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kExtendedAudio || this.type == _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kVideo;
        }
      }, {
        key: "setPreset",
        value: function setPreset(preset, temp) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.node.master.setPreset(this, preset, temp);

                  case 2:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "selectPreset",
        value: function selectPreset(preset) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.node.master.selectPreset(this, preset);

                  case 2:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "sensorOnOff",
        value: function sensorOnOff(on) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee29() {
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return this.node.master.setTempOnOff(this, on);

                  case 2:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "doIncDecPreset",
        value: function doIncDecPreset(inc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.node.master.doIncDecPreset(this, inc);

                  case 2:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "audioSrcDest",
        value: function audioSrcDest(source, destination) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return this.node.master.setAudioSrcDest(this, source, destination);

                  case 2:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "audioAction",
        value: function audioAction(action, fnc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return this.node.master.sendAudioAction(this, action, fnc);

                  case 2:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
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
          regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return this.node.master.requestUnitStatus(this);

                  case 2:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "setState",
        value: function setState(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee34() {
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return this.node.master.setUnitStatus(this, value);

                  case 2:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "getDispayState",
        value: function getDispayState() {
          switch (this.getType()) {
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kDimmer:
              return (this.status ? 'on' : 'off') + ' (' + this.value + '%)';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kSwitch:
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kLightbulb:
              return this.status ? 'on' : 'off';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kInput:
              return this.status ? 'on' : 'off';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kTemperature:
              return isNaN(this.value) ? "-" : this.value / 10.0 + 'C';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kCondition:
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kMood:
              return this.status ? 'on' : 'off';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kLock:
              return this.status ? 'locked' : 'unlocked';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kUnlocker:
              return this.status ? 'unlocking' : 'locked';

            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kGarageDoor:
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kDoor:
            case _types__WEBPACK_IMPORTED_MODULE_1__["UnitExtendedType"].kSwitchingMotor:
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
        if (isNaN(cmd)) cmd = data[0];

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
        password = password || "";
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
        var updown = function updown(bump, value) {
          if (bump == -1 && value > 0) return value - 1;else if (bump == -2 && value < 100) return value + 1;else return value;
        };

        switch (unit.type) {
          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kDimmer:
            if (typeof value === "boolean") return {
              cmd: Cmd.SetDimmer,
              method: value ? reqOn : reqOff
            };else if (value <= 0) return {
              cmd: Cmd.SetDimmer,
              method: reqOff
            };else return {
              cmd: Cmd.SetDimmer,
              method: reqDim,
              value: Math.max(Math.min(value, 99), 1)
            };

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitch:
            return {
              cmd: Cmd.SetSwitch,
              method: value ? 3 : 2
            };

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kInput:
          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kMood:
            if (value < 0) return {
              cmd: Cmd.SetControl,
              method: 2
            }; // short pulse
            else return {
                cmd: Cmd.SetControl,
                method: 3,
                value: value ? 1 : 0
              };
          // long event + 0/1

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kSwitchingMotor:
            return {
              cmd: Cmd.SetMotor,
              method: value
            };
          // 5 close, 4 open, 3 is stop

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kTemperature:
            return {
              cmd: Cmd.SetSensor,
              method: 13
              /* select preset */
              ,
              value: value
            };

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAudio:
            if (typeof value === "boolean") return {
              cmd: Cmd.SetBasicAudio,
              method: value ? 4 : 5
            };else return {
              cmd: Cmd.SetBasicAudio,
              method: value == -1 ? 9 : 8
            };

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kExtendedAudio:
            if (typeof value === "boolean") return {
              cmd: Cmd.SetExtendedAudio,
              method: value ? 4 : 5,
              data: [unit.destinationId]
            };else if (value < 0) // -1 = down, -2 = up
              return {
                cmd: Cmd.SetExtendedAudio,
                method: 12,
                data: [unit.destinationId, updown(value, unit.value)]
              };else return {
              cmd: Cmd.SetExtendedAudio,
              method: 12,
              data: [unit.destinationId, unit.value]
            };

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAV:
            var source = unit.destination ? unit.destination.source : 255;
            if (typeof value === "boolean") return {
              cmd: Cmd.SetAVMatrix,
              method: value ? 2 : 3,
              data: [unit.destinationId, source]
            }; // connect - disconnect
            else if (value < 0) // -1 = down, -2 = up
                return {
                  cmd: Cmd.SetAVMatrix,
                  method: value == -1 ? 8 : 7,
                  data: [unit.destinationId, 1]
                }; // volume inc/dec
              else return {
                  cmd: Cmd.SetAVMatrix,
                  method: 4,
                  data: [unit.destinationId, value]
                };
          // volume

          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kIRTX:
          case _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kVideo:
          default:
            // "Unknown unit type (" + unit.type + ")";
            console.log('setting ' + unit.type + ' not yet implemented');
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
          }

          if (typeof params.data != 'undefined') {
            var _params$message;

            (_params$message = params.message).push.apply(_params$message, _toConsumableArray(params.data));
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

      /* Audio */
      getAudioIds: function getAudioIds(unit, source, destination) {
        var destNr = Math.max(0, Math.min(unit.destinations.length - 1, destination));
        var srcNr = Math.max(0, Math.min(unit.destinations[destNr].sources.length, source));
        var unitAdr = unit.destinations[destNr].unitaddress;
        var nodeAdr = unit.destinations[destNr].nodeaddress;
        return {
          destNr: destNr,
          srcNr: srcNr,
          unitAdr: unitAdr,
          nodeAdr: nodeAdr
        };
      },
      buildAudioSrcDest: function buildAudioSrcDest(node, unit, source, destination) {
        if (unit.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAudio) {
          return [Cmd.SetBasicAudio, 1, node.logicalAddress, unit.logicalAddress, Math.max(0, Math.min(7, source))];
        } else if (unit.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kExtendedAudio) {
          if (!unit.destinations || !unit.destinations.length) {
            console.log('set SrcDest ' + unit.displayName + ' has no destinations');
            return null;
          }

          var _this$getAudioIds = this.getAudioIds(unit, source, destination),
              destNr = _this$getAudioIds.destNr,
              srcNr = _this$getAudioIds.srcNr,
              unitAdr = _this$getAudioIds.unitAdr,
              nodeAdr = _this$getAudioIds.nodeAdr;

          return [Cmd.SetExtendedAudio, 1, nodeAdr, unitAdr, destNr, srcNr];
        } else {
          console.log('set SrcDest ' + unit.type + ' not yet implemented');
          return null;
        }
      },
      actions: {
        basic: {
          'back': 38,
          'skipback': 36,
          'play': 32,
          'pause': 34,
          'stop': 33,
          'skipforward': 35,
          'forward': 37,
          'function': 23,
          'functions': {
            '1': 0,
            '2': 1,
            '3': 2,
            '4': 3,
            '5': 4,
            '6': 5,
            '7': 6,
            '8': 7,
            '9': 8,
            '0': 9,
            'up': 10,
            'down': 11,
            'left': 12,
            'right': 13,
            'enter': 14,
            '-': 15,
            'menu': 16,
            'guide': 17,
            'info': 18,
            'exit': 19
          }
        },
        extended: {
          'back': 21,
          'skipback': 19,
          'play': 15,
          'pause': 17,
          'stop': 16,
          'skipforward': 18,
          'forward': 22,
          'function': 24,
          'functions': {
            '1': 0,
            '2': 1,
            '3': 2,
            '4': 3,
            '5': 4,
            '6': 5,
            '7': 6,
            '8': 7,
            '9': 8,
            '0': 9,
            'up': 10,
            'down': 11,
            'left': 12,
            'right': 13,
            'enter': 14,
            '-': 15,
            'menu': 16,
            'guide': 17,
            'info': 18,
            'exit': 19
          }
        }
      },
      buildAudioAction: function buildAudioAction(node, unit, action, fnc) {
        var msg = null;

        if (unit.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kAudio) {
          msg = [Cmd.SetBasicAudio, this.actions.basic[action], node.logicalAddress, unit.logicalAddress];

          if (fnc) {
            msg.push(this.actions.basic.functions[fnc]);
          }
        } else if (unit.type === _types__WEBPACK_IMPORTED_MODULE_1__["UnitType"].kExtendedAudio) {
          var _this$getAudioIds2 = this.getAudioIds(unit, 0, unit.destinationId),
              destNr = _this$getAudioIds2.destNr,
              unitAdr = _this$getAudioIds2.unitAdr,
              nodeAdr = _this$getAudioIds2.nodeAdr;

          msg = [Cmd.SetExtendedAudio, this.actions.extended[action], nodeAdr, unitAdr, destNr];

          if (fnc) {
            msg.push(this.actions.extended.functions[fnc]);
          }
        } else {
          console.log('send Action to ' + unit.typeName() + ' not yet implemented');
        }

        return msg;
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
          // this.logger('received temperature = ' + <number>unit.value / 10.0);
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
      receiveAudioStatus: function receiveAudioStatus(unit, next) {
        // extended
        // 70,0,252,102,5,0,0,255,255,255,255,0,14,0,0
        // 70,0,252,102,5,0,1,0,0,255,255,11,12,0,0
        // 70,0,252,101,5,0,0,255,255,255,255,10,0,0,0 -> off
        //
        // Basic
        // 23,0=status,61=node,0=unit,10=rs232,3=type,255=src,28=vol,
        //    255=disc,[9]255=track,[10]2=preset,[11]102=freq,[12]70=freq
        unit.destinationId = next.cmd === Rec.AudioExtendedStatus ? next.message[6] : 0;

        if (unit.destinations && next.cmd === Rec.AudioExtendedStatus) {
          unit.destinations.forEach(function (destination) {
            destination.volume = next.message[destination.id + 11];
            console.log("source " + destination.id + " = " + next.message[destination.id + 7]);
            destination.source = next.message[destination.id + 7];
            if (destination.id == unit.destinationId) unit.destination = destination;
          });
        }

        if (unit.destinations && next.cmd === Rec.AudioStatus) {
          unit.destination = unit.destinations[0];
          unit.destination.volume = next.message[7];
          unit.destination.source = next.message[6];
          unit.destination.disc = next.message[8] != 255 ? next.message[8] + 1 : 0;
          unit.destination.track = next.message[9] != 255 ? next.message[9] + 1 : 0;
          unit.destination.preset = next.message[10] != 255 ? next.message[10] + 1 : 0;
          unit.destination.frequency = next.message[11] != 255 ? next.message[11] + "." + Object(_types__WEBPACK_IMPORTED_MODULE_1__["two"])(next.message[12]) : "";
        } // reflect volume and state of current destination in the value of the unit


        if (unit.destination) {
          unit.value = unit.destination.volume;
          unit.status = unit.destination.source == 255 ? 0 : 1;
        }

        console.log(next.cmd === Rec.AudioExtendedStatus ? "receiveAudioExtendedStatus: " : "receiveAudioStatus: ", unit);
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
    /* harmony import */


    var _core_stdUX__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../core/stdUX */
    "./src/app/core/stdUX.ts");

    var System =
    /*#__PURE__*/
    function (_logger__WEBPACK_IMPO2) {
      _inherits(System, _logger__WEBPACK_IMPO2);

      function System(toastCtrl) {
        var _this16;

        _classCallCheck(this, System);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(System).call(this, "system", true));
        _this16.toastCtrl = toastCtrl;
        _this16.backup = null;
        _this16.isBrowser = true;
        _this16.isSplitted = false; // rebuild active services (units) and spread unit updates

        _this16.trigger = null;
        _this16.moods = [];
        _this16.controls = [];
        _this16.temperatures = [];
        _this16.stores = [];
        _this16.media = [];
        _this16.rooms = [];
        _this16.trigger = null;
        _this16.emitter = new events__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();

        _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].setEmitter(_this16.emitter); //this.emitter.on('update', this.checkScenes.bind(this));


        _this16.readConfig();

        _this16.readGroups();

        _this16.readScenes();

        _this16.readAudio(); // open all masters listed in the config


        _this16.masters = [];

        _this16.openMasters();

        return _this16;
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
            this.openMaster(this.config.cmasters[inx], false);
          }
        }
      }, {
        key: "closeMasters",
        value: function closeMasters() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee35() {
            var inx;
            return regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    inx = 0;

                  case 1:
                    if (!(inx < this.masters.length)) {
                      _context35.next = 7;
                      break;
                    }

                    _context35.next = 4;
                    return this.closeMaster(this.masters[inx]);

                  case 4:
                    inx++;
                    _context35.next = 1;
                    break;

                  case 7:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35, this);
          }));
        }
      }, {
        key: "openMaster",
        value: function openMaster(config) {
          var readDB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee36() {
            var master;
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    master = new _master__WEBPACK_IMPORTED_MODULE_2__["Master"](this, config, this.toastCtrl);
                    this.masters.push(master); // check for old configs that don't contain the active flag

                    if (!(typeof master.config.active === "boolean" && !master.config.active)) {
                      _context36.next = 4;
                      break;
                    }

                    return _context36.abrupt("return");

                  case 4:
                    this.log("opening master: " + master.getAddress());
                    _context36.next = 7;
                    return master.open();

                  case 7:
                    if (!_context36.sent) {
                      _context36.next = 20;
                      break;
                    }

                    _context36.next = 10;
                    return master.login();

                  case 10:
                    if (!_context36.sent) {
                      _context36.next = 17;
                      break;
                    }

                    _context36.next = 13;
                    return master.getDatabase(readDB);

                  case 13:
                    this.log("master: " + master.getAddress() + " opened with " + master.nodes.length + " nodes.");
                    this.triggerRebuild();
                    _context36.next = 18;
                    break;

                  case 17:
                    this.err("failed to log in on " + master.getAddress());

                  case 18:
                    _context36.next = 21;
                    break;

                  case 20:
                    this.err("failed to open connection on " + master.getAddress());

                  case 21:
                    return _context36.abrupt("return", master);

                  case 22:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }, {
        key: "closeMaster",
        value: function closeMaster(master) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee37() {
            var inx;
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    if (master) {
                      _context37.next = 2;
                      break;
                    }

                    return _context37.abrupt("return");

                  case 2:
                    // find its index (we need it to delete it from the list)
                    inx = this.findMasterInx(master); // close if open

                    if (!master.isOpen) {
                      _context37.next = 12;
                      break;
                    }

                    _context37.prev = 4;
                    _context37.next = 7;
                    return master.close();

                  case 7:
                    _context37.next = 12;
                    break;

                  case 9:
                    _context37.prev = 9;
                    _context37.t0 = _context37["catch"](4);
                    this.err("failed to close master on " + master.getAddress() + ":" + master.getPort());

                  case 12:
                    // remove from list
                    if (inx >= 0) {
                      this.masters.splice(inx, 1);
                    }

                  case 13:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this, [[4, 9]]);
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
          regeneratorRuntime.mark(function _callee38() {
            var inx, master;
            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    if (cmaster.address) {
                      _context38.next = 2;
                      break;
                    }

                    return _context38.abrupt("return");

                  case 2:
                    // see if this master already exists
                    inx = this.findCMasterInx(cmaster.address, cmaster.port); // store in config if not yet known

                    if (!(inx < 0)) {
                      _context38.next = 8;
                      break;
                    }

                    this.config.cmasters.push(cmaster);
                    inx = this.masters.length - 1;
                    _context38.next = 12;
                    break;

                  case 8:
                    // close to re-open (master is deleted from the master array)
                    master = this.findMaster(cmaster.address, cmaster.port);
                    _context38.next = 11;
                    return this.closeMaster(master);

                  case 11:
                    // update the config
                    this.config.cmasters[inx] = cmaster;

                  case 12:
                    this.writeConfig(); // master is openened and added to the master array

                    _context38.next = 15;
                    return this.openMaster(cmaster, true);

                  case 15:
                    return _context38.abrupt("return", _context38.sent);

                  case 16:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this);
          }));
        }
      }, {
        key: "deleteMaster",
        value: function deleteMaster(master) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee39() {
            var masterAddress, masterPort, inx;
            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    masterAddress = master.getAddress();
                    masterPort = master.getPort();
                    inx = this.findCMasterInx(masterAddress, masterPort);

                    if (!(inx >= 0)) {
                      _context39.next = 11;
                      break;
                    }

                    _context39.next = 6;
                    return this.closeMaster(master);

                  case 6:
                    // remove the master from the config list
                    this.config.cmasters.splice(inx, 1); // remove it's units from the config

                    this.config.cunits = this.config.cunits.filter(function (unit) {
                      return unit.masterPort != masterPort || unit.masterAddress != masterAddress;
                    });
                    this.writeConfig();
                    _context39.next = 12;
                    break;

                  case 11:
                    this.err("didn't find the master " + master.getAddress() + ":" + master.getConfig().port + " in the config");

                  case 12:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
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
          var _this17 = this;

          var unit = null;
          this.masters.forEach(function (m) {
            if (m) {
              var node = _this17.findNode(m, logicalNodeAddress);

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
              name: u.name,
              type: u.type,
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
          var _this18 = this;

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
              _this18.trigger = null;

              _this18.rebuildServices();
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
          } // sort masters, nodes in masters, units in nodes + get State


          this.log("rebuildMasters/Nodes");
          this.masters.sort(compare);
          this.masters.forEach(function (m) {
            m.nodes.sort(compare);
            m.nodes.forEach(function (n) {
              return n.units.sort(compare);
            });
            m.requestStatus();
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
          this.media = services.filter(function (s) {
            return s.isMedia();
          });
          console.log("media: ", this.media);
          this.attachAudio(); //TODO -> IN OPEN MASTER ???

          this.emitter.emit('refresh');
        } ////////////
        // Scenes //
        ////////////

      }, {
        key: "checkScenes",
        value: function checkScenes(unit) {
          var _this19 = this;

          // do local scene implementation only if not handle by server
          if (this.config.remotescenes) return; // used when local-scenes = true.

          var scene = this.scenes.find(function (s) {
            return unit.isUnit(s.trigger.masterAddress, s.trigger.masterPort, s.trigger.logicalNodeAddress, s.trigger.logicalAddress);
          });

          if (scene) {
            this.log("scene found -> " + scene.name + ", value = " + scene.trigger.value + " unit = " + unit.value); //if (unit.sameValue(scene.trigger.value)) {

            scene.units.forEach(function (u) {
              var unit = _this19.findUnit(u.masterAddress, u.masterPort, u.logicalNodeAddress, u.logicalAddress);

              if (unit) {
                _this19.log(" - unit: " + unit.getDisplayName() + " -> " + u.value);

                unit.setState(u.value);
              } else {
                _this19.log(" - !!! Didn't find unit: " + u.masterAddress + ", " + u.masterPort + ", " + u.logicalNodeAddress + ", " + u.logicalAddress);
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
        value: function doBackup(name) {
          // prepend ip address of first open master to the name
          var master = this.findOpenMaster();

          if (master) {
            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,B-' + master.getAddress() + '-' + name + '-system:' + this.toTransport({
              groups: this.groups,
              scenes: this.scenes,
              config: this.config
            }) + ']');

            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Sending backup");
          } else {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "No master -> No backups");
          }
        }
      }, {
        key: "sendScenes",
        value: function sendScenes(name) {
          // scenes are 
          var master = this.findOpenMaster();

          if (master) {
            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,S-' + master.getAddress() + '-' + name + '-scenes:' + this.toTransport(this.scenes) + ']');

            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Sending scenes");
          } else {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "No master -> No scenes");
          }
        }
      }, {
        key: "doRequestBackup",
        value: function doRequestBackup(name) {
          // request restore (will come in async)
          // prepend ip address of first open master to the name
          var master = this.findOpenMaster();

          if (master) {
            this.log("requesting backup from " + master.getAddress());

            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,R-' + master.getAddress() + '-' + name + '-system:]');

            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Requesting backups");
          } else {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "No master -> No backups");
          }
        }
      }, {
        key: "doReceiveBackup",
        value: function doReceiveBackup(master, data) {
          this.backup = this.fromTransport(data);
          this.log("received backup: groups = " + this.backup.groups.length + ", scenes: " + this.backup.scenes.length + ", masters: " + this.backup.config.cmasters.length + ", units: " + this.backup.config.cunits.length);
          Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Received backup (" + this.backup.config.cunits.length + " units)");
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
          Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Backups restored");
          this.writeConfig();
          this.writeGroups();
          this.writeScenes();
        } ///////////
        // Audio //
        ///////////

      }, {
        key: "attachAudio",
        value: function attachAudio() {
          var _this20 = this;

          // attach the rooms to the units
          this.media.forEach(function (s) {
            var room = _this20.rooms.find(function (room) {
              return s.isUnit(room.master, room.port, room.nodeaddress, room.unitaddress);
            });

            console.log("attached to " + s.name, room);

            if (room) {
              s.destinations = room.destinations;
              s.destination = null;
              s.destinationId = 255;
            }
          });
          this.allActiveUnits().forEach(function (unit) {
            if (unit.type == _types__WEBPACK_IMPORTED_MODULE_3__["UnitType"].kAudio) {
              if (!unit.destinations) {
                unit.destinations = [];
              }

              if (!unit.destinations.length) {
                unit.destinations.push({
                  id: 0,
                  nr: 0,
                  type: 0,
                  nodeaddress: unit.node.logicalAddress,
                  unitaddress: unit.logicalAddress,
                  master: unit.node.master.getAddress(),
                  port: unit.node.master.getPort(),
                  name: "Audio",
                  maxvolume: 100,
                  volume: 0,
                  source: 0,
                  sources: [{
                    id: 0,
                    nr: 0,
                    name: "Src 1"
                  }, {
                    id: 1,
                    nr: 1,
                    name: "Src 2"
                  }, {
                    id: 2,
                    nr: 2,
                    name: "Src 3"
                  }, {
                    id: 3,
                    nr: 3,
                    name: "Src 4"
                  }, {
                    id: 4,
                    nr: 4,
                    name: "Src 5"
                  }, {
                    id: 5,
                    nr: 5,
                    name: "Src 6"
                  }, {
                    id: 6,
                    nr: 6,
                    name: "Src 7"
                  }, {
                    id: 7,
                    nr: 7,
                    name: "Src 8"
                  }],
                  disc: 0,
                  track: 0,
                  frequency: "-",
                  preset: 0
                });
              }

              unit.destinationId = 0;
              unit.destination = unit.destinations[0];
              console.log("*****  Destinations for basic audio", unit);
              console.log("*****  destination != null " + (unit.destination != null));
            }
          });
        }
      }, {
        key: "neededVirtualUnits",
        value: function neededVirtualUnits() {
          var _this21 = this;

          this.rooms.forEach(function (room) {
            if (room.nodeaddress == 255) {
              var master = _this21.findMaster(room.master, room.port);

              if (master) {
                var node = _this21.findNode(master, room.nodeaddress);

                if (!node) {
                  // add node to master
                  node = new _protocol__WEBPACK_IMPORTED_MODULE_4__["Node"](master, {
                    name: "Virtual Node",
                    logicalReqNodeAddress: 255,
                    nrUnits: 0,
                    index: 0,
                    logicalAddress: 255,
                    physicalAddress: 255,
                    type: _types__WEBPACK_IMPORTED_MODULE_3__["NodeType"].kNoNode
                  });
                  master.nodes.push(node);
                }

                if (!_this21.findUnit(master, room.nodeaddress, room.unitaddress)) {
                  // add unit to node
                  var unit = new _protocol__WEBPACK_IMPORTED_MODULE_4__["Unit"](node, {
                    name: room.name,
                    logicalReqNodeAddress: 255,
                    logicalNodeAddress: 255,
                    index: room.unitaddress,
                    logicalAddress: room.unitaddress,
                    physicalAddress: room.unitaddress,
                    type: _types__WEBPACK_IMPORTED_MODULE_3__["UnitType"].kAV
                  });
                  unit.active = true;
                  node.units.push(unit);
                  node.nrUnits++; // we never get a database info for this unit, so increment ourself
                }
              }
            }
          });
        }
      }, {
        key: "doRequestAudio",
        value: function doRequestAudio(master) {
          // request audio config (will come in async)
          // prepend ip address of the master
          if (master) {
            this.log("requesting audio config from " + master.getAddress());

            _protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].write(master.getSocket(), '[9,A-' + master.getAddress() + '-audio:]');

            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Requesting audio configs");
          } else {
            Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "No master -> No audio configs");
          }
        }
      }, {
        key: "doReceiveAudio",
        value: function doReceiveAudio(master, data) {
          var audio = this.fromTransport(data);
          this.log("received audio: sources = " + audio.length);
          console.log(JSON.stringify(audio, null, 2));
          this.rooms = audio.map(function (room) {
            return {
              id: room.id,
              name: room.name,
              nodeaddress: room.nodeaddress,
              unitaddress: room.unitaddress,
              master: master.getAddress(),
              port: master.getPort(),
              destination: 0,
              destinations: room.destinations.map(function (destination) {
                return {
                  id: destination.id,
                  nr: destination.destinationnr,
                  nodeaddress: destination.nodeaddress,
                  unitaddress: destination.unitaddress,
                  master: master.getAddress(),
                  port: master.getPort(),
                  name: destination.name,
                  maxvolume: destination.maxvolume,
                  type: destination.type,
                  volume: 0,
                  source: 0,
                  sources: destination.sources.map(function (source) {
                    return {
                      id: source.id,
                      nr: source.sourcenr,
                      name: source.name
                    };
                  })
                };
              })
            };
          });
          console.log("made rooms: ", this.rooms);
          Object(_core_stdUX__WEBPACK_IMPORTED_MODULE_8__["doToast"])(this.toastCtrl, "Received " + this.rooms.length + " audio rooms");
          this.writeAudio();
          this.neededVirtualUnits();
        }
      }, {
        key: "writeAudio",
        value: function writeAudio() {
          this.write("audio", this.rooms);
        }
      }, {
        key: "readAudio",
        value: function readAudio() {
          this.rooms = this.read("audio");
        } ///////////
        // Rooms //
        ///////////
        //////////////////
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

  /*! exports provided: NodeType, UnitType, UnitExtendedType, kEmptyUnit, kEmptyUnitScene, kEmptyScene, kEmptyGroup, WriteError, kEmptyCommRecord, Sanitizers, ascii, char, two, hex, now, formatDT, single */

  /***/
  function srcAppSystemTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeType", function () {
      return NodeType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitType", function () {
      return UnitType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitExtendedType", function () {
      return UnitExtendedType;
    });
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


    __webpack_require__.d(__webpack_exports__, "formatDT", function () {
      return formatDT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "single", function () {
      return single;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // Johan Coppieters.
    //
    // v1 - server version Apr 2019
    // v2 - app version
    // v3 - added scenes May 2020
    // v3.1 - brought in line with server version
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
    var UnitType;

    (function (UnitType) {
      UnitType[UnitType["kNoType"] = 0] = "kNoType";
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
    })(UnitType || (UnitType = {}));

    ;
    var UnitExtendedType;

    (function (UnitExtendedType) {
      UnitExtendedType[UnitExtendedType["kNoType"] = 0] = "kNoType";
      UnitExtendedType[UnitExtendedType["kDimmer"] = 1] = "kDimmer";
      UnitExtendedType[UnitExtendedType["kSwitch"] = 2] = "kSwitch";
      UnitExtendedType[UnitExtendedType["kInput"] = 3] = "kInput";
      UnitExtendedType[UnitExtendedType["kTemperature"] = 4] = "kTemperature";
      UnitExtendedType[UnitExtendedType["kExtendedAudio"] = 5] = "kExtendedAudio";
      UnitExtendedType[UnitExtendedType["kMood"] = 7] = "kMood";
      UnitExtendedType[UnitExtendedType["kSwitchingMotor"] = 8] = "kSwitchingMotor";
      UnitExtendedType[UnitExtendedType["kAudio"] = 10] = "kAudio";
      UnitExtendedType[UnitExtendedType["kAV"] = 11] = "kAV";
      UnitExtendedType[UnitExtendedType["kIRTX"] = 12] = "kIRTX";
      UnitExtendedType[UnitExtendedType["kVideo"] = 14] = "kVideo";
      UnitExtendedType[UnitExtendedType["kLightbulb"] = 101] = "kLightbulb";
      UnitExtendedType[UnitExtendedType["kCondition"] = 102] = "kCondition";
      UnitExtendedType[UnitExtendedType["kGarageDoor"] = 201] = "kGarageDoor";
      UnitExtendedType[UnitExtendedType["kDoor"] = 202] = "kDoor";
      UnitExtendedType[UnitExtendedType["kLock"] = 203] = "kLock";
      UnitExtendedType[UnitExtendedType["kUnlocker"] = 204] = "kUnlocker";
    })(UnitExtendedType || (UnitExtendedType = {}));

    ;
    ;
    ;
    ;
    ;
    var kEmptyUnit = {
      masterAddress: "0.0.0.0",
      masterPort: 5001,
      name: "unit",
      logicalAddress: 0,
      logicalNodeAddress: 0,
      type: 0
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
      group: 0,
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
        var _this22 = this;

        if (!config) {
          config = {};
        }

        config.language = config.language || 'EN';
        config.backupname = config.backupname || 'default';
        config.stores = config.stores || false;
        config.multiple = config.multiple || false;
        config.remotescenes = config.remotescenes || false;
        config.socketserver = config.socketserver || 'akiworks.be';
        config.socketport = config.socketport || 9999;
        config.cmasters = config.cmasters || [];
        delete config["cnodes"];
        config.cunits = config.cunits || [];
        config.cunits.forEach(function (u) {
          return _this22.unitDef(u);
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
        var _this23 = this;

        if (!config) {
          return [this.group()];
        }

        config.forEach(function (g) {
          return _this23.group(g);
        });
        return config;
      },
      /////////////////  
      // Audio Rooms //
      audio: function audio(config) {
        if (!config) {
          return [];
        }

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

        config.group = config.group || -1;
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
          value: config.value,
          name: config.name,
          type: config.type
        };
      },
      unitInfo: function unitInfo(info, into) {
        info.name = info.name || '';
        info.logicalReqNodeAddress = info.logicalReqNodeAddress || 0;
        info.index = info.index || -1;
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.type = info.type || UnitType.kNoType;
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
        var _this24 = this;

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

        if (typeof config.group === 'string') {
          config.group = parseInt(config.group);
        }

        newConfig.group = config.group || -1;
        newConfig.trigger = this.unitScene(config.trigger);
        config.units = config.units || kEmptyScene.units;
        newConfig.units = config.units.map(function (u) {
          return _this24.unitScene(u);
        });
        return newConfig;
      },
      scenes: function scenes(config) {
        var _this25 = this;

        // if (!config) { return [this.sceneConfig()]; }
        if (!config) {
          return [];
        }

        config.forEach(function (s) {
          return _this25.sceneConfig(s);
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
        info.type = info.type || NodeType.kNoNode;
        info.flags = info.flags || 0;
        info.nrUnits = info.nrUnits || 0;

        if (into) {
          Object.keys(info).forEach(function (prop) {
            return into[prop] = info[prop];
          });
        }

        return info;
      },
      unitDef: function unitDef(info) {
        info.name = info.name || '';
        info.logicalNodeAddress = info.logicalNodeAddress || 0;
        info.logicalAddress = info.logicalAddress || 0;
        info.masterAddress = info.masterAddress || '';
        info.masterPort = info.masterPort || 5001;
        info.type = info.type || UnitType.kNoType;
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
      return formatDT(new Date());
    }

    function formatDT(dt) {
      return two(dt.getDate()) + '-' + two(dt.getMonth() + 1) + '-' + dt.getFullYear() + ' ' + two(dt.getHours()) + ':' + two(dt.getMinutes()) + ':' + two(dt.getSeconds());
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