const weedle = {
    "id": "oremon:weedle",
    "name": "oremon.weedle.name",
    "description": "oremon.weedle.description",
    "types": [
        "bug",
        "poison"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 35,
        "def": 30,
        "atk_spe": 20,
        "def_spe": 20,
        "spd": 50
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
    "catchRate": 255,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 3.2,
    "baseExperience": 39,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:kakuna",
            "method": "level-up",
            "conditions": {
                "minLevel": 7,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "poison-sting",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "string-shot",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bug-bite",
            "method": "level_up",
            "level": 9
        }
    ]
};
export default weedle;
