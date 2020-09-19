(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs/tabs.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs/tabs.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"control\">\n      <ion-icon src=\"/assets/icon/light.svg\"></ion-icon>\n      <ion-label>{{'Page.Control' |_ }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"temperature\">\n      <ion-icon src=\"/assets/icon/temperature.svg\"></ion-icon>\n      <ion-label>{{'Page.Temperature' |_ }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"stores\" [ngClass]=\"!system.config.stores? 'ion-hide':''\">\n      <ion-icon src=\"/assets/icon/stores.svg\"></ion-icon>\n      <ion-label>{{'Page.Stores' |_ }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"moods\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>{{'Page.Moods' |_ }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"config\">\n      <ion-icon name=\"settings-outline\"></ion-icon>\n      <ion-label>{{'Page.Config' |_ }}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/tabs/config/config.general.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs/config/config.general.ts ***!
  \***********************************************/
/*! exports provided: ConfigGeneral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGeneral", function() { return ConfigGeneral; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/system/system */ "./src/app/system/system.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/stdUX */ "./src/app/core/stdUX.ts");
/* harmony import */ var src_app_core_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/translate.pipe */ "./src/app/core/translate.pipe.ts");






let ConfigGeneral = class ConfigGeneral {
    constructor(system, alertCtrl) {
        this.system = system;
        this.alertCtrl = alertCtrl;
        this.showcomm = false;
    }
    saveConfig() {
        this.system.writeConfig();
    }
    allowComm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // showcomm is toggle by the toggle button in the component
            if (this.showcomm) {
                const answer = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAsk"])(this.alertCtrl, {
                    title: Object(src_app_core_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["Translate"])('Config.EnableAdv', this.system),
                    message: Object(src_app_core_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["Translate"])('Config.EnterPW', this.system),
                    inputs: [{ name: 'Password' }],
                    buttons: [{ text: 'OK' }]
                });
                // if the password is wrong, set 'showcomm' back to false
                this.showcomm = (answer.Password === '2222');
            }
        });
    }
    doRestore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const answer = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAlert"])(this.alertCtrl, {
                title: 'Replace settings',
                message: 'Are you sure you want to replace all your settings with the last backup',
                buttons: [
                    { text: 'No' },
                    { text: 'Yes', id: 'yes' }
                ]
            });
            if (answer === 'yes')
                this.system.doRestoreBackup();
        });
    }
    doRequestBackup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.system.doRequestBackup(this.system.config.backupname);
        });
    }
    doBackup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.system.doBackup(this.system.config.backupname);
        });
    }
    sendScenes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.system.sendScenes(this.system.config.backupname);
        });
    }
};
ConfigGeneral.ctorParameters = () => [
    { type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ConfigGeneral = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'config-general',
        template: `
    <ion-list>
      <ion-item-group>
        <ion-item-divider>
          <ion-label>
            {{ "Config.Settings" |_ }}
          </ion-label>
        </ion-item-divider>
        <ion-item lines="none">
          <ion-label>{{ "Config.Language" |_ }}</ion-label>
          <ion-select name="language" interface="popover"
                      [(ngModel)]="system.config.language" (ionChange)="saveConfig()">
            <ion-select-option value="EN">English</ion-select-option>
            <ion-select-option value="NL">Nederlands</ion-select-option>
            <ion-select-option value="FR">Français</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item lines="none">
          <ion-label>{{ "Config.SeparateStores" |_ }}</ion-label>
          <ion-toggle name="stores" [(ngModel)]="system.config.stores" (ionChange)="saveConfig()"></ion-toggle>
        </ion-item>
        <ion-item lines="none">
          <ion-label>{{ "Config.MultipleGroups" |_ }}</ion-label>
          <ion-toggle name="multiple" [(ngModel)]="system.config.multiple" (ionChange)="saveConfig()"></ion-toggle>
        </ion-item>
      </ion-item-group>

      <ion-list-group>
        <ion-item-divider>
          <ion-label>
            {{ "Config.Communication" |_ }} <span class="comm">({{ system.config.socketserver }})</span>
          </ion-label>
        </ion-item-divider>
        <ion-item lines="none">
          <ion-label>{{ "Config.Advanced" |_ }}</ion-label>
          <ion-toggle name="communication" [(ngModel)]="showcomm" (ionChange)="allowComm()"></ion-toggle>
        </ion-item>
        <ion-item lines="none" *ngIf="showcomm">
          <ion-label position="stacked">Socket server IP</ion-label>
          <ion-input name="socketserver" type="text" [(ngModel)]="system.config.socketserver" (ionBlur)="saveConfig()"></ion-input>
        </ion-item>
        <ion-item lines="none" *ngIf="showcomm">
          <ion-label position="stacked">Socket server port</ion-label>
          <ion-input name="socketport" type="text" [(ngModel)]="system.config.socketport" (ionBlur)="saveConfig()"></ion-input>
        </ion-item>
        <ion-item lines="none" *ngIf="showcomm">
          <ion-label position="stacked">Remote Scenes</ion-label>
          <ion-toggle name="remotescenes" [(ngModel)]="system.config.remotescenes" (ionChange)="saveConfig()"></ion-toggle>
        </ion-item>
      </ion-list-group>

      <ion-list-group>
        <ion-item-divider>
          <ion-label>
            {{ "Config.Backup" |_ }}
          </ion-label>
        </ion-item-divider>
        <ion-item lines="none">
          <ion-label position="stacked">{{ "Config.Backup.name" |_ }}</ion-label>
          <ion-input name="backupname" type="text" [(ngModel)]="system.config.backupname" (ionBlur)="saveConfig()"></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-label>{{ "Config.Backup.config" |_ }}</ion-label>
          <ion-buttons><ion-button (click)="doBackup()"><ion-icon name="settings-outline" slot="end"></ion-icon>{{ "Config.Backup.send" |_ }}</ion-button></ion-buttons>
        </ion-item>
        <ion-item lines="none">
          <ion-label>{{ "Config.Backup.get" |_ }}</ion-label>
          <ion-buttons><ion-button (click)="doRequestBackup()"><ion-icon name="settings-outline" slot="end"></ion-icon>{{ "Config.Backup.fetch" |_ }}</ion-button></ion-buttons>
        </ion-item>
        <ion-item lines="none" *ngIf="system.backup">
          <ion-label>{{ "Config.Backup.restore" |_ }}: 
            <small>{{ system.backup.config.cmasters.length }} {{ "Config.Masters" |_ }}, 
                    {{ system.backup.config.cunits.length }} {{ "Config.Units" |_ }}, 
                    {{ system.backup.groups.length }} {{ "Config.Groups" |_ }},
                    {{ system.backup.scenes.length }} {{ "Config.Scenes" |_ }}</small>
          </ion-label>
          <ion-buttons>
            <ion-button (click)="doRestore()"><ion-icon name="settings-outline" slot="end"></ion-icon>{{ "Config.Backup.replace" |_ }}</ion-button>
          </ion-buttons>
        </ion-item>
        <ion-item lines="none" *ngIf="system.config.remotescenes">
          <ion-label>{{ "Config.Backup.scenes" |_ }}</ion-label>
          <ion-buttons><ion-button (click)="sendScenes()"><ion-icon name="list" slot="end"></ion-icon>{{ "Config.Backup.send" |_ }}</ion-button></ion-buttons>
        </ion-item>
      </ion-list-group>
    </ion-list>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ConfigGeneral);



/***/ }),

/***/ "./src/app/tabs/config/config.groups.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/config/config.groups.ts ***!
  \**********************************************/
/*! exports provided: ConfigGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGroupsComponent", function() { return ConfigGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/system/system */ "./src/app/system/system.ts");
/* harmony import */ var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/stdUX */ "./src/app/core/stdUX.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ConfigGroupsComponent = class ConfigGroupsComponent {
    constructor(system, alertCtrl) {
        this.system = system;
        this.alertCtrl = alertCtrl;
    }
    saveGroups() {
        this.system.writeGroups();
    }
    reorderGroups(event) {
        this.system.groups[event.detail.from].order = event.detail.to;
        this.system.groups[event.detail.to].order = event.detail.from;
        this.system.groups.sort((a, b) => a.order - b.order);
        event.detail.complete();
        this.saveGroups();
    }
    tryDelete(group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.system.groups.length > 1) {
                const answer = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doAlert"])(this.alertCtrl, {
                    title: 'Delete group',
                    message: 'Are you sure you want to delete the group \'' + group.name + '\'',
                    buttons: [
                        { text: 'No' },
                        { text: 'Yes', id: 'delete' }
                    ]
                });
                if (answer === 'delete') {
                    this.system.deleteGroup(group);
                }
            }
        });
    }
};
ConfigGroupsComponent.ctorParameters = () => [
    { type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ConfigGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'config-groups',
        template: `
    <ion-reorder-group disabled="false" (ionItemReorder)="reorderGroups($event)" class="groups">
      <ion-item lines="none" *ngFor="let group of system.groups; let inx = index">
        <ion-label position="stacked">Group {{inx+1}}</ion-label>
        <ion-buttons slot="end" *ngIf="system.groups.length > 1">
          <ion-button (click)="tryDelete(group)" color="primary">
            <ion-icon name="trash"></ion-icon>
          </ion-button>
          <ion-reorder></ion-reorder>
        </ion-buttons>
        <ion-input type="text" name="group{{inx+1}}" [(ngModel)]="group.name" (ionBlur)="saveGroups()"></ion-input>
      </ion-item>
    </ion-reorder-group>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ConfigGroupsComponent);



/***/ }),

