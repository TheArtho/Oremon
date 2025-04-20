const shieldon = {
    "id": "oremon:shieldon",
    "name": "oremon.shieldon.name",
    "description": "oremon.shieldon.description",
    "types": [
        "rock",
        "steel"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 42,
        "def": 118,
        "atk_spe": 42,
        "def_spe": 88,
        "spd": 30
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 30,
    "height": 0.5,
    "weight": 57,
    "baseExperience": 70,
    "growthRateId": "slow-then-very-fast",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "model": {
        "default": "models/entity/shieldon.geo.json"
    },
    "textures": {
        "default": "textures/entity/shieldon.png"
    },
    "evolutions": [
        {
            "into": "oremon:bastiodon",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default shieldon;
