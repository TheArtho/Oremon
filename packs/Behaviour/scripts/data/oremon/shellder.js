const shellder = {
    "id": "oremon:shellder",
    "name": "oremon.shellder.name",
    "description": "oremon.shellder.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 65,
        "def": 100,
        "atk_spe": 45,
        "def_spe": 25,
        "spd": 40
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
        "water3"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 4,
    "baseExperience": 61,
    "growthRateId": "slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:cloyster",
            "method": "use-item",
            "conditions": {
                "item": "item:84",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default shellder;
