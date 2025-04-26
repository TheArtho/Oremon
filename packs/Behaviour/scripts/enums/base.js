// Elemental enums used by Oremon
export var Types;
(function (Types) {
    Types["Normal"] = "normal";
    Types["Fire"] = "fire";
    Types["Water"] = "water";
    Types["Grass"] = "grass";
    Types["Electric"] = "electric";
    Types["Ice"] = "ice";
    Types["Fighting"] = "fighting";
    Types["Poison"] = "poison";
    Types["Ground"] = "ground";
    Types["Flying"] = "flying";
    Types["Psychic"] = "psychic";
    Types["Bug"] = "bug";
    Types["Rock"] = "rock";
    Types["Ghost"] = "ghost";
    Types["Dragon"] = "dragon";
    Types["Dark"] = "dark";
    Types["Steel"] = "steel";
    Types["Fairy"] = "fairy";
})(Types || (Types = {}));
// Stat identifiers
export var Stats;
(function (Stats) {
    Stats["HP"] = "hp";
    Stats["Attack"] = "atk";
    Stats["Defense"] = "def";
    Stats["SpAttack"] = "atk_spe";
    Stats["SpDefense"] = "def_spe";
    Stats["Speed"] = "spd";
})(Stats || (Stats = {}));
export var GenderRatio;
(function (GenderRatio) {
    GenderRatio[GenderRatio["AlwaysMale"] = 0] = "AlwaysMale";
    GenderRatio[GenderRatio["FemaleOneEighth"] = 1] = "FemaleOneEighth";
    GenderRatio[GenderRatio["Female25Percent"] = 2] = "Female25Percent";
    GenderRatio[GenderRatio["Female50Percent"] = 3] = "Female50Percent";
    GenderRatio[GenderRatio["Female75Percent"] = 4] = "Female75Percent";
    GenderRatio[GenderRatio["FemaleSevenEighths"] = 5] = "FemaleSevenEighths";
    GenderRatio[GenderRatio["AlwaysFemale"] = 6] = "AlwaysFemale";
    GenderRatio[GenderRatio["Genderless"] = -1] = "Genderless";
})(GenderRatio || (GenderRatio = {}));
export var Sizes;
(function (Sizes) {
    Sizes[Sizes["VerySmall"] = 0] = "VerySmall";
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Big"] = 3] = "Big";
    Sizes[Sizes["Gigantic"] = 4] = "Gigantic";
    Sizes[Sizes["Alpha"] = 5] = "Alpha";
})(Sizes || (Sizes = {}));
