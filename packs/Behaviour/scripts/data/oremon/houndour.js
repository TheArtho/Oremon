const houndour = {
    "id": "oremon:houndour",
    "name": "oremon.houndour.name",
    "description": "oremon.houndour.description",
    "types": [
        "dark",
        "fire"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 60,
        "def": 30,
        "atk_spe": 80,
        "def_spe": 50,
        "spd": 65
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
    "catchRate": 120,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 10.8,
    "baseExperience": 66,
    "growthRateId": "slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Black",
    "evolutions": [
        {
            "into": "oremon:houndoom",
            "method": "level-up",
            "conditions": {
                "minLevel": 24,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default houndour;
