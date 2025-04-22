const dartrix = {
    "id": "oremon:dartrix",
    "name": "oremon.dartrix.name",
    "description": "oremon.dartrix.description",
    "types": [
        "grass",
        "flying"
    ],
    "baseStats": {
        "hp": 78,
        "atk": 75,
        "def": 75,
        "atk_spe": 70,
        "def_spe": 70,
        "spd": 52
    },
    "evYield": {
        "hp": 2,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.7,
    "weight": 16,
    "baseExperience": 147,
    "growthRateId": "medium-slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:decidueye",
            "method": "level-up",
            "conditions": {
                "minLevel": 34,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default dartrix;
