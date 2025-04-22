const phantump = {
    "id": "oremon:phantump",
    "name": "oremon.phantump.name",
    "description": "oremon.phantump.description",
    "types": [
        "ghost",
        "grass"
    ],
    "baseStats": {
        "hp": 43,
        "atk": 70,
        "def": 48,
        "atk_spe": 50,
        "def_spe": 60,
        "spd": 38
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
        "plant",
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 7,
    "baseExperience": 62,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:trevenant",
            "method": "trade",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default phantump;
