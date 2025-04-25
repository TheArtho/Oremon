const pikachu = {
    "id": "oremon:pikachu",
    "name": "oremon.pikachu.name",
    "description": "oremon.pikachu.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 55,
        "def": 40,
        "atk_spe": 50,
        "def_spe": 50,
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
    "catchRate": 190,
    "eggGroups": [
        "ground",
        "fairy"
    ],
    "hatchCounter": 10,
    "height": 0.4,
    "weight": 6,
    "baseExperience": 112,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:raichu",
            "method": "use-item",
            "conditions": {
                "item": "item:83",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "slam",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "tail-whip",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "growl",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "thunder-shock",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "thunderbolt",
            "method": "level_up",
            "level": 42
        },
        {
            "id": "thunderbolt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder-wave",
            "method": "level_up",
            "level": 18
        },
        {
            "id": "thunder-wave",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder",
            "method": "level_up",
            "level": 58
        },
        {
            "id": "thunder",
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
            "level": 45
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "double-team",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "light-screen",
            "method": "level_up",
            "level": 53
        },
        {
            "id": "light-screen",
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
            "id": "spark",
            "method": "level_up",
            "level": 26
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
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "brick-break",
            "method": "machine",
            "level": 0
        },
        {
            "id": "feint",
            "method": "level_up",
            "level": 21
        },
        {
            "id": "fling",
            "method": "machine",
            "level": 0
        },
        {
            "id": "discharge",
            "method": "level_up",
            "level": 34
        },
        {
            "id": "grass-knot",
            "method": "machine",
            "level": 0
        },
        {
            "id": "charge-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "electro-ball",
            "method": "level_up",
            "level": 13
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
            "id": "volt-switch",
            "method": "machine",
            "level": 0
        },
        {
            "id": "wild-charge",
            "method": "level_up",
            "level": 50
        },
        {
            "id": "wild-charge",
            "method": "machine",
            "level": 0
        },
        {
            "id": "play-nice",
            "method": "level_up",
            "level": 7
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "nuzzle",
            "method": "level_up",
            "level": 29
        }
    ]
};
export default pikachu;
