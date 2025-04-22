const elekid = {
    "id": "oremon:elekid",
    "name": "oremon.elekid.name",
    "description": "oremon.elekid.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 63,
        "def": 37,
        "atk_spe": 65,
        "def_spe": 55,
        "spd": 95
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
    "genderRate": 2,
    "catchRate": 45,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 25,
    "height": 0.6,
    "weight": 23.5,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:electabuzz",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default elekid;
