function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-tabs-module"], {
  /***/
  "./src/app/tabs/config/config.general.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs/config/config.general.ts ***!
    \***********************************************/

  /*! exports provided: ConfigGeneral */

  /***/
  function srcAppTabsConfigConfigGeneralTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigGeneral", function () {
      return ConfigGeneral;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var src_app_core_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/translate.pipe */
    "./src/app/core/translate.pipe.ts");

    var ConfigGeneral =
    /*#__PURE__*/
    function () {
      function ConfigGeneral(system, alertCtrl) {
        _classCallCheck(this, ConfigGeneral);

        this.system = system;
        this.alertCtrl = alertCtrl;
        this.showcomm = false;
      }

      _createClass(ConfigGeneral, [{
        key: "saveConfig",
        value: function saveConfig() {
          var multipleChanged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (multipleChanged) {
            // turn off all but 1
            if (!this.system.config.multiple) {
              var first = this.system.groups.find(function (g) {
                return g.visible;
              });
              this.system.groups.forEach(function (g) {
                if (g != first) g.visible = false;
              });
            }
          }

          this.system.writeConfig();
        }
      }, {
        key: "allowComm",
        value: function allowComm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var answer;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.showcomm) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 3;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAsk"])(this.alertCtrl, {
                      title: Object(src_app_core_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["Translate"])('Config.EnableAdv', this.system),
                      message: Object(src_app_core_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["Translate"])('Config.EnterPW', this.system),
                      inputs: [{
                        name: 'Password'
                      }],
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 3:
                    answer = _context.sent;
                    // if the password is wrong, set 'showcomm' back to false
                    this.showcomm = answer.Password === '2222';

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doRestore",
        value: function doRestore() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var answer;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAlert"])(this.alertCtrl, {
                      title: 'Replace settings',
                      message: 'Are you sure you want to replace all your settings with the last backup',
                      buttons: [{
                        text: 'No'
                      }, {
                        text: 'Yes',
                        id: 'yes'
                      }]
                    });

                  case 2:
                    answer = _context2.sent;
                    if (answer === 'yes') this.system.doRestoreBackup();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "doRequestBackup",
        value: function doRequestBackup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.system.doRequestBackup(this.system.config.backupname);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "doBackup",
        value: function doBackup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.system.doBackup(this.system.config.backupname);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "sendScenes",
        value: function sendScenes() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.system.sendScenes(this.system.config.backupname);

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ConfigGeneral;
    }();

    ConfigGeneral.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ConfigGeneral = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'config-general',
      template: "\n    <ion-list>\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>\n            {{ \"Config.Settings\" |_ }}\n          </ion-label>\n        </ion-item-divider>\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.Language\" |_ }}</ion-label>\n          <ion-select name=\"language\" interface=\"popover\"\n                      [(ngModel)]=\"system.config.language\" (ionChange)=\"saveConfig()\">\n            <ion-select-option value=\"EN\">English</ion-select-option>\n            <ion-select-option value=\"NL\">Nederlands</ion-select-option>\n            <ion-select-option value=\"FR\">Fran\xE7ais</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.SeparateStores\" |_ }}</ion-label>\n          <ion-toggle name=\"stores\" [(ngModel)]=\"system.config.stores\" (ionChange)=\"saveConfig()\"></ion-toggle>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.MultipleGroups\" |_ }}</ion-label>\n          <ion-toggle name=\"multiple\" [(ngModel)]=\"system.config.multiple\" (ionChange)=\"saveConfig(true)\"></ion-toggle>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-list-group>\n        <ion-item-divider>\n          <ion-label>\n            {{ \"Config.Communication\" |_ }} <span class=\"comm\">({{ system.config.socketserver }})</span>\n          </ion-label>\n        </ion-item-divider>\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.Advanced\" |_ }}</ion-label>\n          <ion-toggle name=\"communication\" [(ngModel)]=\"showcomm\" (ionChange)=\"allowComm()\"></ion-toggle>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"showcomm\">\n          <ion-label position=\"stacked\">Socket server IP</ion-label>\n          <ion-input name=\"socketserver\" type=\"text\" [(ngModel)]=\"system.config.socketserver\" (ionBlur)=\"saveConfig()\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"showcomm\">\n          <ion-label position=\"stacked\">Socket server port</ion-label>\n          <ion-input name=\"socketport\" type=\"text\" [(ngModel)]=\"system.config.socketport\" (ionBlur)=\"saveConfig()\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"showcomm\">\n          <ion-label>Remote Scenes</ion-label>\n          <ion-toggle name=\"remotescenes\" [(ngModel)]=\"system.config.remotescenes\" (ionChange)=\"saveConfig()\"></ion-toggle>\n        </ion-item>\n      </ion-list-group>\n\n      <ion-list-group>\n        <ion-item-divider>\n          <ion-label>\n            {{ \"Config.Backup\" |_ }}\n          </ion-label>\n        </ion-item-divider>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">{{ \"Config.Backup.name\" |_ }}</ion-label>\n          <ion-input name=\"backupname\" type=\"text\" [(ngModel)]=\"system.config.backupname\" (ionBlur)=\"saveConfig()\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.Backup.config\" |_ }}</ion-label>\n          <ion-buttons><ion-button (click)=\"doBackup()\"><ion-icon name=\"settings-outline\" slot=\"end\"></ion-icon>{{ \"Config.Backup.send\" |_ }}</ion-button></ion-buttons>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.Backup.get\" |_ }}</ion-label>\n          <ion-buttons><ion-button (click)=\"doRequestBackup()\"><ion-icon name=\"settings-outline\" slot=\"end\"></ion-icon>{{ \"Config.Backup.fetch\" |_ }}</ion-button></ion-buttons>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"system.backup\">\n          <ion-label>{{ \"Config.Backup.restore\" |_ }}: \n            <small>{{ system.backup.config.cmasters.length }} {{ \"Config.Masters\" |_ }}, \n                    {{ system.backup.config.cunits.length }} {{ \"Config.Units\" |_ }}, \n                    {{ system.backup.groups.length }} {{ \"Config.Groups\" |_ }},\n                    {{ system.backup.scenes.length }} {{ \"Config.Scenes\" |_ }}</small>\n          </ion-label>\n          <ion-buttons>\n            <ion-button (click)=\"doRestore()\"><ion-icon name=\"settings-outline\" slot=\"end\"></ion-icon>{{ \"Config.Backup.replace\" |_ }}</ion-button>\n          </ion-buttons>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"system.config.remotescenes\">\n          <ion-label>{{ \"Config.Backup.scenes\" |_ }}</ion-label>\n          <ion-buttons><ion-button (click)=\"sendScenes()\"><ion-icon name=\"list\" slot=\"end\"></ion-icon>{{ \"Config.Backup.send\" |_ }}</ion-button></ion-buttons>\n        </ion-item>\n      </ion-list-group>\n    </ion-list>\n    "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], ConfigGeneral);
    /***/
  },

  /***/
  "./src/app/tabs/config/config.groups.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/config/config.groups.ts ***!
    \**********************************************/

  /*! exports provided: ConfigGroupsComponent */

  /***/
  function srcAppTabsConfigConfigGroupsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigGroupsComponent", function () {
      return ConfigGroupsComponent;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ConfigGroupsComponent =
    /*#__PURE__*/
    function () {
      function ConfigGroupsComponent(system, alertCtrl) {
        _classCallCheck(this, ConfigGroupsComponent);

        this.system = system;
        this.alertCtrl = alertCtrl;
      }

      _createClass(ConfigGroupsComponent, [{
        key: "saveGroups",
        value: function saveGroups() {
          // clean up each record and make clean ordering
          this.system.writeGroups();
        }
      }, {
        key: "reorderGroups",
        value: function reorderGroups(event) {
          //console.log("from: " + event.detail.from + ", to: " + event.detail.to);
          // prevent from "falling off"
          var len = this.system.groups.length;
          if (event.detail.to >= len) event.detail.to = len - 1; // swap the order numbers

          this.system.groups[event.detail.from].order = event.detail.to;
          this.system.groups[event.detail.to].order = event.detail.from; // sort and clean up the numbering

          this.system.groups.sort(function (a, b) {
            return a.order - b.order;
          });
          this.system.groups.forEach(function (s, i) {
            return s.order = i;
          }); //console.log("sorted: ", this.system.groups);

          event.detail.complete();
          this.saveGroups();
        }
      }, {
        key: "tryDelete",
        value: function tryDelete(group) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var answer;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(this.system.groups.length > 1)) {
                      _context6.next = 5;
                      break;
                    }

                    _context6.next = 3;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doAlert"])(this.alertCtrl, {
                      title: 'Delete group',
                      message: 'Are you sure you want to delete the group \'' + group.name + '\'',
                      buttons: [{
                        text: 'No'
                      }, {
                        text: 'Yes',
                        id: 'delete'
                      }]
                    });

                  case 3:
                    answer = _context6.sent;

                    if (answer === 'delete') {
                      this.system.deleteGroup(group);
                    }

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return ConfigGroupsComponent;
    }();

    ConfigGroupsComponent.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    ConfigGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'config-groups',
      template: "\n    <ion-reorder-group disabled=\"false\" (ionItemReorder)=\"reorderGroups($event)\" class=\"groups\">\n      <ion-item lines=\"none\" *ngFor=\"let group of system.groups; let inx = index\">\n        <ion-label position=\"stacked\">Group {{inx+1}}</ion-label>\n        <ion-buttons slot=\"end\" *ngIf=\"system.groups.length > 1\">\n          <ion-button (click)=\"tryDelete(group)\" color=\"primary\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-button>\n          <ion-reorder></ion-reorder>\n        </ion-buttons>\n        <ion-input type=\"text\" name=\"group{{inx+1}}\" [(ngModel)]=\"group.name\" (ionBlur)=\"saveGroups()\"></ion-input>\n      </ion-item>\n    </ion-reorder-group>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ConfigGroupsComponent);
    /***/
  },

  /***/
  "./src/app/tabs/config/config.masters.scss":
  /*!*************************************************!*\
    !*** ./src/app/tabs/config/config.masters.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsConfigConfigMastersScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item-group ion-item:not(:last-child) {\n  margin-bottom: 4px; }\n\nion-item-group ion-item:last-child {\n  margin-bottom: 24px; }\n\n.non-active {\n  color: var(--ion-color-medium); }\n\nspan {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2NvbmZpZy5tYXN0ZXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxrQkFBa0IsRUFBQTs7QUFIOUI7RUFNWSxtQkFBbUIsRUFBQTs7QUFLL0I7RUFDSSw4QkFBOEIsRUFBQTs7QUFFbEM7RUFBTyxhQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL2NvbmZpZy9jb25maWcubWFzdGVycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0tZ3JvdXAge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5vbi1hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbnNwYW4geyBtYXJnaW46IDhweCAwIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/config/config.masters.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs/config/config.masters.ts ***!
    \***********************************************/

  /*! exports provided: ConfigMastersComponent */

  /***/
  function srcAppTabsConfigConfigMastersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigMastersComponent", function () {
      return ConfigMastersComponent;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _edit_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit.node */
    "./src/app/tabs/config/edit.node.ts");
    /* harmony import */


    var _edit_master__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit.master */
    "./src/app/tabs/config/edit.master.ts");
    /* harmony import */


    var src_app_system_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/system/types */
    "./src/app/system/types.ts");

    var ConfigMastersComponent =
    /*#__PURE__*/
    function () {
      function ConfigMastersComponent(system, modalCtl, alertCtrl) {
        _classCallCheck(this, ConfigMastersComponent);

        this.system = system;
        this.modalCtl = modalCtl;
        this.alertCtrl = alertCtrl;
      } //////////////////
      // Master Stuff //
      //////////////////


      _createClass(ConfigMastersComponent, [{
        key: "editMaster",
        value: function editMaster(master) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var data;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doModal"])(this.modalCtl, _edit_master__WEBPACK_IMPORTED_MODULE_6__["EditMasterComponent"], {
                      masterConfig: master.config,
                      master: master
                    });

                  case 2:
                    data = _context7.sent;

                    if (!data.masterConfig) {
                      _context7.next = 13;
                      break;
                    }

                    this.system.log("Rebuilding master: " + master.getName());
                    _context7.prev = 5;
                    this.system.addMaster(data.masterConfig);
                    _context7.next = 13;
                    break;

                  case 9:
                    _context7.prev = 9;
                    _context7.t0 = _context7["catch"](5);
                    _context7.next = 13;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAlert"])(this.alertCtrl, {
                      title: 'Received error from master node',
                      message: _context7.t0.toString(),
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[5, 9]]);
          }));
        }
      }, {
        key: "deleteMaster",
        value: function deleteMaster(master) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var answer;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAlert"])(this.alertCtrl, {
                      title: 'Delete master node',
                      message: 'Are you sure you want to delete this master "' + master.config.name + '" (' + master.config.address + ')',
                      buttons: [{
                        text: 'No'
                      }, {
                        text: 'Yes',
                        id: 'delete'
                      }]
                    });

                  case 2:
                    answer = _context8.sent;

                    if (answer === 'delete') {
                      this.system.deleteMaster(master);
                    }

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "sameSchedule",
        value: function sameSchedule(a, b) {
          return a * 1 == b * 1;
        }
      }, {
        key: "changeSchedule",
        value: function changeSchedule(master) {
          console.log("changeSchedule -> " + master.schedule + " (" + typeof master.schedule + ")");
          master.setSchedule();
        }
      }, {
        key: "showDate",
        value: function showDate(master) {
          return master.date ? Object(src_app_system_types__WEBPACK_IMPORTED_MODULE_7__["formatDT"])(master.date) : "";
        } ////////////////
        // Node Stuff //
        ////////////////

      }, {
        key: "editNode",
        value: function editNode(node) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doModal"])(this.modalCtl, _edit_node__WEBPACK_IMPORTED_MODULE_5__["EditNode"], {
                      node: node
                    });

                  case 2:
                    this.system.updateSystem(true);
                    node.master.requestNodeStatus(node);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return ConfigMastersComponent;
    }();

    ConfigMastersComponent.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_3__["System"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    ConfigMastersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'config-masters',
      template: "\n    <ion-list>\n      <ion-item-group *ngFor=\"let master of system.masters; let inx=index\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"code-working\" slot=\"start\"></ion-icon>\n          <span [class.non-active]=\"!master.config.active\">{{master.config.name}}<br>\n            <small>{{master.getAddress()}}</small>\n            <small *ngIf=\"master.date\"><br>{{showDate(master)}}</small>\n          </span>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"editMaster(master)\" color=\"primary\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"deleteMaster(master)\" color=\"danger\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" *ngIf=\"master.config.active\">\n          <ion-label>Schedule {{master.schedule}}</ion-label>\n          <ion-select [(ngModel)]=\"master.schedule\" name=\"schedule{{inx}}\" (ionChange)=\"changeSchedule(master)\" \n                      interface=\"popover\" [compareWith]=\"sameSchedule\">\n            <ion-select-option value=\"0\">{{ \"Config.Week\" |_ }} 1</ion-select-option>\n            <ion-select-option value=\"1\">{{ \"Config.Week\" |_ }} 2</ion-select-option>\n            <ion-select-option value=\"2\">{{ \"Config.Week\" |_ }} 3</ion-select-option>\n            <ion-select-option value=\"3\">{{ \"Config.Holiday\" |_ }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"none\" *ngFor=\"let node of master.nodes\" (click)=\"editNode(node)\">\n          <ion-icon name=\"list\" slot=\"end\"></ion-icon>\n          {{node.getName()}} <span class=\"addr\">({{node.getNumber()}}, {{node.units.length}}/{{node.nrUnits}})</span>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config.masters.scss */
      "./src/app/tabs/config/config.masters.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_3__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], ConfigMastersComponent);
    /***/
  },

  /***/
  "./src/app/tabs/config/config.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/config/config.module.ts ***!
    \**********************************************/

  /*! exports provided: ConfigPageModule */

  /***/
  function srcAppTabsConfigConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function () {
      return ConfigPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./config */
    "./src/app/tabs/config/config.ts");
    /* harmony import */


    var _config_masters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./config.masters */
    "./src/app/tabs/config/config.masters.ts");
    /* harmony import */


    var _edit_master__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit.master */
    "./src/app/tabs/config/edit.master.ts");
    /* harmony import */


    var _edit_node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit.node */
    "./src/app/tabs/config/edit.node.ts");
    /* harmony import */


    var _config_general__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./config.general */
    "./src/app/tabs/config/config.general.ts");
    /* harmony import */


    var _config_groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./config.groups */
    "./src/app/tabs/config/config.groups.ts");
    /* harmony import */


    var _config_scenes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./config.scenes */
    "./src/app/tabs/config/config.scenes.ts");
    /* harmony import */


    var _edit_scene__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./edit.scene */
    "./src/app/tabs/config/edit.scene.ts");
    /* harmony import */


    var _select_trigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./select.trigger */
    "./src/app/tabs/config/select.trigger.ts");

    var ConfigPageModule = function ConfigPageModule() {
      _classCallCheck(this, ConfigPageModule);
    };

    ConfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _config__WEBPACK_IMPORTED_MODULE_7__["ConfigPage"]
      }])],
      entryComponents: [_config__WEBPACK_IMPORTED_MODULE_7__["ConfigPage"], _config_masters__WEBPACK_IMPORTED_MODULE_8__["ConfigMastersComponent"], _config_general__WEBPACK_IMPORTED_MODULE_11__["ConfigGeneral"], _config_groups__WEBPACK_IMPORTED_MODULE_12__["ConfigGroupsComponent"], _config_scenes__WEBPACK_IMPORTED_MODULE_13__["ConfigScenes"], _edit_master__WEBPACK_IMPORTED_MODULE_9__["EditMasterComponent"], _edit_node__WEBPACK_IMPORTED_MODULE_10__["EditNode"], _edit_scene__WEBPACK_IMPORTED_MODULE_14__["EditScene"], _select_trigger__WEBPACK_IMPORTED_MODULE_15__["SelectTrigger"]],
      declarations: [_config__WEBPACK_IMPORTED_MODULE_7__["ConfigPage"], _edit_master__WEBPACK_IMPORTED_MODULE_9__["EditMasterComponent"], _edit_node__WEBPACK_IMPORTED_MODULE_10__["EditNode"], _edit_scene__WEBPACK_IMPORTED_MODULE_14__["EditScene"], _config_masters__WEBPACK_IMPORTED_MODULE_8__["ConfigMastersComponent"], _config_general__WEBPACK_IMPORTED_MODULE_11__["ConfigGeneral"], _config_groups__WEBPACK_IMPORTED_MODULE_12__["ConfigGroupsComponent"], _config_scenes__WEBPACK_IMPORTED_MODULE_13__["ConfigScenes"], _select_trigger__WEBPACK_IMPORTED_MODULE_15__["SelectTrigger"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ConfigPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/config/config.scenes.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/config/config.scenes.ts ***!
    \**********************************************/

  /*! exports provided: ConfigScenes */

  /***/
  function srcAppTabsConfigConfigScenesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigScenes", function () {
      return ConfigScenes;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit.scene */
    "./src/app/tabs/config/edit.scene.ts");

    var ConfigScenes =
    /*#__PURE__*/
    function () {
      function ConfigScenes(system, modalCtl) {
        _classCallCheck(this, ConfigScenes);

        this.system = system;
        this.modalCtl = modalCtl;
      }

      _createClass(ConfigScenes, [{
        key: "editScene",
        value: function editScene(scene, inx) {
          this.showEditScene(scene, inx);
        }
      }, {
        key: "showEditScene",
        value: function showEditScene(scene, inx) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var data;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doModal"])(this.modalCtl, _edit_scene__WEBPACK_IMPORTED_MODULE_5__["EditScene"], {
                      scene: scene
                    });

                  case 2:
                    data = _context10.sent;

                    if (data.trigger) {
                      if (data.order === -1) {
                        // delete request
                        this.system.scenes.splice(inx, 1);
                      } else {
                        // save the edits
                        this.system.scenes[inx] = data;
                      }

                      this.system.writeScenes();
                    }

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        } ////////////
        // Events //
        ////////////

      }, {
        key: "reorderGroups",
        value: function reorderGroups(event) {
          // prevent from "faling off"
          var len = this.system.groups.length;
          if (event.detail.to >= len) event.detail.to = len - 1; // swap the order numbers

          this.system.scenes[event.detail.from].order = event.detail.to;
          this.system.scenes[event.detail.to].order = event.detail.from; // sort and clean up the numbering

          this.system.scenes.sort(function (a, b) {
            return a.order - b.order;
          });
          this.system.scenes.forEach(function (s, i) {
            return s.order = i;
          });
          event.detail.complete();
          this.system.writeScenes();
        }
      }]);

      return ConfigScenes;
    }();

    ConfigScenes.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    ConfigScenes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'config-scenes',
      template: "\n    <ion-reorder-group disabled=\"false\" (ionItemReorder)=\"reorderGroups($event)\">\n      <ion-item lines=\"none\" *ngFor=\"let scene of system.scenes; let inx = index;\">\n        <ion-label (click)=\"editScene(scene, inx)\">{{ scene.name }}</ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"editScene(scene, inx)\" color=\"primary\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n          <ion-reorder *ngIf=\"system.scenes.length > 1\"></ion-reorder>\n        </ion-buttons>\n      </ion-item>\n    </ion-reorder-group>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], ConfigScenes);
    /***/
  },

  /***/
  "./src/app/tabs/config/config.scss":
  /*!*****************************************!*\
    !*** ./src/app/tabs/config/config.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsConfigConfigScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".version {\n  margin-left: 4px;\n  font-size: 0.8rem;\n  color: grey; }\n\n.version .manual {\n  float: right; }\n\n/* segment */\n\nion-segment {\n  margin-bottom: 16px; }\n\n.ios ion-segment-button {\n  --padding-top: 5px;\n  --indicator-color: #fff; }\n\n.md ion-segment-button {\n  --background-checked: #fff; }\n\n@media (prefers-color-scheme: dark) {\n  .ios ion-segment-button {\n    --indicator-color: #595959; }\n  .md ion-segment-button {\n    --background-checked: var(--ion-color-step-100); } }\n\nion-toolbar ion-title {\n  margin-right: -75px;\n  margin-left: inherit; }\n\nion-toolbar .config-adder {\n  width: 100px;\n  margin-top: 4px;\n  display: block;\n  margin-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2NvbmZpZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUNKLEVBQUE7O0FBQ0E7RUFDRSxZQUNGLEVBQUE7O0FBRUEsWUFBQTs7QUFDQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUVRLGtCQUFjO0VBQ2QsdUJBQWtCLEVBQUE7O0FBRzFCO0VBRVEsMEJBQXFCLEVBQUE7O0FBRzdCO0VBQ0k7SUFFUSwwQkFBa0IsRUFBQTtFQUcxQjtJQUVRLCtDQUFxQixFQUFBLEVBQ3hCOztBQUlUO0VBRVEsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUg1QjtFQU1RLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvY29uZmlnL2NvbmZpZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnNpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IGdyZXlcbn1cbi52ZXJzaW9uIC5tYW51YWwge1xuICBmbG9hdDogcmlnaHRcbn1cblxuLyogc2VnbWVudCAqL1xuaW9uLXNlZ21lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uaW9zIHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cbi5tZCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmY7XG4gICAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIC5pb3Mge1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6ICM1OTU5NTk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1kIHtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNzVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5jb25maWctYWRkZXIge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/config/config.ts":
  /*!***************************************!*\
    !*** ./src/app/tabs/config/config.ts ***!
    \***************************************/

  /*! exports provided: ConfigPage */

  /***/
  function srcAppTabsConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPage", function () {
      return ConfigPage;
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


    var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var _system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../system/types */
    "./src/app/system/types.ts");
    /* harmony import */


    var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _edit_master__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit.master */
    "./src/app/tabs/config/edit.master.ts");
    /* harmony import */


    var _edit_scene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit.scene */
    "./src/app/tabs/config/edit.scene.ts");

    var ConfigPage =
    /*#__PURE__*/
    function () {
      function ConfigPage(modalCtl, alertCtrl, system) {
        _classCallCheck(this, ConfigPage);

        this.modalCtl = modalCtl;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.what = this.system.masters.length <= 0 ? 'masters' : 'general';
      } /////////////
      // Masters //
      /////////////


      _createClass(ConfigPage, [{
        key: "addMaster",
        value: function addMaster() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var data;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doModal"])(this.modalCtl, _edit_master__WEBPACK_IMPORTED_MODULE_6__["EditMasterComponent"], {});

                  case 2:
                    data = _context11.sent;

                    if (!data.masterConfig) {
                      _context11.next = 12;
                      break;
                    }

                    _context11.prev = 4;
                    this.system.addMaster(data.masterConfig);
                    _context11.next = 12;
                    break;

                  case 8:
                    _context11.prev = 8;
                    _context11.t0 = _context11["catch"](4);
                    _context11.next = 12;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doAlert"])(this.alertCtrl, {
                      title: 'Received error from master node',
                      message: _context11.t0.toString(),
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 12:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[4, 8]]);
          }));
        } ////////////
        // Groups //
        ////////////

      }, {
        key: "addGroup",
        value: function addGroup() {
          // find max id
          var max = this.system.groups.reduce(function (m, g) {
            return g.id > m ? g.id : m;
          }, this.system.groups[0].id);
          this.system.groups.push(Object.assign({}, _system_types__WEBPACK_IMPORTED_MODULE_4__["kEmptyGroup"], {
            id: max + 1
          }));
        } ////////////
        // Scenes //
        ////////////

      }, {
        key: "addScene",
        value: function addScene() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var scene, data;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    scene = Object.assign({}, _system_types__WEBPACK_IMPORTED_MODULE_4__["kEmptyScene"]);
                    this.system.scenes.push(scene);
                    _context12.next = 4;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doModal"])(this.modalCtl, _edit_scene__WEBPACK_IMPORTED_MODULE_7__["EditScene"], {
                      scene: scene
                    });

                  case 4:
                    data = _context12.sent;
                    this.system.writeScenes();

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return ConfigPage;
    }();

    ConfigPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]
      }];
    };

    ConfigPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-config',
      template: "\n  <ion-header>\n    <ion-toolbar>\n      <img slot=\"start\" src=\"/assets/icon/duotecno.png\" />\n      <ion-title>{{'Page.Config' |_ }}</ion-title>\n\n      <ion-buttons slot=\"end\" class=\"config-adder\">\n        <ion-button (click)=\"addGroup()\" *ngIf=\"what === 'groups'\">\n          <ion-icon name=\"add\"></ion-icon> {{\"Config.Group\" |_ }}\n        </ion-button>\n\n        <ion-button (click)=\"addMaster()\" *ngIf=\"what === 'masters'\">\n          <ion-icon name=\"add\"></ion-icon> {{\"Config.Master\" |_ }}\n        </ion-button>\n\n        <ion-button (click)=\"addScene()\" *ngIf=\"what === 'scenes'\">\n          <ion-icon name=\"add\"></ion-icon> {{\"Config.Scenes.scene\" |_ }}\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <ion-segment [(ngModel)]=\"what\">\n      <ion-segment-button value=\"general\">\n        <ion-icon name=\"settings-outline\"></ion-icon>\n        <ion-label>{{ \"Config.General\" |_ }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"groups\">\n        <ion-icon name=\"folder\"></ion-icon>\n        <ion-label>{{ \"Config.Groups\" |_ }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"masters\">\n        <ion-icon name=\"code-working\"></ion-icon>\n        <ion-label>{{ \"Config.Masters\" |_ }}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"scenes\">\n        <ion-icon name=\"list\"></ion-icon>\n        <ion-label>{{ \"Config.Scenes\" |_ }}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <config-general *ngIf=\"what === 'general'\"></config-general>\n    <config-groups  *ngIf=\"what === 'groups'\"></config-groups>\n    <config-scenes  *ngIf=\"what === 'scenes'\"></config-scenes>\n    <config-masters *ngIf=\"what === 'masters'\"></config-masters>\n\n    <p class=\"version\">\n      <span>v2.3.0b5 \xA9 Duotecno & Johan Coppieters</span>\n      <span class=\"manual\">Download the <a href=\"https://www.duotecno.be/wp-content/uploads/2020/05/Duotecno-smartbox-app-1.pdf\">manual</a></span>\n    </p>\n  </ion-content>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config.scss */
      "./src/app/tabs/config/config.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])], ConfigPage);
    /***/
  },

  /***/
  "./src/app/tabs/config/edit.master.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/config/edit.master.ts ***!
    \********************************************/

  /*! exports provided: EditMasterComponent */

  /***/
  function srcAppTabsConfigEditMasterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditMasterComponent", function () {
      return EditMasterComponent;
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


    var _system_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../system/types */
    "./src/app/system/types.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EditMasterComponent =
    /*#__PURE__*/
    function () {
      function EditMasterComponent(modalCtrl, navParams) {
        _classCallCheck(this, EditMasterComponent);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
      }

      _createClass(EditMasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.masterConfig = this.navParams.get('masterConfig') || _system_types__WEBPACK_IMPORTED_MODULE_2__["Sanitizers"].masterConfig();
        }
      }, {
        key: "save",
        value: function save() {
          this.modalCtrl.dismiss({
            masterConfig: this.masterConfig
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.modalCtrl.dismiss({});
        }
      }, {
        key: "audio",
        value: function audio() {
          var master = this.navParams.get('master');

          if (master && master.isLoggedIn) {
            master.requestAudio();
          }
        }
      }]);

      return EditMasterComponent;
    }();

    EditMasterComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }];
    };

    EditMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'edit-master',
      template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{ \"Config.Master\" |_ }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <ion-list>\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">External IP or URL</ion-label>\n        <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"masterConfig.address\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Port</ion-label>\n        <ion-input type=\"text\" name=\"port\" [(ngModel)]=\"masterConfig.port\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"masterConfig.password\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\">Name</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"masterConfig.name\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-label>Active</ion-label>\n        <ion-toggle name=\"active\" [(ngModel)]=\"masterConfig.active\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer class=\"ion-padding\">\n    <ion-buttons>\n      <ion-button (click)=\"save()\" color=\"secondary\">{{\"General.Save\" |_ }}</ion-button>\n      <ion-button (click)=\"cancel()\" color=\"primary\">{{\"General.Cancel\" |_ }}</ion-button>\n      <ion-button (click)=\"audio()\" color=\"secondary audio\">{{\"Config.GetAudioRooms\" |_ }}</ion-button>\n    </ion-buttons>\n  </ion-footer>\n  ",
      styles: ["ion-button.audio { float: right; display: inline-block }", "ion-buttons { display: inline }"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])], EditMasterComponent);
    /***/
  },

  /***/
  "./src/app/tabs/config/edit.node.scss":
  /*!********************************************!*\
    !*** ./src/app/tabs/config/edit.node.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsConfigEditNodeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".select-text {\n  font-size: 1.2rem;\n  color: grey; }\n\n.select-ios .select-icon .select-icon-inner {\n  margin-top: -4px; }\n\n.item-select .label {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2VkaXQubm9kZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvY29uZmlnL2VkaXQubm9kZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogZ3JleTtcbn1cbi5zZWxlY3QtaW9zIC5zZWxlY3QtaWNvbiAuc2VsZWN0LWljb24taW5uZXIge1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG59XG4uaXRlbS1zZWxlY3QgLmxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/config/edit.node.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/config/edit.node.ts ***!
    \******************************************/

  /*! exports provided: EditNode */

  /***/
  function srcAppTabsConfigEditNodeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNode", function () {
      return EditNode;
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


    var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../system/system */
    "./src/app/system/system.ts");

    var EditNode =
    /*#__PURE__*/
    function () {
      function EditNode(modalCtrl, navParams, system) {
        _classCallCheck(this, EditNode);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.system = system;
      }

      _createClass(EditNode, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.node = this.navParams.get('node');

          if (!this.node.active || this.node.nrUnits !== this.node.units.length) {
            this.node.master.fetchAllUnits(this.node);
          } // should the name contains a ',' as a first character, don't show it active


          this.node.units.forEach(function (u) {
            if (u.name && u.name[0] === ',') u.active = false;
          });
        }
      }, {
        key: "sameGroup",
        value: function sameGroup(a, b) {
          return a * 1 == b * 1;
        }
      }, {
        key: "done",
        value: function done() {
          this.modalCtrl.dismiss();
        }
      }]);

      return EditNode;
    }();

    EditNode.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]
      }];
    };

    EditNode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'edit-node',
      template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{ \"Node.of\" |_ }} {{node.getName()}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <ion-list>\n        <ion-item *ngFor=\"let unit of node.units\" lines=\"none\">\n          <ion-label>{{unit.getName()}}<br/>\n            <span class=\"type\">{{unit.typeName()}}</span>\n            <span class=\"addr\">({{unit.getNumber()}})</span>\n          </ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"unit.active\" color=\"secondary\" [disabled]=\"unit.name[0]==','\"></ion-checkbox>\n          <ion-select *ngIf=\"system.groups.length > 1\" [(ngModel)]=\"unit.group\" [compareWith]=\"sameGroup\"\n                      interface=\"popover\" [interfaceOptions]=\"{title: unit.getName()}\">\n            <ion-select-option value=\"-1\">{{ \"Config.GroupsAll\" |_ }}</ion-select-option>\n            <ion-select-option *ngFor=\"let group of system.groups\" value=\"{{group.id}}\">{{group.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n    <ion-footer class=\"ion-padding\">\n      <ion-buttons>\n        <ion-button (click)=\"done()\" color=\"secondary\">{{ \"General.Done\" |_ }}</ion-button>\n      </ion-buttons>\n    </ion-footer>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.node.scss */
      "./src/app/tabs/config/edit.node.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])], EditNode);
    /***/
  },

  /***/
  "./src/app/tabs/config/edit.scene.scss":
  /*!*********************************************!*\
    !*** ./src/app/tabs/config/edit.scene.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsConfigEditSceneScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label.triggerName {\n  text-align: right;\n  margin-right: 8px; }\n\nspan.typeAndAddr {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium); }\n\nion-button.delete {\n  float: right; }\n\nion-buttons {\n  display: inline; }\n\nion-input[type=number] {\n  text-align: right;\n  width: 50px; }\n\nion-checkbox {\n  margin-right: 16px; }\n\n.range {\n  width: 102px;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2VkaXQuc2NlbmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF3QixpQkFBaUI7RUFBRSxpQkFBa0IsRUFBQTs7QUFFN0Q7RUFBbUIsaUJBQWlCO0VBQUUsOEJBQThCLEVBQUE7O0FBRXBFO0VBQW9CLFlBQWEsRUFBQTs7QUFFakM7RUFBYyxlQUFnQixFQUFBOztBQUU5QjtFQUF5QixpQkFBaUI7RUFBRSxXQUFZLEVBQUE7O0FBRXhEO0VBQWUsa0JBQW1CLEVBQUE7O0FBRWxDO0VBQVMsWUFBWTtFQUFFLHFCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9jb25maWcvZWRpdC5zY2VuZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLnRyaWdnZXJOYW1lIHsgdGV4dC1hbGlnbjogcmlnaHQ7IG1hcmdpbi1yaWdodDogOHB4IH1cblxuc3Bhbi50eXBlQW5kQWRkciB7IGZvbnQtc2l6ZTogMC45cmVtOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgfVxuXG5pb24tYnV0dG9uLmRlbGV0ZSB7IGZsb2F0OiByaWdodCB9XG5cbmlvbi1idXR0b25zIHsgZGlzcGxheTogaW5saW5lIH1cblxuaW9uLWlucHV0W3R5cGU9bnVtYmVyXSB7IHRleHQtYWxpZ246IHJpZ2h0OyB3aWR0aDogNTBweCB9XG5cbmlvbi1jaGVja2JveCB7IG1hcmdpbi1yaWdodDogMTZweCB9XG5cbi5yYW5nZSB7IHdpZHRoOiAxMDJweDsgZGlzcGxheTogaW5saW5lLWJsb2NrIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/config/edit.scene.ts":
  /*!*******************************************!*\
    !*** ./src/app/tabs/config/edit.scene.ts ***!
    \*******************************************/

  /*! exports provided: EditScene */

  /***/
  function srcAppTabsConfigEditSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditScene", function () {
      return EditScene;
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


    var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var src_app_system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/system/types */
    "./src/app/system/types.ts");
    /* harmony import */


    var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/stdUX */
    "./src/app/core/stdUX.ts");
    /* harmony import */


    var _select_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select.trigger */
    "./src/app/tabs/config/select.trigger.ts");

    var EditScene =
    /*#__PURE__*/
    function () {
      // select units + values
      // select unit (mood or input)
      function EditScene(modalCtrl, alertCtrl, system, navParams) {
        _classCallCheck(this, EditScene);

        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.navParams = navParams;
      }

      _createClass(EditScene, [{
        key: "sameGroup",
        value: function sameGroup(a, b) {
          return a * 1 == b * 1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.scene = src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].sceneConfig(this.navParams.get('scene')); // which controls are used within this scene and what is the desired value

          this.selection = [];
          this.values = [];
          this.system.controls.forEach(function (c) {
            var unit = _this.scene.units.find(function (u) {
              return c.isUnit(u.masterAddress, u.masterPort, u.logicalNodeAddress, u.logicalAddress);
            });

            _this.selection.push(!!unit);

            _this.values.push(unit ? unit.value : 0);
          }); // find the name of the trigger

          this.triggerName = this.getTriggerName();
        }
      }, {
        key: "getTriggerName",
        value: function getTriggerName() {
          if (this.scene.trigger.masterAddress) {
            var master = this.system.findMaster(this.scene.trigger.masterAddress, this.scene.trigger.masterPort);

            if (master) {
              var unit = master.findUnit(this.scene.trigger.logicalNodeAddress, this.scene.trigger.logicalAddress);
              if (unit) return unit.getName();
            }
          }

          return "-";
        }
      }, {
        key: "selectTrigger",
        value: function selectTrigger(scene) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var data;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doModal"])(this.modalCtrl, _select_trigger__WEBPACK_IMPORTED_MODULE_6__["SelectTrigger"], {
                      trigger: scene.trigger,
                      name: this.scene.name
                    });

                  case 2:
                    data = _context13.sent;

                    if (data.masterAddress) {
                      this.scene.trigger = data;
                      this.triggerName = this.getTriggerName();
                    }

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } ////////////
        // Events //
        ////////////

      }, {
        key: "changeD",
        value: function changeD(inx) {
          console.log("changed dimmer: " + inx + " -> " + this.values[inx]);
          if (this.values[inx] < 0) this.values[inx] = 0;
          if (this.values[inx] > 100) this.values[inx] = 100;
        }
      }, {
        key: "changeS",
        value: function changeS(inx) {
          console.log("changed switch: " + inx + " -> " + this.values[inx]);
        }
      }, {
        key: "done",
        value: function done() {
          var _this2 = this;

          // reconstruct the array with selected units (and their values)
          this.scene.units = [];
          this.system.controls.forEach(function (u, i) {
            if (_this2.selection[i]) {
              _this2.scene.units.push(src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].unitScene({
                masterAddress: u.node.master.getAddress(),
                masterPort: u.node.master.getPort(),
                logicalNodeAddress: u.node.logicalAddress,
                logicalAddress: u.logicalAddress,
                name: u.name,
                type: u.type,
                value: _this2.values[i]
              }));
            }
          });
          this.modalCtrl.dismiss(this.scene);
          this.system.triggerRebuild(true);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var answer;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doAlert"])(this.alertCtrl, {
                      title: 'Delete scene',
                      message: 'Are you sure you want to delete the scene "' + this.scene.name + '" ?',
                      buttons: [{
                        text: 'No'
                      }, {
                        text: 'Yes',
                        id: 'delete'
                      }]
                    });

                  case 2:
                    answer = _context14.sent;

                    if (answer === 'delete') {
                      this.scene.order = -1; // signal delete

                      this.modalCtrl.dismiss();
                    }

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return EditScene;
    }();

    EditScene.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    EditScene = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'edit-scene',
      template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{ \"Config.Scenes.for\" |_ }} {{scene.name}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">{{ \"Config.Scenes.name\" |_ }}</ion-label>\n          <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"scene.name\"></ion-input>\n        </ion-item>\n\n        <!-- ion-item lines=\"none\">\n          <ion-label>{{ \"Config.Scenes.triggeredBy\" |_ }}:</ion-label>\n          <ion-label class=\"triggerName\" (click)=\"selectTrigger(scene)\">{{ triggerName }}</ion-label>\n          <ion-icon name=\"create-outline\" (click)=\"selectTrigger(scene)\"></ion-icon>\n        </ion-item -->\n\n        <ion-item lines=\"none\">\n          <ion-label>{{ \"Config.Scenes.group\" |_ }}:</ion-label>\n          <ion-select *ngIf=\"system.groups.length > 1\" [(ngModel)]=\"scene.group\" [compareWith]=\"sameGroup\"\n                      interface=\"popover\" [interfaceOptions]=\"{title: scene.name}\">\n            <ion-select-option value=\"-1\">{{ \"Config.GroupsAll\" |_ }}</ion-select-option>\n            <ion-select-option *ngFor=\"let group of system.groups\" value=\"{{group.id}}\">{{group.name}}</ion-select-option>\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngFor=\"let unit of system.controls; let inx = index;\">\n          <ion-label>{{unit.getName()}}<br/>\n            <span class=\"typeAndAddr\">{{unit.typeName()}} ({{unit.getNumber()}})</span>\n          </ion-label>\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"selection[inx]\" color=\"secondary\"></ion-checkbox>\n          <ion-toggle *ngIf=\"unit.isSwitch()\" slot=\"end\" [(ngModel)]=\"values[inx]\" (ionBlur)=\"changeS(inx)\"></ion-toggle>\n          <ion-input *ngIf=\"false && unit.isDimmer()\" slot=\"end\" type=\"number\" [(ngModel)]=\"values[inx]\" \n                     (ionBlur)=\"changeD(inx)\"></ion-input>\n          <div *ngIf=\"unit.isDimmer()\" class=\"range\">\n            <ion-range min=\"1\" max=\"100\" debounce=\"400\" [(ngModel)]=\"values[inx]\" \n                       (ionChange)=\"changeD(inx)\" pin=\"true\">\n            </ion-range>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n    <ion-footer class=\"ion-padding\">\n      <ion-buttons>\n        <ion-button (click)=\"done()\" color=\"secondary\">{{ \"General.Save\" |_ }}</ion-button>\n        <ion-button (click)=\"cancel()\" color=\"primary\">{{ \"General.Cancel\" |_ }}</ion-button>\n        <ion-button (click)=\"delete()\" class=\"delete\" color=\"primary\"><ion-icon name=\"trash\"></ion-icon>{{ \"General.Delete\" |_ }}</ion-button>\n      </ion-buttons>\n    </ion-footer>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.scene.scss */
      "./src/app/tabs/config/edit.scene.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _system_system__WEBPACK_IMPORTED_MODULE_3__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], EditScene);
    /***/
  },

  /***/
  "./src/app/tabs/config/select.trigger.ts":
  /*!***********************************************!*\
    !*** ./src/app/tabs/config/select.trigger.ts ***!
    \***********************************************/

  /*! exports provided: SelectTrigger */

  /***/
  function srcAppTabsConfigSelectTriggerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectTrigger", function () {
      return SelectTrigger;
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


    var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../system/system */
    "./src/app/system/system.ts");
    /* harmony import */


    var src_app_system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/system/types */
    "./src/app/system/types.ts");

    var SelectTrigger =
    /*#__PURE__*/
    function () {
      // select units + values
      // select unit (mood or input)
      function SelectTrigger(modalCtrl, system, navParams) {
        _classCallCheck(this, SelectTrigger);

        this.modalCtrl = modalCtrl;
        this.system = system;
        this.navParams = navParams;
        this.sceneName = "";
        this.curType = src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["UnitType"].kNoType;
      }

      _createClass(SelectTrigger, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.sceneName = this.navParams.get('name') || "";
          this.trigger = src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].unitScene(this.navParams.get('trigger'));
          this.curUnit = "U" + this.system.moods.findIndex(function (mood) {
            return mood.isUnit(_this3.trigger.masterAddress, _this3.trigger.masterPort, _this3.trigger.logicalNodeAddress, _this3.trigger.logicalAddress);
          });
          this.curType = this.trigger.value;
        }
      }, {
        key: "done",
        value: function done() {
          if (!this.curUnit) this.modalCtrl.dismiss();
          var unit = this.system.moods[parseInt(this.curUnit.substr(1))];
          if (!unit) this.modalCtrl.dismiss();
          this.modalCtrl.dismiss(src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].unitScene({
            logicalNodeAddress: unit.logicalNodeAddress,
            logicalAddress: unit.logicalAddress,
            masterAddress: unit.node.master.getAddress(),
            masterPort: unit.node.master.getPort(),
            value: this.curType,
            name: unit.name,
            type: unit.type
          }));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "sameMode",
        value: function sameMode(a, b) {
          return a * 1 == b * 1;
        }
      }]);

      return SelectTrigger;
    }();

    SelectTrigger.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    SelectTrigger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'select-trigger',
      template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{ \"Config.Scenes.selectTriggerFor\" |_ }} {{sceneName}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <ion-item>\n        <ion-label>\n          {{ \"Config.Scenes.trigger\" |_ }}\n        </ion-label>\n        <ion-select [(ngModel)]=\"curType\" [compareWith]=\"sameMode\"\n                    okText=\"{{ 'General.Done' |_ }}\" cancelText=\"{{ 'General.Cancel' |_ }}\">\n          <ion-select-option value=\"0\">{{ \"scene.trigger.off\" |_ }}</ion-select-option>\n          <ion-select-option value=\"1\">{{ \"scene.trigger.on\" |_ }}</ion-select-option>\n          <ion-select-option value=\"2\">{{ \"scene.trigger.long\" |_ }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-radio-group [(ngModel)]=\"curUnit\">\n        <ion-item *ngFor=\"let unit of system.moods; let inx = index;\" lines=\"none\">\n          <ion-label>\n            {{unit.getName()}} - <span class=\"addr\">({{unit.getNumber()}})</span>\n          </ion-label>\n          <ion-radio slot=\"start\" color=\"secondary\" value=\"U{{inx}}\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-content>\n\n    <ion-footer class=\"ion-padding\">\n      <ion-buttons>\n        <ion-button (click)=\"done()\" color=\"secondary\">{{ \"General.Done\" |_ }}</ion-button>\n        <ion-button (click)=\"cancel()\" color=\"primary\">{{ \"General.Cancel\" |_ }}</ion-button>\n      </ion-buttons>\n    </ion-footer>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _system_system__WEBPACK_IMPORTED_MODULE_3__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], SelectTrigger);
    /***/
  },

  /***/
  "./src/app/tabs/control/control.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/control/control.page.ts ***!
    \**********************************************/

  /*! exports provided: ControlPage */

  /***/
  function srcAppTabsControlControlPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlPage", function () {
      return ControlPage;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");

    var ControlPage = function ControlPage(system) {
      _classCallCheck(this, ControlPage);

      this.system = system;
    };

    ControlPage.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    ControlPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-control',
      template: "\n    <ctrl-header title='{{ \"Page.Control\" |_ }}'></ctrl-header>\n\n    <ion-content class=\"ion-padding\">\n      <ctrl-list services=\"controls\" [showUpDowns]=\"! this.system.config.stores\"></ctrl-list>\n    </ion-content>\n  ",
      styles: [":root .noMaster { text-align: center }"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], ControlPage);
    /***/
  },

  /***/
  "./src/app/tabs/media/media.page.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/media/media.page.ts ***!
    \******************************************/

  /*! exports provided: MediaPage */

  /***/
  function srcAppTabsMediaMediaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaPage", function () {
      return MediaPage;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");

    var MediaPage = function MediaPage(system) {
      _classCallCheck(this, MediaPage);

      this.system = system;
    };

    MediaPage.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    MediaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-media',
      template: "\n    <ctrl-header title='{{ \"Page.Media\" |_ }}'></ctrl-header>\n\n    <ion-content class=\"ion-padding\">\n      <ctrl-list services=\"media\"></ctrl-list>\n    </ion-content>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], MediaPage);
    /***/
  },

  /***/
  "./src/app/tabs/moods/moods.page.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/moods/moods.page.ts ***!
    \******************************************/

  /*! exports provided: MoodsPage */

  /***/
  function srcAppTabsMoodsMoodsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoodsPage", function () {
      return MoodsPage;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");

    var MoodsPage = function MoodsPage(system) {
      _classCallCheck(this, MoodsPage);

      this.system = system;
    };

    MoodsPage.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    MoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-moods',
      template: "\n    <ctrl-header title='{{ \"Page.Moods\" |_ }}'></ctrl-header>\n\n    <ion-content class=\"ion-padding\">\n      <ctrl-list services=\"moods\"></ctrl-list>\n    </ion-content>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], MoodsPage);
    /***/
  },

  /***/
  "./src/app/tabs/stores/stores.page.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/stores/stores.page.ts ***!
    \********************************************/

  /*! exports provided: StoresPage */

  /***/
  function srcAppTabsStoresStoresPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoresPage", function () {
      return StoresPage;
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
    /*! ../../system/system */
    "./src/app/system/system.ts");

    var StoresPage = function StoresPage(system) {
      _classCallCheck(this, StoresPage);

      this.system = system;
    };

    StoresPage.ctorParameters = function () {
      return [{
        type: _system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    StoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-stores',
      template: "\n    <ctrl-header title='{{ \"Page.Stores\" |_ }}'></ctrl-header>\n\n    <ion-content class=\"ion-padding\">\n      <ctrl-list services=\"stores\" [showUpDowns]=\"true\"></ctrl-list>\n    </ion-content>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], StoresPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/tabs/tabs/tabs-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs/tabs.page.ts");
    /* harmony import */


    var _control_control_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../control/control.page */
    "./src/app/tabs/control/control.page.ts");
    /* harmony import */


    var _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../temperature/temperature.page */
    "./src/app/tabs/temperature/temperature.page.ts");
    /* harmony import */


    var _stores_stores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../stores/stores.page */
    "./src/app/tabs/stores/stores.page.ts");
    /* harmony import */


    var _moods_moods_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../moods/moods.page */
    "./src/app/tabs/moods/moods.page.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../config/config */
    "./src/app/tabs/config/config.ts");
    /* harmony import */


    var _media_media_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../media/media.page */
    "./src/app/tabs/media/media.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'control',
        component: _control_control_page__WEBPACK_IMPORTED_MODULE_4__["ControlPage"]
      }, {
        path: 'temperature',
        component: _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_5__["TemperaturePage"]
      }, {
        path: 'stores',
        component: _stores_stores_page__WEBPACK_IMPORTED_MODULE_6__["StoresPage"]
      }, {
        path: 'moods',
        component: _moods_moods_page__WEBPACK_IMPORTED_MODULE_7__["MoodsPage"]
      }, {
        path: 'media',
        component: _media_media_page__WEBPACK_IMPORTED_MODULE_9__["MediaPage"]
      }, {
        path: 'config',
        component: _config_config__WEBPACK_IMPORTED_MODULE_8__["ConfigPage"]
      }, {
        path: '',
        redirectTo: '/tabs/control',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/control',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs.module.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/tabs/tabs.module.ts ***!
    \******************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs/tabs.page.ts");
    /* harmony import */


    var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _moods_moods_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../moods/moods.page */
    "./src/app/tabs/moods/moods.page.ts");
    /* harmony import */


    var _stores_stores_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../stores/stores.page */
    "./src/app/tabs/stores/stores.page.ts");
    /* harmony import */


    var _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../temperature/temperature.page */
    "./src/app/tabs/temperature/temperature.page.ts");
    /* harmony import */


    var _control_control_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../control/control.page */
    "./src/app/tabs/control/control.page.ts");
    /* harmony import */


    var _config_config_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../config/config.module */
    "./src/app/tabs/config/config.module.ts");
    /* harmony import */


    var _media_media_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../media/media.page */
    "./src/app/tabs/media/media.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _config_config_module__WEBPACK_IMPORTED_MODULE_12__["ConfigPageModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _control_control_page__WEBPACK_IMPORTED_MODULE_11__["ControlPage"], _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_10__["TemperaturePage"], _moods_moods_page__WEBPACK_IMPORTED_MODULE_8__["MoodsPage"], _stores_stores_page__WEBPACK_IMPORTED_MODULE_9__["StoresPage"], _media_media_page__WEBPACK_IMPORTED_MODULE_13__["MediaPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs.page.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/tabs/tabs.page.ts ***!
    \****************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/system/system */
    "./src/app/system/system.ts");

    var TabsPage = // could be added to the ion-tab-button's
    //    (click)="system.emitter.emit('refresh')"
    function TabsPage(system) {
      _classCallCheck(this, TabsPage);

      this.system = system;
    };

    TabsPage.ctorParameters = function () {
      return [{
        type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: "\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"control\">\n          <ion-icon src=\"/assets/icon/light.svg\"></ion-icon>\n          <ion-label>{{'Page.Control' |_ }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"temperature\">\n          <ion-icon src=\"/assets/icon/temperature.svg\"></ion-icon>\n          <ion-label>{{'Page.Temperature' |_ }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"stores\" [ngClass]=\"{'ion-hide': !system.config.stores}\">\n          <ion-icon src=\"/assets/icon/stores.svg\"></ion-icon>\n          <ion-label>{{'Page.Stores' |_ }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"moods\">\n          <ion-icon name=\"list\"></ion-icon>\n          <ion-label>{{'Page.Moods' |_ }}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"media\" [ngClass]=\"{'ion-hide': !(system.media.length > 0)}\">\n          <ion-icon name=\"music\"></ion-icon>\n          <ion-label>{{'Page.Media' |_ }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/temperature/temperature.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/tabs/temperature/temperature.page.ts ***!
    \******************************************************/

  /*! exports provided: TemperaturePage */

  /***/
  function srcAppTabsTemperatureTemperaturePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperaturePage", function () {
      return TemperaturePage;
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
    /*! ../../system/system */
    "./src/app/system/system.ts");

    var TemperaturePage = function TemperaturePage(system) {
      _classCallCheck(this, TemperaturePage);

      this.system = system;
    };

    TemperaturePage.ctorParameters = function () {
      return [{
        type: _system_system__WEBPACK_IMPORTED_MODULE_2__["System"]
      }];
    };

    TemperaturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-temperature',
      template: "\n    <ctrl-header title='{{ \"Page.Temperature\" |_ }}'></ctrl-header>\n\n    <ion-content class=\"ion-padding\">\n      <ctrl-list services=\"temperatures\"></ctrl-list>\n    </ion-content>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])], TemperaturePage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-tabs-module-es5.js.map