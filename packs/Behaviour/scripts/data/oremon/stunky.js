const stunky = {
    "id": "oremon:stunky",
    "name": "oremon.stunky.name",
    "description": "oremon.stunky.description",
    "types": [
        "poison",
        "dark"
    ],
    "baseStats": {
        "hp": 63,
        "atk": 63,
        "def": 47,
        "atk_spe": 41,
        "def_spe": 41,
        "spd": 74
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
    "catchRate": 225,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 19.2,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:skuntank",
            "method": "level-up",
            "conditions": {
                "minLevel": 34,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default stunky;
