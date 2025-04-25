const swadloon = {
    "id": "oremon:swadloon",
    "name": "oremon.swadloon.name",
    "description": "oremon.swadloon.description",
    "types": [
        "bug",
        "grass"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 63,
        "def": 90,
        "atk_spe": 50,
        "def_spe": 80,
        "spd": 42
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 2,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 7.3,
    "baseExperience": 133,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:leavanny",
            "method": "level-up",
            "conditions": {
                "minHappiness": 220,
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
            "id": "razor-leaf",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "solar-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "string-shot",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "light-screen",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dream-eater",
            "method": "machine",
            "level": 0
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
            "method": "level_up",
            "level": 0
        },
        {
            "id": "protect",
            "method": "level_up",
            "level": 1
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
            "id": "safeguard",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hidden-power",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sunny-day",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "nature-power",
            "method": "machine",
            "level": 0
        },
        {
            "id": "grass-whistle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "calm-mind",
            "method": "machine",
            "level": 0
        },
        {
            "id": "payback",
            "method": "machine",
            "level": 0
        },
        {
            "id": "energy-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bug-bite",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "round",
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
export default swadloon;
