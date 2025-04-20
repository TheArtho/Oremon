const darumaka = {
    "id": "oremon:darumaka",
    "name": "oremon.darumaka.name",
    "description": "oremon.darumaka.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 90,
        "def": 45,
        "atk_spe": 15,
        "def_spe": 45,
        "spd": 50
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
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
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 37.5,
    "baseExperience": 63,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Red",
    "model": {
        "default": "models/entity/darumaka.geo.json"
    },
    "textures": {
        "default": "textures/entity/darumaka.png"
    },
    "evolutions": [
        {
            "into": "oremon:darmanitan",
            "method": "level-up",
            "conditions": {
                "minLevel": 35,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default darumaka;
