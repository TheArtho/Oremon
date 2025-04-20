const hakamo_o = {
    "id": "oremon:hakamo-o",
    "name": "oremon.hakamo-o.name",
    "description": "oremon.hakamo-o.description",
    "types": [
        "dragon",
        "fighting"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 75,
        "def": 90,
        "atk_spe": 65,
        "def_spe": 70,
        "spd": 65
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 2,
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
    "height": 1.2,
    "weight": 47,
    "baseExperience": 147,
    "growthRateId": "slow",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Gray",
    "model": {
        "default": "models/entity/hakamo-o.geo.json"
    },
    "textures": {
        "default": "textures/entity/hakamo-o.png"
    },
    "evolutions": [
        {
            "into": "oremon:kommo-o",
            "method": "level-up",
            "conditions": {
                "minLevel": 45,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default hakamo_o;
