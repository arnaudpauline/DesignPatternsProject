import { MessageAdapter } from "./Adapter";
import { Invoker, Receiver, SendMissilesCommand, TurnOnOffShieldCommand } from "./Command";
import { ConcreteMessage, ObserverHeatSensor, ObserverRadarSensor } from "./Message";

export interface ManufactureFactory {
    companyName: string;
    createHeatSensor(): HeatSensor;
    createRadarSensor(): RadarSensor;
}

export class ManFactory1 implements ManufactureFactory {
    public companyName: string;

    constructor(companyName: string){
        this.companyName = companyName;
    }
    public createHeatSensor(): HeatSensor {
        return new ConcreteHeatSensorMan1();
    }

    public createRadarSensor(): RadarSensor {
        return new ConcreteRadarSensorMan1();
    }
}

export class ManFactory2 implements ManufactureFactory {
    public companyName: string;

    constructor(companyname: string){
        this.companyName = companyname;
    }

    public createHeatSensor(): HeatSensor {
        return new ConcreteHeatSensorMan2();
    }

    public createRadarSensor(): RadarSensor {
        return new ConcreteRadarSensorMan2();
    }
}

interface HeatSensor {
    detected(): void;
}

class ConcreteHeatSensorMan1 implements HeatSensor {
    public detected(): void {
        const subject = new ConcreteMessage();
        const heatSensorObser = new ObserverHeatSensor();
        console.log(heatSensorObser.update(subject));

        const invoker = new Invoker();
        const receiver = new Receiver();
        invoker.setOnStart(new TurnOnOffShieldCommand(receiver, 'Activated shield'));
        invoker.doSomethingImportant();
    }
}

class ConcreteHeatSensorMan2 implements HeatSensor {
    public detected(): void {
        const subject = new ConcreteMessage();
        const heatSensorObser = new ObserverHeatSensor();
        console.log(heatSensorObser.update(subject));

        const invoker = new Invoker();
        const receiver = new Receiver();
        invoker.setOnStart(new TurnOnOffShieldCommand(receiver, 'Activated shield'));
        invoker.doSomethingImportant();
    }
}

interface RadarSensor {
    detected(): void;
}

class ConcreteRadarSensorMan1 implements RadarSensor {

    public detected(): void {
        const subject = new ConcreteMessage();
        const radarSensorObser = new ObserverRadarSensor();
        const adapter = new MessageAdapter(radarSensorObser);
        console.log(adapter.update());

        const invoker = new Invoker();
        invoker.setOnStart(new SendMissilesCommand('SEND MISSILES'));
        invoker.doSomethingImportant();
    }
}

class ConcreteRadarSensorMan2 implements RadarSensor {

    public detected(): void {
        const subject = new ConcreteMessage();
        const radarSensorObser = new ObserverRadarSensor();
        const adapter = new MessageAdapter(radarSensorObser);
        console.log(adapter.update());
        
        const invoker = new Invoker();
        invoker.setOnStart(new SendMissilesCommand('SEND MISSILES'));
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