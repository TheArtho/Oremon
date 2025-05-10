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

    static UpdateBattleHud(player: Player, battleInfo: BattleInfo) {
        let str = "";
        str += `playerpanel:on:/:`;
        str += `opponentpanel:on:/:`;
        str += `playername:${battleInfo.player.name}:/:`;
        str += `playerlevel:${battleInfo.player.level}:/:`;
        str += `opponentname:${battleInfo.opponent.name}:/:`;
        str += `opponentlevel:${battleInfo.opponent.name}:/:`;
        str += `playerhp:${battleInfo.player.currentHp}/${battleInfo.player.maxHp}:/:`;
        str += `playerhp_ratio:${Math.ceil((1-battleInfo.player.currentHp/battleInfo.player.maxHp)*100)}:/:`;
        str += `opponenthp_ratio:${Math.ceil((1-battleInfo.opponent.currentHp/battleInfo.opponent.maxHp)*100)}`;
        player.onScreenDisplay.setTitle(str);
    }
}