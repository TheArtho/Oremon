const whismur = {
    "id": "oremon:whismur",
    "name": "oremon.whismur.name",
    "description": "oremon.whismur.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 64,
        "atk": 51,
        "def": 23,
        "atk_spe": 51,
        "def_spe": 23,
        "spd": 28
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
    "catchRate": 190,
    "eggGroups": [
        "monster",
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 16.3,
    "baseExperience": 48,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Pink",
    "model": {
        "default": "models/entity/whismur.geo.json"
    },
    "textures": {
        "default": "textures/entity/whismur.png"
    },
    "evolutions": [
        {
            "into": "oremon:loudred",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default whismur;
