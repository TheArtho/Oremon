const cosmog = {
    "id": "oremon:cosmog",
    "name": "oremon.cosmog.name",
    "description": "oremon.cosmog.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 43,
        "atk": 29,
        "def": 31,
        "atk_spe": 29,
        "def_spe": 31,
        "spd": 37
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
    "genderRate": -1,
    "catchRate": 45,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 120,
    "height": 0.2,
    "weight": 0.1,
    "baseExperience": 40,
    "growthRateId": "slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "ball",
    "color": "Blue",
    "model": {
        "default": "models/entity/cosmog.geo.json"
    },
    "textures": {
        "default": "textures/entity/cosmog.png"
    },
    "evolutions": [
        {
            "into": "oremon:cosmoem",
            "method": "level-up",
            "conditions": {
                "minLevel": 43,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default cosmog;
