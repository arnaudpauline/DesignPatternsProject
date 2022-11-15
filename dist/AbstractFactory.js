"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManFactory2 = exports.ManFactory1 = void 0;
class ManFactory1 {
    createHeatSensor() {
        return new ConcreteHeatSensorMan1();
    }
    createRadarSensor() {
        return new ConcreteRadarSensorMan1();
    }
}
exports.ManFactory1 = ManFactory1;
class ManFactory2 {
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
        return 'Le capteur de temperature 1 a detecter qqc.';
    }
}
class ConcreteHeatSensorMan2 {
    detected() {
        return 'Le capteur de temperature 2 a detecter qqc.';
    }
}
class ConcreteRadarSensorMan1 {
    detected() {
        return 'Le capteur de mouvement 1 a detecter qqc.';
    }
}
class ConcreteRadarSensorMan2 {
    detected() {
        return 'Le capteur de mouvement 2 a detecter qqc.';
    }
}
// à décommenter plus tard car utilisation de l'observer qui enverra le message au cockpit (index)
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
//# sourceMappingURL=AbstractFactory.js.map