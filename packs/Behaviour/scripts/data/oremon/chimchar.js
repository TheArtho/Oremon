const chimchar = {
    "id": "oremon:chimchar",
    "name": "oremon.chimchar.name",
    "description": "oremon.chimchar.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 44,
        "atk": 58,
        "def": 44,
        "atk_spe": 58,
        "def_spe": 44,
        "spd": 61
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground",
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 6.2,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:monferno",
            "method": "level-up",
            "conditions": {
                "minLevel": 14,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default chimchar;
