const tirtouga = {
    "id": "oremon:tirtouga",
    "name": "oremon.tirtouga.name",
    "description": "oremon.tirtouga.description",
    "types": [
        "water",
        "rock"
    ],
    "baseStats": {
        "hp": 54,
        "atk": 78,
        "def": 103,
        "atk_spe": 53,
        "def_spe": 45,
        "spd": 22
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
    "height": 0.7,
    "weight": 16.5,
    "baseExperience": 71,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:carracosta",
            "method": "level-up",
            "conditions": {
                "minLevel": 37,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default tirtouga;
