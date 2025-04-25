const tyrunt = {
    "id": "oremon:tyrunt",
    "name": "oremon.tyrunt.name",
    "description": "oremon.tyrunt.description",
    "types": [
        "rock",
        "dragon"
    ],
    "baseStats": {
        "hp": 58,
        "atk": 89,
        "def": 77,
        "atk_spe": 45,
        "def_spe": 45,
        "spd": 48
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
        "dragon"
    ],
    "hatchCounter": 30,
    "height": 0.8,
    "weight": 26,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:tyrantrum",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "timeOfDay": "day",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "stomp",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "horn-drill",
            "method": "level_up",
            "level": 49
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "thrash",
            "method": "level_up",
            "level": 40
        },
        {
            "id": "tail-whip",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "roar",
            "method": "level_up",
            "level": 6
        },
        {
            "id": "roar",
            "method": "machine",
            "level": 0
        },
        {
            "id": "earthquake",
            "method": "level_up",
            "level": 44
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
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bide",
            "method": "level_up",
            "level": 12
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
            "id": "substitute",
            "method": "machine",
            "level": 0
        },
        {
            "id": "curse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "sandstorm",
            "method": "machine",
            "level": 0
        },
        {
            "id": "charm",
            "method": "level_up",
            "level": 20
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
            "level": 34
        },
        {
            "id": "ancient-power",
            "method": "level_up",
            "level": 26
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
            "id": "poison-fang",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dragon-claw",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "dragon-claw",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dragon-dance",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-polish",
            "method": "egg",
            "level": 0
        },
        {
            "id": "rock-polish",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dark-pulse",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder-fang",
            "method": "egg",
            "level": 0
        },
        {
            "id": "ice-fang",
            "method": "egg",
            "level": 0
        },
        {
            "id": "fire-fang",
            "method": "egg",
            "level": 0
        },
        {
            "id": "draco-meteor",
            "method": "tutor",
            "level": 0
        },
        {
            "id": "stone-edge",
            "method": "machine",
            "level": 0
        },
        {
            "id": "stealth-rock",
            "method": "level_up",
            "level": 15
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bulldoze",
            "method": "machine",
            "level": 0
        },
        {
            "id": "dragon-tail",
            "method": "level_up",
            "level": 30
        },
        {
            "id": "dragon-tail",
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
export default tyrunt;
