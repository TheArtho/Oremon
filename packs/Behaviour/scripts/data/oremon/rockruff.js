const rockruff = {
    "id": "oremon:rockruff",
    "name": "oremon.rockruff.name",
    "description": "oremon.rockruff.description",
    "types": [
        "rock"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 65,
        "def": 40,
        "atk_spe": 30,
        "def_spe": 40,
        "spd": 60
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 9.2,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "model": {
        "default": "models/entity/rockruff.geo.json"
    },
    "textures": {
        "default": "textures/entity/rockruff.png"
    },
    "evolutions": [
        {
            "into": "oremon:lycanroc",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "timeOfDay": "day",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:lycanroc",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "timeOfDay": "night",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default rockruff;
