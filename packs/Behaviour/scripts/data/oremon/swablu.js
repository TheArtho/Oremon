const swablu = {
    "id": "oremon:swablu",
    "name": "oremon.swablu.name",
    "description": "oremon.swablu.description",
    "types": [
        "normal",
        "flying"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 40,
        "def": 60,
        "atk_spe": 40,
        "def_spe": 75,
        "spd": 50
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
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "flying",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 1.2,
    "baseExperience": 62,
    "growthRateId": "slow-then-very-fast",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:altaria",
            "method": "level-up",
            "conditions": {
                "minLevel": 35,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default swablu;
