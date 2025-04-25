const tympole = {
    "id": "oremon:tympole",
    "name": "oremon.tympole.name",
    "description": "oremon.tympole.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 50,
        "def": 40,
        "atk_spe": 50,
        "def_spe": 40,
        "spd": 64
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
    "catchRate": 255,
    "eggGroups": [
        "water1"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 4.5,
    "baseExperience": 59,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:palpitoad",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "growl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "supersonic",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "mist",
            "method": "egg",
            "level": 0
        },
        {
            "id": "hydro-pump",
            "method": "level_up",
            "level": 42
        },
        {
            "id": "surf",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bubble-beam",
            "method": "level_up",
            "level": 12
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
            "id": "snore",
            "method": "egg",
            "level": 0
        },
        {
            "id": "flail",
            "method": "level_up",
            "level": 34
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
            "id": "hidden-power",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rain-dance",
            "method": "level_up",
            "level": 31
        },
        {
            "id": "rain-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "uproar",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "hail",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "refresh",
            "method": "egg",
            "level": 0
        },
        {
            "id": "mud-sport",
            "method": "egg",
            "level": 0
        },
        {
            "id": "hyper-voice",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "muddy-water",
            "method": "level_up",
            "level": 27
        },
        {
            "id": "mud-shot",
            "method": "level_up",
            "level": 16
        },
        {
            "id": "water-pulse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aqua-ring",
            "method": "level_up",
            "level": 20
        },
        {
            "id": "earth-power",
            "method": "egg",
            "level": 0
        },
        {
            "id": "mud-bomb",
            "method": "egg",
            "level": 0
        },
        {
            "id": "sludge-wave",
            "method": "machine",
            "level": 0
        },
        {
            "id": "after-you",
            "method": "egg",
            "level": 0
        },
        {
            "id": "round",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "echoed-voice",
            "method": "level_up",
            "level": 38
        },
        {
            "id": "echoed-voice",
            "method": "machine",
            "level": 0
        },
        {
            "id": "scald",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "venom-drench",
            "method": "egg",
            "level": 0
        },
        {
            "id": "infestation",
            "method": "machine",
            "level": 0
        }
    ]
};
export default tympole;
