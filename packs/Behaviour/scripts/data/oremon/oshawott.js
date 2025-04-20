const oshawott = {
    "id": "oremon:oshawott",
    "name": "oremon.oshawott.name",
    "description": "oremon.oshawott.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 55,
        "def": 45,
        "atk_spe": 63,
        "def_spe": 45,
        "spd": 45
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
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 5.9,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "model": {
        "default": "models/entity/oshawott.geo.json"
    },
    "textures": {
        "default": "textures/entity/oshawott.png"
    },
    "evolutions": [
        {
            "into": "oremon:dewott",
            "method": "level-up",
            "conditions": {
                "minLevel": 17,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default oshawott;
