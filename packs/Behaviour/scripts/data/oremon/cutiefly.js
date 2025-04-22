const cutiefly = {
    "id": "oremon:cutiefly",
    "name": "oremon.cutiefly.name",
    "description": "oremon.cutiefly.description",
    "types": [
        "bug",
        "fairy"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 45,
        "def": 40,
        "atk_spe": 55,
        "def_spe": 40,
        "spd": 84
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "bug",
        "fairy"
    ],
    "hatchCounter": 20,
    "height": 0.1,
    "weight": 0.2,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:ribombee",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cutiefly;
