const solosis = {
    "id": "oremon:solosis",
    "name": "oremon.solosis.name",
    "description": "oremon.solosis.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 30,
        "def": 40,
        "atk_spe": 105,
        "def_spe": 50,
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
    "catchRate": 200,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 1,
    "baseExperience": 58,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:duosion",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default solosis;
