const wurmple = {
    "id": "oremon:wurmple",
    "name": "oremon.wurmple.name",
    "description": "oremon.wurmple.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 45,
        "def": 35,
        "atk_spe": 20,
        "def_spe": 30,
        "spd": 20
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 3.6,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Red",
    "model": {
        "default": "models/entity/wurmple.geo.json"
    },
    "textures": {
        "default": "textures/entity/wurmple.png"
    },
    "evolutions": [
        {
            "into": "oremon:silcoon",
            "method": "level-up",
            "conditions": {
                "minLevel": 7,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:cascoon",
            "method": "level-up",
            "conditions": {
                "minLevel": 7,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default wurmple;
