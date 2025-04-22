const prinplup = {
    "id": "oremon:prinplup",
    "name": "oremon.prinplup.name",
    "description": "oremon.prinplup.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 64,
        "atk": 66,
        "def": 68,
        "atk_spe": 81,
        "def_spe": 76,
        "spd": 50
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "water1",
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 23,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:empoleon",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default prinplup;
