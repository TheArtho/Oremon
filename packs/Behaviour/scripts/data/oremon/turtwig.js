const turtwig = {
    "id": "oremon:turtwig",
    "name": "oremon.turtwig.name",
    "description": "oremon.turtwig.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 68,
        "def": 64,
        "atk_spe": 45,
        "def_spe": 55,
        "spd": 31
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 10.2,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Green",
    "model": {
        "default": "models/entity/turtwig.geo.json"
    },
    "textures": {
        "default": "textures/entity/turtwig.png"
    },
    "evolutions": [
        {
            "into": "oremon:grotle",
            "method": "level-up",
            "conditions": {
                "minLevel": 18,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default turtwig;
