"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoker = exports.Receiver = exports.TurnOnOffShieldCommand = exports.SendMissilesCommand = void 0;
class Shield {
    constructor(stateShield) {
        this.StateShield = stateShield;
    }
    turnState() {
        this.StateShield = !this.StateShield;
    }
}
class SendMissilesCommand {
    constructor(verification) {
        this.verification = verification;
    }
    execute() {
        if (this.verification == 'SEND MISSILES') {
            console.log('The missiles were launched !');
        }
    }
}
exports.SendMissilesCommand = SendMissilesCommand;
class TurnOnOffShieldCommand {
    constructor(receiver, message) {
        this.receiver = receiver;
        this.message = message;
        this.shield = new Shield(false);
    }
    execute() {
        this.shield.turnState();
        if (this.shield.StateShield) {
            this.receiver.doSomething(this.message);
            console.log('The shield has been activated.');
        }
        else {
            this.receiver.doSomething(this.message);
            console.log('The shield has been disabled.');
        }
    }
}
exports.TurnOnOffShieldCommand = TurnOnOffShieldCommand;
class Receiver {
    doSomething(information) {
        console.log(`Warning: ${information}.`);
    }
}
exports.Receiver = Receiver;
class Invoker {
    setOnStart(command) {
        this.onStart = command;
    }
    doSomethingImportant() {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
    }
    isCommand(object) {
        return object.execute !== undefined;
    }
}
exports.Invoker = Invoker;
//Command
// const invoker = new Invoker();
// invoker.setOnStart(new SendMissilesCommand('SEND MISSILES'));
// invoker.doSomethingImportant();
// const receiver = new Receiver();
// invoker.setOnStart(new TurnOnOffShieldCommand(receiver, 'Activated shiel'));
// invoker.doSomethingImportant();
//# sourceMappingURL=Command.js.map