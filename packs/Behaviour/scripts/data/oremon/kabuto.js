const kabuto = {
    "id": "oremon:kabuto",
    "name": "oremon.kabuto.name",
    "description": "oremon.kabuto.description",
    "types": [
        "rock",
        "water"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 80,
        "def": 90,
        "atk_spe": 55,
        "def_spe": 45,
        "spd": 55
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "water1",
        "water3"
    ],
    "hatchCounter": 30,
    "height": 0.5,
    "weight": 11.5,
    "baseExperience": 71,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:kabutops",
            "method": "level-up",
            "conditions": {
                "minLevel": 40,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default kabuto;
