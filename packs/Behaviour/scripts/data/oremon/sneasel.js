const sneasel = {
    "id": "oremon:sneasel",
    "name": "oremon.sneasel.name",
    "description": "oremon.sneasel.description",
    "types": [
        "dark",
        "ice"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 95,
        "def": 55,
        "atk_spe": 35,
        "def_spe": 75,
        "spd": 115
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
    "catchRate": 60,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 28,
    "baseExperience": 86,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Black",
    "evolutions": [
        {
            "into": "oremon:weavile",
            "method": "level-up",
            "conditions": {
                "heldItem": "item:303",
                "timeOfDay": "night",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default sneasel;
