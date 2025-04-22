const surskit = {
    "id": "oremon:surskit",
    "name": "oremon.surskit.name",
    "description": "oremon.surskit.description",
    "types": [
        "bug",
        "water"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 30,
        "def": 32,
        "atk_spe": 50,
        "def_spe": 52,
        "spd": 65
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
    "catchRate": 200,
    "eggGroups": [
        "water1",
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 1.7,
    "baseExperience": 54,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:masquerain",
            "method": "level-up",
            "conditions": {
                "minLevel": 22,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default surskit;
