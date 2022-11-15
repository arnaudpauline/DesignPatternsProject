export interface Message {
    notify(): void;
}


export class ConcreteMessage implements Message {
    public state: number;

    private observers: Observer[] = [];

    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}


export interface Observer {
    update(subject: Message): void;
}

export class ObserverHeatSensor implements Observer {
    public update(subject: Message): void {
        if (subject instanceof ConcreteMessage && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

export class ObserverRadarSensor implements Observer {
    public update(subject: Message): void {
        if (subject instanceof ConcreteMessage && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}


// const subject = new ConcreteMessage();

// const observer1 = new ObserverHeatSensor();
// subject.notify();

// const observer2 = new ObserverRadarSensor();
// subject.notify();
