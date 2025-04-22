const litleo = {
    "id": "oremon:litleo",
    "name": "oremon.litleo.name",
    "description": "oremon.litleo.description",
    "types": [
        "fire",
        "normal"
    ],
    "baseStats": {
        "hp": 62,
        "atk": 50,
        "def": 58,
        "atk_spe": 73,
        "def_spe": 54,
        "spd": 72
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
    "genderRate": 7,
    "catchRate": 220,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 13.5,
    "baseExperience": 74,
    "growthRateId": "medium-slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:pyroar",
            "method": "level-up",
            "conditions": {
                "minLevel": 35,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default litleo;
