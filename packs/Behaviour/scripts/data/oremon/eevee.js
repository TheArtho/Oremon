const eevee = {
    "id": "oremon:eevee",
    "name": "oremon.eevee.name",
    "description": "oremon.eevee.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 55,
        "def": 50,
        "atk_spe": 45,
        "def_spe": 65,
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 35,
    "height": 0.3,
    "weight": 6.5,
    "baseExperience": 65,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:vaporeon",
            "method": "use-item",
            "conditions": {
                "item": "item:84",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:jolteon",
            "method": "use-item",
            "conditions": {
                "item": "item:83",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:flareon",
            "method": "use-item",
            "conditions": {
                "item": "item:82",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:espeon",
            "method": "level-up",
            "conditions": {
                "timeOfDay": "day",
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:umbreon",
            "method": "level-up",
            "conditions": {
                "timeOfDay": "night",
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:leafeon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:glaceon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:leafeon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:glaceon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:sylveon",
            "method": "level-up",
            "conditions": {
                "knownType": "fairy",
                "minAffection": 2,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:leafeon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:glaceon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:leafeon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:glaceon",
            "method": "level-up",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "sand-attack",
            "method": "level_up",
            "level": 5
        },
        {
            "id": "tackle",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "take-down",
            "method": "level_up",
            "level": 25
        },
        {
            "id": "double-edge",
            "method": "level_up",
            "level": 37
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
            "id": "growl",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "toxic",
            "method": "machine",
            "level": 0
        },
        {
            "id": "quick-attack",
            "method": "level_up",
            "level": 13
        },
        {
            "id": "double-team",
            "method": "machine",
            "level": 0
        },
        {
            "id": "swift",
            "method": "level_up",
            "level": 17
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
            "id": "curse",
            "method": "egg",
            "level": 0
        },
        {
            "id": "flail",
            "method": "egg",
            "level": 0
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "detect",
            "method": "egg",
            "level": 0
        },
        {
            "id": "endure",
            "method": "egg",
            "level": 0
        },
        {
            "id": "charm",
            "method": "level_up",
            "level": 29
        },
        {
            "id": "charm",
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
            "method": "level_up",
            "level": 33
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
            "id": "shadow-ball",
            "method": "machine",
            "level": 0
        },
        {
            "id": "facade",
            "method": "machine",
            "level": 0
        },
        {
            "id": "helping-hand",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "wish",
            "method": "egg",
            "level": 0
        },
        {
            "id": "yawn",
            "method": "egg",
            "level": 0
        },
        {
            "id": "refresh",
            "method": "level_up",
            "level": 20
        },
        {
            "id": "fake-tears",
            "method": "egg",
            "level": 0
        },
        {
            "id": "tickle",
            "method": "egg",
            "level": 0
        },
        {
            "id": "covet",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "covet",
            "method": "egg",
            "level": 0
        },
        {
            "id": "natural-gift",
            "method": "egg",
            "level": 0
        },
        {
            "id": "trump-card",
            "method": "level_up",
            "level": 45
        },
        {
            "id": "last-resort",
            "method": "level_up",
            "level": 41
        },
        {
            "id": "captivate",
            "method": "egg",
            "level": 0
        },
        {
            "id": "synchronoise",
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
            "id": "stored-power",
            "method": "egg",
            "level": 0
        },
        {
            "id": "work-up",
            "method": "machine",
            "level": 0
        },
        {
            "id": "confide",
            "method": "machine",
            "level": 0
        },
        {
            "id": "baby-doll-eyes",
            "method": "level_up",
            "level": 9
        }
    ]
};
export default eevee;
