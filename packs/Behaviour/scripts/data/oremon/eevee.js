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
    ]
};
export default eevee;
