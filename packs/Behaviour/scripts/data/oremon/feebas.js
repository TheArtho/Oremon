const feebas = {
    "id": "oremon:feebas",
    "name": "oremon.feebas.name",
    "description": "oremon.feebas.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 20,
        "atk": 15,
        "def": 20,
        "atk_spe": 10,
        "def_spe": 55,
        "spd": 80
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
    "catchRate": 255,
    "eggGroups": [
        "water1",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 7.4,
    "baseExperience": 40,
    "growthRateId": "slow-then-very-fast",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Brown",
    "model": {
        "default": "models/entity/feebas.geo.json"
    },
    "textures": {
        "default": "textures/entity/feebas.png"
    },
    "evolutions": [
        {
            "into": "oremon:milotic",
            "method": "level-up",
            "conditions": {
                "minBeauty": 171,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:milotic",
            "method": "trade",
            "conditions": {
                "heldItem": "item:580",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:milotic",
            "method": "level-up",
            "conditions": {
                "minBeauty": 170,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default feebas;
