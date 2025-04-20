const kirlia = {
    "id": "oremon:kirlia",
    "name": "oremon.kirlia.name",
    "description": "oremon.kirlia.description",
    "types": [
        "psychic",
        "fairy"
    ],
    "baseStats": {
        "hp": 38,
        "atk": 35,
        "def": 35,
        "atk_spe": 65,
        "def_spe": 55,
        "spd": 50
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
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 20.2,
    "baseExperience": 97,
    "growthRateId": "slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "White",
    "model": {
        "default": "models/entity/kirlia.geo.json"
    },
    "textures": {
        "default": "textures/entity/kirlia.png"
    },
    "evolutions": [
        {
            "into": "oremon:gardevoir",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:gallade",
            "method": "use-item",
            "conditions": {
                "item": "item:109",
                "gender": "male",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default kirlia;
