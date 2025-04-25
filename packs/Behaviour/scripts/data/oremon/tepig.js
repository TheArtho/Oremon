const tepig = {
    "id": "oremon:tepig",
    "name": "oremon.tepig.name",
    "description": "oremon.tepig.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 63,
        "def": 45,
        "atk_spe": 45,
        "def_spe": 45,
        "spd": 45
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
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
    "height": 0.5,
    "weight": 9.9,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:pignite",
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
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "body-slam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "take-down",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "thrash",
            "method": "egg",
            "level": 0
        },
        {
            "id": "tail-whip",
            "method": "level_up",
            "level": 3
        },
        {
            "id": "roar",
            "method": "level_up",
            "level": 39
        },
        {
            "id": "roar",
            "method": "machine",
            "level": 0
        },
        {
            "id": "ember",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "flamethrower",
            "method": "level_up",
            "level": 33
        },
        {
            "id": "flamethrower",
            "method": "machine",
            "level": 0
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
            "id": "defense-curl",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "smog",
            "method": "level_up",
            "level": 19
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
            "id": "substitute",
            "method": "machine",
            "level": 0
        },
        {
            "id": "curse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rollout",
            "method": "level_up",
            "level": 21
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
            "method": "egg",
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
            "id": "magnitude",
            "method": "egg",
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
            "id": "taunt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "superpower",
            "method": "egg",
            "level": 0
        },
        {
            "id": "yawn",
            "method": "egg",
            "level": 0
        },
        {
            "id": "endeavor",
            "method": "egg",
            "level": 0
        },
        {
            "id": "overheat",
            "method": "machine",
            "level": 0
        },
        {
            "id": "odor-sleuth",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "covet",
            "method": "egg",
            "level": 0
        },
        {
            "id": "gyro-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "assurance",
            "method": "level_up",
            "level": 31
        },
        {
            "id": "sucker-punch",
            "method": "egg",
            "level": 0
        },
        {
            "id": "flare-blitz",
            "method": "level_up",
            "level": 43
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "head-smash",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "heavy-slam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "flame-charge",
            "method": "level_up",
            "level": 15
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
            "id": "wild-charge",
            "method": "machine",
            "level": 0
        },
        {
            "id": "heat-crash",
            "method": "level_up",
            "level": 27
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "burn-up",
            "method": "egg",
            "level": 0
        }
    ]
};
export default tepig;
