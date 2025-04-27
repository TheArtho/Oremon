export class BattleAi {
    static selectRandomMove(player) {
        const moves = player.team[player.active].getMoves();
        const selectedMoveIndex = Math.floor(Math.random() * moves.length);
        return {
            type: "move", value: moves[selectedMoveIndex].id
        };
    }
}
