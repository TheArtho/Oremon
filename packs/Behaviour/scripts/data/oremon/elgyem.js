const elgyem = {
    "id": "oremon:elgyem",
    "name": "oremon.elgyem.name",
    "description": "oremon.elgyem.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 55,
        "def": 55,
        "atk_spe": 85,
        "def_spe": 55,
        "spd": 30
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
    "catchRate": 255,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 9,
    "baseExperience": 67,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:beheeyem",
            "method": "level-up",
            "conditions": {
                "minLevel": 42,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default elgyem;
