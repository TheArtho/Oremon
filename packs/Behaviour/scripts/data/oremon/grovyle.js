const grovyle = {
    "id": "oremon:grovyle",
    "name": "oremon.grovyle.name",
    "description": "oremon.grovyle.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 65,
        "def": 45,
        "atk_spe": 85,
        "def_spe": 65,
        "spd": 95
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 21.6,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:sceptile",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default grovyle;
