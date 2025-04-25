const turtwig = {
    "id": "oremon:turtwig",
    "name": "oremon.turtwig.name",
    "description": "oremon.turtwig.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 68,
        "def": 64,
        "atk_spe": 45,
        "def_spe": 55,
        "spd": 31
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 10.2,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:grotle",
            "method": "level-up",
            "conditions": {
                "minLevel": 18,
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
            "id": "body-slam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "thrash",
            "method": "egg",
            "level": 0
        },
        {
            "id": "double-edge",
            "method": "egg",
            "level": 0
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 21
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "mega-drain",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "leech-seed",
            "method": "level_up",
            "level": 29
        },
        {
            "id": "growth",
            "method": "egg",
            "level": 0
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
            "id": "amnesia",
            "method": "egg",
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
            "level": 41
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
            "level": 33
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
            "level": 37
        },
        {
            "id": "stockpile",
            "method": "egg",
            "level": 0
        },
        {
            "id": "spit-up",
            "method": "egg",
            "level": 0
        },
        {
            "id": "swallow",
            "method": "egg",
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
            "id": "superpower",
            "method": "egg",
            "level": 0
        },
        {
            "id": "tickle",
            "method": "egg",
            "level": 0
        },
        {
            "id": "sand-tomb",
            "method": "egg",
            "level": 0
        },
        {
            "id": "worry-seed",
            "method": "egg",
            "level": 0
        },
        {
            "id": "seed-bomb",
            "method": "egg",
            "level": 0
        },
        {
            "id": "energy-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "earth-power",
            "method": "egg",
            "level": 0
        },
        {
            "id": "leaf-storm",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "wide-guard",
            "method": "egg",
            "level": 0
        },
        {
            "id": "heavy-slam",
            "method": "egg",
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
            "id": "grassy-terrain",
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
export default turtwig;
