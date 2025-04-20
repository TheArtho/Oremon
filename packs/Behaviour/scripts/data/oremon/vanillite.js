const vanillite = {
    "id": "oremon:vanillite",
    "name": "oremon.vanillite.name",
    "description": "oremon.vanillite.description",
    "types": [
        "ice"
    ],
    "baseStats": {
        "hp": 36,
        "atk": 50,
        "def": 50,
        "atk_spe": 65,
        "def_spe": 60,
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
    "catchRate": 255,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 5.7,
    "baseExperience": 61,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "White",
    "model": {
        "default": "models/entity/vanillite.geo.json"
    },
    "textures": {
        "default": "textures/entity/vanillite.png"
    },
    "evolutions": [
        {
            "into": "oremon:vanillish",
            "method": "level-up",
            "conditions": {
                "minLevel": 35,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default vanillite;
