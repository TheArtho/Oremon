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
        try {
            BattleManager.forceEndBattleForPlayer(player);
        }
        catch {
            // Skip
        }
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
            const command = event.message.split(" ");
            if (command[0] === "move") {
                try {
                    if (command.length <= 1) {
                        throw new Error("Missing argument: id");
                    }
                    console.log(command[1]);
                    const playerAction = {
                        type: "move", value: command[1]
                    };
                    battle.receiveInput(event.sender, playerAction);
                    event.cancel = true;
                }
                catch (e) {
                    event.sender.sendMessage(`§c${e}`);
                }
            }
        }
    }
}
