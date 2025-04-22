const treecko = {
    "id": "oremon:treecko",
    "name": "oremon.treecko.name",
    "description": "oremon.treecko.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 45,
        "def": 35,
        "atk_spe": 65,
        "def_spe": 55,
        "spd": 70
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 5,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:grovyle",
            "method": "level-up",
            "conditions": {
                "minLevel": 16,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default treecko;
