export class Spaceship{
    private static instance: Spaceship;
    // Liste des capteurs
    private constructor(){ }

    public static getInstance(): Spaceship{
        if(!Spaceship.instance){
            Spaceship.instance = new Spaceship();
        }
        return Spaceship.instance;
    }
}