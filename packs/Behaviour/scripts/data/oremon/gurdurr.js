const gurdurr = {
    "id": "oremon:gurdurr",
    "name": "oremon.gurdurr.name",
    "description": "oremon.gurdurr.description",
    "types": [
        "fighting"
    ],
    "baseStats": {
        "hp": 85,
        "atk": 105,
        "def": 85,
        "atk_spe": 40,
        "def_spe": 50,
        "spd": 40
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
    "genderRate": 2,
    "catchRate": 90,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 1.2,
    "weight": 40,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Gray",
    "model": {
        "default": "models/entity/gurdurr.geo.json"
    },
    "textures": {
        "default": "textures/entity/gurdurr.png"
    },
    "evolutions": [
        {
            "into": "oremon:conkeldurr",
            "method": "trade",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default gurdurr;
