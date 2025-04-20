const bulbasaur = {
    "id": "oremon:bulbasaur",
    "name": "oremon.bulbasaur.name",
    "description": "oremon.bulbasaur.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 49,
        "def": 49,
        "atk_spe": 65,
        "def_spe": 65,
        "spd": 45
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
        "monster",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.7,
    "weight": 6.9,
    "baseExperience": 64,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Green",
    "model": {
        "default": "models/entity/bulbasaur.geo.json"
    },
    "textures": {
        "default": "textures/entity/bulbasaur.png"
    },
    "evolutions": [
        {
            "into": "oremon:ivysaur",
            "method": "level-up",
            "conditions": {
                "minLevel": 16,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default bulbasaur;
