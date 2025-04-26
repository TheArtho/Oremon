// Main data structure for a creature in the Oremon system
import {GenderRatio} from "../enums/base";

export interface OremonData {
    id: string;
    name: string;
    description?: string;
    types: [OremonType, OremonType?]; // max 2 enums
    baseStats: {
        hp: number;
        atk: number;
        def: number;
        atk_spe: number;
        def_spe: number;
        spd: number;
    };
    evYield: {
        hp: number;
        atk: number;
        def: number;
        atk_spe: number;
        def_spe: number;
        spd: number;
    };
    abilities: {
        0?: string;
        1?: string;
        H?: string;
    };
    genderRate?: number | GenderRatio;
    catchRate?: number;
    eggGroups?: [string, string?];
    hatchCounter?: number;
    height?: number;
    weight?: number;
    baseExperience?: number;
    growthRateId?: string;
    generationId?: number;
    isBaby?: boolean;
    hasGenderDifferences?: boolean;
    formSwitchable?: boolean;
    shape?: string;
    evolutions?: EvolutionData[];
    color?: string;
    moves?: OremonMoves[]
}

// Basic stat block for an Oremon
export interface Stats {
    hp: number;     // Hit points
    atk: number;    // Attack stat
    def: number;    // Defense stat
    atk_spe: number; // Special Attack stat
    def_spe: number; // Special Defense stat
    spd: number;    // Speed stat
}

// Allowed enums for Oremon — feel free to add custom strings
export type OremonType =
    | "normal" | "fire" | "water" | "grass" | "electric"
    | "ice" | "fighting" | "poison" | "ground" | "flying"
    | "psychic" | "bug" | "rock" | "ghost" | "dragon"
    | "dark" | "steel" | "fairy"
    | string; // Allow custom enums if needed

// Structure for evolution data
export interface Evolution {
    level: number;      // Level at which the Oremon evolves
    into: string;       // ID of the evolved forms (e.g., "core:ivysaur")
}

// Asset mapping for an Oremon
export interface AssetMap {
    default: string;    // Path to the default texture
    female?: string;    // Optional path for female texture
    shiny?: string;     // Optional path to shiny texture
}

export interface EvolutionCondition {
    minLevel?: number;
    "heldItem"?: string,
    gender?: "male" | "female";
    item?: string;
    location?: string;
    knownMove?: string;
    knownType?: OremonType;
    minHappiness?: number;
    minBeauty?: number;
    minAffection?: number;
    timeOfDay?: "day" | "night";
    physicalStat?: number;
    partySpecies?: string,
    partyType?: OremonType,
    tradeWith?: string;
    needsOverworldRain?: boolean;
    turnUpsideDown?: boolean;
}

export interface EvolutionData {
    into: string; // ID of the resulting Oremon
    method: "level-up" | "use-item" | "trade" | "shed";
    conditions: EvolutionCondition;
}

export interface FormData {
    id: string;                 // (ex: "form:giratina-altered")
    form_identifier?: string;   // (ex: "altered")
    pokemon_identifier: string; // (ex: "oremon:giratina-altered")
    isDefault?: boolean;        // (ex: true)
    isBattleOnly?: boolean;     // (ex: false)
    isMega?: boolean;           // (ex: false)
    formOrder: number;          // (ex: 1)
}

export interface OremonMoves {
    id: string;
    method: MoveMethod;
    level: number
}

export type MoveMethod = "level_up" | "egg" | "tutor" | "machine" | "form_change"
    | "stadium-surfing-pikachu" | "light-ball-egg" | "colosseum-purification" | "xd-shadow" | "xd-purification";