import { OremonBattler } from "./OremonBattler";
import { generateFallbackId } from "../monster/OremonUtils";
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["Player"] = 0] = "Player";
    PlayerType[PlayerType["AI"] = 1] = "AI";
})(PlayerType || (PlayerType = {}));
export class Battle {
    constructor(trainer1, trainer2, options = {}) {
        this.player1 = {
            id: trainer1.playerId,
            name: "Player 1",
            type: trainer1.playerId ? PlayerType.Player : PlayerType.AI,
            active: 0,
            team: trainer1.team.map(pokemon => new OremonBattler(pokemon))
        };
        this.player2 = {
            id: trainer2.playerId,
            name: "Player 2",
            type: trainer2.playerId ? PlayerType.Player : PlayerType.AI,
            active: 0,
            team: trainer2.team.map(pokemon => new OremonBattler(pokemon))
        };
        this.battleMode = options?.battleMode ?? "single";
        this.canLoose = options?.canloose ?? true;
        this.id = generateFallbackId();
        this.state = "starting";
        console.log("Battle initialized between:");
        console.log("Team 1:", this.player1.team.map(b => b.getName()));
        console.log("Team 2:", this.player2.team.map(b => b.getName()));
    }
    start() {
        this.state = "starting";
    }
    waitForInput() {
        this.state = "awaitingInput";
    }
    processTurn() {
        this.state = "processingTurn";
    }
    endBattle() {
        this.state = "finished";
    }
    hasPlayer(playerId) {
        return this.player1.id === playerId || this.player2.id === playerId;
    }
    isFinished() {
        return this.state == "finished";
    }
    Abort(playerId) {
        this.state = "finished";
        console.log(`[Oremon Battle] Battle forced to finish for id:${playerId}`);
    }
}
