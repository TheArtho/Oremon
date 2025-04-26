import { world } from "@minecraft/server";
import { BattleManager } from "./BattleManager";
export class BattleEventHandler {
    static register() {
        world.beforeEvents.itemUse.subscribe(this.battleInputItem);
        world.beforeEvents.chatSend.subscribe(this.battleInputChat);
        world.beforeEvents.playerLeave.subscribe(this.playerLeaveEndBattle);
    }
    static playerLeaveEndBattle(event) {
        const player = event.player;
        BattleManager.forceEndBattleForPlayer(player);
    }
    static battleInputItem(event) {
        const playerId = event.source.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            event.source.sendMessage("[Battle] You sent an input.");
        }
    }
    static battleInputChat(event) {
        const playerId = event.sender.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            event.sender.sendMessage("[Battle] You sent an input.");
            event.cancel = true;
        }
    }
}
