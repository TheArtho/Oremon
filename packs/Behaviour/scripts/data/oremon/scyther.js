const scyther = {
    "id": "oremon:scyther",
    "name": "oremon.scyther.name",
    "description": "oremon.scyther.description",
    "types": [
        "bug",
        "flying"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 110,
        "def": 80,
        "atk_spe": 55,
        "def_spe": 80,
        "spd": 105
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
    "catchRate": 45,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 25,
    "height": 1.5,
    "weight": 56,
    "baseExperience": 100,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "bug wings",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:scizor",
            "method": "trade",
            "conditions": {
                "heldItem": "item:210",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default scyther;
