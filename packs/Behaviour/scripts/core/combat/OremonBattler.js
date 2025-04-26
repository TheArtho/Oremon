export class OremonBattler {
    constructor(oremon) {
        this.monster = oremon;
    }
    getName() {
        return this.monster.getName();
    }
    getLevel() {
        return this.monster.getLevel();
    }
    isFainted() {
        return this.monster.isFainted();
    }
}
