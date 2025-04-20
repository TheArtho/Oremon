const cascoon = {
    "id": "oremon:cascoon",
    "name": "oremon.cascoon.name",
    "description": "oremon.cascoon.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 35,
        "def": 55,
        "atk_spe": 25,
        "def_spe": 25,
        "spd": 15
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
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.7,
    "weight": 11.5,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Purple",
    "model": {
        "default": "models/entity/cascoon.geo.json"
    },
    "textures": {
        "default": "textures/entity/cascoon.png"
    },
    "evolutions": [
        {
            "into": "oremon:dustox",
            "method": "level-up",
            "conditions": {
                "minLevel": 10,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cascoon;
