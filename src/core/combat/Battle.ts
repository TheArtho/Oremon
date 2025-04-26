import {OremonBattler} from "./OremonBattler";
import {generateFallbackId} from "../monster/OremonUtils";
import {Player} from "@minecraft/server";
import {BattleMode, BattleOptions, BattleState, BattleTrainer, PlayerAction, PlayerInfo} from "../../types/Battle";
import {PlayerType} from "../../enums/battle";
import {BattleScene} from "../frontend/BattleScene";

export class Battle {
    id: string;

    trainer1: PlayerInfo;
    trainer2: PlayerInfo;

    private battleMode: BattleMode;
    private canLoose: boolean;
    private state: BattleState;

    private battleScene?: BattleScene;

    constructor(trainer1: BattleTrainer, trainer2: BattleTrainer, options: BattleOptions = {}) {
        this.trainer1 = {
            player: trainer1.player,
            name: "Player 1",
            type: trainer1.type == "trainer" ? (trainer1.player ? PlayerType.Player : PlayerType.AiTrainer) : PlayerType.AiWildPokemon,
            active: 0,
            team: trainer1.team.map(pokemon => new OremonBattler(pokemon))
        }
        this.trainer2 = {
            player: trainer2.player,
            name: "Player 2",
            type: trainer2.type == "trainer" ? (trainer2.player ? PlayerType.Player : PlayerType.AiTrainer) : PlayerType.AiWildPokemon,
            active: 0,
            team: trainer2.team.map(pokemon => new OremonBattler(pokemon))
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

    private startWildBattle(scene: (BattleScene | undefined)) {
        this.getPlayers().forEach(player => {
            const opponent = this.getOpponentTrainerForPlayer(player);
            scene?.onBattleStart(player.id);
            scene?.onDisplayMessage(`Wild battle started against wild ${opponent.team[0].getName()} Lv. ${opponent.team[0].getLevel()}.`);
        });
        scene?.onUpdateInfo();
        scene?.play();
        this.waitForInput();
    }

    private startTrainerBattle(scene: (BattleScene | undefined)) {
        this.getPlayers().forEach(player => {
            const opponent = this.getOpponentTrainerForPlayer(player);
            scene?.onBattleStart(player.id);
            scene?.onDisplayMessage(`Trainer battle started against ${opponent.name}.`)
        });
        scene?.onUpdateInfo();
        scene?.play();
        this.waitForInput();
    }

    private waitForInput() {
        this.state = "awaitingInput";
    }

    receiveInput(player: Player, action: PlayerAction) {
        if (this.getPlayers().find(p => p === player)) {
            if (action.type == "move") {
                const playerInfo = this.getTrainerForPlayer(player);
                const move = playerInfo.team[playerInfo.active].getMoves().find(move => move?.id && move?.id === action.value);
                if (move) {
                    player.sendMessage("Yay!")
                }
                else {
                    throw new Error(`Your Oremon doesn't know ${action.value}`)
                }
            }
        }
        else {
            throw new Error("This player can't send an input to this battle.")
        }
    }

    private processTurn() {
        this.state = "processingTurn";
    }

    private endBattle() {
        this.state = "finished";
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

    abort() {
        this.state = "finished";
        this.battleScene?.onBattleEnd();
        this.battleScene?.play();
    }

    getBattleInfo(player: Player) {
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
        }
    }
}