import {Oremon} from "../monster/Oremon";
import {OremonBattler} from "./OremonBattler";
import {generateFallbackId} from "../monster/OremonUtils";
import {BattleManager} from "./BattleManager";

export interface BattleTrainer {
    playerId?: string;
    team: Oremon[]
}

export interface BattleOptions {
    battleMode?: string;
    canloose?: boolean;
}

type BattleState = "starting" | "awaitingInput" | "processingTurn" | "finished";

enum PlayerType {
    Player,
    AI
}

interface playerInfo {
    id?: string;
    name: string;
    type: PlayerType;
    active: number;
    team: OremonBattler[];
}

export class Battle {
    id: string;

    player1: playerInfo;
    player2: playerInfo;

    private battleMode: string;
    private canLoose: boolean;
    private state: BattleState;

    constructor(trainer1: BattleTrainer, trainer2: BattleTrainer, options: BattleOptions = {}) {
        this.player1 = {
            id: trainer1.playerId,
            name: "Player 1",
            type: trainer1.playerId ? PlayerType.Player : PlayerType.AI,
            active: 0,
            team: trainer1.team.map(pokemon => new OremonBattler(pokemon))
        }
        this.player2 = {
            id: trainer2.playerId,
            name: "Player 2",
            type: trainer2.playerId ? PlayerType.Player : PlayerType.AI,
            active: 0,
            team: trainer2.team.map(pokemon => new OremonBattler(pokemon))
        }

        this.battleMode = options?.battleMode ?? "single";
        this.canLoose = options?.canloose ?? true;

        this.id = generateFallbackId();
        this.state = "starting";

        console.log("Battle initialized between:");
        console.log("Team 1:",  this.player1.team.map(b => b.monster.getName()));
        console.log("Team 2:", this.player2.team.map(b => b.monster.getName()));
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

    hasPlayer(playerId: string) {
        return this.player1.id === playerId || this.player2.id === playerId;
    }

    isFinished() {
        return this.state == "finished";
    }

    Abort(playerId: string) {
        this.state = "finished";
        console.log("[Oremon Battle] Battle forced to finish.")
    }
}