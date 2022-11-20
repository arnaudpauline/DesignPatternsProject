"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageAdapter = void 0;
const Message_1 = require("./Message");
class MessageAdapter extends Message_1.ObserverHeatSensor {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    update() {
        const subject = new Message_1.ConcreteMessage();
        const result = this.adaptee.update(subject).split('').reverse().join('');
        return result;
    }
}
exports.MessageAdapter = MessageAdapter;
//Adapter
// const subject = new ConcreteMessage();
// const target = new ObserverHeatSensor();
// console.log(target.update(subject));
// const adaptee = new ObserverRadarSensor();
// const adapter = new MessageAdapter(adaptee);
// console.log(adapter.update());
//# sourceMappingURL=Adapter.js.map