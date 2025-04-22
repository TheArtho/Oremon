const timburr = {
    "id": "oremon:timburr",
    "name": "oremon.timburr.name",
    "description": "oremon.timburr.description",
    "types": [
        "fighting"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 80,
        "def": 55,
        "atk_spe": 25,
        "def_spe": 35,
        "spd": 35
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
    "genderRate": 2,
    "catchRate": 180,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 12.5,
    "baseExperience": 61,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:gurdurr",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default timburr;
