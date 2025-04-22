const quilava = {
    "id": "oremon:quilava",
    "name": "oremon.quilava.name",
    "description": "oremon.quilava.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 58,
        "atk": 64,
        "def": 58,
        "atk_spe": 80,
        "def_spe": 65,
        "spd": 80
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.9,
    "weight": 19,
    "baseExperience": 142,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:typhlosion",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default quilava;
