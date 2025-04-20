const magneton = {
    "id": "oremon:magneton",
    "name": "oremon.magneton.name",
    "description": "oremon.magneton.description",
    "types": [
        "electric",
        "steel"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 60,
        "def": 95,
        "atk_spe": 120,
        "def_spe": 70,
        "spd": 70
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": -1,
    "catchRate": 60,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 60,
    "baseExperience": 163,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "heads",
    "color": "Gray",
    "model": {
        "default": "models/entity/magneton.geo.json"
    },
    "textures": {
        "default": "textures/entity/magneton.png"
    },
    "evolutions": [
        {
            "into": "oremon:magnezone",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:magnezone",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:magnezone",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:magnezone",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default magneton;
