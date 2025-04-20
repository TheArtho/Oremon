const pidove = {
    "id": "oremon:pidove",
    "name": "oremon.pidove.name",
    "description": "oremon.pidove.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 55,
        "def": 50,
        "atk_spe": 36,
        "def_spe": 30,
        "spd": 43
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
    "catchRate": 255,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 2.1,
    "baseExperience": 53,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Gray",
    "model": {
        "default": "models/entity/pidove.geo.json"
    },
    "textures": {
        "default": "textures/entity/pidove.png"
    },
    "evolutions": [
        {
            "into": "oremon:tranquill",
            "method": "level-up",
            "conditions": {
                "minLevel": 21,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pidove;
