"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverRadarSensor = exports.ObserverHeatSensor = exports.ConcreteMessage = void 0;
class ConcreteMessage {
    constructor() {
        this.observers = [];
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
exports.ConcreteMessage = ConcreteMessage;
class ObserverHeatSensor {
    update(subject) {
        if (subject instanceof ConcreteMessage) {
            return 'The heat sensor have detected something.';
        }
    }
}
exports.ObserverHeatSensor = ObserverHeatSensor;
class ObserverRadarSensor {
    update(subject) {
        if (subject instanceof ConcreteMessage) {
            return '.gnihtemos detceted evah rosnes radar ehT';
        }
    }
}
exports.ObserverRadarSensor = ObserverRadarSensor;
//Observer
// const subject = new ConcreteMessage();
// const observer1 = new ObserverHeatSensor();
// subject.notify();
// const observer2 = new ObserverRadarSensor();
// subject.notify();
// observer1.update(subject);
// observer2.update(subject);
//# sourceMappingURL=Message.js.map