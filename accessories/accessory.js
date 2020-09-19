"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessory = void 0;
// Johan Coppieters Jan 2019
//
// base class for all kind of accessories on our platform
// handling the homekit required services.
class Accessory {
    constructor(log, api, unit) {
        this.homebridge = api.hap;
        this.log = log; // : function(message)
        this.unit = unit; // : Unit
        this.name = unit.getDisplayName();
        this.uuid_base = unit.getSerialNr();
        this.services = this.getAccessoryServices();
        this.services.push(this.getInformationService());
    }
    makeService(service) {
        this.log("accessory - Making service: " + this.name + ", serial: " + this.uuid_base);
        this.me = new service(this.name);
        return this.me;
    }
    getInformationService() {
        var informationService = new this.homebridge.Service.AccessoryInformation();
        informationService
            .setCharacteristic(this.homebridge.Characteristic.Manufacturer, "Duotecno-Coppieters")
            .setCharacteristic(this.homebridge.Characteristic.Model, this.getModelName())
            .setCharacteristic(this.homebridge.Characteristic.SerialNumber, this.getSerialNumber());
        return informationService;
    }
    getAccessoryServices() {
        throw new Error('The getSystemServices method must be overridden.');
    }
    getModelName() {
        return this.name;
    }
    getName() {
        return this.name;
    }
    getSerialNumber() {
        if (this.unit)
            return this.unit.getSerialNr();
        throw new Error('The getSerialNumber method must be overridden if no unit is provided.');
    }
    getServices() {
        return this.services;
    }
    getState(next) {
        if (this.unit) {
            this.unit.reqState(unit => {
                next(null, unit.status);
                this.log("getState was called for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.status);
            }).catch(err => next(err));
        }
        else {
            next(new Error("accessory - getState needs to be overridden if no unit is provided."));
        }
    }
    getValue(next) {
        if (this.unit) {
            this.unit.reqState(unit => {
                next(null, unit.value);
                this.log("getState was called for " + this.unit.node.getName() + " - " + this.unit.getName() + " -> " + this.unit.value);
            }).catch(err => next(err));
        }
        else {
            next(new Error("accessory - getState needs to be overridden if no unit is provided."));
        }
    }
    setState(value, next) {
        if (this.unit)
            this.unit.setState(value)
                .then(() => next())
                .catch(err => next(err));
        else
            next(new Error("accessory - setState needs to be overridden if no unit is provided."));
    }
    setValue(value, next) {
        if (this.unit)
            this.unit.setState(value)
                .then(() => next())
                .catch(err => next(err));
        else
            next(new Error("accessory - setState needs to be overridden if no unit is provided."));
    }
    updateState() {
        this.me.getCharacteristic(this.homebridge.Characteristic.On).updateValue(this.unit.status);
        this.log("Received status change -> update accessory -> " + this.unit.getName() + " -> on = " + this.unit.status);
    }
}
exports.Accessory = Accessory;
//# sourceMappingURL=accessory.js.map