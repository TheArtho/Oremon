const ralts = {
    "id": "oremon:ralts",
    "name": "oremon.ralts.name",
    "description": "oremon.ralts.description",
    "types": [
        "psychic",
        "fairy"
    ],
    "baseStats": {
        "hp": 28,
        "atk": 25,
        "def": 25,
        "atk_spe": 45,
        "def_spe": 35,
        "spd": 40
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
    "catchRate": 235,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 6.6,
    "baseExperience": 40,
    "growthRateId": "slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:kirlia",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default ralts;
