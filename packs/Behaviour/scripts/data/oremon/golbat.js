const golbat = {
    "id": "oremon:golbat",
    "name": "oremon.golbat.name",
    "description": "oremon.golbat.description",
    "types": [
        "poison",
        "flying"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 80,
        "def": 70,
        "atk_spe": 65,
        "def_spe": 75,
        "spd": 90
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 90,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 1.6,
    "weight": 55,
    "baseExperience": 159,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:crobat",
            "method": "level-up",
            "conditions": {
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "wing-attack",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "fly",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 11
        },
        {
            "id": "supersonic",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "supersonic",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "hyper-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "absorb",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "screech",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confuse-ray",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "haze",
            "method": "level_up",
            "level": 40
        },
        {
            "id": "swift",
            "method": "level_up",
            "level": 24
        },
        {
            "id": "leech-life",
            "method": "level_up",
            "level": 35
        },
        {
            "id": "leech-life",
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
            "id": "steel-wing",
            "method": "machine",
            "level": 0
        },
        {
            "id": "mean-look",
            "method": "level_up",
            "level": 32
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
            "id": "shadow-ball",
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
            "id": "poison-fang",
            "method": "level_up",
            "level": 27
        },
        {
            "id": "astonish",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "astonish",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "air-cutter",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "roost",
            "method": "machine",
            "level": 0
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
            "id": "air-slash",
            "method": "level_up",
            "level": 48
        },
        {
            "id": "giga-impact",
            "method": "machine",
            "level": 0
        },
        {
            "id": "venoshock",
            "method": "level_up",
            "level": 43
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
            "id": "quick-guard",
            "method": "level_up",
            "level": 51
        },
        {
            "id": "acrobatics",
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
export default golbat;
