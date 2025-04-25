const ledyba = {
    "id": "oremon:ledyba",
    "name": "oremon.ledyba.name",
    "description": "oremon.ledyba.description",
    "types": [
        "bug",
        "flying"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 20,
        "def": 30,
        "atk_spe": 40,
        "def_spe": 80,
        "spd": 55
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 1,
    "weight": 10.8,
    "baseExperience": 53,
    "growthRateId": "fast",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:ledian",
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
            "id": "comet-punch",
            "method": "level_up",
            "level": 22
        },
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
            "id": "double-edge",
            "method": "level_up",
            "level": 40
        },
        {
            "id": "supersonic",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "psybeam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "counter",
            "method": "egg",
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
            "id": "agility",
            "method": "level_up",
            "level": 29
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
            "id": "light-screen",
            "method": "level_up",
            "level": 12
        },
        {
            "id": "light-screen",
            "method": "machine",
            "level": 0
        },
        {
            "id": "reflect",
            "method": "level_up",
            "level": 12
        },
        {
            "id": "reflect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bide",
            "method": "egg",
            "level": 0
        },
        {
            "id": "swift",
            "method": "level_up",
            "level": 8
        },
        {
            "id": "dizzy-punch",
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
            "id": "mach-punch",
            "method": "level_up",
            "level": 15
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
            "id": "safeguard",
            "method": "level_up",
            "level": 12
        },
        {
            "id": "safeguard",
            "method": "machine",
            "level": 0
        },
        {
            "id": "baton-pass",
            "method": "level_up",
            "level": 26
        },
        {
            "id": "encore",
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
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "focus-punch",
            "method": "egg",
            "level": 0
        },
        {
            "id": "brick-break",
            "method": "machine",
            "level": 0
        },
        {
            "id": "knock-off",
            "method": "egg",
            "level": 0
        },
        {
            "id": "silver-wind",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "silver-wind",
            "method": "egg",
            "level": 0
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
            "id": "tailwind",
            "method": "egg",
            "level": 0
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
            "id": "air-slash",
            "method": "level_up",
            "level": 36
        },
        {
            "id": "bug-buzz",
            "method": "level_up",
            "level": 33
        },
        {
            "id": "bug-buzz",
            "method": "egg",
            "level": 0
        },
        {
            "id": "drain-punch",
            "method": "egg",
            "level": 0
        },
        {
            "id": "bug-bite",
            "method": "egg",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
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
        },
        {
            "id": "infestation",
            "method": "machine",
            "level": 0
        }
    ]
};
export default ledyba;
