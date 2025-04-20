const skiddo = {
    "id": "oremon:skiddo",
    "name": "oremon.skiddo.name",
    "description": "oremon.skiddo.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 66,
        "atk": 65,
        "def": 48,
        "atk_spe": 62,
        "def_spe": 57,
        "spd": 52
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
    "catchRate": 200,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 31,
    "baseExperience": 70,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "model": {
        "default": "models/entity/skiddo.geo.json"
    },
    "textures": {
        "default": "textures/entity/skiddo.png"
    },
    "evolutions": [
        {
            "into": "oremon:gogoat",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default skiddo;
