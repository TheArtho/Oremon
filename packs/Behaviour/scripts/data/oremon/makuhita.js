const makuhita = {
    "id": "oremon:makuhita",
    "name": "oremon.makuhita.name",
    "description": "oremon.makuhita.description",
    "types": [
        "fighting"
    ],
    "baseStats": {
        "hp": 72,
        "atk": 60,
        "def": 30,
        "atk_spe": 20,
        "def_spe": 30,
        "spd": 25
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
    "genderRate": 2,
    "catchRate": 180,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 86.4,
    "baseExperience": 47,
    "growthRateId": "fast-then-very-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:hariyama",
            "method": "level-up",
            "conditions": {
                "minLevel": 24,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default makuhita;
