/**
 * Enum representing the possible move targets in battle.
 */
export var Targets;
(function (Targets) {
    /**
     * One specific move. How this move is chosen depends on the move being used.
     */
    Targets["SpecificMove"] = "specific_move";
    /**
     * One other Pokémon on the field, selected by the trainer.
     * Stolen moves reuse the same target.
     */
    Targets["SelectedPokemonMeFirst"] = "selected_pokemon_me_first";
    /**
     * The user's ally (if any).
     */
    Targets["Ally"] = "ally";
    /**
     * The user's side of the field.
     * Affects the user and its ally (if any).
     */
    Targets["UsersField"] = "users_field";
    /**
     * Either the user or its ally, selected by the trainer.
     */
    Targets["UserOrAlly"] = "user_or_ally";
    /**
     * The opposing side of the field.
     * Affects opposing Pokémon.
     */
    Targets["OpponentsField"] = "opponents_field";
    /**
     * The user.
     */
    Targets["User"] = "user";
    /**
     * One opposing Pokémon, selected at random.
     */
    Targets["RandomOpponent"] = "random_opponent";
    /**
     * Every other Pokémon on the field.
     */
    Targets["AllOtherPokemon"] = "all_other_pokemon";
    /**
     * One other Pokémon on the field, selected by the trainer.
     */
    Targets["SelectedPokemon"] = "selected_pokemon";
    /**
     * All opposing Pokémon.
     */
    Targets["AllOpponents"] = "all_opponents";
    /**
     * The entire field. Affects all Pokémon.
     */
    Targets["EntireField"] = "entire_field";
    /**
     * The user and its allies.
     */
    Targets["UserAndAllies"] = "user_and_allies";
    /**
     * Every Pokémon on the field.
     */
    Targets["AllPokemon"] = "all_pokemon";
})(Targets || (Targets = {}));
// Move categories
export var MoveCategories;
(function (MoveCategories) {
    MoveCategories["Physical"] = "physical";
    MoveCategories["Special"] = "special";
    MoveCategories["Status"] = "status";
})(MoveCategories || (MoveCategories = {}));
export var MoveEffects;
(function (MoveEffects) {
    MoveEffects["None"] = "none";
})(MoveEffects || (MoveEffects = {}));
