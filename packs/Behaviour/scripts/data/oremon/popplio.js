const popplio = {
    "id": "oremon:popplio",
    "name": "oremon.popplio.name",
    "description": "oremon.popplio.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 54,
        "def": 54,
        "atk_spe": 66,
        "def_spe": 56,
        "spd": 40
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "water1",
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 7.5,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:brionne",
            "method": "level-up",
            "conditions": {
                "minLevel": 17,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default popplio;