/***/ "./src/app/tabs/config/config.masters.scss":
/*!*************************************************!*\
  !*** ./src/app/tabs/config/config.masters.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item-group ion-item:not(:last-child) {\n  margin-bottom: 4px; }\n\nion-item-group ion-item:last-child {\n  margin-bottom: 24px; }\n\n.non-active {\n  color: var(--ion-color-medium); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2NvbmZpZy5tYXN0ZXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxrQkFBa0IsRUFBQTs7QUFIOUI7RUFNWSxtQkFBbUIsRUFBQTs7QUFLL0I7RUFDSSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvY29uZmlnL2NvbmZpZy5tYXN0ZXJzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1ncm91cCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm9uLWFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/config/config.masters.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs/config/config.masters.ts ***!
  \***********************************************/
/*! exports provided: ConfigMastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMastersComponent", function() { return ConfigMastersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/system/system */ "./src/app/system/system.ts");
/* harmony import */ var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/stdUX */ "./src/app/core/stdUX.ts");
/* harmony import */ var _edit_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.node */ "./src/app/tabs/config/edit.node.ts");
/* harmony import */ var _edit_master__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.master */ "./src/app/tabs/config/edit.master.ts");







let ConfigMastersComponent = class ConfigMastersComponent {
    constructor(system, modalCtl, alertCtrl) {
        this.system = system;
        this.modalCtl = modalCtl;
        this.alertCtrl = alertCtrl;
    }
    //////////////////
    // Master Stuff //
    //////////////////
    editMaster(master) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doModal"])(this.modalCtl, _edit_master__WEBPACK_IMPORTED_MODULE_6__["EditMasterComponent"], { masterConfig: master.config });
            if (data.masterConfig) {
                this.system.log("Rebuilding master: " + master.getName());
                try {
                    this.system.addMaster(data.masterConfig);
                }
                catch (err) {
                    yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAlert"])(this.alertCtrl, {
                        title: 'Received error from master node',
                        message: err.toString(),
                        buttons: [{ text: 'OK' }]
                    });
                }
            }
        });
    }
    deleteMaster(master) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const answer = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doAlert"])(this.alertCtrl, {
                title: 'Delete master node',
                message: 'Are you sure you want to delete this master "' + master.config.name + '" (' + master.config.address + ')',
                buttons: [
                    { text: 'No' },
                    { text: 'Yes', id: 'delete' }
                ]
            });
            if (answer === 'delete') {
                this.system.deleteMaster(master);
                console.log('nr of masters: ' + this.system.masters.length);
            }
        });
    }
    sameSchedule(a, b) {
        return (a * 1 == b * 1);
    }
    changeSchedule(master) {
        console.log("changeSchedule -> " + master.schedule + " (" + (typeof master.schedule) + ")");
        master.setSchedule();
    }
    ////////////////
    // Node Stuff //
    ////////////////
    editNode(node) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_4__["doModal"])(this.modalCtl, _edit_node__WEBPACK_IMPORTED_MODULE_5__["EditNode"], { node: node });
            this.system.updateSystem(true);
            node.master.requestNodeStatus(node);
        });
    }
};
ConfigMastersComponent.ctorParameters = () => [
    { type: src_app_system_system__WEBPACK_IMPORTED_MODULE_3__["System"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ConfigMastersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'config-masters',
        template: `
    <ion-list>
      <ion-item-group *ngFor="let master of system.masters; let inx=index">
        <ion-item lines="none">
          <ion-icon name="code-working" slot="start"></ion-icon>
          <span [class.non-active]="!master.config.active">{{master.getAddress()}}<br>{{master.config.name}}</span>
          <ion-buttons slot="end">
            <ion-button (click)="editMaster(master)" color="primary">
              <ion-icon name="create"></ion-icon>
            </ion-button>
            <ion-button (click)="deleteMaster(master)" color="danger">
              <ion-icon name="trash"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>

        <ion-item lines="none" *ngIf="master.config.active">
          <ion-label>Schedule {{master.schedule}}</ion-label>
          <ion-select [(ngModel)]="master.schedule" name="schedule{{inx}}" (ionChange)="changeSchedule(master)" 
                      interface="popover" [compareWith]="sameSchedule">
            <ion-select-option value="0">{{ "Config.Week" |_ }} 1</ion-select-option>
            <ion-select-option value="1">{{ "Config.Week" |_ }} 2</ion-select-option>
            <ion-select-option value="2">{{ "Config.Week" |_ }} 3</ion-select-option>
            <ion-select-option value="3">{{ "Config.Holiday" |_ }}</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item lines="none" *ngFor="let node of master.nodes" (click)="editNode(node)">
          <ion-icon name="list" slot="end"></ion-icon>
          {{node.getName()}} <span class="addr">({{node.getNumber()}}, {{node.units.length}}/{{node.nrUnits}})</span>
        </ion-item>
      </ion-item-group>
    </ion-list>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./config.masters.scss */ "./src/app/tabs/config/config.masters.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_3__["System"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ConfigMastersComponent);



/***/ }),

/***/ "./src/app/tabs/config/config.module.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/config/config.module.ts ***!
  \**********************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/app/tabs/config/config.ts");
/* harmony import */ var _config_masters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.masters */ "./src/app/tabs/config/config.masters.ts");
/* harmony import */ var _edit_master__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit.master */ "./src/app/tabs/config/edit.master.ts");
/* harmony import */ var _edit_node__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit.node */ "./src/app/tabs/config/edit.node.ts");
/* harmony import */ var _config_general__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config.general */ "./src/app/tabs/config/config.general.ts");
/* harmony import */ var _config_groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config.groups */ "./src/app/tabs/config/config.groups.ts");
/* harmony import */ var _config_scenes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config.scenes */ "./src/app/tabs/config/config.scenes.ts");
/* harmony import */ var _edit_scene__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit.scene */ "./src/app/tabs/config/edit.scene.ts");
/* harmony import */ var _select_trigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select.trigger */ "./src/app/tabs/config/select.trigger.ts");
















let ConfigPageModule = class ConfigPageModule {
};
ConfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _config__WEBPACK_IMPORTED_MODULE_7__["ConfigPage"] }])
        ],
        entryComponents: [_config__WEBPACK_IMPORTED_MODULE_7__["ConfigPage"], _config_masters__WEBPACK_IMPORTED_MODULE_8__["ConfigMastersComponent"], _config_general__WEBPACK_IMPORTED_MODULE_11__["ConfigGeneral"], _config_groups__WEBPACK_IMPORTED_MODULE_12__["ConfigGroupsComponent"], _config_scenes__WEBPACK_IMPORTED_MODULE_13__["ConfigScenes"],
            _edit_master__WEBPACK_IMPORTED_MODULE_9__["EditMasterComponent"], _edit_node__WEBPACK_IMPORTED_MODULE_10__["EditNode"], _edit_scene__WEBPACK_IMPORTED_MODULE_14__["EditScene"], _select_trigger__WEBPACK_IMPORTED_MODULE_15__["SelectTrigger"]],
        declarations: [_config__WEBPACK_IMPORTED_MODULE_7__["ConfigPage"], _edit_master__WEBPACK_IMPORTED_MODULE_9__["EditMasterComponent"], _edit_node__WEBPACK_IMPORTED_MODULE_10__["EditNode"], _edit_scene__WEBPACK_IMPORTED_MODULE_14__["EditScene"], _config_masters__WEBPACK_IMPORTED_MODULE_8__["ConfigMastersComponent"], _config_general__WEBPACK_IMPORTED_MODULE_11__["ConfigGeneral"], _config_groups__WEBPACK_IMPORTED_MODULE_12__["ConfigGroupsComponent"], _config_scenes__WEBPACK_IMPORTED_MODULE_13__["ConfigScenes"], _select_trigger__WEBPACK_IMPORTED_MODULE_15__["SelectTrigger"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ConfigPageModule);



/***/ }),

/***/ "./src/app/tabs/config/config.scenes.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/config/config.scenes.ts ***!
  \**********************************************/
/*! exports provided: ConfigScenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigScenes", function() { return ConfigScenes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/system/system */ "./src/app/system/system.ts");
/* harmony import */ var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/stdUX */ "./src/app/core/stdUX.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.scene */ "./src/app/tabs/config/edit.scene.ts");






let ConfigScenes = class ConfigScenes {
    constructor(system, modalCtl) {
        this.system = system;
        this.modalCtl = modalCtl;
    }
    editScene(scene, inx) {
        this.showEditScene(scene, inx);
    }
    showEditScene(scene, inx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_3__["doModal"])(this.modalCtl, _edit_scene__WEBPACK_IMPORTED_MODULE_5__["EditScene"], { scene });
            if (data.trigger) {
                console.log("result from editscene: ", data);
                if (data.order === -1) {
                    // delete request
                    this.system.scenes.splice(inx, 1);
                }
                else {
                    // save the edits
                    this.system.scenes[inx] = data;
                }
                this.system.writeScenes();
            }
        });
    }
    ////////////
    // Events //
    ////////////
    reorderGroups(event) {
        this.system.scenes[event.detail.from].order = event.detail.to;
        this.system.scenes[event.detail.to].order = event.detail.from;
        this.system.scenes.sort((a, b) => a.order - b.order);
        event.detail.complete();
        this.system.writeScenes();
    }
};
ConfigScenes.ctorParameters = () => [
    { type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ConfigScenes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'config-scenes',
        template: `
    <ion-reorder-group disabled="false" (ionItemReorder)="reorderGroups($event)">
      <ion-item lines="none" *ngFor="let scene of system.scenes; let inx = index;">
        <ion-label (click)="editScene(scene)">{{ scene.name }}</ion-label>
        <ion-buttons slot="end">
          <ion-button (click)="editScene(scene, inx)" color="primary">
            <ion-icon name="create"></ion-icon>
          </ion-button>
          <ion-reorder *ngIf="system.scenes.length > 1"></ion-reorder>
        </ion-buttons>
      </ion-item>
    </ion-reorder-group>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ConfigScenes);



/***/ }),

