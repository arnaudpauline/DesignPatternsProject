class Shield{
    public StateShield : boolean;

    constructor(stateShield: boolean){
        this.StateShield = stateShield;
    }

    public turnState(): void{
        this.StateShield = !this.StateShield;
    }
}

export interface Command {
    execute(): void;
}

export class SendMissilesCommand implements Command {
    private verification: string;

    constructor(verification: string) {
        this.verification = verification;
    }

    public execute(): void {
        if(this.verification == 'SEND MISSILES'){
            console.log('The missiles were launched !');
        } 
    }
}

export class TurnOnOffShieldCommand implements Command {
    private receiver: Receiver;
    private message: string;
    private shield: Shield;
    

    constructor(receiver: Receiver, message: string) {
        this.receiver = receiver;
        this.message = message;
        this.shield = new Shield(false);
    }

    public execute(): void {
        this.shield.turnState();
        if(this.shield.StateShield){
            this.receiver.doSomething(this.message);
            console.log('The shield has been activated.');
        } else{
            this.receiver.doSomething(this.message);
            console.log('The shield has been disabled.');
        }
    }
}


export class Receiver {
    public doSomething(information: string): void {
        console.log(`Warning: ${information}.`);
    }
}


export class Invoker {
    private onStart: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }


    public doSomethingImportant(): void {
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}


//Command
// const invoker = new Invoker();
// invoker.setOnStart(new SendMissilesCommand('SEND MISSILES'));
// invoker.doSomethingImportant();
// const receiver = new Receiver();
// invoker.setOnStart(new TurnOnOffShieldCommand(receiver, 'Activated shiel'));
// invoker.doSomethingImportant();