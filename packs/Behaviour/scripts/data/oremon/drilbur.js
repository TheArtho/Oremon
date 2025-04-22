const drilbur = {
    "id": "oremon:drilbur",
    "name": "oremon.drilbur.name",
    "description": "oremon.drilbur.description",
    "types": [
        "ground"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 85,
        "def": 40,
        "atk_spe": 30,
        "def_spe": 45,
        "spd": 68
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
    "catchRate": 120,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 8.5,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:excadrill",
            "method": "level-up",
            "conditions": {
                "minLevel": 31,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default drilbur;
