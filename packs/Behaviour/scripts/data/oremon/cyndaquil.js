const cyndaquil = {
    "id": "oremon:cyndaquil",
    "name": "oremon.cyndaquil.name",
    "description": "oremon.cyndaquil.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 39,
        "atk": 52,
        "def": 43,
        "atk_spe": 60,
        "def_spe": 50,
        "spd": 65
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 7.9,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Yellow",
    "model": {
        "default": "models/entity/cyndaquil.geo.json"
    },
    "textures": {
        "default": "textures/entity/cyndaquil.png"
    },
    "evolutions": [
        {
            "into": "oremon:quilava",
            "method": "level-up",
            "conditions": {
                "minLevel": 14,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cyndaquil;
