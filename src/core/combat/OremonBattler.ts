import {Move, Oremon} from "../monster/Oremon";
import {MathUtils} from "../utils/MathUtils";
import {OremonType} from "../../types/OremonData";
import {Battle} from "./Battle";

export class OremonBattler {
    monster: Oremon;
    battle: Battle;

    private battlerIndex = 0;
    private trainerIndex;

    private currentHp: number;
    private statStages: { [stat: string]: number };
    private status?: string; // e.g. Poisoned, Burned, Asleep...
    private flags: Set<string>;

    constructor(trainerIndex: number, oremon: Oremon, battle: Battle) {
        this.trainerIndex = trainerIndex;
        this.monster = oremon;
        this.battle = battle;

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

    getTrainerIndex(): number {
        return this.trainerIndex;
    }

    getName(): string {
        return this.monster.getName();
    }

    getLevel(): number {
        return this.monster.getLevel();
    }

    isFainted(): boolean {
        return this.currentHp <= 0;
    }

    getMoves(): (Move | undefined)[] {
        return this.monster.moves;
    }

    getType(index: number): OremonType | undefined {
        return this.monster.getType(index);
    }

    getCry(): string {
        return this.monster.getCry();
    }

    // Stats

    getAtk(): number {
        return this.monster.getAtk();
    }

    getSpeAtk(): number {
        return this.monster.getSpeAtk();
    }

    getDef(): number {
        return this.monster.getDef();
    }

    getSpeDef(): number {
        return this.monster.getSpeDef();
    }

    getSpeed(): number {
        return this.monster.getSpeed();
    }

    // --- HP Management ---

    getCurrentHp(): number {
        return this.currentHp;
    }

    getMaxHp(): number {
        return this.monster.getTotalHp();
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

    // Battle methods
    onFaint() {
        this.battle.getScene()?.displayDialog(`${this.getName()} fainted!`);
        this.battle.getScene()?.faint(this.trainerIndex);
    }
}
