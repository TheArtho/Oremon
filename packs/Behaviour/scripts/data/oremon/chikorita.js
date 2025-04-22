const chikorita = {
    "id": "oremon:chikorita",
    "name": "oremon.chikorita.name",
    "description": "oremon.chikorita.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 49,
        "def": 65,
        "atk_spe": 49,
        "def_spe": 65,
        "spd": 45
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 6.4,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:bayleef",
            "method": "level-up",
            "conditions": {
                "minLevel": 16,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default chikorita;
