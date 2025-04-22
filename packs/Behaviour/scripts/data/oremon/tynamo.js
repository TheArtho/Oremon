const tynamo = {
    "id": "oremon:tynamo",
    "name": "oremon.tynamo.name",
    "description": "oremon.tynamo.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 55,
        "def": 40,
        "atk_spe": 45,
        "def_spe": 40,
        "spd": 60
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
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.2,
    "weight": 0.3,
    "baseExperience": 55,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:eelektrik",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default tynamo;
