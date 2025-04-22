const oddish = {
    "id": "oremon:oddish",
    "name": "oremon.oddish.name",
    "description": "oremon.oddish.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 50,
        "def": 55,
        "atk_spe": 75,
        "def_spe": 65,
        "spd": 30
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
    "catchRate": 255,
    "eggGroups": [
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 5.4,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:gloom",
            "method": "level-up",
            "conditions": {
                "minLevel": 21,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default oddish;
