/**
 * Enum representing the possible move targets in battle.
 */
export enum Targets {
    /**
     * One specific move. How this move is chosen depends on the move being used.
     */
    SpecificMove = "specific_move",

    /**
     * One other Pokémon on the field, selected by the trainer.
     * Stolen moves reuse the same target.
     */
    SelectedPokemonMeFirst = "selected_pokemon_me_first",

    /**
     * The user's ally (if any).
     */
    Ally = "ally",

    /**
     * The user's side of the field.
     * Affects the user and its ally (if any).
     */
    UsersField = "users_field",

    /**
     * Either the user or its ally, selected by the trainer.
     */
    UserOrAlly = "user_or_ally",

    /**
     * The opposing side of the field.
     * Affects opposing Pokémon.
     */
    OpponentsField = "opponents_field",

    /**
     * The user.
     */
    User = "user",

    /**
     * One opposing Pokémon, selected at random.
     */
    RandomOpponent = "random_opponent",

    /**
     * Every other Pokémon on the field.
     */
    AllOtherPokemon = "all_other_pokemon",

    /**
     * One other Pokémon on the field, selected by the trainer.
     */
    SelectedPokemon = "selected_pokemon",

    /**
     * All opposing Pokémon.
     */
    AllOpponents = "all_opponents",

    /**
     * The entire field. Affects all Pokémon.
     */
    EntireField = "entire_field",

    /**
     * The user and its allies.
     */
    UserAndAllies = "user_and_allies",

    /**
     * Every Pokémon on the field.
     */
    AllPokemon = "all_pokemon"
}

// Move categories
export enum MoveCategories {
    Physical = "physical",
    Special = "special",
    Status = "status"
}

export enum MoveEffects {
    None = "none"
}