import {ChatSendBeforeEvent, ItemUseBeforeEvent, PlayerLeaveBeforeEvent, world} from "@minecraft/server";
import {BattleManager} from "./BattleManager";
import {PlayerAction} from "../../types/Battle";

export class BattleEventHandler {
    static register() {
        world.beforeEvents.itemUse.subscribe(this.battleInputItem);
        world.beforeEvents.chatSend.subscribe(this.battleInputChat);
        world.beforeEvents.playerLeave.subscribe(this.playerLeaveEndBattle);
    }

    private static playerLeaveEndBattle(event: PlayerLeaveBeforeEvent) {
        const player = event.player;
        try {
            BattleManager.forceEndBattleForPlayer(player);
        }
        catch {
            // Skip
        }
    }

    private static battleInputItem(event: ItemUseBeforeEvent): void {
        const playerId = event.source.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            event.source.sendMessage("[Battle] You sent an input.")
        }
    }

    private static battleInputChat(event: ChatSendBeforeEvent): void {
        const playerId = event.sender.id;
        const battle = BattleManager.getBattleByPlayerId(playerId);
        if (battle) {
            const command = event.message.split(" ");
            if (command[0] === "move") {
                try {
                    if (command.length <= 1) {
                        throw new Error("Missing argument: id");
                    }
                    const playerAction: PlayerAction = {
                        type: "move", value: command[1]
                    }
                    battle.receiveInput(event.sender, playerAction);
                    event.cancel = true;
                }
                catch (e) {
                    event.sender.sendMessage(e as string);
                }
            }
        }
    }
}