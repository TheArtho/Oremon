import {OremonType} from "./OremonData";

export interface MoveData {
    id: string;
    name: string;
    description: string;
    category: MoveCategory;
    accuracy?: number;
    power?: number;
    pp: number;
    priority: number;
    flags: MoveFlags;
    target: TargetType;
    type: OremonType;
    effectId: string;
    effectChance?: number;
    superAppeal?: number;
    appeal?: number;
    jamming?: number;
}

export interface MoveFlags {
    /**
     * The move makes physical contact with the target.
     * This can trigger abilities (e.g., STATIC) and items (e.g., STICKY_BARB).
     */
    contact?: boolean;

    /**
     * The move can be blocked by PROTECT or DETECT.
     */
    protectable?: boolean;

    /**
     * The move can be reflected by MAGIC_COAT or MAGIC_BOUNCE.
     * Used for status moves with negative effects.
     * Mutually exclusive with 'snatch'.
     */
    reflectable?: boolean;

    /**
     * The move can be stolen with SNATCH.
     * Typically used for moves targeting the user.
     * Mutually exclusive with 'reflectable'.
     */
    snatch?: boolean;

    /**
     * The move can be copied by MIRROR_MOVE.
     */
    mirror?: boolean;

    /**
     * The move defrosts the user if frozen.
     */
    defrost?: boolean;

    /**
     * The move requires a charging turn that can be skipped with POWER_HERB.
     */
    charge?: boolean;

    /**
     * The move triggers the DANCER ability.
     */
    dance?: boolean;

    /**
     * The move is boosted by STRONG_JAW (biting move).
     */
    bite?: boolean;

    /**
     * The move is boosted by IRON_FIST (punching move).
     */
    punching?: boolean;

    /**
     * The move is blocked by SOUNDPROOF (sound-based move).
     */
    soundBased?: boolean;

    /**
     * The move is blocked by OVERCOAT and is ineffective against GRASS-type Pokémon (powder-based).
     */
    powderBased?: boolean;

    /**
     * The move is boosted by MEGA_LAUNCHER (pulse-based move).
     */
    pulseBased?: boolean;

    /**
     * The move bypasses SUBSTITUTE.
     */
    authentic?: boolean;

    /**
     * The move is blocked by BULLETPROOF (ballistic move).
     */
    ballistics?: boolean;

    /**
     * The move can target far opponents in triple battles.
     */
    distance?: boolean;

    /**
     * The move can't be used under the effects of GRAVITY.
     */
    gravity?: boolean;

    /**
     * The move is blocked by HEAL_BLOCK.
     */
    heal?: boolean;

    /**
     * The move can't be used during Sky Battles.
     */
    nonSky?: boolean;

    /**
     * The user must recharge the turn after using this move.
     */
    recharge?: boolean;

    /**
     * The move is blocked by AROMA_VEIL and cured by MENTAL_HERB.
     */
    mental?: boolean;
}

export type MoveCategory = "physical" | "special" | "status";

export type TargetType =
    | "specific_move"
    | "selected_pokemon_me_first"
    | "ally"
    | "users_field"
    | "user_or_ally"
    | "opponents_field"
    | "user"
    | "random_opponent"
    | "all_other_pokemon"
    | "selected_pokemon"
    | "all_opponents"
    | "entire_field"
    | "user_and_allies"
    | "all_pokemon";
