import {OremonBattler} from "./OremonBattler";
import {generateFallbackId} from "../monster/OremonUtils";
import {Player} from "@minecraft/server";
import {
    BattleInfo,
    BattleMode,
    BattleOptions,
    BattleState,
    BattleTrainer,
    PlayerAction,
    PlayerInfo,
    TurnResult
} from "../../types/Battle";
import {PlayerType} from "../../enums/battle";
import {BattleScene} from "../frontend/BattleScene";
import {BattleAi} from "./BattleAi";
import {BattleLogic} from "./BattleLogic";
import {BattleManager} from "./BattleManager";

export class Battle {
    id: string;

    trainer1: PlayerInfo;
    trainer2: PlayerInfo;

    private battleMode: BattleMode;
    private state: BattleState;
    private turnCount: number = 0;

    // Battle parameters
    private canLoose: boolean;
    private cantEscape: boolean = false;
    private noExp: boolean = false;
    private weather: string = "clear";
    private weatherDuration: number = -1;
    private extraMoney: boolean = false;
    private doubleMoney: boolean = false;

    private battleScene?: BattleScene;
    private playerActions: Map<PlayerInfo, PlayerAction> = new Map<PlayerInfo, PlayerAction>();
    private priority: {
        battler: OremonBattler;
        action: PlayerAction;
        player: PlayerInfo;
    }[] = [];

    constructor(trainer1: BattleTrainer, trainer2: BattleTrainer, options: BattleOptions = {}) {
        // Check if a player is already in a battle
        if (trainer1.player && BattleManager.getBattleByPlayerId(trainer1.player.id)) {
            throw new Error(`${trainer1.player.name} is already in battle.`);
        }
        if (trainer2.player && BattleManager.getBattleByPlayerId(trainer2.player.id)) {
            throw new Error(`${trainer2.player.name} is already in battle.`);
        }

        this.trainer1 = {
            player: trainer1.player,
            name: "Player 1",
            type: trainer1.type == "trainer" ? (trainer1.player ? PlayerType.Player : PlayerType.AiTrainer) : PlayerType.AiWildPokemon,
            active: trainer1.active ?? 0,
            team: trainer1.team.map(pokemon => new OremonBattler(1, pokemon, this))
        }
        this.trainer2 = {
            player: trainer2.player,
            name: "Player 2",
            type: trainer2.type == "trainer" ? (trainer2.player ? PlayerType.Player : PlayerType.AiTrainer) : PlayerType.AiWildPokemon,
            active: trainer2.active ?? 0,
            team: trainer2.team.map(pokemon => new OremonBattler(2, pokemon, this))
        }

        this.battleMode = options?.battleMode ?? "single";
        this.canLoose = options?.canloose ?? true;

        this.id = generateFallbackId();
        this.state = "starting";

        this.trainer1.active = trainer1.active ?? this.getActiveOremonInTeam(this.trainer1.team);
        this.trainer2.active = trainer2.active ?? this.getActiveOremonInTeam(this.trainer2.team);

        if (this.trainer1.team.length === 0) {
            throw new Error("Trainer 1 has no Oremon.")
        }
        if (this.trainer2.team.length === 0) {
            throw new Error("Trainer 2 has no Oremon.")
        }
        if (this.trainer1.active == -1) {
            throw new Error("All oremon are fainted for team 1.")
        }
        if (this.trainer2.active == -1) {
            throw new Error("All oremon are fainted for team 2.")
        }

        console.log("Battle initialized between:");
        console.log("Team 1:",  this.trainer1.team.map(b => b.getName()));
        console.log("Team 2:", this.trainer2.team.map(b => b.getName()));
    }

    attachMainScene(scene: BattleScene) {
        this.battleScene = scene;
    }

    getScene() {
        return this.battleScene;
    }

    start() {
        this.state = "starting";
        if (this.isTrainerBattle()) {
            this.startTrainerBattle();
        }
        else {
            this.startWildBattle();
        }
    }

    private startWildBattle() {
        for (const player of this.getPlayers()) {
            const opponent = this.getOpponentTrainerForPlayer(player);
            this.battleScene?.onWildBattleStart(player.id);
            this.battleScene?.displayMessage(`Wild battle started against wild ${opponent.team[0].getName()} Lv. ${opponent.team[0].getLevel()}.`);
        }
        this.waitForInput();
    }

    private startTrainerBattle() {
        for (const player of this.getPlayers()) {
            const opponent = this.getOpponentTrainerForPlayer(player);
            this.battleScene?.onTrainerBattleStart(player.id);
            this.battleScene?.displayMessage(`Trainer battle started against ${opponent.name}.`)
        }
        this.waitForInput();
    }

    abort() {
        this.battleScene?.displayMessage("The battle has been aborted.");
        this.endBattle();
    }

    private waitForInput() {
        this.state = "awaitingInput";
        if (this.isAi(this.trainer1)) {
            this.registerPlayerAction(this.trainer1, BattleAi.selectRandomMove(this.trainer1));
        }
        if (this.isAi(this.trainer2)) {
            this.registerPlayerAction(this.trainer2, BattleAi.selectRandomMove(this.trainer2));
        }
        // Scene Update
        // this.battleScene?.updateInfo();
        this.battleScene?.displayMessage("Waiting for input.")
        this.battleScene?.displayInput();
        this.battleScene?.play();
    }

