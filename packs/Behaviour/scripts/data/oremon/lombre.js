const lombre = {
    "id": "oremon:lombre",
    "name": "oremon.lombre.name",
    "description": "oremon.lombre.description",
    "types": [
        "water",
        "grass"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 50,
        "def": 50,
        "atk_spe": 60,
        "def_spe": 70,
        "spd": 50
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 2,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "water1",
        "plant"
    ],
    "hatchCounter": 15,
    "height": 1.2,
    "weight": 32.5,
    "baseExperience": 119,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Green",
    "model": {
        "default": "models/entity/lombre.geo.json"
    },
    "textures": {
        "default": "textures/entity/lombre.png"
    },
    "evolutions": [
        {
            "into": "oremon:ludicolo",
            "method": "use-item",
            "conditions": {
                "item": "item:84",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default lombre;
