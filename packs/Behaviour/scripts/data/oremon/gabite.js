const gabite = {
    "id": "oremon:gabite",
    "name": "oremon.gabite.name",
    "description": "oremon.gabite.description",
    "types": [
        "dragon",
        "ground"
    ],
    "baseStats": {
        "hp": 68,
        "atk": 90,
        "def": 65,
        "atk_spe": 50,
        "def_spe": 55,
        "spd": 82
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
    "catchRate": 45,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 40,
    "height": 1.4,
    "weight": 56,
    "baseExperience": 144,
    "growthRateId": "slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:garchomp",
            "method": "level-up",
            "conditions": {
                "minLevel": 48,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default gabite;
