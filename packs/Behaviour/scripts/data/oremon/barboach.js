const barboach = {
    "id": "oremon:barboach",
    "name": "oremon.barboach.name",
    "description": "oremon.barboach.description",
    "types": [
        "water",
        "ground"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 48,
        "def": 43,
        "atk_spe": 46,
        "def_spe": 41,
        "spd": 60
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
    "height": 0.4,
    "weight": 1.9,
    "baseExperience": 58,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:whiscash",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default barboach;
