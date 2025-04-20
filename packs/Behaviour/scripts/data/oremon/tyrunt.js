const tyrunt = {
    "id": "oremon:tyrunt",
    "name": "oremon.tyrunt.name",
    "description": "oremon.tyrunt.description",
    "types": [
        "rock",
        "dragon"
    ],
    "baseStats": {
        "hp": 58,
        "atk": 89,
        "def": 77,
        "atk_spe": 45,
        "def_spe": 45,
        "spd": 48
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 30,
    "height": 0.8,
    "weight": 26,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "model": {
        "default": "models/entity/tyrunt.geo.json"
    },
    "textures": {
        "default": "textures/entity/tyrunt.png"
    },
    "evolutions": [
        {
            "into": "oremon:tyrantrum",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "timeOfDay": "day",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default tyrunt;
