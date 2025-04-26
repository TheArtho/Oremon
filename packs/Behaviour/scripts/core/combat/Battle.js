import { OremonBattler } from "./OremonBattler";
import { generateFallbackId } from "../monster/OremonUtils";
import { EasingType, system } from "@minecraft/server";
import { PlayerType } from "../../enums/battle";
export class Battle {
    constructor(trainer1, trainer2, options = {}) {
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
    start() {
        this.state = "starting";
        this.getPlayers().forEach(player => {
            const opponent = this.getOpponentTrainerForPlayer(player);
            if (opponent.type == PlayerType.AiWildPokemon) {
                this.startWildBattle(player, opponent);
            }
            else {
                this.startTrainerBattle(player, opponent);
            }
        });
    }
    startWildBattle(player, opponent) {
        player.sendMessage(`[Battle] Wild battle started against ${opponent.team[0].getName()} Lv. ${opponent.team[0].getLevel()}.`);
        system.run(() => {
            player.camera.setCamera("oremon:shoulder_right", { easeOptions: {
                    easeType: EasingType.InOutQuad,
                    easeTime: 0.5
                } });
        });
    }
    startTrainerBattle(player, opponent) {
        player.sendMessage(`[Battle] Trainer battle started against ${opponent.name}.`);
        system.run(() => {
            player.camera.setCamera("oremon:shoulder_right", { easeOptions: {
                    easeType: EasingType.InOutQuad,
                    easeTime: 0.5
                } });
        });
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
    getActiveOremonInTeam(team) {
        return team.findIndex(oremon => !oremon.isFainted());
    }
    getPlayers() {
        return [this.trainer1.player, this.trainer2.player].filter(Boolean);
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
    abort(player) {
        this.state = "finished";
        player.sendMessage(`[Battle] Battle aborted.`);
        system.run(() => {
            player.camera.clear();
        });
    }
}
