const finneon = {
    "id": "oremon:finneon",
    "name": "oremon.finneon.name",
    "description": "oremon.finneon.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 49,
        "atk": 49,
        "def": 56,
        "atk_spe": 49,
        "def_spe": 61,
        "spd": 66
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "water2"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 7,
    "baseExperience": 66,
    "growthRateId": "slow-then-very-fast",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "model": {
        "default": "models/entity/finneon.geo.json"
    },
    "textures": {
        "default": "textures/entity/finneon.png"
    },
    "evolutions": [
        {
            "into": "oremon:lumineon",
            "method": "level-up",
            "conditions": {
                "minLevel": 31,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default finneon;
