const rowlet = {
    "id": "oremon:rowlet",
    "name": "oremon.rowlet.name",
    "description": "oremon.rowlet.description",
    "types": [
        "grass",
        "flying"
    ],
    "baseStats": {
        "hp": 68,
        "atk": 55,
        "def": 55,
        "atk_spe": 50,
        "def_spe": 50,
        "spd": 42
    },
    "evYield": {
        "hp": 1,
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
    "height": 0.3,
    "weight": 1.5,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:dartrix",
            "method": "level-up",
            "conditions": {
                "minLevel": 17,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default rowlet;
