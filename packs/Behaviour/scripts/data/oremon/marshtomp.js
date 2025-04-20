const marshtomp = {
    "id": "oremon:marshtomp",
    "name": "oremon.marshtomp.name",
    "description": "oremon.marshtomp.description",
    "types": [
        "water",
        "ground"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 85,
        "def": 70,
        "atk_spe": 60,
        "def_spe": 70,
        "spd": 50
    },
    "evYield": {
        "hp": 0,
        "atk": 2,
        "def": 0,
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
    "height": 0.7,
    "weight": 28,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "model": {
        "default": "models/entity/marshtomp.geo.json"
    },
    "textures": {
        "default": "textures/entity/marshtomp.png"
    },
    "evolutions": [
        {
            "into": "oremon:swampert",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default marshtomp;
