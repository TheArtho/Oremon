const gligar = {
    "id": "oremon:gligar",
    "name": "oremon.gligar.name",
    "description": "oremon.gligar.description",
    "types": [
        "ground",
        "flying"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 75,
        "def": 105,
        "atk_spe": 35,
        "def_spe": 65,
        "spd": 85
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
    "catchRate": 60,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 64.8,
    "baseExperience": 86,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:gliscor",
            "method": "level-up",
            "conditions": {
                "heldItem": "item:304",
                "timeOfDay": "night",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default gligar;
