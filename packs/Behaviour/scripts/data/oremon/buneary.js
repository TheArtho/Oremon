const buneary = {
    "id": "oremon:buneary",
    "name": "oremon.buneary.name",
    "description": "oremon.buneary.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 66,
        "def": 44,
        "atk_spe": 44,
        "def_spe": 56,
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "ground",
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 5.5,
    "baseExperience": 70,
    "growthRateId": "medium",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:lopunny",
            "method": "level-up",
            "conditions": {
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default buneary;
