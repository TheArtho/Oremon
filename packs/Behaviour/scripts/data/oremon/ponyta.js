const ponyta = {
    "id": "oremon:ponyta",
    "name": "oremon.ponyta.name",
    "description": "oremon.ponyta.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 85,
        "def": 55,
        "atk_spe": 65,
        "def_spe": 65,
        "spd": 90
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
        "ground"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 30,
    "baseExperience": 82,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:rapidash",
            "method": "level-up",
            "conditions": {
                "minLevel": 40,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default ponyta;
