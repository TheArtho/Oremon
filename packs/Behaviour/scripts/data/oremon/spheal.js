const spheal = {
    "id": "oremon:spheal",
    "name": "oremon.spheal.name",
    "description": "oremon.spheal.description",
    "types": [
        "ice",
        "water"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 40,
        "def": 50,
        "atk_spe": 55,
        "def_spe": 50,
        "spd": 25
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
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 39.5,
    "baseExperience": 58,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "fish",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:sealeo",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default spheal;
