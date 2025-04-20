const wingull = {
    "id": "oremon:wingull",
    "name": "oremon.wingull.name",
    "description": "oremon.wingull.description",
    "types": [
        "water",
        "flying"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 30,
        "def": 30,
        "atk_spe": 55,
        "def_spe": 30,
        "spd": 85
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
    "catchRate": 190,
    "eggGroups": [
        "water1",
        "flying"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 9.5,
    "baseExperience": 54,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "White",
    "model": {
        "default": "models/entity/wingull.geo.json"
    },
    "textures": {
        "default": "textures/entity/wingull.png"
    },
    "evolutions": [
        {
            "into": "oremon:pelipper",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default wingull;
