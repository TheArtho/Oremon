const paras = {
    "id": "oremon:paras",
    "name": "oremon.paras.name",
    "description": "oremon.paras.description",
    "types": [
        "bug",
        "grass"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 70,
        "def": 55,
        "atk_spe": 45,
        "def_spe": 55,
        "spd": 25
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
        "bug",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 5.4,
    "baseExperience": 57,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:parasect",
            "method": "level-up",
            "conditions": {
                "minLevel": 24,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default paras;
