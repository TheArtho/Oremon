const machop = {
    "id": "oremon:machop",
    "name": "oremon.machop.name",
    "description": "oremon.machop.description",
    "types": [
        "fighting"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 80,
        "def": 50,
        "atk_spe": 35,
        "def_spe": 35,
        "spd": 35
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
    "genderRate": 2,
    "catchRate": 180,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 19.5,
    "baseExperience": 61,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Gray",
    "model": {
        "default": "models/entity/machop.geo.json"
    },
    "textures": {
        "default": "textures/entity/machop.png"
    },
    "evolutions": [
        {
            "into": "oremon:machoke",
            "method": "level-up",
            "conditions": {
                "minLevel": 28,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default machop;
