const bergmite = {
    "id": "oremon:bergmite",
    "name": "oremon.bergmite.name",
    "description": "oremon.bergmite.description",
    "types": [
        "ice"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 69,
        "def": 85,
        "atk_spe": 32,
        "def_spe": 35,
        "spd": 28
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 99.5,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "model": {
        "default": "models/entity/bergmite.geo.json"
    },
    "textures": {
        "default": "textures/entity/bergmite.png"
    },
    "evolutions": [
        {
            "into": "oremon:avalugg",
            "method": "level-up",
            "conditions": {
                "minLevel": 37,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default bergmite;
