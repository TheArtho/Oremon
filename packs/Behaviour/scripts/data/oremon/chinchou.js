const chinchou = {
    "id": "oremon:chinchou",
    "name": "oremon.chinchou.name",
    "description": "oremon.chinchou.description",
    "types": [
        "water",
        "electric"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 38,
        "def": 38,
        "atk_spe": 56,
        "def_spe": 56,
        "spd": 67
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "water2"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 12,
    "baseExperience": 66,
    "growthRateId": "slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:lanturn",
            "method": "level-up",
            "conditions": {
                "minLevel": 27,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default chinchou;
