const seadra = {
    "id": "oremon:seadra",
    "name": "oremon.seadra.name",
    "description": "oremon.seadra.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 65,
        "def": 95,
        "atk_spe": 95,
        "def_spe": 45,
        "spd": 85
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 75,
    "eggGroups": [
        "water1",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 1.2,
    "weight": 25,
    "baseExperience": 154,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:kingdra",
            "method": "trade",
            "conditions": {
                "heldItem": "item:212",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "leer",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "leer",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "water-gun",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "water-gun",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "hydro-pump",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "hydro-pump",
            "method": "level_up",
            "level": 60
        },
        {
            "id": "surf",
            "method": "machine",
            "level": 0
        },
        {
            "id": "ice-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "blizzard",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bubble-beam",
            "method": "level_up",
            "level": 21
        },
        {
            "id": "hyper-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "agility",
            "method": "level_up",
            "level": 38
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "smokescreen",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "smokescreen",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "focus-energy",
            "method": "level_up",
            "level": 26
        },
        {
            "id": "waterfall",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bubble",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "rest",
            "method": "machine",
            "level": 0
        },
        {
            "id": "substitute",
            "method": "machine",
            "level": 0
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "swagger",
            "method": "machine",
            "level": 0
        },
        {
            "id": "attract",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sleep-talk",
            "method": "machine",
            "level": 0
        },
        {
            "id": "return",
            "method": "machine",
            "level": 0
        },
        {
            "id": "frustration",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hidden-power",
            "method": "machine",
            "level": 0
        },
        {
            "id": "twister",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "rain-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hail",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dragon-dance",
            "method": "level_up",
            "level": 52
        },
        {
            "id": "brine",
            "method": "level_up",
            "level": 31
        },
        {
            "id": "dragon-pulse",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "giga-impact",
            "method": "machine",
            "level": 0
        },
        {
            "id": "flash-cannon",
            "method": "machine",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "scald",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        }
    ]
};
export default seadra;
