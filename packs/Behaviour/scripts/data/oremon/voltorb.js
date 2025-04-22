const voltorb = {
    "id": "oremon:voltorb",
    "name": "oremon.voltorb.name",
    "description": "oremon.voltorb.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 30,
        "def": 50,
        "atk_spe": 55,
        "def_spe": 55,
        "spd": 100
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
    "genderRate": -1,
    "catchRate": 190,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 10.4,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:electrode",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default voltorb;
