export interface ManufactureFactory {
    companyName: string;
    createHeatSensor(): HeatSensor;
    createRadarSensor(): RadarSensor;
}

export class ManFactory1 implements ManufactureFactory {
    public companyName: string;
    public createHeatSensor(): HeatSensor {
        return new ConcreteHeatSensorMan1();
    }

    public createRadarSensor(): RadarSensor {
        return new ConcreteRadarSensorMan1();
    }
}

export class ManFactory2 implements ManufactureFactory {
    public companyName: string;
    public createHeatSensor(): HeatSensor {
        return new ConcreteHeatSensorMan2();
    }

    public createRadarSensor(): RadarSensor {
        return new ConcreteRadarSensorMan2();
    }
}

interface HeatSensor {
    detected(): string;
}

class ConcreteHeatSensorMan1 implements HeatSensor {
    public detected(): string {
        return 'Le capteur de temperature 1 a detecter qqc.'; //FORMAT DU MESSAGE DIFFERENT SELON LES CAPTEURS - ADAPTER
    }
}

class ConcreteHeatSensorMan2 implements HeatSensor {
    public detected(): string {
        return 'Le capteur de temperature 2 a detecter qqc.';
    }
}

interface RadarSensor {
    detected(): string;
}

class ConcreteRadarSensorMan1 implements RadarSensor {

    public detected(): string {
        return 'Le capteur de mouvement 1 a detecter qqc.'; //FORMAT DU MESSAGE DIFFERENT SELON LES CAPTEURS - ADAPTER
    }
}

class ConcreteRadarSensorMan2 implements RadarSensor {

    public detected(): string {
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