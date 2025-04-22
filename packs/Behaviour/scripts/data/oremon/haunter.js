const haunter = {
    "id": "oremon:haunter",
    "name": "oremon.haunter.name",
    "description": "oremon.haunter.description",
    "types": [
        "ghost",
        "poison"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 50,
        "def": 45,
        "atk_spe": 115,
        "def_spe": 55,
        "spd": 95
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 90,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 1.6,
    "weight": 0.1,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:gengar",
            "method": "trade",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default haunter;
