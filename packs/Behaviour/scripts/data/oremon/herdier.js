const herdier = {
    "id": "oremon:herdier",
    "name": "oremon.herdier.name",
    "description": "oremon.herdier.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 80,
        "def": 65,
        "atk_spe": 35,
        "def_spe": 65,
        "spd": 60
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
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.9,
    "weight": 14.7,
    "baseExperience": 130,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "model": {
        "default": "models/entity/herdier.geo.json"
    },
    "textures": {
        "default": "textures/entity/herdier.png"
    },
    "evolutions": [
        {
            "into": "oremon:stoutland",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default herdier;
