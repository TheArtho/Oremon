const trubbish = {
    "id": "oremon:trubbish",
    "name": "oremon.trubbish.name",
    "description": "oremon.trubbish.description",
    "types": [
        "poison"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 50,
        "def": 62,
        "atk_spe": 40,
        "def_spe": 62,
        "spd": 65
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
    "catchRate": 190,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 31,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:garbodor",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default trubbish;
