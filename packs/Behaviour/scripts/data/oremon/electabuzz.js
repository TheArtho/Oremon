const electabuzz = {
    "id": "oremon:electabuzz",
    "name": "oremon.electabuzz.name",
    "description": "oremon.electabuzz.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 83,
        "def": 57,
        "atk_spe": 95,
        "def_spe": 85,
        "spd": 105
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 2,
    "catchRate": 45,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 25,
    "height": 1.1,
    "weight": 30,
    "baseExperience": 172,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:electivire",
            "method": "trade",
            "conditions": {
                "heldItem": "item:299",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default electabuzz;
