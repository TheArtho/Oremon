const onix = {
    "id": "oremon:onix",
    "name": "oremon.onix.name",
    "description": "oremon.onix.description",
    "types": [
        "rock",
        "ground"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 45,
        "def": 160,
        "atk_spe": 30,
        "def_spe": 45,
        "spd": 70
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
    "catchRate": 45,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 25,
    "height": 8.8,
    "weight": 210,
    "baseExperience": 77,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "squiggle",
    "color": "Gray",
    "model": {
        "default": "models/entity/onix.geo.json"
    },
    "textures": {
        "default": "textures/entity/onix.png"
    },
    "evolutions": [
        {
            "into": "oremon:steelix",
            "method": "trade",
            "conditions": {
                "heldItem": "item:210",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default onix;
