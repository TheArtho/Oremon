import { Battle } from "./Battle";
export class BattleManager {
    /**
     * Maps a player to an active battle
     */
    static getBattleByPlayerId(playerId) {
        return this.activeBattles.find(battle => battle.hasPlayer(playerId));
    }
    static isInBattle(playerId) {
        const battle = this.activeBattles.find(battle => battle.hasPlayer(playerId));
        return battle !== undefined;
    }
    /**
     * Start a new battle and add it to the list
     */
    static createBattle(t1, t2) {
        const battle = new Battle(t1, t2);
        this.activeBattles.push(battle);
        return battle;
    }
    /**
     * Clean-up finished battles
     */
    static cleanupFinishedBattles() {
        this.activeBattles = this.activeBattles.filter(battle => !battle.isFinished());
    }
    /**
     * If a player leaves, battle needs to be forced to finish
     */
    static forceEndBattleForPlayer(player) {
        const battle = this.getBattleByPlayerId(player.id);
        if (battle) {
            battle.abort();
        }
        else {
            throw new Error("Player is not in battle.");
        }
    }
    /**
     * Pour debugging / log
     */
    static listBattles() {
        console.log("Active battles:", this.activeBattles.map(b => b.id));
    }
}
BattleManager.activeBattles = [];
BattleManager.subscribed = false;
