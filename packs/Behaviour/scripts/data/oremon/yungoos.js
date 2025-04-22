const yungoos = {
    "id": "oremon:yungoos",
    "name": "oremon.yungoos.name",
    "description": "oremon.yungoos.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 48,
        "atk": 70,
        "def": 30,
        "atk_spe": 30,
        "def_spe": 30,
        "spd": 45
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 6,
    "baseExperience": 51,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:gumshoos",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "timeOfDay": "day",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default yungoos;
