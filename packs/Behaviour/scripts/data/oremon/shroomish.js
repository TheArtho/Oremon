const shroomish = {
    "id": "oremon:shroomish",
    "name": "oremon.shroomish.name",
    "description": "oremon.shroomish.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 40,
        "def": 60,
        "atk_spe": 40,
        "def_spe": 60,
        "spd": 35
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
    "catchRate": 255,
    "eggGroups": [
        "fairy",
        "plant"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 4.5,
    "baseExperience": 59,
    "growthRateId": "fast-then-very-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:breloom",
            "method": "level-up",
            "conditions": {
                "minLevel": 23,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default shroomish;
