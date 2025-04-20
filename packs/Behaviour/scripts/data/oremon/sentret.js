const sentret = {
    "id": "oremon:sentret",
    "name": "oremon.sentret.name",
    "description": "oremon.sentret.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 46,
        "def": 34,
        "atk_spe": 35,
        "def_spe": 45,
        "spd": 20
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
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.8,
    "weight": 6,
    "baseExperience": 43,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "model": {
        "default": "models/entity/sentret.geo.json"
    },
    "textures": {
        "default": "textures/entity/sentret.png"
    },
    "evolutions": [
        {
            "into": "oremon:furret",
            "method": "level-up",
            "conditions": {
                "minLevel": 15,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default sentret;
