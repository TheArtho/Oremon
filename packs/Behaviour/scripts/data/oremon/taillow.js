const taillow = {
    "id": "oremon:taillow",
    "name": "oremon.taillow.name",
    "description": "oremon.taillow.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 55,
        "def": 30,
        "atk_spe": 30,
        "def_spe": 30,
        "spd": 85
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
    "catchRate": 200,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 2.3,
    "baseExperience": 54,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:swellow",
            "method": "level-up",
            "conditions": {
                "minLevel": 22,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default taillow;
