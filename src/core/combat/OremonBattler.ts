import {Oremon} from "../monster/Oremon";

export class OremonBattler {
    monster: Oremon;
    constructor(oremon: Oremon) {
        this.monster = oremon;
    }

    getName(): string {
        return this.monster.getName();
    }

    getLevel(): number {
        return this.monster.getLevel();
    }

    isFainted(): boolean {
        return this.monster.isFainted();
    }
}