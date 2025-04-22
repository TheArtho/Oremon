const vibrava = {
    "id": "oremon:vibrava",
    "name": "oremon.vibrava.name",
    "description": "oremon.vibrava.description",
    "types": [
        "ground",
        "dragon"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 70,
        "def": 50,
        "atk_spe": 50,
        "def_spe": 50,
        "spd": 70
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 15.3,
    "baseExperience": 119,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "bug wings",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:flygon",
            "method": "level-up",
            "conditions": {
                "minLevel": 45,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default vibrava;