/***/ "./src/app/tabs/config/config.scss":
/*!*****************************************!*\
  !*** ./src/app/tabs/config/config.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".version {\n  margin-left: 4px;\n  font-size: 0.8rem;\n  color: grey; }\n\n.version .manual {\n  float: right; }\n\n/* segment */\n\nion-segment {\n  margin-bottom: 16px; }\n\n.ios ion-segment-button {\n  --padding-top: 5px;\n  --indicator-color: #fff; }\n\n.md ion-segment-button {\n  --background-checked: #fff; }\n\n@media (prefers-color-scheme: dark) {\n  .ios ion-segment-button {\n    --indicator-color: #595959; }\n  .md ion-segment-button {\n    --background-checked: var(--ion-color-step-100); } }\n\nion-toolbar ion-title {\n  margin-right: -73px;\n  margin-left: inherit; }\n\nion-toolbar .config-adder {\n  width: 100px;\n  margin-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2NvbmZpZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUNKLEVBQUE7O0FBQ0E7RUFDRSxZQUNGLEVBQUE7O0FBRUEsWUFBQTs7QUFDQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUVRLGtCQUFjO0VBQ2QsdUJBQWtCLEVBQUE7O0FBRzFCO0VBRVEsMEJBQXFCLEVBQUE7O0FBRzdCO0VBQ0k7SUFFUSwwQkFBa0IsRUFBQTtFQUcxQjtJQUVRLCtDQUFxQixFQUFBLEVBQ3hCOztBQUlUO0VBRVEsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUg1QjtFQU1RLFlBQVk7RUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL2NvbmZpZy9jb25maWcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJzaW9uIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiBncmV5XG59XG4udmVyc2lvbiAubWFudWFsIHtcbiAgZmxvYXQ6IHJpZ2h0XG59XG5cbi8qIHNlZ21lbnQgKi9cbmlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmlvcyB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG4ubWQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xuICAgIH1cbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAuaW9zIHtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiAjNTk1OTU5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tZCB7XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTczcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBpbmhlcml0O1xuICAgIH1cbiAgICAuY29uZmlnLWFkZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/tabs/config/config.ts":
/*!***************************************!*\
  !*** ./src/app/tabs/config/config.ts ***!
  \***************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");
/* harmony import */ var _system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../system/types */ "./src/app/system/types.ts");
/* harmony import */ var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/stdUX */ "./src/app/core/stdUX.ts");
/* harmony import */ var _edit_master__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.master */ "./src/app/tabs/config/edit.master.ts");
/* harmony import */ var _edit_scene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit.scene */ "./src/app/tabs/config/edit.scene.ts");








