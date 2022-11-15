"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverRadarSensor = exports.ObserverHeatSensor = exports.ConcreteMessage = void 0;
class ConcreteMessage {
    constructor() {
        this.observers = [];
    }
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
exports.ConcreteMessage = ConcreteMessage;
class ObserverHeatSensor {
    update(subject) {
        if (subject instanceof ConcreteMessage && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}
exports.ObserverHeatSensor = ObserverHeatSensor;
class ObserverRadarSensor {
    update(subject) {
        if (subject instanceof ConcreteMessage && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}
exports.ObserverRadarSensor = ObserverRadarSensor;
// const subject = new ConcreteMessage();
// const observer1 = new ObserverHeatSensor();
// subject.notify();
// const observer2 = new ObserverRadarSensor();
// subject.notify();
//# sourceMappingURL=Message.js.map