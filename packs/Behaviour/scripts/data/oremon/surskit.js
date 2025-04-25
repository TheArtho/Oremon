const surskit = {
    "id": "oremon:surskit",
    "name": "oremon.surskit.name",
    "description": "oremon.surskit.description",
    "types": [
        "bug",
        "water"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 30,
        "def": 32,
        "atk_spe": 50,
        "def_spe": 52,
        "spd": 65
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
    "catchRate": 200,
    "eggGroups": [
        "water1",
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 1.7,
    "baseExperience": 54,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:masquerain",
            "method": "level-up",
            "conditions": {
                "minLevel": 22,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "mist",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "hydro-pump",
            "method": "egg",
            "level": 0
        },
        {
            "id": "ice-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "blizzard",
            "method": "machine",
            "level": 0
        },
        {
            "id": "psybeam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "bubble-beam",
            "method": "level_up",
            "level": 17
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
            "level": 22
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
            "id": "haze",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "bubble",
            "method": "level_up",
            "level": 1
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
            "id": "mind-reader",
            "method": "egg",
            "level": 0
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "foresight",
            "method": "egg",
            "level": 0
        },
        {
            "id": "endure",
            "method": "egg",
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
            "id": "baton-pass",
            "method": "level_up",
            "level": 35
        },
        {
            "id": "sweet-scent",
            "method": "level_up",
            "level": 9
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
            "id": "psych-up",
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
            "id": "signal-beam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "mud-shot",
            "method": "egg",
            "level": 0
        },
        {
            "id": "water-sport",
            "method": "level_up",
            "level": 14
        },
        {
            "id": "bug-bite",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aqua-jet",
            "method": "level_up",
            "level": 30
        },
        {
            "id": "aqua-jet",
            "method": "egg",
            "level": 0
        },
        {
            "id": "power-split",
            "method": "egg",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "scald",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sticky-web",
            "method": "level_up",
            "level": 38
        },
        {
            "id": "fell-stinger",
            "method": "egg",
            "level": 0
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "infestation",
            "method": "machine",
            "level": 0
        },
        {
            "id": "lunge",
            "method": "egg",
            "level": 0
        }
    ]
};
export default surskit;
