const shelmet = {
    "id": "oremon:shelmet",
    "name": "oremon.shelmet.name",
    "description": "oremon.shelmet.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 40,
        "def": 85,
        "atk_spe": 40,
        "def_spe": 65,
        "spd": 25
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
    "genderRate": 4,
    "catchRate": 200,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 7.7,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Red",
    "model": {
        "default": "models/entity/shelmet.geo.json"
    },
    "textures": {
        "default": "textures/entity/shelmet.png"
    },
    "evolutions": [
        {
            "into": "oremon:accelgor",
            "method": "trade",
            "conditions": {
                "tradeWith": "oremon:karrablast",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default shelmet;
