const spewpa = {
    "id": "oremon:spewpa",
    "name": "oremon.spewpa.name",
    "description": "oremon.spewpa.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 22,
        "def": 60,
        "atk_spe": 27,
        "def_spe": 30,
        "spd": 29
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 2,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 8.4,
    "baseExperience": 75,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Black",
    "evolutions": [
        {
            "into": "oremon:vivillon",
            "method": "level-up",
            "conditions": {
                "minLevel": 12,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default spewpa;
