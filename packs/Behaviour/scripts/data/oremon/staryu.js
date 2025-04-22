const staryu = {
    "id": "oremon:staryu",
    "name": "oremon.staryu.name",
    "description": "oremon.staryu.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 45,
        "def": 55,
        "atk_spe": 70,
        "def_spe": 55,
        "spd": 85
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
    "genderRate": -1,
    "catchRate": 225,
    "eggGroups": [
        "water3"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 34.5,
    "baseExperience": 68,
    "growthRateId": "slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:starmie",
            "method": "use-item",
            "conditions": {
                "item": "item:84",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default staryu;
