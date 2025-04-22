const doduo = {
    "id": "oremon:doduo",
    "name": "oremon.doduo.name",
    "description": "oremon.doduo.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 85,
        "def": 45,
        "atk_spe": 35,
        "def_spe": 35,
        "spd": 75
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 20,
    "height": 1.4,
    "weight": 39.2,
    "baseExperience": 62,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:dodrio",
            "method": "level-up",
            "conditions": {
                "minLevel": 31,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default doduo;
