const magmar = {
    "id": "oremon:magmar",
    "name": "oremon.magmar.name",
    "description": "oremon.magmar.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 95,
        "def": 57,
        "atk_spe": 100,
        "def_spe": 85,
        "spd": 93
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 2,
    "catchRate": 45,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 25,
    "height": 1.3,
    "weight": 44.5,
    "baseExperience": 173,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:magmortar",
            "method": "trade",
            "conditions": {
                "heldItem": "item:300",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default magmar;
