const drifloon = {
    "id": "oremon:drifloon",
    "name": "oremon.drifloon.name",
    "description": "oremon.drifloon.description",
    "types": [
        "ghost",
        "flying"
    ],
    "baseStats": {
        "hp": 90,
        "atk": 50,
        "def": 34,
        "atk_spe": 60,
        "def_spe": 44,
        "spd": 70
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 125,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 30,
    "height": 0.4,
    "weight": 1.2,
    "baseExperience": 70,
    "growthRateId": "fast-then-very-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:drifblim",
            "method": "level-up",
            "conditions": {
                "minLevel": 28,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default drifloon;
