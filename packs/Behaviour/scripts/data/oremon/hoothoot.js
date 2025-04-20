const hoothoot = {
    "id": "oremon:hoothoot",
    "name": "oremon.hoothoot.name",
    "description": "oremon.hoothoot.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 30,
        "def": 30,
        "atk_spe": 36,
        "def_spe": 56,
        "spd": 50
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
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.7,
    "weight": 21.2,
    "baseExperience": 52,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Brown",
    "model": {
        "default": "models/entity/hoothoot.geo.json"
    },
    "textures": {
        "default": "textures/entity/hoothoot.png"
    },
    "evolutions": [
        {
            "into": "oremon:noctowl",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default hoothoot;
