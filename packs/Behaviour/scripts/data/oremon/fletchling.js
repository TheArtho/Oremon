const fletchling = {
    "id": "oremon:fletchling",
    "name": "oremon.fletchling.name",
    "description": "oremon.fletchling.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 50,
        "def": 43,
        "atk_spe": 40,
        "def_spe": 38,
        "spd": 62
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
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 1.7,
    "baseExperience": 56,
    "growthRateId": "medium-slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:fletchinder",
            "method": "level-up",
            "conditions": {
                "minLevel": 17,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "razor-wind",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "swords-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fly",
            "method": "machine",
            "level": 0
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "growl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "peck",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "agility",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 6
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
            "id": "substitute",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thief",
            "method": "machine",
            "level": 0
        },
        {
            "id": "flail",
            "method": "level_up",
            "level": 16
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
            "id": "steel-wing",
            "method": "level_up",
            "level": 48
        },
        {
            "id": "steel-wing",
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
            "id": "taunt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "snatch",
            "method": "egg",
            "level": 0
        },
        {
            "id": "overheat",
            "method": "machine",
            "level": 0
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "roost",
            "method": "level_up",
            "level": 21
        },
        {
            "id": "roost",
            "method": "machine",
            "level": 0
        },
        {
            "id": "natural-gift",
            "method": "level_up",
            "level": 29
        },
        {
            "id": "tailwind",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "tailwind",
            "method": "egg",
            "level": 0
        },
        {
            "id": "u-turn",
            "method": "machine",
            "level": 0
        },
        {
            "id": "me-first",
            "method": "level_up",
            "level": 41
        },
        {
            "id": "flame-charge",
            "method": "level_up",
            "level": 34
        },
        {
            "id": "flame-charge",
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
            "method": "egg",
            "level": 0
        },
        {
            "id": "acrobatics",
            "method": "level_up",
            "level": 39
        },
        {
            "id": "acrobatics",
            "method": "machine",
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
export default fletchling;
