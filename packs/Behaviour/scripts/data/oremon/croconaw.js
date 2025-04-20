const croconaw = {
    "id": "oremon:croconaw",
    "name": "oremon.croconaw.name",
    "description": "oremon.croconaw.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 80,
        "def": 80,
        "atk_spe": 59,
        "def_spe": 63,
        "spd": 58
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "water1"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 25,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "model": {
        "default": "models/entity/croconaw.geo.json"
    },
    "textures": {
        "default": "textures/entity/croconaw.png"
    },
    "evolutions": [
        {
            "into": "oremon:feraligatr",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default croconaw;
