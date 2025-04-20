// Elemental types used by Oremon
export var OremonType;
(function (OremonType) {
    OremonType["Normal"] = "normal";
    OremonType["Fire"] = "fire";
    OremonType["Water"] = "water";
    OremonType["Grass"] = "grass";
    OremonType["Electric"] = "electric";
    OremonType["Ice"] = "ice";
    OremonType["Fighting"] = "fighting";
    OremonType["Poison"] = "poison";
    OremonType["Ground"] = "ground";
    OremonType["Flying"] = "flying";
    OremonType["Psychic"] = "psychic";
    OremonType["Bug"] = "bug";
    OremonType["Rock"] = "rock";
    OremonType["Ghost"] = "ghost";
    OremonType["Dragon"] = "dragon";
    OremonType["Dark"] = "dark";
    OremonType["Steel"] = "steel";
    OremonType["Fairy"] = "fairy";
})(OremonType || (OremonType = {}));
// Oremon IDs
export var OremonId;
(function (OremonId) {
    OremonId["Bulbasaur"] = "oremon:bulbasaur";
    OremonId["Ivysaur"] = "oremon:ivysaur";
    OremonId["Venusaur"] = "oremon:venusaur";
})(OremonId || (OremonId = {}));
// Move categories
export var MoveCategory;
(function (MoveCategory) {
    MoveCategory["Physical"] = "physical";
    MoveCategory["Special"] = "special";
    MoveCategory["Status"] = "status";
})(MoveCategory || (MoveCategory = {}));
// Stat identifiers
export var Stat;
(function (Stat) {
    Stat["HP"] = "hp";
    Stat["Attack"] = "atk";
    Stat["Defense"] = "def";
    Stat["SpAttack"] = "atk_spe";
    Stat["SpDefense"] = "def_spe";
    Stat["Speed"] = "spd";
})(Stat || (Stat = {}));
