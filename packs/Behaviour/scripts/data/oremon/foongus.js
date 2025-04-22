const foongus = {
    "id": "oremon:foongus",
    "name": "oremon.foongus.name",
    "description": "oremon.foongus.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 69,
        "atk": 55,
        "def": 45,
        "atk_spe": 55,
        "def_spe": 55,
        "spd": 15
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.2,
    "weight": 1,
    "baseExperience": 59,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:amoonguss",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default foongus;
