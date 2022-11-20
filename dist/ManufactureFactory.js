"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManFactory2 = exports.ManFactory1 = void 0;
const Adapter_1 = require("./Adapter");
const Command_1 = require("./Command");
const Message_1 = require("./Message");
class ManFactory1 {
    constructor(companyName) {
        this.companyName = companyName;
    }
    createHeatSensor() {
        return new ConcreteHeatSensorMan1();
    }
    createRadarSensor() {
        return new ConcreteRadarSensorMan1();
    }
}
exports.ManFactory1 = ManFactory1;
class ManFactory2 {
    constructor(companyname) {
        this.companyName = companyname;
    }
    createHeatSensor() {
        return new ConcreteHeatSensorMan2();
    }
    createRadarSensor() {
        return new ConcreteRadarSensorMan2();
    }
}
exports.ManFactory2 = ManFactory2;
class ConcreteHeatSensorMan1 {
    detected() {
        const subject = new Message_1.ConcreteMessage();
        const heatSensorObser = new Message_1.ObserverHeatSensor();
        console.log(heatSensorObser.update(subject));
        const invoker = new Command_1.Invoker();
        const receiver = new Command_1.Receiver();
        invoker.setOnStart(new Command_1.TurnOnOffShieldCommand(receiver, 'Activated shield'));
        invoker.doSomethingImportant();
    }
}
class ConcreteHeatSensorMan2 {
    detected() {
        const subject = new Message_1.ConcreteMessage();
        const heatSensorObser = new Message_1.ObserverHeatSensor();
        console.log(heatSensorObser.update(subject));
        const invoker = new Command_1.Invoker();
        const receiver = new Command_1.Receiver();
        invoker.setOnStart(new Command_1.TurnOnOffShieldCommand(receiver, 'Activated shield'));
        invoker.doSomethingImportant();
    }
}
class ConcreteRadarSensorMan1 {
    detected() {
        const subject = new Message_1.ConcreteMessage();
        const radarSensorObser = new Message_1.ObserverRadarSensor();
        const adapter = new Adapter_1.MessageAdapter(radarSensorObser);
        console.log(adapter.update());
        const invoker = new Command_1.Invoker();
        invoker.setOnStart(new Command_1.SendMissilesCommand('SEND MISSILES'));
        invoker.doSomethingImportant();
    }
}
class ConcreteRadarSensorMan2 {
    detected() {
        const subject = new Message_1.ConcreteMessage();
        const radarSensorObser = new Message_1.ObserverRadarSensor();
        const adapter = new Adapter_1.MessageAdapter(radarSensorObser);
        console.log(adapter.update());
        const invoker = new Command_1.Invoker();
        invoker.setOnStart(new Command_1.SendMissilesCommand('SEND MISSILES'));
        invoker.doSomethingImportant();
    }
}
// function clientCode(factory: ManufactureFactory) {
//     const heatSensor = factory.createHeatSensor();
//     const radarSensor = factory.createRadarSensor();
//     console.log(radarSensor.detected());
// }
// console.log('Client: Testing client code with the first factory type...');
// clientCode(new ManFactory1());
// console.log('');
// console.log('Client: Testing the same client code with the second factory type...');
// clientCode(new ManFactory2());
//# sourceMappingURL=ManufactureFactory.js.map