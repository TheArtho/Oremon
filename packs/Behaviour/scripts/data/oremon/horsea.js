const horsea = {
    "id": "oremon:horsea",
    "name": "oremon.horsea.name",
    "description": "oremon.horsea.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 40,
        "def": 70,
        "atk_spe": 70,
        "def_spe": 25,
        "spd": 60
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
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
    "height": 0.4,
    "weight": 8,
    "baseExperience": 59,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:seadra",
            "method": "level-up",
            "conditions": {
                "minLevel": 32,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default horsea;
