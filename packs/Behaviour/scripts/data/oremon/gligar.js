const gligar = {
    "id": "oremon:gligar",
    "name": "oremon.gligar.name",
    "description": "oremon.gligar.description",
    "types": [
        "ground",
        "flying"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 75,
        "def": 105,
        "atk_spe": 35,
        "def_spe": 65,
        "spd": 85
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
    "catchRate": 60,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 64.8,
    "baseExperience": 86,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:gliscor",
            "method": "level-up",
            "conditions": {
                "heldItem": "item:304",
                "timeOfDay": "night",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "guillotine",
            "method": "level_up",
            "level": 55
        },
        {
            "id": "razor-wind",
            "method": "egg",
            "level": 0
        },
        {
            "id": "swords-dance",
            "method": "level_up",
            "level": 50
        },
        {
            "id": "swords-dance",
            "method": "machine",
            "level": 0
        },
        {
            "id": "wing-attack",
            "method": "egg",
            "level": 0
        },
        {
            "id": "sand-attack",
            "method": "level_up",
            "level": 4
        },
        {
            "id": "double-edge",
            "method": "egg",
            "level": 0
        },
        {
            "id": "poison-sting",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "counter",
            "method": "egg",
            "level": 0
        },
        {
            "id": "earthquake",
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
            "method": "egg",
            "level": 0
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "screech",
            "method": "level_up",
            "level": 35
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "harden",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "rest",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-slide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "slash",
            "method": "level_up",
            "level": 27
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
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "feint-attack",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "sludge-bomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sandstorm",
            "method": "machine",
            "level": 0
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
            "id": "fury-cutter",
            "method": "level_up",
            "level": 16
        },
        {
            "id": "steel-wing",
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
            "method": "egg",
            "level": 0
        },
        {
            "id": "metal-claw",
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
            "id": "taunt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "brick-break",
            "method": "machine",
            "level": 0
        },
        {
            "id": "knock-off",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sky-uppercut",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "sand-tomb",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "poison-tail",
            "method": "egg",
            "level": 0
        },
        {
            "id": "roost",
            "method": "machine",
            "level": 0
        },
        {
            "id": "feint",
            "method": "egg",
            "level": 0
        },
        {
            "id": "u-turn",
            "method": "level_up",
            "level": 30
        },
        {
            "id": "u-turn",
            "method": "machine",
            "level": 0
        },
        {
            "id": "payback",
            "method": "machine",
            "level": 0
        },
        {
            "id": "fling",
            "method": "machine",
            "level": 0
        },
        {
            "id": "power-trick",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-polish",
            "method": "machine",
            "level": 0
        },
        {
            "id": "poison-jab",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dark-pulse",
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
            "method": "level_up",
            "level": 40
        },
        {
            "id": "x-scissor",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-climb",
            "method": "egg",
            "level": 0
        },
        {
            "id": "cross-poison",
            "method": "egg",
            "level": 0
        },
        {
            "id": "stone-edge",
            "method": "machine",
            "level": 0
        },
        {
            "id": "venoshock",
            "method": "machine",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "acrobatics",
            "method": "level_up",
            "level": 22
        },
        {
            "id": "acrobatics",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bulldoze",
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
export default gligar;
