const poliwag = {
    "id": "oremon:poliwag",
    "name": "oremon.poliwag.name",
    "description": "oremon.poliwag.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 50,
        "def": 40,
        "atk_spe": 40,
        "def_spe": 40,
        "spd": 90
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
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "water1"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 12.4,
    "baseExperience": 60,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Blue",
    "model": {
        "default": "models/entity/poliwag.geo.json"
    },
    "textures": {
        "default": "textures/entity/poliwag.png"
    },
    "evolutions": [
        {
            "into": "oremon:poliwhirl",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default poliwag;
