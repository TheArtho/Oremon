const psyduck = {
    "id": "oremon:psyduck",
    "name": "oremon.psyduck.name",
    "description": "oremon.psyduck.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 52,
        "def": 48,
        "atk_spe": 65,
        "def_spe": 50,
        "spd": 55
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
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "water1",
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 19.6,
    "baseExperience": 64,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Yellow",
    "model": {
        "default": "models/entity/psyduck.geo.json"
    },
    "textures": {
        "default": "textures/entity/psyduck.png"
    },
    "evolutions": [
        {
            "into": "oremon:golduck",
            "method": "level-up",
            "conditions": {
                "minLevel": 33,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default psyduck;
