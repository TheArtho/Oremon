export var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["Player"] = 0] = "Player";
    PlayerType[PlayerType["AiTrainer"] = 1] = "AiTrainer";
    PlayerType[PlayerType["AiWildPokemon"] = 2] = "AiWildPokemon";
})(PlayerType || (PlayerType = {}));
