const ekans = {
    "id": "oremon:ekans",
    "name": "oremon.ekans.name",
    "description": "oremon.ekans.description",
    "types": [
        "poison"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 60,
        "def": 44,
        "atk_spe": 40,
        "def_spe": 54,
        "spd": 55
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
        "ground",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 2,
    "weight": 6.9,
    "baseExperience": 58,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "squiggle",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:arbok",
            "method": "level-up",
            "conditions": {
                "minLevel": 22,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default ekans;
