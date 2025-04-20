const trumbeak = {
    "id": "oremon:trumbeak",
    "name": "oremon.trumbeak.name",
    "description": "oremon.trumbeak.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 85,
        "def": 50,
        "atk_spe": 40,
        "def_spe": 50,
        "spd": 75
    },
    "evYield": {
        "hp": 0,
        "atk": 2,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.6,
    "weight": 14.8,
    "baseExperience": 124,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Black",
    "model": {
        "default": "models/entity/trumbeak.geo.json"
    },
    "textures": {
        "default": "textures/entity/trumbeak.png"
    },
    "evolutions": [
        {
            "into": "oremon:toucannon",
            "method": "level-up",
            "conditions": {
                "minLevel": 28,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default trumbeak;
