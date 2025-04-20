const swinub = {
    "id": "oremon:swinub",
    "name": "oremon.swinub.name",
    "description": "oremon.swinub.description",
    "types": [
        "ice",
        "ground"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 50,
        "def": 40,
        "atk_spe": 30,
        "def_spe": 30,
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
    "catchRate": 225,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 6.5,
    "baseExperience": 50,
    "growthRateId": "slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "model": {
        "default": "models/entity/swinub.geo.json"
    },
    "textures": {
        "default": "textures/entity/swinub.png"
    },
    "evolutions": [
        {
            "into": "oremon:piloswine",
            "method": "level-up",
            "conditions": {
                "minLevel": 33,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default swinub;
