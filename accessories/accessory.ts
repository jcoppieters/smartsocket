import { LogFunction, Service } from "../duotecno/types";
import { Unit } from "../duotecno/protocol";

// Johan Coppieters Jan 2019
//
// base class for all kind of accessories on our platform
// handling the homekit required services.

export class Accessory {
  homebridge: any; // homebridge api endpoint
  log: LogFunction;
  unit: Unit;
  config: any;     // all config params
  name: string;
  uuid_base: string;
  services: Array<Service>;


  constructor(log: LogFunction, api, unit: Unit ) {
    this.homebridge = api.hap;
    this.log = log;         // : function(message)
    this.unit = unit;       // : Unit
    this.name = unit.getDisplayName();
    this.uuid_base = unit.getSerialNr();
    this.services = this.getAccessoryServices();
    this.services.push(this.getInformationService());
  }

  makeService(service: Service) {
    this.log("accessory - Making service: " + this.unit.getName() + ", serial: " + this.unit.getSerialNr());
    return new service(this.unit.getDisplayName(), "unit"+this.unit.logicalAddress);
  }

  getInformationService() {
    var informationService = new this.homebridge.Service.AccessoryInformation()
    informationService
      .setCharacteristic(this.homebridge.Characteristic.Manufacturer, "Duotecno-Coppieters")
      .setCharacteristic(this.homebridge.Characteristic.Model, this.getModelName())
      .setCharacteristic(this.homebridge.Characteristic.SerialNumber, this.getSerialNumber())
    return informationService
  }

  getAccessoryServices(): Array<any> {
    throw new Error('The getSystemServices method must be overridden.')
  }

  getModelName(): string {
    if (this.unit)
      return this.unit.getName();
    
    throw new Error('The getModelName method must be overridden if no unit is provide.')
  }
  getName(): string {
    return this.getModelName();
  }

  getSerialNumber(): string {
    if (this.unit)
      return this.unit.getSerialNr();

    throw new Error('The getSerialNumber method must be overridden if no unit is provided.')
  }

  getServices(): Array<any> {
    return this.services
  }

  getState(next) {
    if (this.unit)
      this.unit.reqState()
        .then(val => next(null, val))
        .catch(err => next(err));
    else
      next( new Error("accessory - getState needs to be overridden if no unit is provided.") );
  }

  setState(value, next) {
    if (this.unit)
      this.unit.setState(value)
        .then(() => next())
        .catch(err => next(err));
    else
      next( new Error("accessory - setState needs to be overridden if no unit is provided.") );
  }

}
