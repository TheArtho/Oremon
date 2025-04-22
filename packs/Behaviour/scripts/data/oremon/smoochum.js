const smoochum = {
    "id": "oremon:smoochum",
    "name": "oremon.smoochum.name",
    "description": "oremon.smoochum.description",
    "types": [
        "ice",
        "psychic"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 30,
        "def": 15,
        "atk_spe": 85,
        "def_spe": 65,
        "spd": 65
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 8,
    "catchRate": 45,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 25,
    "height": 0.4,
    "weight": 6,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Pink",
    "evolutions": [
        {
            "into": "oremon:jynx",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default smoochum;
