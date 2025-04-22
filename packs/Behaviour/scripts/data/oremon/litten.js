const litten = {
    "id": "oremon:litten",
    "name": "oremon.litten.name",
    "description": "oremon.litten.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 65,
        "def": 40,
        "atk_spe": 60,
        "def_spe": 40,
        "spd": 70
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 4.3,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:torracat",
            "method": "level-up",
            "conditions": {
                "minLevel": 17,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default litten;
