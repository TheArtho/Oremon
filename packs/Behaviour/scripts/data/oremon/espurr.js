const espurr = {
    "id": "oremon:espurr",
    "name": "oremon.espurr.name",
    "description": "oremon.espurr.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 62,
        "atk": 48,
        "def": 54,
        "atk_spe": 63,
        "def_spe": 60,
        "spd": 68
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
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 3.5,
    "baseExperience": 71,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:meowstic",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:meowstic",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "gender": "male",
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
            "id": "leer",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "psybeam",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "thunderbolt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder-wave",
            "method": "machine",
            "level": 0
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confusion",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "psychic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "barrier",
            "method": "egg",
            "level": 0
        },
        {
            "id": "light-screen",
            "method": "level_up",
            "level": 13
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
            "id": "dream-eater",
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
            "id": "fake-out",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "torment",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "trick",
            "method": "egg",
            "level": 0
        },
        {
            "id": "assist",
            "method": "egg",
            "level": 0
        },
        {
            "id": "yawn",
            "method": "egg",
            "level": 0
        },
        {
            "id": "covet",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "calm-mind",
            "method": "machine",
            "level": 0
        },
        {
            "id": "payback",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dark-pulse",
            "method": "machine",
            "level": 0
        },
        {
            "id": "energy-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "trick-room",
            "method": "machine",
            "level": 0
        },
        {
            "id": "charge-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "psyshock",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "psyshock",
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
            "id": "work-up",
            "method": "machine",
            "level": 0
        },
        {
            "id": "disarming-voice",
            "method": "level_up",
            "level": 22
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        }
    ]
};
export default espurr;
