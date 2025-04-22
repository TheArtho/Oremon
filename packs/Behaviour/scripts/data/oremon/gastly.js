const gastly = {
    "id": "oremon:gastly",
    "name": "oremon.gastly.name",
    "description": "oremon.gastly.description",
    "types": [
        "ghost",
        "poison"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 35,
        "def": 30,
        "atk_spe": 100,
        "def_spe": 35,
        "spd": 80
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 1.3,
    "weight": 0.1,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:haunter",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default gastly;
