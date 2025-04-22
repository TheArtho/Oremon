const pidgey = {
    "id": "oremon:pidgey",
    "name": "oremon.pidgey.name",
    "description": "oremon.pidgey.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 45,
        "def": 40,
        "atk_spe": 35,
        "def_spe": 35,
        "spd": 56
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 1.8,
    "baseExperience": 50,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:pidgeotto",
            "method": "level-up",
            "conditions": {
                "minLevel": 18,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pidgey;
