const poliwhirl = {
    "id": "oremon:poliwhirl",
    "name": "oremon.poliwhirl.name",
    "description": "oremon.poliwhirl.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 65,
        "def": 65,
        "atk_spe": 50,
        "def_spe": 50,
        "spd": 90
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
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "water1"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 20,
    "baseExperience": 135,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:poliwrath",
            "method": "use-item",
            "conditions": {
                "item": "item:84",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:politoed",
            "method": "trade",
            "conditions": {
                "heldItem": "item:198",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default poliwhirl;
