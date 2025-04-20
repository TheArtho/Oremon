const remoraid = {
    "id": "oremon:remoraid",
    "name": "oremon.remoraid.name",
    "description": "oremon.remoraid.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 65,
        "def": 35,
        "atk_spe": 65,
        "def_spe": 35,
        "spd": 65
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
        "water2"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 12,
    "baseExperience": 60,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Gray",
    "model": {
        "default": "models/entity/remoraid.geo.json"
    },
    "textures": {
        "default": "textures/entity/remoraid.png"
    },
    "evolutions": [
        {
            "into": "oremon:octillery",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default remoraid;
