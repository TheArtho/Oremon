const silcoon = {
    "id": "oremon:silcoon",
    "name": "oremon.silcoon.name",
    "description": "oremon.silcoon.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 35,
        "def": 55,
        "atk_spe": 25,
        "def_spe": 25,
        "spd": 15
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 2,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.6,
    "weight": 10,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:beautifly",
            "method": "level-up",
            "conditions": {
                "minLevel": 10,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "harden",
            "method": "level_up",
            "level": 0
        },
        {
            "id": "harden",
            "method": "level_up",
            "level": 1
        }
    ]
};
export default silcoon;
