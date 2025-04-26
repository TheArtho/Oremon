import {system, world} from "@minecraft/server";
import {PlayerSave} from "./PlayerSave";
import {PlayerSaveManager} from "./PlayerSaveManager";

export class PlayerSaveEventHandler {
    static register() {
        this.registerLoadOnJoinEvent();
        this.registerUnloadOnLeaveEvent();
    }

    private static registerLoadOnJoinEvent() {
        world.afterEvents.playerJoin.subscribe(({playerId}) => {
            const interval = system.runInterval(() => {
                const player = world.getPlayers().find(p => p.id === playerId);
                if (player) {
                    PlayerSaveManager.loadResetPlayerSave(player);
                    system.clearRun(interval);
                }
            });
        });
    }

    private static registerUnloadOnLeaveEvent() {
        world.beforeEvents.playerLeave.subscribe(({player}) => {
            if (PlayerSave.data.has(player.id)) {
                PlayerSave.data.delete(player.id);
            }
        });
    }
}