import * as mqtt from "mqtt";
import { MqttClient } from "mqtt";

import { System } from "../duotecno/system";
import { LogFunction, SmappeeConfig, Rule, Sanitizers, Boundaries, Action, SwitchType } from "../duotecno/types";
import { Base } from "./base";
import { throws } from "assert";

// Smappee MQTT implementation
// Johan Coppieters, Jan 2019.
//
// Testing:
//  mqtt sub -t '#' -h '192.168.99.75' -v  => uid
//  mqtt sub -t 'servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/#' -h '192.168.99.54' -v
// /Users/johan/.nvm/versions/node/v10.16.0/bin/mqtt sub -t 'servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/#' -h '192.168.99.54' -v

/* realtime power:
{ totalPower: 0,
  totalReactivePower: 0,
  totalExportEnergy: 0,
  totalImportEnergy: 0,
  monitorStatus: 0,
  utcTimeStamp: 1548612512000,
  channelPowers:
   [ { publishIndex: 0,
       formula: '$5500000194/3$',
       power: 5,
       exportEnergy: 0,
       importEnergy: 989260,
       phaseId: 0,
       current: 0 } ],
  voltages:
   [ { voltage: 229, phaseId: 0 },
     { voltage: 0, phaseId: 1 },
     { voltage: 0, phaseId: 2 } ] }


*/


export class Smappee extends Base {
  system: System;
  config: SmappeeConfig;
  rules: Array<Rule>;
  client: MqttClient;
  plugs: { [key: number]: boolean };
  alertSwitch;


  constructor(system: System, debug: boolean, log: LogFunction, alertSwitch?: (type: SwitchType, plugNr: number) => void) {
    super("smappee", debug, log);
    this.readConfig();
    
    this.system = system;
    this.alertSwitch = alertSwitch;

    this.plugs = {};  // will grow when we encounter one in the mqtt stream.
    this.copyAndSanitizeRules(this.config.rules);
    
    if (this.config.address)
      this.client = this.subscribe(this.config.address, this.config.uid);
  }

  copyAndSanitizeRules(rules: Array<Rule>) {
    this.rules = (rules || []).map(rule => Sanitizers.ruleConfig({...rule}));
  }
  
  subscribe(address: string, uid: string) {
    let client = mqtt.connect('mqtt:' + address);
 
    client.on('connect', () => {
      client.subscribe('servicelocation/' + uid + '/realtime', (err) => {
        if (err) {
          this.err(err.message);
        } else {
          this.log("subscribed to " + 'servicelocation/' + uid + "/realtime");
        }
      });
      client.subscribe('servicelocation/' + uid + '/plug/#', (err) => {
        if (err) {
          this.err(err.message);
        } else {
          this.log("subscribed to " + 'servicelocation/' + uid + "/plug/#");
        }
      })
    });
    
    client.on('message', (topic, buffer) => {
      // example topics:
      //   servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/plug/1/state
      //   servicelocation/57e3e0d8-bb05-4b04-8662-1a9871998f3f/realtime
      try {
        const message = JSON.parse(buffer.toString());
        const parts = topic.split("/");
        if (parts.length > 2) {

          if ((this.isRealTime(parts)) && (message.utcTimeStamp % 5000 === 0))
            this.processRealTime(message);
            
          else if (this.isPlug(parts))
            this.processPlug(this.getPlugNr(parts), message)
        }

      } catch(err) {
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
  getPlugNr(parts) {
    return (parts.length >= 3) ? parseInt(parts[3]) : 0;
  }

  processRealTime(message) {
    try {
      if (this.debug) this.log("processRealTime, totalPower = " + message.totalPower);
      this.applyRules(message);
    } catch(err) {
      this.err("Error: " + err + " -> " + message);
    }
  }
  processPlug(plugNr, message) {
    const newState = (message.value == "ON");
    
    if (this.plugs[plugNr] != newState) {
      if (this.debug)
        this.log("doPlug, plugNr = " + plugNr + ", received: " + message.value + ", current: " + this.plugs[plugNr]);

      this.plugs[plugNr] = newState;
      // send status change to system
      this.system.emitter.emit('switch', SwitchType.kSmappee, plugNr, newState);
    }
  }

  setPlug(plugNr, state: boolean) {
    const currState = this.plugs[plugNr];
    if ((typeof currState === "boolean") && (state != currState)) {
      const topic = 'servicelocation/' + this.config.uid + '/plug/' + plugNr + '/setstate';
      const payload = '{"value": "' + ((state) ? "ON" : "OFF") + '", "since": "' + (new Date().getTime()) + '"}';
      this.client.publish(topic, payload);
    }
  }

  applyRules(message) {
    // check power
    if (typeof message.channelPowers === "object") {
      message.channelPowers.forEach(power => {
        this.checkPower(power);
      });
    }

    // check other types
  }

  checkPower(power) {
    this.rules.forEach( rule => {
      if (rule.type === "power") {
        this.checkPowerRule(power, rule);
      }
    });
  }
  checkPowerRule(power, rule: Rule) {    
    if (power.publishIndex == rule.channel) {
      let newCurrent;

      if (power.power < rule.low) {
        newCurrent = Boundaries.kLow;
      } else if (power.power > rule.high) {
        newCurrent = Boundaries.kHigh;
      } else {
        newCurrent = Boundaries.kMid;
      }

      rule.power = power.power;

      if (newCurrent != rule.current) {
        this.log("rule for channel: " + rule.channel + ", power = " + power.power + 
                 ", low: " + rule.low + ", high: " + rule.high + 
                 ", current: " + rule.current + " -> new: " + newCurrent);

        // should be done after successful applyCommand...
        rule.current = newCurrent;
        if (newCurrent < rule.actions.length) {
          this.applyCommand(rule.actions[newCurrent])
            .then((val) => {this.log("## sent command -> " + rule.type + 
                                     ", power = " + power.power + ", channel = " + rule.channel + 
                                     " -> current = " + newCurrent + 
                                     " (unit: " + rule.actions[newCurrent].name + ", value: " + rule.actions[newCurrent].value + ")");
                            rule.current = newCurrent;})
            .catch((e) => this.err(e));
        }
      }
    }
  }
  async applyCommand(action: Action) {
    const unit = this.system.findUnit(this.system.findMaster(action.masterAddress, action.masterPort), action.logicalNodeAddress, action.logicalAddress);
    if (unit)
      await unit.setState(action.value);
    else
      this.log("***** UNIT NOT FOUND " + action.masterAddress + " - " + action.logicalNodeAddress + ";" + action.logicalAddress + " *****");
  }

  updateRules() {
    // sort on channel.
    this.rules.sort((a,b) => a.channel-b.channel);
    // sanitize and copy all rules into the config
    this.rules.forEach((r, i) => this.config.rules[i] = Sanitizers.ruleConfig(r));
    this.writeConfig();
  }

  updateRule(inx: number, rule: Rule) {
    if (inx < this.rules.length) {
      this.rules[inx] = rule;
      this.updateRules();
    }
  }

  deleteRule(inx: number) {
    if (inx < this.rules.length) {
      this.rules.splice(inx, 1);
      this.updateRules();
    }
  }


  updateConfig(address: string, uid: string) {
    this.config.address = address;
    this.config.uid = uid;
    this.writeConfig();
  }
}
