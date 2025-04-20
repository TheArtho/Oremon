const bonsly = {
    "id": "oremon:bonsly",
    "name": "oremon.bonsly.name",
    "description": "oremon.bonsly.description",
    "types": [
        "rock"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 80,
        "def": 95,
        "atk_spe": 10,
        "def_spe": 45,
        "spd": 10
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
    "catchRate": 255,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 15,
    "baseExperience": 58,
    "growthRateId": "medium",
    "generationId": 4,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Brown",
    "model": {
        "default": "models/entity/bonsly.geo.json"
    },
    "textures": {
        "default": "textures/entity/bonsly.png"
    },
    "evolutions": [
        {
            "into": "oremon:sudowoodo",
            "method": "level-up",
            "conditions": {
                "knownMove": "move:102",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default bonsly;
