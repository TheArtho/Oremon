const seadra = {
    "id": "oremon:seadra",
    "name": "oremon.seadra.name",
    "description": "oremon.seadra.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 65,
        "def": 95,
        "atk_spe": 95,
        "def_spe": 45,
        "spd": 85
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 75,
    "eggGroups": [
        "water1",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 1.2,
    "weight": 25,
    "baseExperience": 154,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Blue",
    "model": {
        "default": "models/entity/seadra.geo.json"
    },
    "textures": {
        "default": "textures/entity/seadra.png"
    },
    "evolutions": [
        {
            "into": "oremon:kingdra",
            "method": "trade",
            "conditions": {
                "heldItem": "item:212",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default seadra;
