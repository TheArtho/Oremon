const poipole = {
    "id": "oremon:poipole",
    "name": "oremon.poipole.name",
    "description": "oremon.poipole.description",
    "types": [
        "poison"
    ],
    "baseStats": {
        "hp": 67,
        "atk": 73,
        "def": 67,
        "atk_spe": 73,
        "def_spe": 67,
        "spd": 73
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
    "genderRate": -1,
    "catchRate": 45,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 120,
    "height": 0.6,
    "weight": 1.8,
    "baseExperience": 189,
    "growthRateId": "slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:naganadel",
            "method": "level-up",
            "conditions": {
                "knownMove": "move:406",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "fury-attack",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "growl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "acid",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "peck",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "toxic",
            "method": "level_up",
            "level": 41
        },
        {
            "id": "toxic",
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
            "method": "machine",
            "level": 0
        },
        {
            "id": "sludge-bomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "charm",
            "method": "level_up",
            "level": 19
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
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "helping-hand",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "poison-jab",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "poison-jab",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dragon-pulse",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "nasty-plot",
            "method": "level_up",
            "level": 31
        },
        {
            "id": "venoshock",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "venoshock",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sludge-wave",
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
            "id": "fell-stinger",
            "method": "level_up",
            "level": 47
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "venom-drench",
            "method": "level_up",
            "level": 23
        }
    ]
};
export default poipole;
