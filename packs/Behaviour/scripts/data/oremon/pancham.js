const pancham = {
    "id": "oremon:pancham",
    "name": "oremon.pancham.name",
    "description": "oremon.pancham.description",
    "types": [
        "fighting"
    ],
    "baseStats": {
        "hp": 67,
        "atk": 82,
        "def": 62,
        "atk_spe": 46,
        "def_spe": 48,
        "spd": 43
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
    "catchRate": 220,
    "eggGroups": [
        "ground",
        "humanshape"
    ],
    "hatchCounter": 25,
    "height": 0.6,
    "weight": 8,
    "baseExperience": 70,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "White",
    "model": {
        "default": "models/entity/pancham.geo.json"
    },
    "textures": {
        "default": "textures/entity/pancham.png"
    },
    "evolutions": [
        {
            "into": "oremon:pangoro",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "partyType": "dark",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pancham;
