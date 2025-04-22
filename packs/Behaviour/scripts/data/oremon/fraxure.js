const fraxure = {
    "id": "oremon:fraxure",
    "name": "oremon.fraxure.name",
    "description": "oremon.fraxure.description",
    "types": [
        "dragon"
    ],
    "baseStats": {
        "hp": 66,
        "atk": 117,
        "def": 70,
        "atk_spe": 40,
        "def_spe": 50,
        "spd": 67
    },
    "evYield": {
        "hp": 0,
        "atk": 2,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 60,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 40,
    "height": 1,
    "weight": 36,
    "baseExperience": 144,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:haxorus",
            "method": "level-up",
            "conditions": {
                "minLevel": 48,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default fraxure;
