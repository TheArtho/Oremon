const steenee = {
    "id": "oremon:steenee",
    "name": "oremon.steenee.name",
    "description": "oremon.steenee.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 52,
        "atk": 40,
        "def": 48,
        "atk_spe": 40,
        "def_spe": 48,
        "spd": 62
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 8,
    "catchRate": 120,
    "eggGroups": [
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.7,
    "weight": 8.2,
    "baseExperience": 102,
    "growthRateId": "medium-slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Purple",
    "model": {
        "default": "models/entity/steenee.geo.json"
    },
    "textures": {
        "default": "textures/entity/steenee.png"
    },
    "evolutions": [
        {
            "into": "oremon:tsareena",
            "method": "level-up",
            "conditions": {
                "knownMove": "move:23",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default steenee;
