const greninja = {
    "id": "oremon:greninja",
    "name": "oremon.greninja.name",
    "description": "oremon.greninja.description",
    "types": [
        "water",
        "dark"
    ],
    "baseStats": {
        "hp": 72,
        "atk": 95,
        "def": 67,
        "atk_spe": 103,
        "def_spe": 71,
        "spd": 122
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 3
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "water1"
    ],
    "hatchCounter": 20,
    "height": 1.5,
    "weight": 40,
    "baseExperience": 239,
    "growthRateId": "medium-slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "model": {
        "default": "models/entity/greninja.geo.json"
    },
    "textures": {
        "default": "textures/entity/greninja.png"
    },
    "evolutions": []
};
export default greninja;
