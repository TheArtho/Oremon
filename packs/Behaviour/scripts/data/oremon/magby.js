const magby = {
    "id": "oremon:magby",
    "name": "oremon.magby.name",
    "description": "oremon.magby.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 75,
        "def": 37,
        "atk_spe": 70,
        "def_spe": 55,
        "spd": 83
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 2,
    "catchRate": 45,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 25,
    "height": 0.7,
    "weight": 21.4,
    "baseExperience": 73,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Red",
    "model": {
        "default": "models/entity/magby.geo.json"
    },
    "textures": {
        "default": "textures/entity/magby.png"
    },
    "evolutions": [
        {
            "into": "oremon:magmar",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default magby;
