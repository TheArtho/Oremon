const lairon = {
    "id": "oremon:lairon",
    "name": "oremon.lairon.name",
    "description": "oremon.lairon.description",
    "types": [
        "steel",
        "rock"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 90,
        "def": 140,
        "atk_spe": 50,
        "def_spe": 50,
        "spd": 40
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
    "catchRate": 90,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 35,
    "height": 0.9,
    "weight": 120,
    "baseExperience": 151,
    "growthRateId": "slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "model": {
        "default": "models/entity/lairon.geo.json"
    },
    "textures": {
        "default": "textures/entity/lairon.png"
    },
    "evolutions": [
        {
            "into": "oremon:aggron",
            "method": "level-up",
            "conditions": {
                "minLevel": 42,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default lairon;
