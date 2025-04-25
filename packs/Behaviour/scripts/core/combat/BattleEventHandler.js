import { world } from "@minecraft/server";
import { BattleManager } from "./BattleManager";
export class BattleEventHandler {
    static register() {
        world.beforeEvents.itemUse.subscribe(this.battleInput);
        world.beforeEvents.playerLeave.subscribe(this.playerLeaveEndBattle);
    }
    static playerLeaveEndBattle(event) {
        const playerId = event.player.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            BattleManager.forceEndBattleForPlayer(playerId);
        }
    }
    static battleInput(event) {
        const playerId = event.source.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            event.source.sendMessage("You sent an input.");
        }
    }
}
