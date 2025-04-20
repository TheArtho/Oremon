const golbat = {
    "id": "oremon:golbat",
    "name": "oremon.golbat.name",
    "description": "oremon.golbat.description",
    "types": [
        "poison",
        "flying"
    ],
    "baseStats": {
        "hp": 75,
        "atk": 80,
        "def": 70,
        "atk_spe": 65,
        "def_spe": 75,
        "spd": 90
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 90,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 15,
    "height": 1.6,
    "weight": 55,
    "baseExperience": 159,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Purple",
    "model": {
        "default": "models/entity/golbat.geo.json"
    },
    "textures": {
        "default": "textures/entity/golbat.png"
    },
    "evolutions": [
        {
            "into": "oremon:crobat",
            "method": "level-up",
            "conditions": {
                "minHappiness": 220,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default golbat;
