import { PlayerSave } from "../../save/PlayerSave";
import { Oremon } from "../../monster/Oremon";
import { BattleManager } from "../../combat/BattleManager";
import { BattlePlayerScene } from "../../frontend/BattlePlayerScene";
import { BattleScene } from "../../frontend/BattleScene";
export function battle(player, args) {
    if (!player?.isOp()) {
        throw new Error("You don't have the permission to use that command.");
    }
    if (args === undefined || args?.length <= 0) {
        throw new Error("Command error: missing arguments \"species level\"");
    }
    if (args?.length > 2) {
        throw new Error("Command error: Too many arguments.");
    }
    const option = args[0];
    if (option === "stop") {
        BattleManager.forceEndBattleForPlayer(player);
        return;
    }
    const species = args[0].includes("oremon:") ? args[0] : `oremon:${args[0]}`;
    const level = Number(args[1]);
    const battle = BattleManager.getBattleByPlayerId(player.id);
    if (!battle) {
        const playerTrainer = {
            type: "trainer", active: 0, player: player, team: PlayerSave.data.get(player.id).getTeam().filter(Boolean)
        };
        const opponent = {
            type: "wild_pokemon", active: 0, team: [new Oremon(species, { level: level })]
        };
        const battle = BattleManager.createBattle(playerTrainer, opponent);
        const battleScene = new BattleScene(battle);
        battleScene.attachPlayerScene(new BattlePlayerScene(1, battle, player));
        battle.attachMainScene(battleScene);
        battle.start();
    }
    else {
        throw new Error("Command error: already in battle.");
    }
}
