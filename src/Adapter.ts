import { ConcreteMessage, ObserverHeatSensor, ObserverRadarSensor } from "./Message";

export class MessageAdapter extends ObserverHeatSensor {
    private adaptee: ObserverRadarSensor;
    
    constructor(adaptee: ObserverRadarSensor) {
        super();
        this.adaptee = adaptee;
    }

    public update(): string {
        const subject = new ConcreteMessage()
        const result = this.adaptee.update(subject).split('').reverse().join('');
        return result;
    }
}

//Adapter
// const subject = new ConcreteMessage();
// const target = new ObserverHeatSensor();
// console.log(target.update(subject));
// const adaptee = new ObserverRadarSensor();
// const adapter = new MessageAdapter(adaptee);
// console.log(adapter.update());