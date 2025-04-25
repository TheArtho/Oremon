const combusken = {
    "id": "oremon:combusken",
    "name": "oremon.combusken.name",
    "description": "oremon.combusken.description",
    "types": [
        "fire",
        "fighting"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 85,
        "def": 60,
        "atk_spe": 85,
        "def_spe": 60,
        "spd": 55
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 19.5,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:blaziken",
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
            "id": "scratch",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "swords-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "double-kick",
            "method": "level_up",
            "level": 0
        },
        {
            "id": "double-kick",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "sand-attack",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "sand-attack",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "growl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "ember",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "ember",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "flamethrower",
            "method": "machine",
            "level": 0
        },
        {
            "id": "peck",
            "method": "level_up",
            "level": 14
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "focus-energy",
            "method": "level_up",
            "level": 36
        },
        {
            "id": "mirror-move",
            "method": "level_up",
            "level": 47
        },
        {
            "id": "fire-blast",
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
            "id": "slash",
            "method": "level_up",
            "level": 42
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
            "id": "sunny-day",
            "method": "machine",
            "level": 0
        },
        {
            "id": "will-o-wisp",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "brick-break",
            "method": "machine",
            "level": 0
        },
        {
            "id": "overheat",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sky-uppercut",
            "method": "level_up",
            "level": 53
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bulk-up",
            "method": "level_up",
            "level": 31
        },
        {
            "id": "bulk-up",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fling",
            "method": "machine",
            "level": 0
        },
        {
            "id": "flare-blitz",
            "method": "level_up",
            "level": 58
        },
        {
            "id": "poison-jab",
            "method": "machine",
            "level": 0
        },
        {
            "id": "focus-blast",
            "method": "machine",
            "level": 0
        },
        {
            "id": "shadow-claw",
            "method": "machine",
            "level": 0
        },
        {
            "id": "flame-charge",
            "method": "level_up",
            "level": 20
        },
        {
            "id": "flame-charge",
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
            "id": "echoed-voice",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fire-pledge",
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
export default combusken;
