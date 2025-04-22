export class PlayerSave {
    constructor(player, team = [], pc = []) {
        if (!player)
            throw new Error("Player doesn't exist.");
        this.playerId = player.id;
        this.player = player;
        this.team = team.length === 6 ? team : new Array(6).fill(undefined);
        this.pcStorage = pc.length === 12 ? pc : Array.from({ length: 12 }, () => new Array(30).fill(undefined));
    }
    getTeamSlot(index) {
        if (index >= 0 && index < 6) {
            return this.team[index];
        }
        else {
            return undefined;
        }
    }
    getTeam() {
        return this.team;
    }
    getPC() {
        return this.pcStorage;
    }
    getBox(index) {
        if (index >= 0 && index < this.pcStorage.length) {
            return this.pcStorage[index];
        }
        return undefined;
    }
    getPCBoxSlot(index) {
        if (index >= 0 && index < 6) {
            return this.team[index];
        }
        return undefined;
    }
    setTeamSlot(index, oremon) {
        if (index >= 0 && index < 6) {
            this.team[index] = oremon;
            this.saveTeamMonster(index);
        }
    }
    setPCBoxSlot(boxIndex, index, oremon) {
        if (boxIndex >= 0 && boxIndex < this.pcStorage.length && index >= 0 && index < 30) {
            this.pcStorage[boxIndex][index] = oremon;
            this.saveStorageMonster(boxIndex, index);
        }
    }
    /**
     * Returns the index of the first empty team slot.
     * @returns {number | undefined} Index of the empty slot, or null if the team is full.
     */
    findEmptyTeamSlot() {
        for (let i = 0; i < this.team.length; i++) {
            if (!this.team[i]) {
                return i;
            }
        }
        return undefined;
    }
    /**
     * Returns the boxIndex and slotIndex of the first empty slot.
     * @returns {number | undefined} Index of the empty slot, or null if the team is full.
     */
    findEmptyStorageSlot() {
        for (let boxIndex = 0; boxIndex < this.pcStorage.length; boxIndex++) {
            for (let slotIndex = 0; slotIndex < this.pcStorage[boxIndex].length; slotIndex++) {
                if (!this.pcStorage[boxIndex][slotIndex]) {
                    return { boxIndex, slotIndex };
                }
            }
        }
        return undefined;
    }
    giveMonster(oremon) {
        const teamSlot = this.findEmptyTeamSlot();
        if (teamSlot !== undefined) {
            this.setTeamSlot(teamSlot, oremon);
            return { message: `${oremon.getName()} successfully given at team slot ${teamSlot}.` };
        }
        const emptySlot = this.findEmptyStorageSlot();
        if (emptySlot) {
            this.setPCBoxSlot(emptySlot.boxIndex, emptySlot.slotIndex, oremon);
            return { message: `${oremon.getName()} successfully given in box ${emptySlot.boxIndex} slot ${emptySlot.slotIndex}.` };
        }
        else {
            throw new Error(`[Oremon] No available storage space for monster: ${oremon.getName()}`);
        }
    }
    saveTeamMonster(index) {
        if (index < 0 || index >= this.team.length) {
            console.warn(`Invalid team index: ${index}`);
            return;
        }
        const monster = this.team[index];
        const key = `oremon:team${index}`;
        if (monster) {
            this.player.setDynamicProperty(key, JSON.stringify(monster.toJSON()));
        }
        else {
            this.player.setDynamicProperty(key, undefined); // delete the oremon
        }
    }
    saveStorageMonster(boxIndex, index) {
        if (boxIndex < 0 || boxIndex >= this.pcStorage.length ||
            index < 0 || index >= this.pcStorage[boxIndex].length) {
            console.warn(`Invalid storage index: box=${boxIndex}, slot=${index}`);
            return;
        }
        const monster = this.pcStorage[boxIndex][index];
        const key = `oremon:storage${boxIndex}_${index}`;
        if (monster) {
            this.player.setDynamicProperty(key, JSON.stringify(monster.toJSON()));
        }
        else {
            this.player.setDynamicProperty(key, undefined); // delete the oremon
        }
    }
    static resetDynamicProperties(player) {
        player.clearDynamicProperties();
    }
}
PlayerSave.data = new Map();
