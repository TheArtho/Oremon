const amaura = {
    "id": "oremon:amaura",
    "name": "oremon.amaura.name",
    "description": "oremon.amaura.description",
    "types": [
        "rock",
        "ice"
    ],
    "baseStats": {
        "hp": 77,
        "atk": 59,
        "def": 50,
        "atk_spe": 67,
        "def_spe": 63,
        "spd": 46
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 30,
    "height": 1.3,
    "weight": 25.2,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:aurorus",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "timeOfDay": "night",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default amaura;
