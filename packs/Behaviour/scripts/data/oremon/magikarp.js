const magikarp = {
    "id": "oremon:magikarp",
    "name": "oremon.magikarp.name",
    "description": "oremon.magikarp.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 20,
        "atk": 10,
        "def": 55,
        "atk_spe": 15,
        "def_spe": 20,
        "spd": 80
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "water2",
        "dragon"
    ],
    "hatchCounter": 5,
    "height": 0.9,
    "weight": 10,
    "baseExperience": 40,
    "growthRateId": "slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:gyarados",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "tackle",
            "method": "level_up",
            "level": 15
        },
        {
            "id": "splash",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "flail",
            "method": "level_up",
            "level": 30
        }
    ]
};
export default magikarp;
