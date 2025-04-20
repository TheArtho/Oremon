const poochyena = {
    "id": "oremon:poochyena",
    "name": "oremon.poochyena.name",
    "description": "oremon.poochyena.description",
    "types": [
        "dark"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 55,
        "def": 35,
        "atk_spe": 30,
        "def_spe": 30,
        "spd": 35
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
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 13.6,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "model": {
        "default": "models/entity/poochyena.geo.json"
    },
    "textures": {
        "default": "textures/entity/poochyena.png"
    },
    "evolutions": [
        {
            "into": "oremon:mightyena",
            "method": "level-up",
            "conditions": {
                "minLevel": 18,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default poochyena;
