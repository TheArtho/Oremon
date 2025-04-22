const litwick = {
    "id": "oremon:litwick",
    "name": "oremon.litwick.name",
    "description": "oremon.litwick.description",
    "types": [
        "ghost",
        "fire"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 30,
        "def": 55,
        "atk_spe": 65,
        "def_spe": 55,
        "spd": 20
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
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 3.1,
    "baseExperience": 55,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:lampent",
            "method": "level-up",
            "conditions": {
                "minLevel": 41,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default litwick;
