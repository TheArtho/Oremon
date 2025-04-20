const mareep = {
    "id": "oremon:mareep",
    "name": "oremon.mareep.name",
    "description": "oremon.mareep.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 40,
        "def": 40,
        "atk_spe": 65,
        "def_spe": 45,
        "spd": 35
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 235,
    "eggGroups": [
        "monster",
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 7.8,
    "baseExperience": 56,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "White",
    "model": {
        "default": "models/entity/mareep.geo.json"
    },
    "textures": {
        "default": "textures/entity/mareep.png"
    },
    "evolutions": [
        {
            "into": "oremon:flaaffy",
            "method": "level-up",
            "conditions": {
                "minLevel": 15,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default mareep;
