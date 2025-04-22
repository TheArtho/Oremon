const corphish = {
    "id": "oremon:corphish",
    "name": "oremon.corphish.name",
    "description": "oremon.corphish.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 43,
        "atk": 80,
        "def": 65,
        "atk_spe": 50,
        "def_spe": 35,
        "spd": 35
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 205,
    "eggGroups": [
        "water1",
        "water3"
    ],
    "hatchCounter": 15,
    "height": 0.6,
    "weight": 11.5,
    "baseExperience": 62,
    "growthRateId": "fast-then-very-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:crawdaunt",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default corphish;
