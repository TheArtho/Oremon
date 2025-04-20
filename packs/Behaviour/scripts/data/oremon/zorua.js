const zorua = {
    "id": "oremon:zorua",
    "name": "oremon.zorua.name",
    "description": "oremon.zorua.description",
    "types": [
        "dark"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 65,
        "def": 40,
        "atk_spe": 80,
        "def_spe": 40,
        "spd": 65
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
    "genderRate": 1,
    "catchRate": 75,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 25,
    "height": 0.7,
    "weight": 12.5,
    "baseExperience": 66,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "model": {
        "default": "models/entity/zorua.geo.json"
    },
    "textures": {
        "default": "textures/entity/zorua.png"
    },
    "evolutions": [
        {
            "into": "oremon:zoroark",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default zorua;
