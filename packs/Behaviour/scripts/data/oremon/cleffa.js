const cleffa = {
    "id": "oremon:cleffa",
    "name": "oremon.cleffa.name",
    "description": "oremon.cleffa.description",
    "types": [
        "fairy"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 25,
        "def": 28,
        "atk_spe": 45,
        "def_spe": 55,
        "spd": 15
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 6,
    "catchRate": 150,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 10,
    "height": 0.3,
    "weight": 3,
    "baseExperience": 44,
    "growthRateId": "fast",
    "generationId": 2,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Pink",
    "evolutions": [
        {
            "into": "oremon:clefairy",
            "method": "level-up",
            "conditions": {
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cleffa;
