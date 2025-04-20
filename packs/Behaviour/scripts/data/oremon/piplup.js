const piplup = {
    "id": "oremon:piplup",
    "name": "oremon.piplup.name",
    "description": "oremon.piplup.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 53,
        "atk": 51,
        "def": 53,
        "atk_spe": 61,
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
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 5.2,
    "baseExperience": 63,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "model": {
        "default": "models/entity/piplup.geo.json"
    },
    "textures": {
        "default": "textures/entity/piplup.png"
    },
    "evolutions": [
        {
            "into": "oremon:prinplup",
            "method": "level-up",
            "conditions": {
                "minLevel": 16,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default piplup;
