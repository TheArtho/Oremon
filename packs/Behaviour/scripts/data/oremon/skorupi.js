const skorupi = {
    "id": "oremon:skorupi",
    "name": "oremon.skorupi.name",
    "description": "oremon.skorupi.description",
    "types": [
        "poison",
        "bug"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 50,
        "def": 90,
        "atk_spe": 30,
        "def_spe": 55,
        "spd": 65
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
    "catchRate": 120,
    "eggGroups": [
        "bug",
        "water3"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 12,
    "baseExperience": 66,
    "growthRateId": "slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Purple",
    "model": {
        "default": "models/entity/skorupi.geo.json"
    },
    "textures": {
        "default": "textures/entity/skorupi.png"
    },
    "evolutions": [
        {
            "into": "oremon:drapion",
            "method": "level-up",
            "conditions": {
                "minLevel": 40,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default skorupi;
