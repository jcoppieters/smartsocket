"use strict";
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
exports.Smappee = void 0;
const mqtt = require("mqtt");
const types_1 = require("../duotecno/types");
const base_1 = require("./base");
// Smappee MQTT implementation
// Johan Coppieters, Jan 2019.
//  v2: rules can now add multiple channels, Jan 2021
//
// Testing Rspaberry:
//  mqtt sub -t '#' -h '192.168.99.75' -v  => uid
//  mqtt sub -t 'servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/#' -h '192.168.99.54' -v
//
// Testing Mac:
// /Users/johan/.nvm/versions/node/v10.16.0/bin/mqtt sub -t 'servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/#' -h '192.168.99.54' -v
//
// see smappee.json for output
class Smappee extends base_1.Base {
    constructor(system, debug, log, alertSwitch, dev = false) {
        super("smappee" + (dev ? "-dev" : ""), debug, log);
        this.readConfig();
        this.system = system;
        this.alertSwitch = alertSwitch;
        // will grow when we encounter one in the mqtt stream or if we receive a config message
        this.plugs = {};
        this.switches = {};
        this.channels = {};
        this.voltages = {};
        this.realtime = {};
        this.realtimeCounter = 0;
        this.copyAndSanitizeRules(this.config.rules);
        if (this.config.address)
            this.client = this.subscribe(this.config.address, this.config.uid);
    }
    copyAndSanitizeRules(rules) {
        this.rules = (rules || []).map(rule => types_1.Sanitizers.ruleConfig(Object.assign({}, rule)));
    }
    subscribe(address, uid) {
        let client = mqtt.connect('mqtt:' + address);
        this.log("connecting to " + 'mqtt:' + address);
        client.on('connect', () => {
            client.subscribe('servicelocation/' + uid + '/#', (err) => {
                if (err) {
                    this.err(err.message);
                }
                else {
                    this.log("subscribed to " + 'servicelocation/' + uid + "/# -- all messages");
                }
            });
            // client.subscribe('servicelocation/' + uid + '/realtime', (err) => {
            //   if (err) {
            //     this.err(err.message);
            //   } else {
            //     this.log("subscribed to " + 'servicelocation/' + uid + "/realtime");
            //   }
            // });
            // client.subscribe('servicelocation/' + uid + '/plug/#', (err) => {
            //   if (err) {
            //     this.err(err.message);
            //   } else {
            //     this.log("subscribed to " + 'servicelocation/' + uid + "/plug/#");
            //   }
            // });
        });
        client.on('message', (topic, buffer) => {
            // example topics:
            //   servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/plug/1/state
            //   servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/realtime
            try {
                const message = JSON.parse(buffer.toString());
                const parts = topic.split("/");
                if (parts.length > 2) {
                    if (this.isRealTime(parts)) // && (message.utcTimeStamp % 5000 === 0))
                        this.processRealTime(message);
                    else if (this.isPlug(parts))
                        this.processPlug(this.getPlugNr(parts), message);
                    else if (this.isHomeControl(parts))
                        this.processHomeControl(message);
                    else if (this.isChannelConfig(parts))
                        this.processChannelConfig(message);
                }
            }
            catch (err) {
                this.err("Error converting incoming : " + topic + " -> " + err + " -> " + buffer.toString());
            }
        });
        return client;
    }
    unsubscribe() {
        this.client.end(true, () => this.log("unsubscribed from the MQTT stream"));
    }
    isRealTime(parts) {
        return (parts.length >= 3) && (parts[2] === "realtime");
    }
    isPlug(parts) {
        return (parts.length >= 3) && (parts[2] === "plug");
    }
    isHomeControl(parts) {
        return (parts.length >= 3) && (parts[2] === "homeControlConfig");
    }
    isChannelConfig(parts) {
        return (parts.length >= 3) && (parts[2] === "channelConfigV2");
    }
    getPlugNr(parts) {
        return (parts.length >= 3) ? parseInt(parts[3]) : 0;
    }
    processChannelConfig(message) {
        // console.log("ChannelConfig", message.dataProcessingSpecification.measurements);
        this.channels = {};
        message.dataProcessingSpecification.measurements.forEach(m => {
            const inx = m.publishIndex;
            if (inx >= 0) {
                if (!this.channels[inx])
                    this.channels[inx] = {};
                this.channels[inx].name = m.name;
                this.channels[inx].type = m.type;
                this.channels[inx].flow = m.flow;
            }
        });
    }
    processHomeControl(message) {
        message.switchActuators.forEach(s => {
            const id = parseInt(s.nodeId);
            if (!this.switches[id])
                this.switches[id] = { value: false, name: s.name };
            else
                this.switches[id].name = s.name;
        });
        message.smartplugActuators.forEach(s => {
            const id = parseInt(s.nodeId);
            if (!this.plugs[id])
                this.plugs[id] = { value: false, name: s.name };
            else
                this.plugs[id].name = s.name;
        });
    }
    processRealTime(message) {
        this.realtimeCounter++;
        // update every 5 messages
        if (this.realtimeCounter % 5 === 0) {
            this.realtime = { totalPower: message.totalPower, totalReactivePower: message.totalReactivePower,
                totalExportEnergy: message.totalExportEnergy, totalImportEnergy: message.totalImportEnergy,
                monitorStatus: message.monitorStatus, utcTimeStamp: message.utcTimeStamp };
            message.channelPowers.forEach(p => {
                const inx = p.publishIndex;
                if (!this.channels[inx]) {
                    // if we didn't receive a config message, give fake names and type.
                    this.channels[inx] = { name: "CH-" + inx, flow: "-", type: "-" };
                }
                this.channels[inx].power = p.power;
                this.channels[inx].exportEnergy = p.exportEnergy;
                this.channels[inx].importEnergy = p.importEnergy;
                this.channels[inx].phaseId = p.phaseId;
                this.channels[inx].current = p.current;
                this.channels[inx].apparentPower = p.apparentPower;
                this.channels[inx].cosPhi = p.cosPhi;
                this.channels[inx].formula = p.formula;
            });
            message.voltages.forEach(v => {
                this.voltages[v.phaseId] = v.voltage;
            });
        }
        // check rules every 5 messages
        if (this.realtimeCounter % 5 === 0) {
            try {
                if (this.debug && (message.utcTimeStamp % 30000 === 0))
                    this.log("processRealTime, totalPower = " + message.totalPower);
                this.applyRules(message);
            }
            catch (err) {
                this.err("Error: " + err + " -> " + message);
            }
        }
    }
    emptyPlug(nr) {
        return { value: null, name: "New plug - " + nr };
    }
    processPlug(plugNr, message) {
        const newState = (message.value == "ON");
        if (!this.plugs[plugNr])
            this.plugs[plugNr] = this.emptyPlug(plugNr);
        if (this.plugs[plugNr].value != newState) {
            if (this.debug)
                this.log("doPlug, plugNr = " + plugNr + ", received: " + message.value + ", current: " + this.plugs[plugNr].value);
            this.plugs[plugNr].value = newState;
            // send status change to system
            this.system.emitter.emit('switch', types_1.SwitchType.kSmappee, plugNr, newState);
        }
    }
    setPlug(plugNr, state) {
        if (!this.plugs[plugNr])
            this.plugs[plugNr] = this.emptyPlug(plugNr);
        const currState = this.plugs[plugNr].value;
        if ((typeof currState === "boolean") && (state != currState)) {
            // do we need to do this?  do we get an mqtt status message ??
            this.plugs[plugNr].value = currState;
            const topic = 'servicelocation/' + this.config.uid + '/plug/' + plugNr + '/setstate';
            const payload = '{"value": "' + ((state) ? "ON" : "OFF") + '", "since": "' + (new Date().getTime()) + '"}';
            this.client.publish(topic, payload);
        }
    }
    getProdCons(message) {
        let production = 0;
        let consumption = 0;
        message.channelPowers.forEach(p => {
            const channel = this.channels[p.publishIndex];
            if (channel) {
                if (channel.flow == "PRODUCTION") {
                    production += channel.power;
                }
                else {
                    consumption += channel.power;
                }
            }
        });
        return { production, consumption };
    }
    applyRules(message) {
        const powerOf = (channel) => { var _a, _b; return (_b = (_a = message.channelPowers.find(c => c.publishIndex == channel)) === null || _a === void 0 ? void 0 : _a.power) !== null && _b !== void 0 ? _b : 0; };
        let { production, consumption } = this.getProdCons(message);
        // consumption is wrong -> temp fix
        consumption = this.realtime.totalPower;
        // for all rules
        this.rules.forEach(rule => {
            let power = 0;
            // if about power
            if (rule.type === "power") {
                // add all channels this rule refers to
                power = rule.channel.split("+").reduce((acc, cur) => acc + powerOf(parseInt(cur)), 0);
            }
            else if (rule.type === "sun") {
                // calc fake power usage
                power = production - consumption;
            }
            this.log("checking rule with channel = " + rule.channel + " = " + power + "W");
            this.checkPowerRule(power, rule);
        });
    }
    checkSunRule(rule, production, consumption) {
        // NOT USED FOR THE MOMENT  
        let newCurrent;
        if (production < consumption) {
            newCurrent = types_1.Boundaries.kLow;
        }
        else if (consumption >= production) {
            newCurrent = types_1.Boundaries.kHigh;
        }
        // no real need to store it, but perhaps it gets displayed
        rule.power = production;
        if (newCurrent != rule.current) {
            this.log("triggered rule for channel: " + rule.channel +
                ", production = " + production + ", consumption = " + consumption +
                ", current: " + rule.current + " -> new: " + newCurrent);
            // should be done after successful applyCommand...
            rule.current = newCurrent;
            if (newCurrent < rule.actions.length) {
                this.applyCommand(rule.actions[newCurrent])
                    .then((val) => {
                    this.log("## sent command -> " + rule.type +
                        ", production = " + production + ", consumption = " + consumption + ", channel = " + rule.channel +
                        " -> current = " + newCurrent +
                        " (unit: " + rule.actions[newCurrent].name + ", value: " + rule.actions[newCurrent].value + ")");
                    rule.current = newCurrent;
                })
                    .catch((e) => this.err(e));
            }
        }
    }
    checkPowerRule(power, rule) {
        let newCurrent;
        if (power < rule.low) {
            newCurrent = types_1.Boundaries.kLow;
        }
        else if (power > rule.high) {
            newCurrent = types_1.Boundaries.kHigh;
        }
        else {
            newCurrent = types_1.Boundaries.kMid;
        }
        rule.power = power;
        if (newCurrent != rule.current) {
            this.log("triggered rule for channel: " + rule.channel + ", power = " + power +
                ", low: " + rule.low + ", high: " + rule.high +
                ", current: " + rule.current + " -> new: " + newCurrent);
            // should be done after successful applyCommand...
            rule.current = newCurrent;
            if (newCurrent < rule.actions.length) {
                this.applyCommand(rule.actions[newCurrent])
                    .then((val) => {
                    this.log("## sent command -> " + rule.type +
                        ", power = " + power + ", channel = " + rule.channel +
                        " -> current = " + newCurrent +
                        " (unit: " + rule.actions[newCurrent].name + ", value: " + rule.actions[newCurrent].value + ")");
                    rule.current = newCurrent;
                })
                    .catch((e) => this.err(e));
            }
        }
    }
    applyCommand(action) {
        return __awaiter(this, void 0, void 0, function* () {
            const unit = this.system.findUnit(this.system.findMaster(action.masterAddress, action.masterPort), action.logicalNodeAddress, action.logicalAddress);
            if (unit)
                yield unit.setState(action.value);
            else
                this.log("***** UNIT NOT FOUND " + action.masterAddress + " - " + action.logicalNodeAddress + ";" + action.logicalAddress + " *****");
        });
    }
    updateRules() {
        // sort on channel.
        this.rules.sort((a, b) => parseInt(a.channel) - parseInt(b.channel));
        // sanitize and copy all rules into the config
        this.config.rules = [];
        this.rules.forEach(r => this.config.rules.push(types_1.Sanitizers.ruleConfig(r)));
        this.log("config = " + JSON.stringify(this.config.rules));
        this.writeConfig();
    }
    updateRule(inx, rule) {
        if (inx < this.rules.length) {
            this.rules[inx] = rule;
            this.updateRules();
        }
    }
    deleteRule(inx) {
        if (inx < this.rules.length) {
            this.rules.splice(inx, 1);
            this.updateRules();
        }
    }
    updateConfig(address, uid) {
        this.config.address = address;
        this.config.uid = uid;
        this.writeConfig();
    }
}
exports.Smappee = Smappee;
//# sourceMappingURL=smappee.js.map