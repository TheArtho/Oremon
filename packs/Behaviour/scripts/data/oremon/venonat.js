const venonat = {
    "id": "oremon:venonat",
    "name": "oremon.venonat.name",
    "description": "oremon.venonat.description",
    "types": [
        "bug",
        "poison"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 55,
        "def": 50,
        "atk_spe": 40,
        "def_spe": 55,
        "spd": 45
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
    "catchRate": 190,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 30,
    "baseExperience": 61,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Purple",
    "evolutions": [
        {
            "into": "oremon:venomoth",
            "method": "level-up",
            "conditions": {
                "minLevel": 31,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default venonat;
