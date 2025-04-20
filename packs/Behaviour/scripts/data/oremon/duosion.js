const duosion = {
    "id": "oremon:duosion",
    "name": "oremon.duosion.name",
    "description": "oremon.duosion.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 40,
        "def": 50,
        "atk_spe": 125,
        "def_spe": 60,
        "spd": 30
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 100,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 8,
    "baseExperience": 130,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Green",
    "model": {
        "default": "models/entity/duosion.geo.json"
    },
    "textures": {
        "default": "textures/entity/duosion.png"
    },
    "evolutions": [
        {
            "into": "oremon:reuniclus",
            "method": "level-up",
            "conditions": {
                "minLevel": 41,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default duosion;
