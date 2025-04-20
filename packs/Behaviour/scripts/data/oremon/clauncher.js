const clauncher = {
    "id": "oremon:clauncher",
    "name": "oremon.clauncher.name",
    "description": "oremon.clauncher.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 53,
        "def": 62,
        "atk_spe": 58,
        "def_spe": 63,
        "spd": 44
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
    "catchRate": 225,
    "eggGroups": [
        "water1",
        "water3"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 8.3,
    "baseExperience": 66,
    "growthRateId": "slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Blue",
    "model": {
        "default": "models/entity/clauncher.geo.json"
    },
    "textures": {
        "default": "textures/entity/clauncher.png"
    },
    "evolutions": [
        {
            "into": "oremon:clawitzer",
            "method": "level-up",
            "conditions": {
                "minLevel": 37,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default clauncher;
