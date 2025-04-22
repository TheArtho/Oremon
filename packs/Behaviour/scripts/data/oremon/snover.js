const snover = {
    "id": "oremon:snover",
    "name": "oremon.snover.name",
    "description": "oremon.snover.description",
    "types": [
        "grass",
        "ice"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 62,
        "def": 50,
        "atk_spe": 62,
        "def_spe": 60,
        "spd": 40
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
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "monster",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 50.5,
    "baseExperience": 67,
    "growthRateId": "slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "upright",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:abomasnow",
            "method": "level-up",
            "conditions": {
                "minLevel": 40,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default snover;
