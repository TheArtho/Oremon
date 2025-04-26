import { MathUtils } from "../utils/MathUtils";
export class OremonBattler {
    constructor(oremon) {
        this.monster = oremon;
        // Initialize current HP
        this.currentHp = oremon.getTotalHp();
        // Initialize stat stages (0 = no modification)
        this.statStages = {
            atk: 0,
            def: 0,
            atk_spe: 0,
            def_spe: 0,
            spd: 0,
            acc: 0,
            eva: 0
        };
        // Main status condition
        this.status = oremon.getStatus();
        // Volatile flags (e.g., Protect, Confusion, Leech Seed)
        this.flags = new Set();
    }
    // --- Basic Info ---
    getName() {
        return this.monster.getName();
    }
    getLevel() {
        return this.monster.getLevel();
    }
    isFainted() {
        return this.currentHp <= 0;
    }
    // --- HP Management ---
    getCurrentHp() {
        return this.currentHp;
    }
    getMaxHp() {
        return this.monster.getTotalHp();
    }
    getMoves() {
        return this.monster.moves;
    }
    setCurrentHp(value) {
        this.currentHp = MathUtils.clamp(value, 0, this.getMaxHp());
    }
    heal(amount) {
        this.setCurrentHp(this.currentHp + amount);
    }
    takeDamage(amount) {
        this.setCurrentHp(this.currentHp - amount);
    }
    // --- Stat Stages ---
    getStatStage(stat) {
        return this.statStages[stat] ?? undefined;
    }
    modifyStat(stat, amount) {
        if (Object.prototype.hasOwnProperty.call(this.statStages, stat)) {
            this.statStages[stat] = MathUtils.clamp(this.statStages[stat] + amount, -6, 6);
        }
    }
    resetStatStages() {
        this.statStages = {
            atk: 0,
            def: 0,
            atk_spe: 0,
            def_spe: 0,
            spd: 0,
            acc: 0,
            eva: 0
        };
    }
    // --- Status Effects ---
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    clearStatus() {
        this.status = undefined;
    }
    // --- Battle Flags and Effects ---
    addFlag(status) {
        this.flags.add(status);
    }
    removeFlag(status) {
        this.flags.delete(status);
    }
    hasFlag(status) {
        return this.flags.has(status);
    }
    clearFlags() {
        this.flags.clear();
    }
}
