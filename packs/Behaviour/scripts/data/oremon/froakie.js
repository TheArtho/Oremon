const froakie = {
    "id": "oremon:froakie",
    "name": "oremon.froakie.name",
    "description": "oremon.froakie.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 41,
        "atk": 56,
        "def": 40,
        "atk_spe": 62,
        "def_spe": 44,
        "spd": 71
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "water1"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 7,
    "baseExperience": 63,
    "growthRateId": "medium-slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "model": {
        "default": "models/entity/froakie.geo.json"
    },
    "textures": {
        "default": "textures/entity/froakie.png"
    },
    "evolutions": [
        {
            "into": "oremon:frogadier",
            "method": "level-up",
            "conditions": {
                "minLevel": 16,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default froakie;
