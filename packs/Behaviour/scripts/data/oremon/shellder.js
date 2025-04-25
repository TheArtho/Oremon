const shellder = {
    "id": "oremon:shellder",
    "name": "oremon.shellder.name",
    "description": "oremon.shellder.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 65,
        "def": 100,
        "atk_spe": 45,
        "def_spe": 25,
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
    "catchRate": 190,
    "eggGroups": [
        "water3"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 4,
    "baseExperience": 61,
    "growthRateId": "slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:cloyster",
            "method": "use-item",
            "conditions": {
                "item": "item:84",
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
            "id": "take-down",
            "method": "egg",
            "level": 0
        },
        {
            "id": "twineedle",
            "method": "egg",
            "level": 0
        },
        {
            "id": "leer",
            "method": "level_up",
            "level": 20
        },
        {
            "id": "supersonic",
            "method": "level_up",
            "level": 8
        },
        {
            "id": "water-gun",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "hydro-pump",
            "method": "level_up",
            "level": 61
        },
        {
            "id": "surf",
            "method": "machine",
            "level": 0
        },
        {
            "id": "ice-beam",
            "method": "level_up",
            "level": 52
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
            "id": "bubble-beam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aurora-beam",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "screech",
            "method": "egg",
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
            "level": 4
        },
        {
            "id": "barrier",
            "method": "egg",
            "level": 0
        },
        {
            "id": "clamp",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "explosion",
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
            "method": "level_up",
            "level": 16
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
            "id": "rapid-spin",
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
            "id": "whirlpool",
            "method": "level_up",
            "level": 40
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
            "id": "icicle-spear",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "icicle-spear",
            "method": "egg",
            "level": 0
        },
        {
            "id": "iron-defense",
            "method": "level_up",
            "level": 49
        },
        {
            "id": "mud-shot",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-blast",
            "method": "egg",
            "level": 0
        },
        {
            "id": "water-pulse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "brine",
            "method": "level_up",
            "level": 44
        },
        {
            "id": "payback",
            "method": "machine",
            "level": 0
        },
        {
            "id": "aqua-ring",
            "method": "egg",
            "level": 0
        },
        {
            "id": "avalanche",
            "method": "egg",
            "level": 0
        },
        {
            "id": "ice-shard",
            "method": "level_up",
            "level": 28
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "shell-smash",
            "method": "level_up",
            "level": 56
        },
        {
            "id": "razor-shell",
            "method": "level_up",
            "level": 32
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        }
    ]
};
export default shellder;
