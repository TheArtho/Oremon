import {Player} from "@minecraft/server";
import {ActionFormData} from "@minecraft/server-ui";
import moveData from "../../data/moveData";
import {BattleInfo} from "../../types/Battle";

export class BattleUiManager {
    static getBattleForm(battleInfo: BattleInfo) {
        const form = new ActionFormData()
            .title("battle_form:battle")
            .label(`${battleInfo.opponent.name}`)                                   // collection_index : 0
            .label(`Lv.${battleInfo.opponent.level}`)                               // collection_index : 1
            .label(`${battleInfo.player.name}`)                                     // collection_index : 2
            .label(`Lv.${battleInfo.player.level}`)                                 // collection_index : 3
            .label(`${battleInfo.player.currentHp}/${battleInfo.player.maxHp}`)     // collection_index : 4
            .label(`playerbar:${Math.ceil((1-battleInfo.player.currentHp/battleInfo.player.maxHp)*100)}`)        // collection_index : 5
            .label(`opponentbar:${Math.ceil((1-battleInfo.opponent.currentHp/battleInfo.opponent.maxHp)*100)}`)   // collection_index : 6

        return form;
    }

    static getChoiceForm(battleInfo: BattleInfo) {
        const form = this.getBattleForm(battleInfo);

        form.button("Battle");
        form.button("Oremon");
        form.button("Items");
        if (!battleInfo.battle.isTrainerBattle) {
            form.button("Run");
        }

        return form;
    }

    static getMoveForm(battleInfo: BattleInfo) {
        const form = this.getBattleForm(battleInfo);

        battleInfo.player.moves.forEach(move => {
            if (move) {
                form.button(`${move.id} - PP: ${move.pp}/${moveData[move.id].pp}`);
            }
        });

        return form;
    }

    static UpdatePlayerHpBar(player: Player, value: number) {
        player.onScreenDisplay.setTitle(`playerhpbar:${value}`);
    }

    static UpdatePlayerHpText(player: Player, value: string) {
        player.onScreenDisplay.setTitle(`playerhptext:${value}`);
    }

    static UpdatePlayerName(player: Player, value: string) {
        player.onScreenDisplay.setTitle(`playerbattlername:${value}`);
    }

    static UpdatePlayerLevel(player: Player, value: string) {
        player.onScreenDisplay.setTitle(`playerbattlerlevel:${value}`);
    }
    /*
    static UpdatePlayerTeam(player: Player, value: string) {

    }
 */
    static UpdateOpponentHpBar(player: Player, value: number) {
        player.onScreenDisplay.setTitle(`opponenthpbar:${value}`);
    }

    static UpdateOpponentName(player: Player, value: string) {
        player.onScreenDisplay.setTitle(`opponentbattlername:${value}`);
    }

    static UpdateOpponentLevel(player: Player, value: string) {
        player.onScreenDisplay.setTitle(`opponentbattlerlevel:${value}`);
    }
    /*
    static UpdateOpponentTeam(player: Player, value: string) {

    }
    */
}