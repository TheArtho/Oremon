const natu = {
    "id": "oremon:natu",
    "name": "oremon.natu.name",
    "description": "oremon.natu.description",
    "types": [
        "psychic",
        "flying"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 50,
        "def": 45,
        "atk_spe": 70,
        "def_spe": 45,
        "spd": 70
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
    "catchRate": 190,
    "eggGroups": [
        "flying"
    ],
    "hatchCounter": 20,
    "height": 0.2,
    "weight": 2,
    "baseExperience": 64,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:xatu",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default natu;
