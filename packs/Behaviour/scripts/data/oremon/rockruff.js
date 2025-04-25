const rockruff = {
    "id": "oremon:rockruff",
    "name": "oremon.rockruff.name",
    "description": "oremon.rockruff.description",
    "types": [
        "rock"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 65,
        "def": 40,
        "atk_spe": 30,
        "def_spe": 40,
        "spd": 60
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 9.2,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:lycanroc",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "timeOfDay": "day",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:lycanroc",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "timeOfDay": "night",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "sand-attack",
            "method": "level_up",
            "level": 4
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "thrash",
            "method": "egg",
            "level": 0
        },
        {
            "id": "leer",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "roar",
            "method": "level_up",
            "level": 26
        },
        {
            "id": "roar",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-throw",
            "method": "level_up",
            "level": 15
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
            "id": "rest",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-slide",
            "method": "level_up",
            "level": 34
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
            "id": "scary-face",
            "method": "level_up",
            "level": 37
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
            "id": "crunch",
            "method": "level_up",
            "level": 40
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
            "id": "crush-claw",
            "method": "egg",
            "level": 0
        },
        {
            "id": "odor-sleuth",
            "method": "level_up",
            "level": 18
        },
        {
            "id": "rock-tomb",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "howl",
            "method": "level_up",
            "level": 12
        },
        {
            "id": "sucker-punch",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-polish",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder-fang",
            "method": "egg",
            "level": 0
        },
        {
            "id": "fire-fang",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-climb",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "stone-edge",
            "method": "level_up",
            "level": 48
        },
        {
            "id": "stone-edge",
            "method": "machine",
            "level": 0
        },
        {
            "id": "stealth-rock",
            "method": "level_up",
            "level": 29
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
            "id": "snarl",
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
export default rockruff;
