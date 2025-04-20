const helioptile = {
    "id": "oremon:helioptile",
    "name": "oremon.helioptile.name",
    "description": "oremon.helioptile.description",
    "types": [
        "electric",
        "normal"
    ],
    "baseStats": {
        "hp": 44,
        "atk": 38,
        "def": 33,
        "atk_spe": 61,
        "def_spe": 43,
        "spd": 70
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 1
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "monster",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 6,
    "baseExperience": 58,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Yellow",
    "model": {
        "default": "models/entity/helioptile.geo.json"
    },
    "textures": {
        "default": "textures/entity/helioptile.png"
    },
    "evolutions": [
        {
            "into": "oremon:heliolisk",
            "method": "use-item",
            "conditions": {
                "item": "item:80",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default helioptile;
