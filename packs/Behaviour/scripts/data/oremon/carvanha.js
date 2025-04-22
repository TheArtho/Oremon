const carvanha = {
    "id": "oremon:carvanha",
    "name": "oremon.carvanha.name",
    "description": "oremon.carvanha.description",
    "types": [
        "water",
        "dark"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 90,
        "def": 20,
        "atk_spe": 65,
        "def_spe": 20,
        "spd": 65
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
    "genderRate": 4,
    "catchRate": 225,
    "eggGroups": [
        "water2"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 20.8,
    "baseExperience": 61,
    "growthRateId": "slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Red",
    "evolutions": [
        {
            "into": "oremon:sharpedo",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default carvanha;
