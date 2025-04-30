import oremonData from "../../data/oremonData";
import { Localization } from "../../i18n/Localization";
import { SHINY_CHANCE } from "../constants";
import { GenderRatio } from "../../enums/base";
import { generateFallbackId, generateRandomIVs } from "./OremonUtils";
import moveData from "../../data/moveData";
export class Oremon {
    /**
     * Constructs a new Oremon.
     * @param species The species identifier of the Oremon.
     * @param options Optional configuration object.
     */
    constructor(species, options = {}) {
        /**
         * Type of Pokéball used to catch it.
         */
        this.ballUsed = "oremon:oreball";
        const { level = 1, name, size, shiny, ivs, evs, happiness, formId, gender, moves, fainted } = options;
        const data = oremonData[species];
        if (!data) {
            throw new Error(`Oremon data not found for species: ${species}`);
        }
        if (level < 1) {
            throw new Error(`Oremon level can't be below 0`);
        }
        this.uniqueId = generateFallbackId();
        this.species = species;
        this.oremonData = data;
        this.formId = formId ?? 0; // Hard coded formId for now
        this.name = name ?? this.getSpeciesName();
        this.level = level;
        this.size = size ?? this.getRandomSize();
        this.gender = gender ?? this.getRandomGender();
        this.fainted = fainted ?? false;
        this.ivs = ivs ?? generateRandomIVs();
        this.evs = evs ?? { atk: 0, hp: 0, atk_spe: 0, def: 0, def_spe: 0, spd: 0 };
        this.stats = this.calculateStats();
        this.currentHp = this.stats.hp;
        this.happiness = happiness ?? 0;
        this.shinyFlag = shiny ?? this.rollShiny();
        this.moves = moves ?? this.generateMoveset(this.level);
    }
    /**
     * Returns the unique id of the Oremon for instance equality check
     */
    getId() {
        return this.uniqueId;
    }
    /**
     * Returns the species id of the Oremon
     */
    getSpeciesId() {
        return this.species;
    }
    /**
     * Returns the localized display species name of the Oremon
     */
    getSpeciesName() {
        return Localization.t(oremonData[this.species].name);
    }
    /**
     * Sets a custom name for this Oremon.
     * @param value The name to set.
     */
    setName(value) {
        this.name = value;
    }
    /**
     * Returns the display name of this Oremon (custom or localized).
     */
    getName() {
        return Localization.t(this.name);
    }
    /**
     * Returns the level of this Oremon
     */
    getLevel() {
        return this.level;
    }
    isFainted() {
        return this.fainted;
    }
    getStatus() {
        return this.status;
    }
    /**
     * Get the size of this Oremon
     */
    getSize() {
        return this.size;
    }
    /**
     * Returns if the Oremon is shiny
     */
    isShiny() {
        return this.shinyFlag;
    }
    /**
     * Returns whether this Oremon has the specified type
     * @param type
     */
    hasType(type) {
        return this.oremonData.types[0] === type || this.oremonData.types[1] === type;
    }
    /**
     * Returns whether this Oremon has the specified type
     * @param index
     */
    getType(index) {
        return this.oremonData.types[index];
    }
    /**
     * Level up this Oremon by a given number (default 1)
     */
    levelUp(amount = 1) {
        if (this.level < 100) {
            this.level += amount;
        }
    }
    getRandomSize() {
        return Math.floor(Math.random() * 5);
    }
    getRandomGender() {
        const genderRate = this.oremonData.genderRate;
        if (genderRate === GenderRatio.AlwaysMale)
            return true;
        if (genderRate === GenderRatio.AlwaysFemale)
            return false;
        if (genderRate === GenderRatio.Genderless)
            return undefined;
        const n = Math.random() * 100;
        switch (genderRate) {
            case GenderRatio.FemaleSevenEighths:
                return n >= 12.5;
            case GenderRatio.Female75Percent:
                return n >= 25;
            case GenderRatio.Female50Percent:
                return n >= 50;
            case GenderRatio.Female25Percent:
                return n >= 75;
            case GenderRatio.FemaleOneEighth:
                return n >= 87.5;
            default:
                return true;
        }
    }
    /**
     * Returns the gnder of the Oremon.
     * True for male, false for female, undefined for genderless
     */
    getGender() {
        return this.gender;
    }
    rollShiny() {
        return Math.random() < SHINY_CHANCE / 65536;
    }
    calculateStats() {
        const base = this.oremonData.baseStats;
        const level = this.level;
        const iv = this.ivs;
        const ev = this.evs;
        const calc = (baseStat, iv, ev) => {
            return Math.floor(((2 * baseStat + iv + Math.floor(ev / 4)) * level) / 100 + 5);
        };
        const hp = base.hp === 1
            ? 1 + Math.floor(ev.hp / 4)
            : Math.floor(((2 * base.hp + iv.hp + Math.floor(ev.hp / 4)) * level) / 100 + level + 10);
        return {
            hp,
            atk: calc(base.atk, iv.atk, ev.atk),
            def: calc(base.def, iv.def, ev.def),
            atk_spe: calc(base.atk_spe, iv.atk_spe, ev.atk_spe),
            def_spe: calc(base.def_spe, iv.def_spe, ev.def_spe),
            spd: calc(base.spd, iv.spd, ev.spd)
        };
    }
    generateMoveset(level) {
        if (!this.oremonData.moves || this.oremonData.moves.length === 0) {
            return [];
        }
        const eligibleMoves = this.oremonData.moves
            .filter(move => move.method === "level_up" && move.level <= level)
            .sort((a, b) => b.level - a.level)
            .slice(0, 4);
        return eligibleMoves.map(move => {
            const moveInfo = moveData[move.id];
            return {
                id: move.id,
                pp: moveInfo.pp
            };
        });
    }
    getCurrentHp() {
        return this.currentHp;
    }
    getTotalHp() {
        return this.stats.hp;
    }
    getAtk() {
        return this.stats.atk;
    }
    getDef() {
        return this.stats.def;
    }
    getSpeAtk() {
        return this.stats.atk_spe;
    }
    getSpeDef() {
        return this.stats.def_spe;
    }
    getSpeed() {
        return this.stats.spd;
    }
    getCry() {
        const cry = `oremon.cry.${this.getSpeciesId().replace("oremon:", "")}`;
        console.log(cry);
        return cry;
    }
    toWildData() {
        return {
            species: this.species.replace("oremon:", ' '),
            level: this.level,
            shiny: this.shinyFlag,
            size: this.size,
            gender: this.gender,
            formId: this.formId
        };
    }
    /**
     * Static method to construct an Oremon from a wild data representation.
     * @param data The wild data containing basic info for spawning a wild Oremon.
     */
    static fromWildData(data) {
        const speciesId = `oremon:${data.species.trim()}`;
        return new Oremon(speciesId, {
            level: data.level,
            shiny: data.shiny,
            size: data.size,
            gender: data.gender,
            formId: data.formId
        });
    }
    /**
     * Serializes the Oremon for saving
     */
    toJSON() {
        return {
            id: this.uniqueId,
            species: this.species,
            level: this.level,
            name: this.name,
            size: this.size,
            ivs: this.ivs,
            evs: this.evs,
            item: this.item,
            shiny: this.shinyFlag,
            ballUsed: this.ballUsed,
            gender: this.gender,
            happiness: this.happiness,
            status: this.status,
            formId: this.formId,
            trainerId: this.trainerId,
            moves: this.moves,
            fainted: this.fainted
        };
    }
    /**
     * Static method to reconstruct an Oremon from a saved object
     */
    static fromJSON(data) {
        const oremon = new Oremon(data.species, {
            level: data.level,
            name: data.name,
            size: data.size,
            shiny: data.shiny,
            ivs: data.ivs,
            evs: data.evs,
            item: data.item,
            gender: data.gender,
            happiness: data.happiness,
            status: data.status,
            formId: data.formId,
            trainerId: data.trainerId,
            ballUsed: data.ballUsed,
            fainted: data.fainted,
            moves: data.moves
        });
        oremon.uniqueId = data.id;
        // Recalculate stats
        oremon.stats = oremon.calculateStats();
        return oremon;
    }
    /**
     * Compare this Oremon with another one by unique ID.
     * @param other The Oremon to compare with.
     * @returns true if both Oremon have the same unique ID.
     */
    isEqual(other) {
        return this.uniqueId === other.getId();
    }
}
