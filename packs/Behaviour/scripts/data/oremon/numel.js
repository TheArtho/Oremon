const numel = {
    "id": "oremon:numel",
    "name": "oremon.numel.name",
    "description": "oremon.numel.description",
    "types": [
        "fire",
        "ground"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 60,
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
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.7,
    "weight": 24,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Yellow",
    "model": {
        "default": "models/entity/numel.geo.json"
    },
    "textures": {
        "default": "textures/entity/numel.png"
    },
    "evolutions": [
        {
            "into": "oremon:camerupt",
            "method": "level-up",
            "conditions": {
                "minLevel": 33,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default numel;
