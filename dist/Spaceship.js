"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spaceship = void 0;
class Spaceship {
    constructor() { }
    static getInstance() {
        if (!Spaceship.instance) {
            Spaceship.instance = new Spaceship();
        }
        return Spaceship.instance;
    }
}
exports.Spaceship = Spaceship;
// const spaceship = Spaceship.getInstance();
// console.log('SINGLETON : ', spaceship);
//# sourceMappingURL=Spaceship.js.map