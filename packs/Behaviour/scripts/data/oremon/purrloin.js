const purrloin = {
    "id": "oremon:purrloin",
    "name": "oremon.purrloin.name",
    "description": "oremon.purrloin.description",
    "types": [
        "dark"
    ],
    "baseStats": {
        "hp": 41,
        "atk": 50,
        "def": 37,
        "atk_spe": 50,
        "def_spe": 37,
        "spd": 66
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
    "hatchCounter": 20,
    "height": 0.4,
    "weight": 10.1,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Purple",
    "model": {
        "default": "models/entity/purrloin.geo.json"
    },
    "textures": {
        "default": "textures/entity/purrloin.png"
    },
    "evolutions": [
        {
            "into": "oremon:liepard",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default purrloin;
