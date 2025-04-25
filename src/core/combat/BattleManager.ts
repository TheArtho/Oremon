import { Battle } from "./Battle";
import { BattleTrainer } from "./Battle";
import {BattleEventHandler} from "./BattleEventHandler";

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
    static forceEndBattleForPlayer(playerId: string): void {
        const battle = this.getBattleByPlayerId(playerId);
        if (battle) {
            battle.Abort(playerId);
            this.cleanupFinishedBattles();
        }
    }

    /**
     * Pour debugging / log
     */
    static listBattles(): void {
        console.log("Active battles:", this.activeBattles.map(b => b.id));
    }
}
