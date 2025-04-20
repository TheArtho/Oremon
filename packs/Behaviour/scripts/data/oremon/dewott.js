const dewott = {
    "id": "oremon:dewott",
    "name": "oremon.dewott.name",
    "description": "oremon.dewott.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 75,
        "def": 60,
        "atk_spe": 83,
        "def_spe": 60,
        "spd": 60
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 24.5,
    "baseExperience": 145,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "model": {
        "default": "models/entity/dewott.geo.json"
    },
    "textures": {
        "default": "textures/entity/dewott.png"
    },
    "evolutions": [
        {
            "into": "oremon:samurott",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default dewott;
