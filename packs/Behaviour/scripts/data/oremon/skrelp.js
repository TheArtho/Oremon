const skrelp = {
    "id": "oremon:skrelp",
    "name": "oremon.skrelp.name",
    "description": "oremon.skrelp.description",
    "types": [
        "poison",
        "water"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 60,
        "def": 60,
        "atk_spe": 60,
        "def_spe": 60,
        "spd": 30
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 225,
    "eggGroups": [
        "water1",
        "dragon"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 7.3,
    "baseExperience": 64,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:dragalge",
            "method": "level-up",
            "conditions": {
                "minLevel": 48,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default skrelp;
