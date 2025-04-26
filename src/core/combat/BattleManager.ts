import { Battle } from "./Battle";
import {BattleTrainer} from "../../types/Battle";
import {Player} from "@minecraft/server";

export class BattleManager {
    private static activeBattles: Battle[] = [];
    private static subscribed: boolean = false;

    /**
     * Maps a player to an active battle
     */
    static getBattleByPlayerId(playerId: string): Battle | undefined {
        return this.activeBattles.find(battle =>
            battle.hasPlayer(playerId)
        );
    }

    /**
     * Start a new battle and add it to the list
     */
    static startBattle(t1: BattleTrainer, t2: BattleTrainer): Battle {
        const battle = new Battle(t1, t2);
        this.activeBattles.push(battle);
        battle.start();
        return battle;
    }

    /**
     * Clean-up finished battles
     */
    static cleanupFinishedBattles(): void {
        this.activeBattles = this.activeBattles.filter(battle => !battle.isFinished());
    }

    /**
     * If a player leaves, battle needs to be forced to finish
     */
    static forceEndBattleForPlayer(player: Player): void {
        const battle = this.getBattleByPlayerId(player.id);
        if (battle) {
            battle.abort(player);
            this.cleanupFinishedBattles();
        }
        else {
            throw new Error("Player is not in battle.")
        }
    }

    /**
     * Pour debugging / log
     */
    static listBattles(): void {
        console.log("Active battles:", this.activeBattles.map(b => b.id));
    }
}
