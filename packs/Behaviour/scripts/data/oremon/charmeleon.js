const charmeleon = {
    "id": "oremon:charmeleon",
    "name": "oremon.charmeleon.name",
    "description": "oremon.charmeleon.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 58,
        "atk": 64,
        "def": 58,
        "atk_spe": 80,
        "def_spe": 65,
        "spd": 80
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 19,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Red",
    "model": {
        "default": "models/entity/charmeleon.geo.json"
    },
    "textures": {
        "default": "textures/entity/charmeleon.png"
    },
    "evolutions": [
        {
            "into": "oremon:charizard",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default charmeleon;
