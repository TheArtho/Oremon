const grotle = {
    "id": "oremon:grotle",
    "name": "oremon.grotle.name",
    "description": "oremon.grotle.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 89,
        "def": 85,
        "atk_spe": 55,
        "def_spe": 65,
        "spd": 36
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 97,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:torterra",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "swords-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 22
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "mega-drain",
            "method": "level_up",
            "level": 27
        },
        {
            "id": "leech-seed",
            "method": "level_up",
            "level": 32
        },
        {
            "id": "razor-leaf",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "solar-beam",
            "method": "machine",
            "level": 0
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
            "id": "withdraw",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "withdraw",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "light-screen",
            "method": "machine",
            "level": 0
        },
        {
            "id": "reflect",
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
            "id": "curse",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "giga-drain",
            "method": "level_up",
            "level": 47
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
            "id": "synthesis",
            "method": "level_up",
            "level": 37
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
            "id": "crunch",
            "method": "level_up",
            "level": 42
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
            "id": "energy-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "leaf-storm",
            "method": "level_up",
            "level": 52
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "grass-pledge",
            "method": "tutor",
            "level": 0
        },
        {
            "id": "work-up",
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
export default grotle;
