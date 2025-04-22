const cranidos = {
    "id": "oremon:cranidos",
    "name": "oremon.cranidos.name",
    "description": "oremon.cranidos.description",
    "types": [
        "rock"
    ],
    "baseStats": {
        "hp": 67,
        "atk": 125,
        "def": 40,
        "atk_spe": 30,
        "def_spe": 30,
        "spd": 58
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 30,
    "height": 0.9,
    "weight": 31.5,
    "baseExperience": 70,
    "growthRateId": "slow-then-very-fast",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:rampardos",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cranidos;
