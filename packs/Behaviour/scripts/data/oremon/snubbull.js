const snubbull = {
    "id": "oremon:snubbull",
    "name": "oremon.snubbull.name",
    "description": "oremon.snubbull.description",
    "types": [
        "fairy"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 80,
        "def": 50,
        "atk_spe": 40,
        "def_spe": 40,
        "spd": 30
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
    "genderRate": 6,
    "catchRate": 190,
    "eggGroups": [
        "ground",
        "fairy"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 7.8,
    "baseExperience": 60,
    "growthRateId": "fast",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Pink",
    "evolutions": [
        {
            "into": "oremon:granbull",
            "method": "level-up",
            "conditions": {
                "minLevel": 23,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default snubbull;
