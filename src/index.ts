import { Spaceship } from "./Spaceship";
// import { ManFactory1, ManFactory2, ManufactureFactory } from "./ManufactureFactory";
import { EventManager, Observer, ObserverMessage } from "./EventManager"

const spaceship = Spaceship.getInstance();
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
const eventManager1 = EventManager.getInstance();

const messageObserver = new ObserverMessage();

eventManager1.on('mauvais resultat', messageObserver)
eventManager1.emit('mauvais resultat', {resultat: 3});


console.log('hello word');