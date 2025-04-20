const hoppip = {
    "id": "oremon:hoppip",
    "name": "oremon.hoppip.name",
    "description": "oremon.hoppip.description",
    "types": [
        "grass",
        "flying"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 35,
        "def": 40,
        "atk_spe": 35,
        "def_spe": 55,
        "spd": 50
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "fairy",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 0.5,
    "baseExperience": 50,
    "growthRateId": "medium-slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Pink",
    "model": {
        "default": "models/entity/hoppip.geo.json"
    },
    "textures": {
        "default": "textures/entity/hoppip.png"
    },
    "evolutions": [
        {
            "into": "oremon:skiploom",
            "method": "level-up",
            "conditions": {
                "minLevel": 18,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default hoppip;
