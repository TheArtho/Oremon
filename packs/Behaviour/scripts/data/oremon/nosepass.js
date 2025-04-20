const nosepass = {
    "id": "oremon:nosepass",
    "name": "oremon.nosepass.name",
    "description": "oremon.nosepass.description",
    "types": [
        "rock"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 45,
        "def": 135,
        "atk_spe": 45,
        "def_spe": 90,
        "spd": 30
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
    "catchRate": 255,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 97,
    "baseExperience": 75,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Gray",
    "model": {
        "default": "models/entity/nosepass.geo.json"
    },
    "textures": {
        "default": "textures/entity/nosepass.png"
    },
    "evolutions": [
        {
            "into": "oremon:probopass",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:probopass",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:probopass",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:probopass",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default nosepass;
