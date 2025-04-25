const feebas = {
    "id": "oremon:feebas",
    "name": "oremon.feebas.name",
    "description": "oremon.feebas.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 20,
        "atk": 15,
        "def": 20,
        "atk_spe": 10,
        "def_spe": 55,
        "spd": 80
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "water1",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 7.4,
    "baseExperience": 40,
    "growthRateId": "slow-then-very-fast",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:milotic",
            "method": "level-up",
            "conditions": {
                "minBeauty": 171,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:milotic",
            "method": "trade",
            "conditions": {
                "heldItem": "item:580",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:milotic",
            "method": "level-up",
            "conditions": {
                "minBeauty": 170,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "tackle",
            "method": "level_up",
            "level": 15
        },
        {
            "id": "mist",
            "method": "egg",
            "level": 0
        },
        {
            "id": "surf",
            "method": "machine",
            "level": 0
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
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hypnosis",
            "method": "egg",
            "level": 0
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confuse-ray",
            "method": "egg",
            "level": 0
        },
        {
            "id": "light-screen",
            "method": "machine",
            "level": 0
        },
        {
            "id": "haze",
            "method": "egg",
            "level": 0
        },
        {
            "id": "waterfall",
            "method": "machine",
            "level": 0
        },
        {
            "id": "splash",
            "method": "level_up",
            "level": 1
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
            "id": "flail",
            "method": "level_up",
            "level": 30
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
            "id": "dragon-breath",
            "method": "egg",
            "level": 0
        },
        {
            "id": "iron-tail",
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
            "id": "mirror-coat",
            "method": "egg",
            "level": 0
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
            "id": "mud-sport",
            "method": "egg",
            "level": 0
        },
        {
            "id": "tickle",
            "method": "egg",
            "level": 0
        },
        {
            "id": "brine",
            "method": "egg",
            "level": 0
        },
        {
            "id": "dragon-pulse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "captivate",
            "method": "egg",
            "level": 0
        },
        {
            "id": "round",
            "method": "machine",
            "level": 0
        },
        {
            "id": "scald",
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
export default feebas;
