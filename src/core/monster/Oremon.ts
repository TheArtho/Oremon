import {OremonSpecies} from "../../enums/oremonIds";
import {OremonData, Stats} from "../../types/OremonData";
import oremonData from "../../data/oremonData";
import {Localization} from "../../i18n/Localization";
import {SHINY_CHANCE} from "../constants";
import {ISeriOremon} from "../../types/serialization/ISeriOremon";
import {IWildOremondata} from "../../types/serialization/IWildOremondata";
import {GenderRatio, Sizes, Types} from "../../enums/base";
import {generateFallbackId, generateRandomIVs} from "./OremonUtils";

export interface OremonOptions {
    level?: number;
    name?: string;
    size?: number;
    ivs?: Stats;
    evs?: Stats;
    item?: string;
    shiny?: boolean;
    ballUsed?: string;
    gender?: boolean;
    happiness?: number;
    status?: string;
    formId?: number;
    trainerId?: string;
}

export class Oremon {
    /**
     * Unique identifier to distinguish Oremon instances.
     */
    private uniqueId: string;

    /**
     * Species ID of the Oremon.
     */
    private species: string;

    /**
     * Reference data of the species (base stats, types, etc.).
     */
    private oremonData: OremonData;

    /**
     * Current form ID (for alternate forms).
     */
    private formId: number;

    /**
     * Custom or species-based name.
     */
    private name: string;

    /**
     * Current level of the Oremon.
     */
    private level: number;

    /**
     * Visual size category.
     */
    private size: number | Sizes;

    /**
     * Calculated stats of the Oremon.
     */
    private stats: Stats;

    /**
     * Individual Values (randomly generated at creation).
     */
    private ivs: Stats;

    /**
     * Effort Values (earned through battles or training).
     */
    private evs: Stats;

    /**
     * Held item.
     */
    private item?: string;

    /**
     * Happiness level (affects certain evolutions).
     */
    private happiness: number;

    /**
     * Status condition (e.g. poisoned, paralyzed).
     */
    private status?: string;

    /**
     * Type of Pokéball used to catch it.
     */
    private ballUsed: string = "oremon:oreball";

    /**
     * Gender of the Oremon.
     * True for male, false for female, undefined for genderless
     */
    private gender?: boolean;

    /**
     * Whether this Oremon is shiny or not.
     */
    private shinyFlag: boolean;

    /**
     * ID of the trainer who caught or owns this Oremon.
     */
    private trainerId?: string;

    /**
     * Constructs a new Oremon.
     * @param species The species identifier of the Oremon.
     * @param options Optional configuration object.
     */
    constructor(species : string | OremonSpecies, options : OremonOptions = {}) {
        const { level = 1, name, size, shiny, ivs, evs, happiness, formId, gender } = options;
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
        this.formId = formId ?? 0;    // Hard coded formId for now
        this.name = name ?? this.getSpeciesName();
        this.level = level;
        this.size = size ?? this.getRandomSize();
        this.gender = gender ?? this.getRandomGender();

        this.ivs = ivs ?? generateRandomIVs();
        this.evs = evs ?? {atk: 0, hp: 0, atk_spe: 0, def: 0, def_spe: 0, spd: 0};
        this.stats = this.calculateStats();

        this.happiness = happiness ?? 0;

        this.shinyFlag = shiny ?? this.rollShiny();
    }

    /**
     * Returns the unique id of the Oremon for instance equality check
     */
    getId(): string {
        return this.uniqueId;
    }

    /**
     * Returns the species id of the Oremon
     */
    getSpeciesId(): string {
        return this.species;
    }

    /**
     * Returns the localized display species name of the Oremon
     */
    getSpeciesName(): string {
        return Localization.t(oremonData[this.species].name);
    }

    /**
     * Sets a custom name for this Oremon.
     * @param value The name to set.
     */
    setName(value: string): void {
        this.name = value;
    }

    /**
     * Returns the display name of this Oremon (custom or localized).
     */
    getName(): string {
        return Localization.t(this.name);
    }

    /**
     * Returns the level of this Oremon
     */
    getLevel(): number {
        return this.level;
    }

    /**
     * Get the size of this Oremon
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Returns if the Oremon is shiny
     */
    isShiny(): boolean {
        return this.shinyFlag;
    }

    /**
     * Returns whether this Oremon has the specified type
     * @param type
     */
    hasType(type: Types): boolean {
        return this.oremonData.types[0] === type || this.oremonData.types[1] === type;
    }

    /**
     * Level up this Oremon by a given number (default 1)
     */
    levelUp(amount = 1): void {
        if (this.level < 100) {
            this.level += amount;
        }
    }

    private getRandomSize(): number {
        return Math.floor(Math.random() * 5);
    }

    private getRandomGender(): boolean | undefined {
        const genderRate = this.oremonData.genderRate;

        if (genderRate === GenderRatio.AlwaysMale) return true;
        if (genderRate === GenderRatio.AlwaysFemale) return false;
        if (genderRate === GenderRatio.Genderless) return undefined;

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
    public getGender(): boolean | undefined {
        return this.gender;
    }

    private rollShiny(): boolean {
        return Math.random() < SHINY_CHANCE / 65536;
    }

    private calculateStats(): Stats {
        const base = this.oremonData.baseStats;
        const level = this.level;
        const iv = this.ivs;
        const ev = this.evs;

        const calc = (baseStat: number, iv: number, ev: number) => {
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

    toWildData(): IWildOremondata {
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
     * Serializes the Oremon for saving
     */
    toJSON(): ISeriOremon {
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
            trainerId: this.trainerId
        };
    }

    /**
     * Static method to reconstruct an Oremon from a saved object
     */
    static fromJSON(data: ISeriOremon): Oremon {
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
            ballUsed: data.ballUsed
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
    isEqual(other: Oremon): boolean {
        return this.uniqueId === other.getId();
    }
}