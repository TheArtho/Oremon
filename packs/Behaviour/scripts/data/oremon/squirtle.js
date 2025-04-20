const squirtle = {
    "id": "oremon:squirtle",
    "name": "oremon.squirtle.name",
    "description": "oremon.squirtle.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 44,
        "atk": 48,
        "def": 65,
        "atk_spe": 50,
        "def_spe": 64,
        "spd": 43
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
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
    "height": 0.5,
    "weight": 9,
    "baseExperience": 63,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "model": {
        "default": "models/entity/squirtle.geo.json"
    },
    "textures": {
        "default": "textures/entity/squirtle.png"
    },
    "evolutions": [
        {
            "into": "oremon:wartortle",
            "method": "level-up",
            "conditions": {
                "minLevel": 16,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default squirtle;
