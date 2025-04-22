const drowzee = {
    "id": "oremon:drowzee",
    "name": "oremon.drowzee.name",
    "description": "oremon.drowzee.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 48,
        "def": 45,
        "atk_spe": 43,
        "def_spe": 90,
        "spd": 42
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
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 32.4,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:hypno",
            "method": "level-up",
            "conditions": {
                "minLevel": 26,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default drowzee;
