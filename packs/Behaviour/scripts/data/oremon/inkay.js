const inkay = {
    "id": "oremon:inkay",
    "name": "oremon.inkay.name",
    "description": "oremon.inkay.description",
    "types": [
        "dark",
        "psychic"
    ],
    "baseStats": {
        "hp": 53,
        "atk": 54,
        "def": 53,
        "atk_spe": 37,
        "def_spe": 46,
        "spd": 45
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
    "catchRate": 190,
    "eggGroups": [
        "water1",
        "water2"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 3.5,
    "baseExperience": 58,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "tentacles",
    "color": "Blue",
    "model": {
        "default": "models/entity/inkay.geo.json"
    },
    "textures": {
        "default": "textures/entity/inkay.png"
    },
    "evolutions": [
        {
            "into": "oremon:malamar",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": true
            }
        }
    ]
};
export default inkay;
