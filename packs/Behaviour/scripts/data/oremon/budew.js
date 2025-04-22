const budew = {
    "id": "oremon:budew",
    "name": "oremon.budew.name",
    "description": "oremon.budew.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 30,
        "def": 35,
        "atk_spe": 50,
        "def_spe": 70,
        "spd": 55
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
    "catchRate": 255,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 20,
    "height": 0.2,
    "weight": 1.2,
    "baseExperience": 56,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:roselia",
            "method": "level-up",
            "conditions": {
                "timeOfDay": "day",
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default budew;
