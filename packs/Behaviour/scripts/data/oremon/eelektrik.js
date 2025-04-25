const eelektrik = {
    "id": "oremon:eelektrik",
    "name": "oremon.eelektrik.name",
    "description": "oremon.eelektrik.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 85,
        "def": 70,
        "atk_spe": 75,
        "def_spe": 70,
        "spd": 40
    },
    "evYield": {
        "hp": 0,
        "atk": 2,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 60,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 1.2,
    "weight": 22,
    "baseExperience": 142,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:eelektross",
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
            "id": "bind",
            "method": "level_up",
            "level": 9
        },
        {
            "id": "headbutt",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "thrash",
            "method": "level_up",
            "level": 74
        },
        {
            "id": "acid",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "thunderbolt",
            "method": "level_up",
            "level": 44
        },
        {
            "id": "thunderbolt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder-wave",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "thunder-wave",
            "method": "machine",
            "level": 0
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
            "id": "zap-cannon",
            "method": "level_up",
            "level": 69
        },
        {
            "id": "swagger",
            "method": "machine",
            "level": 0
        },
        {
            "id": "spark",
            "method": "level_up",
            "level": 1
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
            "id": "crunch",
            "method": "level_up",
            "level": 0
        },
        {
            "id": "crunch",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "u-turn",
            "method": "machine",
            "level": 0
        },
        {
            "id": "gastro-acid",
            "method": "level_up",
            "level": 64
        },
        {
            "id": "flash-cannon",
            "method": "machine",
            "level": 0
        },
        {
            "id": "discharge",
            "method": "level_up",
            "level": 29
        },
        {
            "id": "charge-beam",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "charge-beam",
            "method": "machine",
            "level": 0
        },
        {
            "id": "coil",
            "method": "level_up",
            "level": 54
        },
        {
            "id": "acid-spray",
            "method": "level_up",
            "level": 49
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
            "id": "volt-switch",
            "method": "machine",
            "level": 0
        },
        {
            "id": "wild-charge",
            "method": "level_up",
            "level": 59
        },
        {
            "id": "wild-charge",
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
export default eelektrik;
