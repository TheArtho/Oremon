const dewpider = {
    "id": "oremon:dewpider",
    "name": "oremon.dewpider.name",
    "description": "oremon.dewpider.description",
    "types": [
        "water",
        "bug"
    ],
    "baseStats": {
        "hp": 38,
        "atk": 40,
        "def": 52,
        "atk_spe": 40,
        "def_spe": 72,
        "spd": 27
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 200,
    "eggGroups": [
        "water1",
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 4,
    "baseExperience": 54,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Green",
    "model": {
        "default": "models/entity/dewpider.geo.json"
    },
    "textures": {
        "default": "textures/entity/dewpider.png"
    },
    "evolutions": [
        {
            "into": "oremon:araquanid",
            "method": "level-up",
            "conditions": {
                "minLevel": 22,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default dewpider;
