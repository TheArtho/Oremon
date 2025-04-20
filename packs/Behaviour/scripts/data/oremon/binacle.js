const binacle = {
    "id": "oremon:binacle",
    "name": "oremon.binacle.name",
    "description": "oremon.binacle.description",
    "types": [
        "rock",
        "water"
    ],
    "baseStats": {
        "hp": 42,
        "atk": 52,
        "def": 67,
        "atk_spe": 39,
        "def_spe": 56,
        "spd": 50
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
    "catchRate": 120,
    "eggGroups": [
        "water3"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 31,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "heads",
    "color": "Brown",
    "model": {
        "default": "models/entity/binacle.geo.json"
    },
    "textures": {
        "default": "textures/entity/binacle.png"
    },
    "evolutions": [
        {
            "into": "oremon:barbaracle",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default binacle;