let ConfigPage = class ConfigPage {
    constructor(modalCtl, alertCtrl, system) {
        this.modalCtl = modalCtl;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.what = (this.system.masters.length <= 0) ? 'masters' : 'general';
    }
    /////////////
    // Masters //
    /////////////
    addMaster() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doModal"])(this.modalCtl, _edit_master__WEBPACK_IMPORTED_MODULE_6__["EditMasterComponent"], {});
            if (data.masterConfig) {
                try {
                    this.system.addMaster(data.masterConfig);
                }
                catch (err) {
                    yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doAlert"])(this.alertCtrl, {
                        title: 'Received error from master node',
                        message: err.toString(),
                        buttons: [{ text: 'OK' }]
                    });
                }
            }
        });
    }
    ////////////
    // Groups //
    ////////////
    addGroup() {
        // find max id
        const max = this.system.groups.reduce((m, g) => (g.id > m) ? g.id : m, this.system.groups[0].id);
        this.system.groups.push(Object.assign({}, _system_types__WEBPACK_IMPORTED_MODULE_4__["kEmptyGroup"], { id: max + 1 }));
    }
    ////////////
    // Scenes //
    ////////////
    addScene() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const scene = Object.assign({}, _system_types__WEBPACK_IMPORTED_MODULE_4__["kEmptyScene"]);
            this.system.scenes.push(scene);
            const data = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doModal"])(this.modalCtl, _edit_scene__WEBPACK_IMPORTED_MODULE_7__["EditScene"], { scene });
            this.system.writeScenes();
        });
    }
};
ConfigPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"] }
];
ConfigPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-config',
        template: `
  <ion-header>
    <ion-toolbar>
      <img slot="start" src="/assets/icon/duotecno.png" />
      <ion-title>{{'Page.Config' |_ }}</ion-title>

      <ion-buttons slot="end" class="config-adder">
        <ion-button (click)="addGroup()" *ngIf="what === 'groups'">
          <ion-icon name="add"></ion-icon> {{"Config.Group" |_ }}
        </ion-button>

        <ion-button (click)="addMaster()" *ngIf="what === 'masters'">
          <ion-icon name="add"></ion-icon> {{"Config.Master" |_ }}
        </ion-button>

        <ion-button (click)="addScene()" *ngIf="what === 'scenes'">
          <ion-icon name="add"></ion-icon> {{"Config.Scenes.scene" |_ }}
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-segment [(ngModel)]="what">
      <ion-segment-button value="general">
        <ion-icon name="settings-outline"></ion-icon>
        <ion-label>{{ "Config.General" |_ }}</ion-label>
      </ion-segment-button>
      <ion-segment-button value="groups">
        <ion-icon name="folder"></ion-icon>
        <ion-label>{{ "Config.Groups" |_ }}</ion-label>
      </ion-segment-button>
      <ion-segment-button value="masters">
        <ion-icon name="code-working"></ion-icon>
        <ion-label>{{ "Config.Masters" |_ }}</ion-label>
      </ion-segment-button>
      <ion-segment-button value="scenes">
        <ion-icon name="list"></ion-icon>
        <ion-label>{{ "Config.Scenes" |_ }}</ion-label>
      </ion-segment-button>
    </ion-segment>

    <config-general *ngIf="what === 'general'"></config-general>
    <config-groups  *ngIf="what === 'groups'"></config-groups>
    <config-scenes  *ngIf="what === 'scenes'"></config-scenes>
    <config-masters *ngIf="what === 'masters'"></config-masters>

    <p class="version">
      <span>v2.2.0b1 © Duotecno by Johan Coppieters</span>
      <span class="manual">Download the <a href="https://www.duotecno.be/wp-content/uploads/2020/05/Duotecno-smartbox-app-1.pdf">manual</a></span>
    </p>
  </ion-content>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./config.scss */ "./src/app/tabs/config/config.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])
], ConfigPage);



/***/ }),

/***/ "./src/app/tabs/config/edit.master.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/config/edit.master.ts ***!
  \********************************************/
/*! exports provided: EditMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMasterComponent", function() { return EditMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _system_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../system/types */ "./src/app/system/types.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let EditMasterComponent = class EditMasterComponent {
    constructor(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.masterConfig = this.navParams.get('masterConfig') || _system_types__WEBPACK_IMPORTED_MODULE_2__["Sanitizers"].masterConfig();
    }
    save() {
        this.modalCtrl.dismiss({ masterConfig: this.masterConfig });
    }
    cancel() {
        this.modalCtrl.dismiss({});
    }
};
EditMasterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
EditMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-master',
        template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ "Config.Master" |_ }}</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-list>
      <ion-item lines="none">
        <ion-label position="stacked">External IP or URL</ion-label>
        <ion-input type="text" name="address" [(ngModel)]="masterConfig.address"></ion-input>
      </ion-item>

      <ion-item lines="none">
        <ion-label position="stacked">Port</ion-label>
        <ion-input type="text" name="port" [(ngModel)]="masterConfig.port"></ion-input>
      </ion-item>

      <ion-item lines="none">
        <ion-label position="stacked">Password</ion-label>
        <ion-input type="password" name="password" [(ngModel)]="masterConfig.password"></ion-input>
      </ion-item>

      <ion-item lines="none">
        <ion-label position="stacked">Name</ion-label>
        <ion-input type="text" name="name" [(ngModel)]="masterConfig.name"></ion-input>
      </ion-item>

      <ion-item lines="none">
        <ion-label>Active</ion-label>
        <ion-toggle name="active" [(ngModel)]="masterConfig.active"></ion-toggle>
      </ion-item>
    </ion-list>
  </ion-content>

  <ion-footer class="ion-padding">
    <ion-buttons>
      <ion-button (click)="save()" color="secondary">{{"General.Save" |_ }}</ion-button>
      <ion-button (click)="cancel()" color="primary">{{"General.Cancel" |_ }}</ion-button>
    </ion-buttons>
  </ion-footer>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])
], EditMasterComponent);



/***/ }),

/***/ "./src/app/tabs/config/edit.node.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/config/edit.node.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-text {\n  font-size: 1.2rem;\n  color: grey; }\n\n.select-ios .select-icon .select-icon-inner {\n  margin-top: -4px; }\n\n.item-select .label {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hhbi9MaWJyYXJ5L01vYmlsZSBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9Qcm9qZWN0cy9EdW90ZWNuby9zbWFydHN5c3RlbS9zcmMvYXBwL3RhYnMvY29uZmlnL2VkaXQubm9kZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvY29uZmlnL2VkaXQubm9kZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogZ3JleTtcbn1cbi5zZWxlY3QtaW9zIC5zZWxlY3QtaWNvbiAuc2VsZWN0LWljb24taW5uZXIge1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG59XG4uaXRlbS1zZWxlY3QgLmxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/tabs/config/edit.node.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/config/edit.node.ts ***!
  \******************************************/
/*! exports provided: EditNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNode", function() { return EditNode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");




let EditNode = class EditNode {
    constructor(modalCtrl, navParams, system) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.system = system;
    }
    ngOnInit() {
        this.node = this.navParams.get('node');
        if ((!this.node.active) || (this.node.nrUnits !== this.node.units.length)) {
            this.node.master.fetchAllUnits(this.node);
        }
        // should the name contains a ',' as a first character, don't show it active
        this.node.units.forEach((u) => {
            if ((u.name) && (u.name[0] === ','))
                u.active = false;
        });
    }
    sameGroup(a, b) {
        return a * 1 == b * 1;
    }
    done() {
        this.modalCtrl.dismiss();
    }
};
EditNode.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"] }
];
EditNode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-node',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ "Node.of" |_ }} {{node.getName()}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item *ngFor="let unit of node.units" lines="none">
          <ion-label>{{unit.getName()}}<br/>
            <span class="type">{{unit.typeName()}}</span>
            <span class="addr">({{unit.getNumber()}})</span>
          </ion-label>
          <ion-checkbox slot="start" [(ngModel)]="unit.active" color="secondary" [disabled]="unit.name[0]==','"></ion-checkbox>
          <ion-select *ngIf="system.groups.length > 1" [(ngModel)]="unit.group" [compareWith]="sameGroup"
                      interface="popover" [interfaceOptions]="{title: unit.getName()}">
            <ion-select-option value="-1">All groups</ion-select-option>
            <ion-select-option *ngFor="let group of system.groups" value="{{group.id}}">{{group.name}}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-footer class="ion-padding">
      <ion-buttons>
        <ion-button (click)="done()" color="secondary">{{ "General.Done" |_ }}</ion-button>
      </ion-buttons>
    </ion-footer>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.node.scss */ "./src/app/tabs/config/edit.node.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])
], EditNode);



/***/ }),

/***/ "./src/app/tabs/config/edit.scene.ts":
/*!*******************************************!*\
  !*** ./src/app/tabs/config/edit.scene.ts ***!
  \*******************************************/
/*! exports provided: EditScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditScene", function() { return EditScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");
/* harmony import */ var src_app_system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/system/types */ "./src/app/system/types.ts");
/* harmony import */ var src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/stdUX */ "./src/app/core/stdUX.ts");
/* harmony import */ var _select_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.trigger */ "./src/app/tabs/config/select.trigger.ts");







let EditScene = class EditScene {
    // select units + values
    // select unit (mood or input)
    constructor(modalCtrl, alertCtrl, system, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.system = system;
        this.navParams = navParams;
    }
    sameGroup(a, b) {
        return a * 1 == b * 1;
    }
    ngOnInit() {
        this.scene = src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].sceneConfig(this.navParams.get('scene'));
        // which controls are used within this scene and what is the desired value
        this.selection = [];
        this.values = [];
        this.system.controls.forEach(c => {
            const unit = this.scene.units.find(u => c.isUnit(u.masterAddress, u.masterPort, u.logicalNodeAddress, u.logicalAddress));
            this.selection.push(!!unit);
            if (unit)
                console.log(unit.logicalAddress + " = " + unit.value);
            else
                console.log("----");
            this.values.push((unit) ? unit.value : 0);
        });
        // find the name of the trigger
        this.triggerName = this.getTriggerName();
        console.log('EditScene:', this.scene, ', selection: ', this.selection, ', values: ', this.values);
    }
    getTriggerName() {
        if (this.scene.trigger.masterAddress) {
            const master = this.system.findMaster(this.scene.trigger.masterAddress, this.scene.trigger.masterPort);
            if (master) {
                const unit = master.findUnit(this.scene.trigger.logicalNodeAddress, this.scene.trigger.logicalAddress);
                return unit.getName();
            }
        }
        return "-";
    }
    selectTrigger(scene) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doModal"])(this.modalCtrl, _select_trigger__WEBPACK_IMPORTED_MODULE_6__["SelectTrigger"], { trigger: scene.trigger, name: this.scene.name });
            if (data.masterAddress) {
                console.log("result select trigger: ", data);
                this.scene.trigger = data;
                this.triggerName = this.getTriggerName();
            }
        });
    }
    ////////////
    // Events //
    ////////////
    changeD(inx) {
        console.log("changed dimmer: " + inx + " -> " + this.values[inx]);
        if (this.values[inx] < 0)
            this.values[inx] = 0;
        if (this.values[inx] > 100)
            this.values[inx] = 100;
    }
    changeS(inx) {
        console.log("changed switch: " + inx + " -> " + this.values[inx]);
    }
    done() {
        // reconstruct the array with selected units (and their values)
        this.scene.units = [];
        this.system.controls.forEach((u, i) => {
            if (this.selection[i]) {
                this.scene.units.push(src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].unitScene({ masterAddress: u.node.master.getAddress(), masterPort: u.node.master.getPort(),
                    logicalNodeAddress: u.node.logicalAddress, logicalAddress: u.logicalAddress, name: u.name, type: u.type,
                    value: this.values[i] }));
            }
        });
        this.modalCtrl.dismiss(this.scene);
        this.system.triggerRebuild(true);
    }
    cancel() {
        this.modalCtrl.dismiss();
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const answer = yield Object(src_app_core_stdUX__WEBPACK_IMPORTED_MODULE_5__["doAlert"])(this.alertCtrl, {
                title: 'Delete scene',
                message: 'Are you sure you want to delete the scene "' + this.scene.name + '" ?',
                buttons: [
                    { text: 'No' },
                    { text: 'Yes', id: 'delete' }
                ]
            });
            if (answer === 'delete') {
                this.scene.order = -1; // signal delete
                this.modalCtrl.dismiss();
            }
        });
    }
};
EditScene.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
EditScene = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-scene',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ "Config.Scenes.for" |_ }} {{scene.name}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item lines="none">
          <ion-label position="stacked">{{ "Config.Scenes.name" |_ }}</ion-label>
          <ion-input type="text" name="name" [(ngModel)]="scene.name"></ion-input>
        </ion-item>

        <ion-item lines="none">
          <ion-label>{{ "Config.Scenes.triggeredBy" |_ }}:</ion-label>
          <ion-label class="triggerName" (click)="selectTrigger(scene)">{{ triggerName }}</ion-label>
          <ion-icon name="create-outline" (click)="selectTrigger(scene)"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-label>{{ "Config.Scenes.group" |_ }}:</ion-label>
          <ion-select *ngIf="system.groups.length > 1" [(ngModel)]="scene.group" [compareWith]="sameGroup"
                      interface="popover" [interfaceOptions]="{title: scene.name}">
            <ion-select-option value="-1">All groups</ion-select-option>
            <ion-select-option *ngFor="let group of system.groups" value="{{group.id}}">{{group.name}}</ion-select-option>
            </ion-select>

        </ion-item>

        <ion-item *ngFor="let unit of system.controls; let inx = index;">
          <ion-label>{{unit.getName()}}<br/>
            <span class="typeAndAddr">{{unit.typeName()}} ({{unit.getNumber()}})</span>
          </ion-label>
          <ion-checkbox slot="start" [(ngModel)]="selection[inx]" color="secondary"></ion-checkbox>
          <ion-toggle *ngIf="unit.isSwitch()" slot="end" [(ngModel)]="values[inx]" (ionBlur)="changeS(inx)"></ion-toggle>
          <ion-input *ngIf="unit.isDimmer()" slot="end" type="number" [(ngModel)]="values[inx]" (ionBlur)="changeD(inx)"></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>

    <ion-footer class="ion-padding">
      <ion-buttons>
        <ion-button (click)="done()" color="secondary">{{ "General.Done" |_ }}</ion-button>
        <ion-button (click)="cancel()" color="primary">{{ "General.Cancel" |_ }}</ion-button>
        <ion-button (click)="delete()" class="delete" color="primary"><ion-icon name="trash"></ion-icon>{{ "General.Delete" |_ }}</ion-button>
      </ion-buttons>
    </ion-footer>
  `,
        styles: ["ion-label.triggerName { text-align: right; margin-right: 8px }", "span.typeAndAddr { font-size: 0.9rem; color: var(--ion-color-medium) }", "ion-button.delete { float: right; display: inline-block }", "ion-buttons { display: inline }", "ion-input[type=number] { text-align: right; width: 50px }"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _system_system__WEBPACK_IMPORTED_MODULE_3__["System"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], EditScene);



