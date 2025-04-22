const snivy = {
    "id": "oremon:snivy",
    "name": "oremon.snivy.name",
    "description": "oremon.snivy.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 45,
        "def": 55,
        "atk_spe": 45,
        "def_spe": 55,
        "spd": 63
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
    "genderRate": 1,
    "catchRate": 45,
    "eggGroups": [
        "ground",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 8.1,
    "baseExperience": 62,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:servine",
            "method": "level-up",
            "conditions": {
                "minLevel": 17,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default snivy;
