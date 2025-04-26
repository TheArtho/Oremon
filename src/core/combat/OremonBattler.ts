import {Move, Oremon} from "../monster/Oremon";
import {MathUtils} from "../utils/MathUtils";

export class OremonBattler {
    monster: Oremon;

    private currentHp: number;
    private statStages: { [stat: string]: number };
    private status?: string; // e.g. Poisoned, Burned, Asleep...
    private flags: Set<string>;

    constructor(oremon: Oremon) {
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

    getName(): string {
        return this.monster.getName();
    }

    getLevel(): number {
        return this.monster.getLevel();
    }

    isFainted(): boolean {
        return this.currentHp <= 0;
    }

    // --- HP Management ---

    getCurrentHp(): number {
        return this.currentHp;
    }

    getMaxHp(): number {
        return this.monster.getTotalHp();
    }

    getMoves(): (Move | undefined)[] {
        return this.monster.moves;
    }

    setCurrentHp(value: number): void {
        this.currentHp = MathUtils.clamp(value, 0, this.getMaxHp());
    }

    heal(amount: number): void {
        this.setCurrentHp(this.currentHp + amount);
    }

    takeDamage(amount: number): void {
        this.setCurrentHp(this.currentHp - amount);
    }

    // --- Stat Stages ---

    getStatStage(stat: string): number | undefined {
        return this.statStages[stat] ?? undefined;
    }

    modifyStat(stat: string, amount: number): void {
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

    getStatus(): string | undefined {
        return this.status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    clearStatus(): void {
        this.status = undefined;
    }

    // --- Battle Flags and Effects ---

    addFlag(status: string): void {
        this.flags.add(status);
    }

    removeFlag(status: string): void {
        this.flags.delete(status);
    }

    hasFlag(status: string): boolean {
        return this.flags.has(status);
    }

    clearFlags(): void {
        this.flags.clear();
    }
}
