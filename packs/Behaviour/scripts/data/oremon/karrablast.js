const karrablast = {
    "id": "oremon:karrablast",
    "name": "oremon.karrablast.name",
    "description": "oremon.karrablast.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 75,
        "def": 45,
        "atk_spe": 40,
        "def_spe": 45,
        "spd": 60
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
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
    "height": 0.5,
    "weight": 5.9,
    "baseExperience": 63,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "model": {
        "default": "models/entity/karrablast.geo.json"
    },
    "textures": {
        "default": "textures/entity/karrablast.png"
    },
    "evolutions": [
        {
            "into": "oremon:escavalier",
            "method": "trade",
            "conditions": {
                "tradeWith": "oremon:shelmet",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default karrablast;
