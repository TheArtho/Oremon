const minccino = {
    "id": "oremon:minccino",
    "name": "oremon.minccino.name",
    "description": "oremon.minccino.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 50,
        "def": 40,
        "atk_spe": 40,
        "def_spe": 40,
        "spd": 75
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
    "genderRate": 6,
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 5.8,
    "baseExperience": 60,
    "growthRateId": "fast",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:cinccino",
            "method": "use-item",
            "conditions": {
                "item": "item:107",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "pound",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "double-slap",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "slam",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "tail-whip",
            "method": "egg",
            "level": 0
        },
        {
            "id": "sing",
            "method": "level_up",
            "level": 21
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
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "swift",
            "method": "level_up",
            "level": 19
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
            "method": "egg",
            "level": 0
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "mud-slap",
            "method": "egg",
            "level": 0
        },
        {
            "id": "endure",
            "method": "egg",
            "level": 0
        },
        {
            "id": "charm",
            "method": "level_up",
            "level": 27
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
            "id": "safeguard",
            "method": "machine",
            "level": 0
        },
        {
            "id": "encore",
            "method": "level_up",
            "level": 15
        },
        {
            "id": "iron-tail",
            "method": "egg",
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
            "id": "helping-hand",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "knock-off",
            "method": "egg",
            "level": 0
        },
        {
            "id": "hyper-voice",
            "method": "level_up",
            "level": 43
        },
        {
            "id": "fake-tears",
            "method": "egg",
            "level": 0
        },
        {
            "id": "tickle",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "calm-mind",
            "method": "machine",
            "level": 0
        },
        {
            "id": "wake-up-slap",
            "method": "level_up",
            "level": 31
        },
        {
            "id": "u-turn",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fling",
            "method": "machine",
            "level": 0
        },
        {
            "id": "last-resort",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "aqua-tail",
            "method": "egg",
            "level": 0
        },
        {
            "id": "captivate",
            "method": "level_up",
            "level": 39
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "after-you",
            "method": "level_up",
            "level": 49
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "echoed-voice",
            "method": "level_up",
            "level": 33
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
            "id": "tail-slap",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dazzling-gleam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "baby-doll-eyes",
            "method": "level_up",
            "level": 3
        }
    ]
};
export default minccino;
