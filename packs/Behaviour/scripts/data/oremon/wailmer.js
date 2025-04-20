const wailmer = {
    "id": "oremon:wailmer",
    "name": "oremon.wailmer.name",
    "description": "oremon.wailmer.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 130,
        "atk": 70,
        "def": 35,
        "atk_spe": 70,
        "def_spe": 35,
        "spd": 60
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 125,
    "eggGroups": [
        "ground",
        "water2"
    ],
    "hatchCounter": 40,
    "height": 2,
    "weight": 130,
    "baseExperience": 80,
    "growthRateId": "fast-then-very-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "model": {
        "default": "models/entity/wailmer.geo.json"
    },
    "textures": {
        "default": "textures/entity/wailmer.png"
    },
    "evolutions": [
        {
            "into": "oremon:wailord",
            "method": "level-up",
            "conditions": {
                "minLevel": 40,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default wailmer;
