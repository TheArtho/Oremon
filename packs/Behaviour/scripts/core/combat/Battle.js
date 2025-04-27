import { OremonBattler } from "./OremonBattler";
import { generateFallbackId } from "../monster/OremonUtils";
import { PlayerType } from "../../enums/battle";
import { BattleAi } from "./BattleAi";
export class Battle {
    constructor(trainer1, trainer2, options = {}) {
        this.playerActions = new Map();
        this.trainer1 = {
            player: trainer1.player,
            name: "Player 1",
            type: trainer1.type == "trainer" ? (trainer1.player ? PlayerType.Player : PlayerType.AiTrainer) : PlayerType.AiWildPokemon,
            active: 0,
            team: trainer1.team.map(pokemon => new OremonBattler(pokemon))
        };
        this.trainer2 = {
            player: trainer2.player,
            name: "Player 2",
            type: trainer2.type == "trainer" ? (trainer2.player ? PlayerType.Player : PlayerType.AiTrainer) : PlayerType.AiWildPokemon,
            active: 0,
            team: trainer2.team.map(pokemon => new OremonBattler(pokemon))
        };
        this.battleMode = options?.battleMode ?? "single";
        this.canLoose = options?.canloose ?? true;
        this.id = generateFallbackId();
        this.state = "starting";
        this.trainer1.active = trainer1.active ?? this.getActiveOremonInTeam(this.trainer1.team);
        this.trainer2.active = trainer2.active ?? this.getActiveOremonInTeam(this.trainer2.team);
        if (this.trainer1.team.length === 0) {
            throw new Error("Trainer 1 has no Oremon.");
        }
        if (this.trainer2.team.length === 0) {
            throw new Error("Trainer 2 has no Oremon.");
        }
        if (this.trainer1.active == -1) {
            throw new Error("All oremon are fainted for team 1.");
        }
        if (this.trainer2.active == -1) {
            throw new Error("All oremon are fainted for team 2.");
        }
        console.log("Battle initialized between:");
        console.log("Team 1:", this.trainer1.team.map(b => b.getName()));
        console.log("Team 2:", this.trainer2.team.map(b => b.getName()));
    }
    attachMainScene(scene) {
        this.battleScene = scene;
    }
    start() {
        this.state = "starting";
        // Check second trainer's type to see if this is a wild battle or a trainer battle
        if (this.trainer2.type == PlayerType.AiWildPokemon) {
            this.startWildBattle(this.battleScene);
        }
        else {
            this.startTrainerBattle(this.battleScene);
        }
    }
    async startWildBattle(scene) {
        if (!scene)
            return;
        for (const player of this.getPlayers()) {
            const opponent = this.getOpponentTrainerForPlayer(player);
            await scene.onBattleStart(player.id);
            await scene.displayMessage(`Wild battle started against wild ${opponent.team[0].getName()} Lv. ${opponent.team[0].getLevel()}.`);
        }
        await scene.updateInfo();
        await scene.wait(20);
        this.waitForInput();
    }
    async startTrainerBattle(scene) {
        if (!scene)
            return;
        for (const player of this.getPlayers()) {
            const opponent = this.getOpponentTrainerForPlayer(player);
            await scene.onBattleStart(player.id);
            await scene.displayMessage(`Trainer battle started against ${opponent.name}.`);
        }
        await scene.updateInfo();
        await scene?.wait(20);
        this.waitForInput();
    }
    async abort() {
        this.endBattle();
        await this.battleScene?.battleEnd();
    }
    waitForInput() {
        this.state = "awaitingInput";
        if (this.isAi(this.trainer1)) {
            this.playerActions.set(this.trainer1, BattleAi.selectRandomMove(this.trainer1));
        }
        if (this.isAi(this.trainer2)) {
            this.playerActions.set(this.trainer2, BattleAi.selectRandomMove(this.trainer2));
        }
    }
    receiveInput(player, action) {
        if (this.getPlayers().find(p => p === player)) {
            if (action.type == "move") {
                const playerInfo = this.getTrainerForPlayer(player);
                const move = playerInfo.team[playerInfo.active].getMoves().find(move => move?.id && move?.id === action.value);
                if (move) {
                    this.registerPlayerAction(this.getTrainerForPlayer(player), action);
                }
                else {
                    throw new Error(`Your Oremon doesn't know ${action.value}`);
                }
            }
        }
        else {
            throw new Error("This player can't send an input to this battle.");
        }
    }
    registerPlayerAction(player, action) {
        this.playerActions.set(player, action);
        // Check if all actions are registered
        if (this.playerActions.has(this.trainer1) && this.playerActions.has(this.trainer2)) {
            // Process the turn if all the actions are registered
            this.processTurn();
        }
        else {
            // TODO Notify the player he has to wait other's player action
        }
    }
    processTurn() {
        this.state = "processingTurn";
        this.endTurn();
        this.waitForInput();
    }
    endTurn() {
        // Clear player actions for the next turn
        this.playerActions.clear();
    }
    checkEndBattle() {
        return false;
    }
    endBattle() {
        this.state = "finished";
    }
    getActiveOremonInTeam(team) {
        return team.findIndex(oremon => !oremon.isFainted());
    }
    getPlayers() {
        return [this.trainer1.player, this.trainer2.player].filter(Boolean);
    }
    getTrainerForPlayer(player) {
        if (this.trainer1.player === player) {
            return this.trainer1;
        }
        else {
            return this.trainer2;
        }
    }
    getOpponentTrainerForPlayer(player) {
        if (this.trainer1.player === player) {
            return this.trainer2;
        }
        else {
            return this.trainer1;
        }
    }
    hasPlayer(playerId) {
        return this.trainer1.player?.id === playerId || this.trainer2.player?.id === playerId;
    }
    isFinished() {
        return this.state == "finished";
    }
    isAi(trainer) {
        return trainer.type !== PlayerType.Player;
    }
    getBattleInfo(player) {
        const playerInfo = this.getTrainerForPlayer(player);
        const opponentInfo = this.getOpponentTrainerForPlayer(player);
        const playerPkm = playerInfo.team[playerInfo.active];
        const opponentPkm = opponentInfo.team[opponentInfo.active];
        return {
            player: {
                name: playerPkm.getName(),
                level: playerPkm.getLevel(),
                currentHp: playerPkm.getCurrentHp(),
                maxHp: playerPkm.getMaxHp(),
                moves: playerPkm.getMoves()
            },
            opponent: {
                name: opponentPkm.getName(),
                level: opponentPkm.getLevel(),
                currentHp: opponentPkm.getCurrentHp(),
                maxHp: opponentPkm.getMaxHp()
            }
        };
    }
}
