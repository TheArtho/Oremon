const shieldon = {
    "id": "oremon:shieldon",
    "name": "oremon.shieldon.name",
    "description": "oremon.shieldon.description",
    "types": [
        "rock",
        "steel"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 42,
        "def": 118,
        "atk_spe": 42,
        "def_spe": 88,
        "spd": 30
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 30,
    "height": 0.5,
    "weight": 57,
    "baseExperience": 70,
    "growthRateId": "slow-then-very-fast",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:bastiodon",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "headbutt",
            "method": "egg",
            "level": 0
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
            "level": 15
        },
        {
            "id": "double-edge",
            "method": "egg",
            "level": 0
        },
        {
            "id": "roar",
            "method": "machine",
            "level": 0
        },
        {
            "id": "flamethrower",
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
            "id": "counter",
            "method": "egg",
            "level": 0
        },
        {
            "id": "thunderbolt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "thunder",
            "method": "machine",
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
            "id": "focus-energy",
            "method": "egg",
            "level": 0
        },
        {
            "id": "fire-blast",
            "method": "machine",
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
            "id": "curse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "protect",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "scary-face",
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
            "level": 33
        },
        {
            "id": "swagger",
            "method": "level_up",
            "level": 24
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
            "id": "ancient-power",
            "method": "level_up",
            "level": 28
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
            "method": "level_up",
            "level": 6
        },
        {
            "id": "taunt",
            "method": "machine",
            "level": 0
        },
        {
            "id": "rock-tomb",
            "method": "machine",
            "level": 0
        },
        {
            "id": "metal-sound",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "iron-defense",
            "method": "level_up",
            "level": 19
        },
        {
            "id": "rock-blast",
            "method": "egg",
            "level": 0
        },
        {
            "id": "metal-burst",
            "method": "level_up",
            "level": 37
        },
        {
            "id": "rock-polish",
            "method": "machine",
            "level": 0
        },
        {
            "id": "flash-cannon",
            "method": "machine",
            "level": 0
        },
        {
            "id": "iron-head",
            "method": "level_up",
            "level": 42
        },
        {
            "id": "stone-edge",
            "method": "machine",
            "level": 0
        },
        {
            "id": "stealth-rock",
            "method": "egg",
            "level": 0
        },
        {
            "id": "wide-guard",
            "method": "egg",
            "level": 0
        },
        {
            "id": "guard-split",
            "method": "egg",
            "level": 0
        },
        {
            "id": "smack-down",
            "method": "machine",
            "level": 0
        },
        {
            "id": "heavy-slam",
            "method": "level_up",
            "level": 46
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
            "id": "confide",
            "method": "machine",
            "level": 0
        }
    ]
};
export default shieldon;
