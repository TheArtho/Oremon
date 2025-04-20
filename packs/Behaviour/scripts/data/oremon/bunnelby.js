const bunnelby = {
    "id": "oremon:bunnelby",
    "name": "oremon.bunnelby.name",
    "description": "oremon.bunnelby.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 38,
        "atk": 36,
        "def": 38,
        "atk_spe": 32,
        "def_spe": 36,
        "spd": 57
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
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 5,
    "baseExperience": 47,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "model": {
        "default": "models/entity/bunnelby.geo.json"
    },
    "textures": {
        "default": "textures/entity/bunnelby.png"
    },
    "evolutions": [
        {
            "into": "oremon:diggersby",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default bunnelby;
