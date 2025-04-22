const krokorok = {
    "id": "oremon:krokorok",
    "name": "oremon.krokorok.name",
    "description": "oremon.krokorok.description",
    "types": [
        "ground",
        "dark"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 82,
        "def": 45,
        "atk_spe": 45,
        "def_spe": 45,
        "spd": 74
    },
    "evYield": {
        "hp": 0,
        "atk": 2,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 90,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 33.4,
    "baseExperience": 123,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:krookodile",
            "method": "level-up",
            "conditions": {
                "minLevel": 40,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default krokorok;
