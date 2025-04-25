const venonat = {
    "id": "oremon:venonat",
    "name": "oremon.venonat.name",
    "description": "oremon.venonat.description",
    "types": [
        "bug",
        "poison"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 55,
        "def": 50,
        "atk_spe": 40,
        "def_spe": 55,
        "spd": 45
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
    "catchRate": 190,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 30,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:venomoth",
            "method": "level-up",
            "conditions": {
                "minLevel": 31,
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
            "id": "supersonic",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "disable",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "psybeam",
            "method": "level_up",
            "level": 17
        },
        {
            "id": "solar-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "poison-powder",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "stun-spore",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "sleep-powder",
            "method": "level_up",
            "level": 29
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confusion",
            "method": "level_up",
            "level": 11
        },
        {
            "id": "psychic",
            "method": "level_up",
            "level": 47
        },
        {
            "id": "psychic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "agility",
            "method": "egg",
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
            "id": "foresight",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "giga-drain",
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
            "id": "baton-pass",
            "method": "egg",
            "level": 0
        },
        {
            "id": "morning-sun",
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
            "id": "skill-swap",
            "method": "egg",
            "level": 0
        },
        {
            "id": "secret-power",
            "method": "egg",
            "level": 0
        },
        {
            "id": "poison-fang",
            "method": "level_up",
            "level": 41
        },
        {
            "id": "signal-beam",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "signal-beam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "toxic-spikes",
            "method": "egg",
            "level": 0
        },
        {
            "id": "zen-headbutt",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "bug-bite",
            "method": "egg",
            "level": 0
        },
        {
            "id": "venoshock",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rage-powder",
            "method": "egg",
            "level": 0
        },
        {
            "id": "round",
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
export default venonat;
