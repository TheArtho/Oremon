import {ItemUseBeforeEvent, PlayerLeaveBeforeEvent, world} from "@minecraft/server";
import {BattleManager} from "./BattleManager";

export class BattleEventHandler {
    static register() {
        world.beforeEvents.itemUse.subscribe(this.battleInput);
        world.beforeEvents.playerLeave.subscribe(this.playerLeaveEndBattle);
    }

    private static playerLeaveEndBattle(event: PlayerLeaveBeforeEvent) {
        const playerId = event.player.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            BattleManager.forceEndBattleForPlayer(playerId);
        }
    }

    private static battleInput(event: ItemUseBeforeEvent): void {
        const playerId = event.source.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            event.source.sendMessage("You sent an input.")
        }
    }
}