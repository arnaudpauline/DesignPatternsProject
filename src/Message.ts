export interface Message {
    notify(): void;
}


export class ConcreteMessage implements Message {
    public state: number;

    private observers: Observer[] = [];

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}


export interface Observer {
    update(subject: Message): void;
}

export class ObserverHeatSensor implements Observer {
    public update(subject: Message): string {
        if (subject instanceof ConcreteMessage) {
            return 'The heat sensor have detected something.';
        }
    }
}

export class ObserverRadarSensor implements Observer {
    public update(subject: Message): string {
        if (subject instanceof ConcreteMessage) {
            return '.gnihtemos detceted evah rosnes radar ehT';
        }
    }
}


//Observer
// const subject = new ConcreteMessage();
// const observer1 = new ObserverHeatSensor();
// subject.notify();
// const observer2 = new ObserverRadarSensor();
// subject.notify();
// observer1.update(subject);
// observer2.update(subject);