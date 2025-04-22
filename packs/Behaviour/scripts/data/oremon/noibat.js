const noibat = {
    "id": "oremon:noibat",
    "name": "oremon.noibat.name",
    "description": "oremon.noibat.description",
    "types": [
        "flying",
        "dragon"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 30,
        "def": 35,
        "atk_spe": 45,
        "def_spe": 40,
        "spd": 55
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
    "catchRate": 190,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 8,
    "baseExperience": 49,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:noivern",
            "method": "level-up",
            "conditions": {
                "minLevel": 48,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default noibat;
