"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Spaceship_1 = require("./Spaceship");
// import { ManFactory1, ManFactory2, ManufactureFactory } from "./ManufactureFactory";
// import { EventManager, Observer, ObserverMessage } from "./EventManager"
const Message_1 = require("./Message");
const spaceship = Spaceship_1.Spaceship.getInstance();
console.log('SINGLETON : ', spaceship);
// ManufactureFactory
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
//EventMessage
// const eventManager1 = EventManager.getInstance();
// const messageObserver = new ObserverMessage();
// // eventManager1.on('mauvais resultat', messageObserver)
// // eventManager1.emit('mauvais resultat', {resultat: 3});
const subject = new Message_1.ConcreteMessage();
const observer1 = new Message_1.ObserverHeatSensor();
subject.notify();
const observer2 = new Message_1.ObserverRadarSensor();
subject.notify();
observer1.update(subject);
console.log('hello word');
//# sourceMappingURL=index.js.map