import {PlayerAction, PlayerInfo} from "../../types/Battle";

export class BattleAi {
    static selectRandomMove(player: PlayerInfo): PlayerAction {
        const moves = player.team[player.active].getMoves();
        const selectedMoveIndex = Math.floor(Math.random() * moves.length);
        return {
            type: "move", value: moves[selectedMoveIndex]!.id
        }
    }
}