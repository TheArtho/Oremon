const bidoof = {
    "id": "oremon:bidoof",
    "name": "oremon.bidoof.name",
    "description": "oremon.bidoof.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 59,
        "atk": 45,
        "def": 40,
        "atk_spe": 35,
        "def_spe": 40,
        "spd": 31
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "water1",
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 20,
    "baseExperience": 50,
    "growthRateId": "medium",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "model": {
        "default": "models/entity/bidoof.geo.json"
    },
    "textures": {
        "default": "textures/entity/bidoof.png"
    },
    "evolutions": [
        {
            "into": "oremon:bibarel",
            "method": "level-up",
            "conditions": {
                "minLevel": 15,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default bidoof;
