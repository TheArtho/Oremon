const vanillish = {
    "id": "oremon:vanillish",
    "name": "oremon.vanillish.name",
    "description": "oremon.vanillish.description",
    "types": [
        "ice"
    ],
    "baseStats": {
        "hp": 51,
        "atk": 65,
        "def": 65,
        "atk_spe": 80,
        "def_spe": 75,
        "spd": 59
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 1.1,
    "weight": 41,
    "baseExperience": 138,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "White",
    "model": {
        "default": "models/entity/vanillish.geo.json"
    },
    "textures": {
        "default": "textures/entity/vanillish.png"
    },
    "evolutions": [
        {
            "into": "oremon:vanilluxe",
            "method": "level-up",
            "conditions": {
                "minLevel": 47,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default vanillish;
