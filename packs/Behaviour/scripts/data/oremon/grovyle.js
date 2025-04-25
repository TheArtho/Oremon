const grovyle = {
    "id": "oremon:grovyle",
    "name": "oremon.grovyle.name",
    "description": "oremon.grovyle.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 65,
        "def": 45,
        "atk_spe": 85,
        "def_spe": 65,
        "spd": 95
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 21.6,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:sceptile",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "pound",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "swords-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "slam",
            "method": "level_up",
            "level": 33
        },
        {
            "id": "leer",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "mega-drain",
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
            "id": "agility",
            "method": "level_up",
            "level": 28
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "screech",
            "method": "level_up",
            "level": 63
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rest",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-slide",
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
            "id": "detect",
            "method": "level_up",
            "level": 38
        },
        {
            "id": "false-swipe",
            "method": "level_up",
            "level": 48
        },
        {
            "id": "false-swipe",
            "method": "machine",
            "level": 0
        },
        {
            "id": "swagger",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fury-cutter",
            "method": "level_up",
            "level": 0
        },
        {
            "id": "fury-cutter",
            "method": "level_up",
            "level": 1
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
            "id": "pursuit",
            "method": "level_up",
            "level": 18
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
            "id": "brick-break",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "leaf-blade",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "fling",
            "method": "machine",
            "level": 0
        },
        {
            "id": "x-scissor",
            "method": "level_up",
            "level": 43
        },
        {
            "id": "x-scissor",
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
            "level": 58
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "low-sweep",
            "method": "machine",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "quick-guard",
            "method": "level_up",
            "level": 53
        },
        {
            "id": "acrobatics",
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
export default grovyle;
