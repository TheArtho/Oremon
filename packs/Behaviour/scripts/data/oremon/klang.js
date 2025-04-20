const klang = {
    "id": "oremon:klang",
    "name": "oremon.klang.name",
    "description": "oremon.klang.description",
    "types": [
        "steel"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 80,
        "def": 95,
        "atk_spe": 70,
        "def_spe": 85,
        "spd": 50
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 2,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": -1,
    "catchRate": 60,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 51,
    "baseExperience": 154,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "heads",
    "color": "Gray",
    "model": {
        "default": "models/entity/klang.geo.json"
    },
    "textures": {
        "default": "textures/entity/klang.png"
    },
    "evolutions": [
        {
            "into": "oremon:klinklang",
            "method": "level-up",
            "conditions": {
                "minLevel": 49,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default klang;
