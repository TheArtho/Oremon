const staravia = {
    "id": "oremon:staravia",
    "name": "oremon.staravia.name",
    "description": "oremon.staravia.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 75,
        "def": 50,
        "atk_spe": 40,
        "def_spe": 40,
        "spd": 80
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
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.6,
    "weight": 15.5,
    "baseExperience": 119,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:staraptor",
            "method": "level-up",
            "conditions": {
                "minLevel": 34,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "wing-attack",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "whirlwind",
            "method": "level_up",
            "level": 23
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
            "id": "take-down",
            "method": "level_up",
            "level": 33
        },
        {
            "id": "growl",
            "method": "level_up",
            "level": 1
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
            "id": "quick-attack",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "double-team",
            "method": "level_up",
            "level": 13
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
            "id": "rain-dance",
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
            "id": "endeavor",
            "method": "level_up",
            "level": 18
        },
        {
            "id": "aerial-ace",
            "method": "level_up",
            "level": 28
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "roost",
            "method": "machine",
            "level": 0
        },
        {
            "id": "u-turn",
            "method": "machine",
            "level": 0
        },
        {
            "id": "brave-bird",
            "method": "level_up",
            "level": 43
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "echoed-voice",
            "method": "machine",
            "level": 0
        },
        {
            "id": "final-gambit",
            "method": "level_up",
            "level": 48
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
export default staravia;
