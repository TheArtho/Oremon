const sliggoo = {
    "id": "oremon:sliggoo",
    "name": "oremon.sliggoo.name",
    "description": "oremon.sliggoo.description",
    "types": [
        "dragon"
    ],
    "baseStats": {
        "hp": 68,
        "atk": 75,
        "def": 53,
        "atk_spe": 83,
        "def_spe": 113,
        "spd": 60
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 2,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 45,
    "eggGroups": [
        "dragon"
    ],
    "hatchCounter": 40,
    "height": 0.8,
    "weight": 17.5,
    "baseExperience": 158,
    "growthRateId": "slow",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "squiggle",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:goodra",
            "method": "level-up",
            "conditions": {
                "minLevel": 50,
                "needsOverworldRain": true,
                "turnUpsideDown": false
            }
        }
    ]
};
export default sliggoo;
