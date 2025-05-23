const burmy = {
    "id": "oremon:burmy",
    "name": "oremon.burmy.name",
    "description": "oremon.burmy.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 29,
        "def": 45,
        "atk_spe": 29,
        "def_spe": 45,
        "spd": 36
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
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.2,
    "weight": 3.4,
    "baseExperience": 45,
    "growthRateId": "medium",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": true,
    "shape": "blob",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:wormadam",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "gender": "female",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:mothim",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "gender": "male",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "tackle",
            "method": "level_up",
            "level": 10
        },
        {
            "id": "protect",
            "method": "level_up",
            "level": 1
        },
        {
            "id": "protect",
            "method": "machine",
            "level": 0
        },
        {
            "id": "hidden-power",
            "method": "level_up",
            "level": 20
        },
        {
            "id": "hidden-power",
            "method": "machine",
            "level": 0
        },
        {
            "id": "bug-bite",
            "method": "level_up",
            "level": 15
        }
    ]
};
export default burmy;
