const vullaby = {
    "id": "oremon:vullaby",
    "name": "oremon.vullaby.name",
    "description": "oremon.vullaby.description",
    "types": [
        "dark",
        "flying"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 55,
        "def": 75,
        "atk_spe": 45,
        "def_spe": 65,
        "spd": 60
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 8,
    "catchRate": 190,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 9,
    "baseExperience": 74,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:mandibuzz",
            "method": "level-up",
            "conditions": {
                "minLevel": 54,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default vullaby;
