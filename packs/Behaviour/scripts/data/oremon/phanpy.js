const phanpy = {
    "id": "oremon:phanpy",
    "name": "oremon.phanpy.name",
    "description": "oremon.phanpy.description",
    "types": [
        "ground"
    ],
    "baseStats": {
        "hp": 90,
        "atk": 60,
        "def": 60,
        "atk_spe": 40,
        "def_spe": 40,
        "spd": 40
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 33.5,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:donphan",
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
            "id": "slam",
            "method": "level_up",
            "level": 24
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "body-slam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "take-down",
            "method": "level_up",
            "level": 28
        },
        {
            "id": "double-edge",
            "method": "level_up",
            "level": 42
        },
        {
            "id": "growl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "roar",
            "method": "machine",
            "level": 0
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
            "id": "fissure",
            "method": "egg",
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
            "id": "defense-curl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "focus-energy",
            "method": "egg",
            "level": 0
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
            "id": "snore",
            "method": "egg",
            "level": 0
        },
        {
            "id": "flail",
            "method": "level_up",
            "level": 6
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
            "id": "sandstorm",
            "method": "machine",
            "level": 0
        },
        {
            "id": "endure",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "charm",
            "method": "level_up",
            "level": 33
        },
        {
            "id": "rollout",
            "method": "level_up",
            "level": 10
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
            "id": "ancient-power",
            "method": "egg",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "endeavor",
            "method": "egg",
            "level": 0
        },
        {
            "id": "odor-sleuth",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "natural-gift",
            "method": "level_up",
            "level": 15
        },
        {
            "id": "last-resort",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "ice-shard",
            "method": "egg",
            "level": 0
        },
        {
            "id": "head-smash",
            "method": "egg",
            "level": 0
        },
        {
            "id": "heavy-slam",
            "method": "egg",
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
            "id": "bulldoze",
            "method": "machine",
            "level": 0
        },
        {
            "id": "play-rough",
            "method": "egg",
            "level": 0
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "high-horsepower",
            "method": "egg",
            "level": 0
        }
    ]
};
export default phanpy;
