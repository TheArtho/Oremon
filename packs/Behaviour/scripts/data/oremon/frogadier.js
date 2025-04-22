const frogadier = {
    "id": "oremon:frogadier",
    "name": "oremon.frogadier.name",
    "description": "oremon.frogadier.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 54,
        "atk": 63,
        "def": 52,
        "atk_spe": 83,
        "def_spe": 56,
        "spd": 97
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
        "water1"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 10.9,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:greninja",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default frogadier;