/***/ }),

/***/ "./src/app/tabs/config/select.trigger.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs/config/select.trigger.ts ***!
  \***********************************************/
/*! exports provided: SelectTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTrigger", function() { return SelectTrigger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");
/* harmony import */ var src_app_system_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/system/types */ "./src/app/system/types.ts");
/* harmony import */ var src_app_system_protocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/system/protocol */ "./src/app/system/protocol.ts");






let SelectTrigger = class SelectTrigger {
    // select units + values
    // select unit (mood or input)
    constructor(modalCtrl, system, navParams) {
        this.modalCtrl = modalCtrl;
        this.system = system;
        this.navParams = navParams;
        this.sceneName = "";
        this.curType = src_app_system_protocol__WEBPACK_IMPORTED_MODULE_5__["UnitType"].kNoType;
    }
    ngOnInit() {
        this.sceneName = this.navParams.get('name') || "";
        this.trigger = src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].unitScene(this.navParams.get('trigger'));
        this.curUnit = "U" + this.system.moods.findIndex(mood => mood.isUnit(this.trigger.masterAddress, this.trigger.masterPort, this.trigger.logicalNodeAddress, this.trigger.logicalAddress));
        this.curType = this.trigger.value;
        console.log('SelectTrigger:' + this.curUnit + ', trigger type: ' + this.curType);
    }
    done() {
        if (!this.curUnit)
            this.modalCtrl.dismiss();
        const unit = this.system.moods[parseInt(this.curUnit.substr(1))];
        if (!unit)
            this.modalCtrl.dismiss();
        this.modalCtrl.dismiss(src_app_system_types__WEBPACK_IMPORTED_MODULE_4__["Sanitizers"].unitScene({
            logicalNodeAddress: unit.logicalNodeAddress,
            logicalAddress: unit.logicalAddress,
            masterAddress: unit.node.master.getAddress(),
            masterPort: unit.node.master.getPort(),
            value: this.curType, name: unit.name, type: unit.type
        }));
    }
    cancel() {
        this.modalCtrl.dismiss();
    }
    sameMode(a, b) {
        return a * 1 == b * 1;
    }
};
SelectTrigger.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
SelectTrigger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-trigger',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ "Config.Scenes.selectTriggerFor" |_ }} {{sceneName}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label>
          {{ "Config.Scenes.trigger" |_ }}
        </ion-label>
        <ion-select [(ngModel)]="curType" [compareWith]="sameMode"
                    okText="{{ 'General.Done' |_ }}" cancelText="{{ 'General.Cancel' |_ }}">
          <ion-select-option value="0">{{ "scene.trigger.off" |_ }}</ion-select-option>
          <ion-select-option value="1">{{ "scene.trigger.on" |_ }}</ion-select-option>
          <ion-select-option value="2">{{ "scene.trigger.long" |_ }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-radio-group [(ngModel)]="curUnit">
        <ion-item *ngFor="let unit of system.moods; let inx = index;" lines="none">
          <ion-label>
            {{unit.getName()}} - <span class="addr">({{unit.getNumber()}})</span>
          </ion-label>
          <ion-radio slot="start" color="secondary" value="U{{inx}}"></ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-content>

    <ion-footer class="ion-padding">
      <ion-buttons>
        <ion-button (click)="done()" color="secondary">{{ "General.Done" |_ }}</ion-button>
        <ion-button (click)="cancel()" color="primary">{{ "General.Cancel" |_ }}</ion-button>
      </ion-buttons>
    </ion-footer>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _system_system__WEBPACK_IMPORTED_MODULE_3__["System"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], SelectTrigger);



