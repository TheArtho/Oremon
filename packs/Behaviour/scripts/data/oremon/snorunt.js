const snorunt = {
    "id": "oremon:snorunt",
    "name": "oremon.snorunt.name",
    "description": "oremon.snorunt.description",
    "types": [
        "ice"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 50,
        "def": 50,
        "atk_spe": 50,
        "def_spe": 50,
        "spd": 50
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
    "catchRate": 190,
    "eggGroups": [
        "fairy",
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.7,
    "weight": 16.8,
    "baseExperience": 60,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:glalie",
            "method": "level-up",
            "conditions": {
                "minLevel": 42,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:froslass",
            "method": "use-item",
            "conditions": {
                "item": "item:109",
                "gender": "female",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "headbutt",
            "method": "level_up",
            "level": 28
        },
        {
            "id": "leer",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "bite",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "disable",
            "method": "egg",
            "level": 0
        },
        {
            "id": "ice-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "blizzard",
            "method": "level_up",
            "level": 46
        },
        {
            "id": "blizzard",
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
            "method": "level_up",
            "level": 5
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "light-screen",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bide",
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
            "id": "powder-snow",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "protect",
            "method": "level_up",
            "level": 32
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "spikes",
            "method": "egg",
            "level": 0
        },
        {
            "id": "icy-wind",
            "method": "level_up",
            "level": 14
        },
        {
            "id": "rollout",
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
            "id": "crunch",
            "method": "level_up",
            "level": 41
        },
        {
            "id": "shadow-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hail",
            "method": "level_up",
            "level": 50
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
            "id": "weather-ball",
            "method": "egg",
            "level": 0
        },
        {
            "id": "fake-tears",
            "method": "egg",
            "level": 0
        },
        {
            "id": "block",
            "method": "egg",
            "level": 0
        },
        {
            "id": "switcheroo",
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
            "level": 10
        },
        {
            "id": "ice-fang",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hex",
            "method": "egg",
            "level": 0
        },
        {
            "id": "frost-breath",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "frost-breath",
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
export default snorunt;
