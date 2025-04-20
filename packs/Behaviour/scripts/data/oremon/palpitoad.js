const palpitoad = {
    "id": "oremon:palpitoad",
    "name": "oremon.palpitoad.name",
    "description": "oremon.palpitoad.description",
    "types": [
        "water",
        "ground"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 65,
        "def": 55,
        "atk_spe": 65,
        "def_spe": 55,
        "spd": 69
    },
    "evYield": {
        "hp": 2,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "water1"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 17,
    "baseExperience": 134,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "model": {
        "default": "models/entity/palpitoad.geo.json"
    },
    "textures": {
        "default": "textures/entity/palpitoad.png"
    },
    "evolutions": [
        {
            "into": "oremon:seismitoad",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default palpitoad;