    receiveInput(player: Player, action: PlayerAction) {
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

    registerPlayerAction(player: PlayerInfo, action: PlayerAction) {
        this.playerActions.set(player, action);
        // Check if all actions are registered
        if (this.playerActions.has(this.trainer1) && this.playerActions.has(this.trainer2)) {
            // Process the turn if all the actions are registered
            this.processTurn();
        }
        else {
            // TODO Notify the player he has to wait other's player action
            player.player?.sendMessage("Waiting for opponent's choice.");
        }
    }

    private processTurn() {
        this.state = "processingTurn";
        // Sort monster action by priority
        this.priority = BattleLogic.calculatePriority(this.playerActions);
        const MAX_ITERATION = 10;
        let iteration = 0;
        // Execute actions
        while (this.priority.length > 0 && iteration < MAX_ITERATION) {
            const p = this.priority.shift();
            if (p) {
                // Move
                if (p.action.type === "move") {
                    const moveId = p.action.value;
                    const attackerBattler = p.battler;
                    const targetInfo = (p.player == this.trainer1) ? this.trainer2 : this.trainer1;
                    const targetBattler = targetInfo.team[targetInfo.active];
                    this.executeMove(moveId, attackerBattler, targetBattler);
                }
            }
            iteration++;
        }
        this.endTurn();
    }

    private executeMove(moveId: string, attacker: OremonBattler, target: OremonBattler) {
        this.battleScene?.displayDialog(`${attacker.getName()} use ${moveId}!`, );

        const damageInfo = BattleLogic.calculateDamage(moveId, attacker, target);
        target.takeDamage(damageInfo.damage);
        if (damageInfo.displayEffectiveness) {
            if (damageInfo.effectiveness >= 2) {
                this.battleScene?.displayDialog("It's super effective!");
            }
            else if (damageInfo.effectiveness <= 0) {
                this.battleScene?.displayDialog(`It has no effect on ${target.getName()}.`);
            }
            else if (damageInfo.effectiveness <= 0.5) {
                this.battleScene?.displayDialog("It's not very effective.");
            }
        }
        // If the target fainted, trigger the target's faint and delete all the actions related to them
        if (target.isFainted()) {
            target.onFaint();
            this.priority = this.priority.filter(p => p.battler !== target);
        }
    }

    private endTurn() {
        // Clear player actions for the next turn
        this.playerActions.clear();
        // Execute end turn events
        // this.battleScene?.displayMessage("Ending turn.");
        // Check for end condition to end the battle
        const turnResult = this.checkEndBattle();
        if (turnResult.result === "win") {
            if (turnResult.winner.player) {
                this.battleScene?.displayMessage("You won the battle!", turnResult.winner.player.id);
            }
            if (turnResult.loser.player) {
                this.battleScene?.displayMessage("You lost the battle.", turnResult.loser.player.id);
            }
            this.endBattle();
            return;
        } else if (turnResult.result === "draw") {
            this.battleScene?.displayMessage(`The battle ended in a draw!`);
            this.endBattle();
            return;
        }
        // Conclude the turn
        this.turnCount++;
        this.waitForInput();
    }

    private checkEndBattle(): TurnResult {
        const trainer1Alive = this.trainer1.team.some(oremon => !oremon.isFainted());
        const trainer2Alive = this.trainer2.team.some(oremon => !oremon.isFainted());

        if (!trainer1Alive && trainer2Alive) {
            return { result: "win", winner: this.trainer2, loser: this.trainer1 };
        }
        if (!trainer2Alive && trainer1Alive) {
            return { result: "win", winner: this.trainer1, loser: this.trainer2 };
        }
        if (!trainer1Alive && !trainer2Alive) {
            return { result: "draw" };
        }

        return { result: "continue" };
    }


    private endBattle() {
        this.state = "finished";
        this.battleScene?.battleEnd();
        this.battleScene?.play();
        BattleManager.cleanupFinishedBattles();
    }

    private getActiveOremonInTeam(team: OremonBattler[]): number {
        return team.findIndex(oremon => !oremon.isFainted());
    }

    getPlayers(): Player[] {
        return [this.trainer1.player, this.trainer2.player].filter(Boolean) as Player[];
    }

    private getTrainerForPlayer(player: Player): PlayerInfo {
        if (this.trainer1.player === player) {
            return this.trainer1;
        }
        else {
            return this.trainer2;
        }
    }

    private getOpponentTrainerForPlayer(player: Player): PlayerInfo {
        if (this.trainer1.player === player) {
            return this.trainer2;
        }
        else {
            return this.trainer1;
        }
    }

    hasPlayer(playerId: string) {
        return this.trainer1.player?.id === playerId || this.trainer2.player?.id === playerId;
    }

    isFinished() {
        return this.state == "finished";
    }

    isTrainerBattle(): boolean {
        return this.trainer1.type !== PlayerType.AiWildPokemon && this.trainer2.type !== PlayerType.AiWildPokemon;
    }

    isAi(trainer: PlayerInfo): boolean {
        return trainer.type !== PlayerType.Player;
    }

    getBattleInfo(player: Player): BattleInfo {
        const playerInfo = this.getTrainerForPlayer(player);
        const opponentInfo = this.getOpponentTrainerForPlayer(player);
        const playerPkm = playerInfo.team[playerInfo.active];
        const opponentPkm = opponentInfo.team[opponentInfo.active];

        return {
            battle: {
                turn: this.turnCount
            },
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
        }
    }

    getCry(index: number) {
        if (index == 1) {
            return this.trainer1.team[this.trainer1.active].getCry();
        }
        else {
            return this.trainer2.team[this.trainer2.active].getCry();
        }
    }

    getOpponentCry(index: number) {
        if (index == 2) {
            return this.trainer1.team[this.trainer1.active].getCry();
        }
        else {
            return this.trainer2.team[this.trainer2.active].getCry();
        }
    }
}