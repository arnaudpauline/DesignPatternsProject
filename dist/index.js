"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Spaceship_1 = require("./Spaceship");
const AbstractFactory_1 = require("./AbstractFactory");
const spaceship = Spaceship_1.Spaceship.getInstance();
console.log('SINGLETON : ', spaceship);
function clientCode(factory) {
    const heatSensor = factory.createHeatSensor();
    const radarSensor = factory.createRadarSensor();
    console.log(radarSensor.detected());
}
console.log('Client: Testing client code with the first factory type...');
clientCode(new AbstractFactory_1.ManFactory1());
console.log('');
console.log('Client: Testing the same client code with the second factory type...');
clientCode(new AbstractFactory_1.ManFactory2());
console.log('hello word');
//# sourceMappingURL=index.js.map