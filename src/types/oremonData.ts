// Main data structure for a creature in the Oremon system
export interface OremonData {
    id: string;                 // Unique identifier (e.g., "core:bulbasaur")
    name: string;               // Display name of the creature
    description?: string;       // Optional description/lore for the creature
    types: OremonType[];        // Array of elemental types (e.g., ["grass", "poison"])
    baseStats: Stats;           // Core stats (HP, Attack, Defense, Speed, etc.)
    abilities: string[];        // List of passive ability IDs
    moves: string[];            // List of move IDs this Oremon can use
    evolution?: Evolution;      // Optional evolution information
    textures: AssetMap;         // Texture paths for rendering
    model?: AssetMap;           // Optional path to the .geo.json model
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

// Allowed types for Oremon — feel free to add custom strings
export type OremonType =
    | "normal" | "fire" | "water" | "grass" | "electric"
    | "ice" | "fighting" | "poison" | "ground" | "flying"
    | "psychic" | "bug" | "rock" | "ghost" | "dragon"
    | "dark" | "steel" | "fairy"
    | string; // Allow custom types if needed

// Structure for evolution data
export interface Evolution {
    level: number;      // Level at which the Oremon evolves
    into: string;       // ID of the evolved form (e.g., "core:ivysaur")
}

// Asset mapping for an Oremon
export interface AssetMap {
    default: string;    // Path to the default texture
    female?: string;    // Optional path for female texture
    shiny?: string;     // Optional path to shiny texture
}
