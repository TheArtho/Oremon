const monferno = {
    "id": "oremon:monferno",
    "name": "oremon.monferno.name",
    "description": "oremon.monferno.description",
    "types": [
        "fire",
        "fighting"
    ],
    "baseStats": {
        "hp": 64,
        "atk": 78,
        "def": 52,
        "atk_spe": 78,
        "def_spe": 52,
        "spd": 81
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
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
    "height": 0.9,
    "weight": 22,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:infernape",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default monferno;
