const deino = {
    "id": "oremon:deino",
    "name": "oremon.deino.name",
    "description": "oremon.deino.description",
    "types": [
        "dark",
        "dragon"
    ],
    "baseStats": {
        "hp": 52,
        "atk": 65,
        "def": 50,
        "atk_spe": 45,
        "def_spe": 50,
        "spd": 38
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
    "catchRate": 45,
    "eggGroups": [
        "dragon"
    ],
    "hatchCounter": 40,
    "height": 0.8,
    "weight": 17.3,
    "baseExperience": 60,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "model": {
        "default": "models/entity/deino.geo.json"
    },
    "textures": {
        "default": "textures/entity/deino.png"
    },
    "evolutions": [
        {
            "into": "oremon:zweilous",
            "method": "level-up",
            "conditions": {
                "minLevel": 50,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default deino;
