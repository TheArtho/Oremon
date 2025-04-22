const igglybuff = {
    "id": "oremon:igglybuff",
    "name": "oremon.igglybuff.name",
    "description": "oremon.igglybuff.description",
    "types": [
        "normal",
        "fairy"
    ],
    "baseStats": {
        "hp": 90,
        "atk": 30,
        "def": 15,
        "atk_spe": 40,
        "def_spe": 20,
        "spd": 15
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
    "genderRate": 6,
    "catchRate": 170,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 10,
    "height": 0.3,
    "weight": 1,
    "baseExperience": 42,
    "growthRateId": "fast",
    "generationId": 2,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Pink",
    "evolutions": [
        {
            "into": "oremon:jigglypuff",
            "method": "level-up",
            "conditions": {
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default igglybuff;
