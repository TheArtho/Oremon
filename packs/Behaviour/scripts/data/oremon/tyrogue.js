const tyrogue = {
    "id": "oremon:tyrogue",
    "name": "oremon.tyrogue.name",
    "description": "oremon.tyrogue.description",
    "types": [
        "fighting"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 35,
        "def": 35,
        "atk_spe": 35,
        "def_spe": 35,
        "spd": 35
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
    "genderRate": 0,
    "catchRate": 75,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 25,
    "height": 0.7,
    "weight": 21,
    "baseExperience": 42,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:hitmonlee",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "physicalStat": 1,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:hitmonchan",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "physicalStat": -1,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:hitmontop",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "physicalStat": 0,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default tyrogue;
