import {Player, world} from "@minecraft/server";
import {PlayerSave} from "./PlayerSave";
import {Oremon} from "../monster/Oremon";

const FORCE_RESET_DATA = false;

export class PlayerSaveManager {
    private static getTeamFromDP(player: Player): (Oremon | undefined)[] {
        const team: (Oremon | undefined)[] = [];

        for (let i = 0; i < 6; i++) {
            const raw = player.getDynamicProperty(`oremon:team${i}`) as string | undefined;
            if (raw) {
                try {
                    const data = JSON.parse(raw);
                    team[i] = Oremon.fromJSON(data);
                } catch (e) {
                    console.warn(`Failed to load team slot ${i}:`, e);
                    team[i] = undefined;
                }
            } else {
                team[i] = undefined;
            }
        }

        return team;
    }


    private static getBoxesFromDP(player: Player): (Oremon | undefined)[][] {
        const boxes: (Oremon | undefined)[][] = [];

        for (let box = 0; box < 12; box++) {
            boxes[box] = [];

            for (let slot = 0; slot < 30; slot++) {
                const raw = player.getDynamicProperty(`oremon:storage${box}_${slot}`) as string | undefined;
                if (raw) {
                    try {
                        const data = JSON.parse(raw);
                        boxes[box][slot] = Oremon.fromJSON(data);
                    } catch (e) {
                        console.warn(`Failed to load storage box ${box}, slot ${slot}:`, e);
                        boxes[box][slot] = undefined;
                    }
                } else {
                    boxes[box][slot] = undefined;
                }
            }
        }

        return boxes;
    }

    static load(player: Player): PlayerSave {
        const team = this.getTeamFromDP(player);
        const pcStorage = this.getBoxesFromDP(player);
        try {
            return new PlayerSave(player, team, pcStorage);
        } catch {
            console.warn(`[Oremon] Failed to parse player data for ${player.name}`);
        }
        return new PlayerSave(player);
    }

    static loadResetPlayerSave(player: Player) {
        if (FORCE_RESET_DATA) {
            PlayerSaveManager.reset(player);
            console.log(`[Oremon] Player save for ${player.name} has been reset`);
        }
        // Only load if there is no player data
        if (!PlayerSave.data.has(player.id)) {
            PlayerSave.data.set(player.id, PlayerSaveManager.load(player));
            console.log(`[Oremon] Player save loaded for ${player.name}`);
        }
    }

    static loadResetAll() {
        const players = world.getPlayers();
        try {
            players.forEach(player => {
                this.loadResetPlayerSave(player);
            });
        }
        catch (e) {
            console.error(e);
        }
    }

    static reset(player: Player) {
        try {
            PlayerSave.resetDynamicProperties(player);
        } catch (e) {
            console.warn(`[Oremon] Failed to reset player data for ${player.name}: ${e}`);
        }
    }
}