const nincada = {
    "id": "oremon:nincada",
    "name": "oremon.nincada.name",
    "description": "oremon.nincada.description",
    "types": [
        "bug",
        "ground"
    ],
    "baseStats": {
        "hp": 31,
        "atk": 45,
        "def": 90,
        "atk_spe": 30,
        "def_spe": 30,
        "spd": 40
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 5.5,
    "baseExperience": 53,
    "growthRateId": "slow-then-very-fast",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:ninjask",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:shedinja",
            "method": "shed",
            "conditions": {
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
            "id": "gust",
            "method": "egg",
            "level": 0
        },
        {
            "id": "sand-attack",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "solar-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dig",
            "method": "level_up",
            "level": 37
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
            "id": "harden",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bide",
            "method": "level_up",
            "level": 29
        },
        {
            "id": "leech-life",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fury-swipes",
            "method": "level_up",
            "level": 13
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
            "id": "mind-reader",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "feint-attack",
            "method": "egg",
            "level": 0
        },
        {
            "id": "mud-slap",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "sandstorm",
            "method": "machine",
            "level": 0
        },
        {
            "id": "endure",
            "method": "egg",
            "level": 0
        },
        {
            "id": "false-swipe",
            "method": "level_up",
            "level": 33
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
            "id": "metal-claw",
            "method": "level_up",
            "level": 21
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
            "id": "shadow-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "silver-wind",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "night-slash",
            "method": "egg",
            "level": 0
        },
        {
            "id": "x-scissor",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bug-buzz",
            "method": "egg",
            "level": 0
        },
        {
            "id": "bug-bite",
            "method": "egg",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "final-gambit",
            "method": "egg",
            "level": 0
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        }
    ]
};
export default nincada;
