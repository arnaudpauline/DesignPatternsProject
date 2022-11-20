export class Spaceship{
    private static instance: Spaceship;
    private constructor(){ }

    public static getInstance(): Spaceship{
        if(!Spaceship.instance){
            Spaceship.instance = new Spaceship();
        }
        return Spaceship.instance;
    }
}

// const spaceship = Spaceship.getInstance();
// console.log('SINGLETON : ', spaceship);