/***/ }),

/***/ "./src/app/tabs/control/control.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/control/control.page.ts ***!
  \**********************************************/
/*! exports provided: ControlPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPage", function() { return ControlPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_stdpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/stdpage */ "./src/app/core/stdpage.ts");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");




let ControlPage = class ControlPage {
    constructor(system) {
        this.system = system;
    }
    ionViewWillEnter() {
        this.stdPage.refreshServices();
    }
};
ControlPage.ctorParameters = () => [
    { type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_core_stdpage__WEBPACK_IMPORTED_MODULE_2__["StdPage"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core_stdpage__WEBPACK_IMPORTED_MODULE_2__["StdPage"])
], ControlPage.prototype, "stdPage", void 0);
ControlPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-control',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle slot="start">
          <img src="/assets/icon/duotecno.png" />
          <ion-icon name="{{ system.isSplitted ? '' : 'menu'}}"></ion-icon>
        </ion-menu-toggle>
        <ion-title>{{ "Page.Control" |_ }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <std-page services="controls" [showUpDowns]="! this.system.config.stores"></std-page>
    </ion-content>
  `,
        styles: [":root .noMaster { text-align: center }"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])
], ControlPage);



/***/ }),

/***/ "./src/app/tabs/moods/moods.page.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/moods/moods.page.ts ***!
  \******************************************/
/*! exports provided: MoodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodsPage", function() { return MoodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_stdpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/stdpage */ "./src/app/core/stdpage.ts");
/* harmony import */ var src_app_system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/system/system */ "./src/app/system/system.ts");




let MoodsPage = class MoodsPage {
    constructor(system) {
        this.system = system;
    }
    ionViewWillEnter() {
        this.stdPage.refreshServices();
    }
};
MoodsPage.ctorParameters = () => [
    { type: src_app_system_system__WEBPACK_IMPORTED_MODULE_3__["System"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_core_stdpage__WEBPACK_IMPORTED_MODULE_2__["StdPage"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_stdpage__WEBPACK_IMPORTED_MODULE_2__["StdPage"])
], MoodsPage.prototype, "stdPage", void 0);
MoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-moods',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle slot="start">
          <img src="/assets/icon/duotecno.png" />
          <ion-icon name="{{ system.isSplitted ? '' : 'menu'}}"></ion-icon>
        </ion-menu-toggle>
        <ion-title>{{ "Page.Moods" |_ }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <std-page services="moods"></std-page>
    </ion-content>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])
], MoodsPage);



/***/ }),

/***/ "./src/app/tabs/stores/stores.page.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/stores/stores.page.ts ***!
  \********************************************/
/*! exports provided: StoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPage", function() { return StoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_stdpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/stdpage */ "./src/app/core/stdpage.ts");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");




let StoresPage = class StoresPage {
    constructor(system) {
        this.system = system;
    }
    ionViewWillEnter() {
        this.stdPage.refreshServices();
    }
};
StoresPage.ctorParameters = () => [
    { type: _system_system__WEBPACK_IMPORTED_MODULE_3__["System"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_core_stdpage__WEBPACK_IMPORTED_MODULE_2__["StdPage"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core_stdpage__WEBPACK_IMPORTED_MODULE_2__["StdPage"])
], StoresPage.prototype, "stdPage", void 0);
StoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-stores',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle slot="start">
          <img src="/assets/icon/duotecno.png" />
          <ion-icon name="{{ system.isSplitted ? '' : 'menu'}}"></ion-icon>
        </ion-menu-toggle>
        <ion-title>{{ "Page.Stores" |_ }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <std-page services="stores" [showUpDowns]="true"></std-page>
    </ion-content>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_3__["System"]])
], StoresPage);



/***/ }),

/***/ "./src/app/tabs/tabs/tabs-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/tabs/tabs-routing.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs/tabs.page.ts");
/* harmony import */ var _control_control_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../control/control.page */ "./src/app/tabs/control/control.page.ts");
/* harmony import */ var _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../temperature/temperature.page */ "./src/app/tabs/temperature/temperature.page.ts");
/* harmony import */ var _stores_stores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/stores.page */ "./src/app/tabs/stores/stores.page.ts");
/* harmony import */ var _moods_moods_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../moods/moods.page */ "./src/app/tabs/moods/moods.page.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/config */ "./src/app/tabs/config/config.ts");









const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            { path: 'control', component: _control_control_page__WEBPACK_IMPORTED_MODULE_4__["ControlPage"] },
            { path: 'temperature', component: _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_5__["TemperaturePage"] },
            { path: 'stores', component: _stores_stores_page__WEBPACK_IMPORTED_MODULE_6__["StoresPage"] },
            { path: 'moods', component: _moods_moods_page__WEBPACK_IMPORTED_MODULE_7__["MoodsPage"] },
            { path: 'config', component: _config_config__WEBPACK_IMPORTED_MODULE_8__["ConfigPage"] },
            { path: '', redirectTo: '/tabs/control', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/tabs/control', pathMatch: 'full' }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs/tabs.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs/tabs.module.ts ***!
  \******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs/tabs.page.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _moods_moods_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moods/moods.page */ "./src/app/tabs/moods/moods.page.ts");
/* harmony import */ var _stores_stores_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/stores.page */ "./src/app/tabs/stores/stores.page.ts");
/* harmony import */ var _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../temperature/temperature.page */ "./src/app/tabs/temperature/temperature.page.ts");
/* harmony import */ var _control_control_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../control/control.page */ "./src/app/tabs/control/control.page.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config/config.module */ "./src/app/tabs/config/config.module.ts");













let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _config_config_module__WEBPACK_IMPORTED_MODULE_12__["ConfigPageModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _control_control_page__WEBPACK_IMPORTED_MODULE_11__["ControlPage"], _temperature_temperature_page__WEBPACK_IMPORTED_MODULE_10__["TemperaturePage"], _moods_moods_page__WEBPACK_IMPORTED_MODULE_8__["MoodsPage"], _stores_stores_page__WEBPACK_IMPORTED_MODULE_9__["StoresPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs/tabs.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs/tabs.page.ts ***!
  \****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/system/system */ "./src/app/system/system.ts");



let TabsPage = class TabsPage {
    constructor(system) {
        this.system = system;
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs/tabs.page.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/temperature/temperature.page.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/temperature/temperature.page.ts ***!
  \******************************************************/
/*! exports provided: TemperaturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperaturePage", function() { return TemperaturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _system_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../system/system */ "./src/app/system/system.ts");
/* harmony import */ var _core_stdpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/stdpage */ "./src/app/core/stdpage.ts");




let TemperaturePage = class TemperaturePage {
    constructor(system) {
        this.system = system;
    }
    ionViewWillEnter() {
        this.stdPage.refreshServices();
    }
};
TemperaturePage.ctorParameters = () => [
    { type: _system_system__WEBPACK_IMPORTED_MODULE_2__["System"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_core_stdpage__WEBPACK_IMPORTED_MODULE_3__["StdPage"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core_stdpage__WEBPACK_IMPORTED_MODULE_3__["StdPage"])
], TemperaturePage.prototype, "stdPage", void 0);
TemperaturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-temperature',
        template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle slot="start">
          <img src="/assets/icon/duotecno.png" />
          <ion-icon name="{{ system.isSplitted ? '' : 'menu'}}"></ion-icon>
        </ion-menu-toggle>
        <ion-title>{{ "Page.Temperature" |_ }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <std-page services="temperatures"></std-page>
    </ion-content>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_system_system__WEBPACK_IMPORTED_MODULE_2__["System"]])
], TemperaturePage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-tabs-module-es2015.js.map