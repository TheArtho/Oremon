const mantyke = {
    "id": "oremon:mantyke",
    "name": "oremon.mantyke.name",
    "description": "oremon.mantyke.description",
    "types": [
        "water",
        "flying"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 20,
        "def": 50,
        "atk_spe": 60,
        "def_spe": 120,
        "spd": 50
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
    "catchRate": 25,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 25,
    "height": 1,
    "weight": 65,
    "baseExperience": 69,
    "growthRateId": "slow",
    "generationId": 4,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:mantine",
            "method": "level-up",
            "conditions": {
                "partySpecies": "oremon:remoraid",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "wing-attack",
            "method": "level_up",
            "level": 14
        },
        {
            "id": "slam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "headbutt",
            "method": "level_up",
            "level": 16
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "take-down",
            "method": "level_up",
            "level": 27
        },
        {
            "id": "supersonic",
            "method": "level_up",
            "level": 3
        },
        {
            "id": "hydro-pump",
            "method": "level_up",
            "level": 49
        },
        {
            "id": "hydro-pump",
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
            "id": "bubble-beam",
            "method": "level_up",
            "level": 7
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
            "method": "level_up",
            "level": 32
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confuse-ray",
            "method": "level_up",
            "level": 11
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
            "id": "amnesia",
            "method": "egg",
            "level": 0
        },
        {
            "id": "bubble",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "splash",
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
            "id": "hidden-power",
            "method": "machine",
            "level": 0
        },
        {
            "id": "twister",
            "method": "egg",
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
            "id": "signal-beam",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aerial-ace",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bounce",
            "method": "level_up",
            "level": 46
        },
        {
            "id": "water-sport",
            "method": "egg",
            "level": 0
        },
        {
            "id": "water-pulse",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "tailwind",
            "method": "egg",
            "level": 0
        },
        {
            "id": "aqua-ring",
            "method": "level_up",
            "level": 39
        },
        {
            "id": "air-slash",
            "method": "level_up",
            "level": 36
        },
        {
            "id": "wide-guard",
            "method": "level_up",
            "level": 23
        },
        {
            "id": "wide-guard",
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
export default mantyke;
