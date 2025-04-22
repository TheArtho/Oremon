const salandit = {
    "id": "oremon:salandit",
    "name": "oremon.salandit.name",
    "description": "oremon.salandit.description",
    "types": [
        "poison",
        "fire"
    ],
    "baseStats": {
        "hp": 48,
        "atk": 44,
        "def": 40,
        "atk_spe": 71,
        "def_spe": 40,
        "spd": 77
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
    "catchRate": 120,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 4.8,
    "baseExperience": 64,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Black",
    "evolutions": [
        {
            "into": "oremon:salazzle",
            "method": "level-up",
            "conditions": {
                "minLevel": 33,
                "gender": "female",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default salandit;
