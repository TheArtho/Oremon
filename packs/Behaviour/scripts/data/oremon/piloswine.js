const piloswine = {
    "id": "oremon:piloswine",
    "name": "oremon.piloswine.name",
    "description": "oremon.piloswine.description",
    "types": [
        "ice",
        "ground"
    ],
    "baseStats": {
        "hp": 100,
        "atk": 100,
        "def": 80,
        "atk_spe": 60,
        "def_spe": 60,
        "spd": 50
    },
    "evYield": {
        "hp": 1,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 75,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 55.8,
    "baseExperience": 158,
    "growthRateId": "slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:mamoswine",
            "method": "level-up",
            "conditions": {
                "knownMove": "move:246",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default piloswine;
