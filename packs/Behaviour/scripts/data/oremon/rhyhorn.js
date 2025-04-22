const rhyhorn = {
    "id": "oremon:rhyhorn",
    "name": "oremon.rhyhorn.name",
    "description": "oremon.rhyhorn.description",
    "types": [
        "ground",
        "rock"
    ],
    "baseStats": {
        "hp": 80,
        "atk": 85,
        "def": 95,
        "atk_spe": 30,
        "def_spe": 30,
        "spd": 25
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "monster",
        "ground"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 115,
    "baseExperience": 69,
    "growthRateId": "slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Gray",
    "evolutions": [
        {
            "into": "oremon:rhydon",
            "method": "level-up",
            "conditions": {
                "minLevel": 42,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default rhyhorn;
