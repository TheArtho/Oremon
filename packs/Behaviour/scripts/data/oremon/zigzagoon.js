const zigzagoon = {
    "id": "oremon:zigzagoon",
    "name": "oremon.zigzagoon.name",
    "description": "oremon.zigzagoon.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 38,
        "atk": 30,
        "def": 41,
        "atk_spe": 30,
        "def_spe": 41,
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
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 17.5,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:linoone",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default zigzagoon;
