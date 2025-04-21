// Elemental types used by Oremon
export enum Types {
    Normal = "normal",
    Fire = "fire",
    Water = "water",
    Grass = "grass",
    Electric = "electric",
    Ice = "ice",
    Fighting = "fighting",
    Poison = "poison",
    Ground = "ground",
    Flying = "flying",
    Psychic = "psychic",
    Bug = "bug",
    Rock = "rock",
    Ghost = "ghost",
    Dragon = "dragon",
    Dark = "dark",
    Steel = "steel",
    Fairy = "fairy"
}

// Move categories
export enum MoveCategories {
    Physical = "physical",
    Special = "special",
    Status = "status"
}

// Stat identifiers
export enum Stats {
    HP = "hp",
    Attack = "atk",
    Defense = "def",
    SpAttack = "atk_spe",
    SpDefense = "def_spe",
    Speed = "spd"
}

export enum GenderRatio {
    AlwaysMale = 0,
    FemaleOneEighth = 1,
    Female25Percent = 2,
    Female50Percent = 3,
    Female75Percent = 4,
    FemaleSevenEighths = 5,
    AlwaysFemale = 6,
    Genderless = -1
}

export enum Sizes {
    VerySmall = 0,
    Small = 1,
    Medium = 2,
    Big = 3,
    Gigantic = 4,
    Alpha = 5
}