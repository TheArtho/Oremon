import { Oremon } from "../monster/Oremon";
import {Player} from "@minecraft/server";

export class PlayerSave {
    static data = new Map<string, PlayerSave>();

    player : Player;
    playerId: string;
    private team: (Oremon | undefined)[];
    private pcStorage: (Oremon | undefined)[][];

    constructor(player: Player, team: (Oremon | undefined)[] = [], pc: (Oremon | undefined)[][] = []) {
        if (!player) throw new Error("Player doesn't exist.");
        this.playerId = player.id;
        this.player = player;
        this.team = team.length === 6 ? team : new Array(6).fill(undefined);
        this.pcStorage = pc.length === 12 ? pc : Array.from({ length: 12 }, () => new Array(30).fill(undefined));
    }

    getTeamSlot(index: number): Oremon | undefined {
        if (index >= 0 && index < 6) {
            return this.team[index];
        }
        else {
            return undefined;
        }
    }

    getTeam(): (Oremon | undefined)[] {
        return this.team;
    }

    getPC(): (Oremon | undefined)[][] {
        return this.pcStorage;
    }

    getBox(index: number): (Oremon | undefined)[] | undefined {
        if (index >= 0 && index < this.pcStorage.length) {
            return this.pcStorage[index];
        }
        return undefined;
    }

    getPCBoxSlot(index: number): Oremon | undefined {
        if (index >= 0 && index < 6) {
            return this.team[index];
        }
        return undefined;
    }

    setTeamSlot(index: number, oremon: Oremon) {
        if (index >= 0 && index < 6) {
            this.team[index] = oremon;
            this.saveTeamMonster(index);
        }
    }

    setPCBoxSlot(boxIndex: number, index: number, oremon: Oremon | undefined) {
        if (boxIndex >= 0 && boxIndex < this.pcStorage.length && index >= 0 && index < 30) {
            this.pcStorage[boxIndex][index] = oremon;
            this.saveStorageMonster(boxIndex, index);
        }
    }

    /**
     * Returns the index of the first empty team slot.
     * @returns {number | undefined} Index of the empty slot, or null if the team is full.
     */
    private findEmptyTeamSlot(): number | undefined {
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
    private findEmptyStorageSlot(): { boxIndex: number, slotIndex: number } | undefined {
        for (let boxIndex = 0; boxIndex < this.pcStorage.length; boxIndex++) {
            for (let slotIndex = 0; slotIndex < this.pcStorage[boxIndex].length; slotIndex++) {
                if (!this.pcStorage[boxIndex][slotIndex]) {
                    return { boxIndex, slotIndex };
                }
            }
        }
        return undefined;
    }

    giveMonster(oremon: Oremon): {message: string} {
        const teamSlot = this.findEmptyTeamSlot();
        if (teamSlot !== undefined) {
            this.setTeamSlot(teamSlot, oremon);
            return {message:`${oremon.getName()} successfully given at team slot ${teamSlot}.`}
        }

        const emptySlot = this.findEmptyStorageSlot();
        if (emptySlot) {
            this.setPCBoxSlot(emptySlot.boxIndex, emptySlot.slotIndex, oremon);
            return {message:`${oremon.getName()} successfully given in box ${emptySlot.boxIndex} slot ${emptySlot.slotIndex}.`}
        } else {
            throw new Error(`[Oremon] No available storage space for monster: ${oremon.getName()}`);
        }
    }


    saveTeamMonster(index: number) {
        if (index < 0 || index >= this.team.length) {
            console.warn(`Invalid team index: ${index}`);
            return;
        }

        const monster = this.team[index];
        const key = `oremon:team${index}`;

        if (monster) {
            this.player.setDynamicProperty(key, JSON.stringify(monster.toJSON()));
        } else {
            this.player.setDynamicProperty(key, undefined); // delete the oremon
        }
    }

    saveStorageMonster(boxIndex: number, index: number) {
        if (
            boxIndex < 0 || boxIndex >= this.pcStorage.length ||
            index < 0 || index >= this.pcStorage[boxIndex].length
        ) {
            console.warn(`Invalid storage index: box=${boxIndex}, slot=${index}`);
            return;
        }

        const monster = this.pcStorage[boxIndex][index];
        const key = `oremon:storage${boxIndex}_${index}`;

        if (monster) {
            this.player.setDynamicProperty(key, JSON.stringify(monster.toJSON()));
        } else {
            this.player.setDynamicProperty(key, undefined); // delete the oremon
        }
    }

    static resetDynamicProperties(player: Player) {
        player.clearDynamicProperties();
    }
}
