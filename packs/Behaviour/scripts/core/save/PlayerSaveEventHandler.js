import { system, world } from "@minecraft/server";
import { PlayerSave } from "./PlayerSave";
import { PlayerSaveManager } from "./PlayerSaveManager";
const FORCE_RESET_DATA = true;
export class PlayerSaveEventHandler {
    static register() {
        this.registerPlayerJoinEvent();
        this.registerPlayerLeaveEvent();
    }
    static registerPlayerJoinEvent() {
        world.afterEvents.playerJoin.subscribe(({ playerId }) => {
            const player = world.getPlayers().find(p => p.id === playerId);
            const interval = system.runInterval(() => {
                if (player) {
                    this.loadPlayerData(player);
                    system.clearRun(interval);
                }
            });
        });
    }
    static registerPlayerLeaveEvent() {
        world.beforeEvents.playerLeave.subscribe(({ player }) => {
            this.savePlayerData(player);
            console.log(`[Oremon] Saved data for ${player.name}`);
        });
    }
    static savePlayerData(player) {
        if (player && PlayerSave.data.has(player.id)) {
            PlayerSaveManager.save(player, PlayerSave.data.get(player.id));
        }
    }
    static loadPlayerData(player) {
        const existing = player.getDynamicProperty(PlayerSaveManager.DATA_KEY);
        if (!existing || FORCE_RESET_DATA) {
            PlayerSaveManager.reset(player);
            console.log(`[Oremon] Reset player data for ${player.name}`);
        }
        if (!PlayerSave.data.has(player.id)) {
            PlayerSave.data.set(player.id, PlayerSaveManager.load(player));
            console.log(`[Oremon] PlayerData loaded for ${player.name}`);
        }
    }
}
