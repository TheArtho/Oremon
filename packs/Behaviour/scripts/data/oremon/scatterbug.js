const scatterbug = {
    "id": "oremon:scatterbug",
    "name": "oremon.scatterbug.name",
    "description": "oremon.scatterbug.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 38,
        "atk": 35,
        "def": 40,
        "atk_spe": 27,
        "def_spe": 25,
        "spd": 35
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
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 2.5,
    "baseExperience": 40,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Black",
    "evolutions": [
        {
            "into": "oremon:spewpa",
            "method": "level-up",
            "conditions": {
                "minLevel": 9,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "poison-powder",
            "method": "egg",
            "level": 0
        },
        {
            "id": "stun-spore",
            "method": "level_up",
            "level": 6
        },
        {
            "id": "stun-spore",
            "method": "egg",
            "level": 0
        },
        {
            "id": "string-shot",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bug-bite",
            "method": "level_up",
            "level": 15
        },
        {
            "id": "rage-powder",
            "method": "egg",
            "level": 0
        }
    ]
};
export default scatterbug;
