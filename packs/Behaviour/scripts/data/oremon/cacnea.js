const cacnea = {
    "id": "oremon:cacnea",
    "name": "oremon.cacnea.name",
    "description": "oremon.cacnea.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 85,
        "def": 40,
        "atk_spe": 85,
        "def_spe": 40,
        "spd": 35
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "plant",
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 51.3,
    "baseExperience": 67,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:cacturne",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cacnea;
