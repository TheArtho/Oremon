const pineco = {
    "id": "oremon:pineco",
    "name": "oremon.pineco.name",
    "description": "oremon.pineco.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 65,
        "def": 90,
        "atk_spe": 35,
        "def_spe": 35,
        "spd": 15
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 7.2,
    "baseExperience": 58,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:forretress",
            "method": "level-up",
            "conditions": {
                "minLevel": 31,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pineco;
