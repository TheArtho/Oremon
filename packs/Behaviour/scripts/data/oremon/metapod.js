const metapod = {
    "id": "oremon:metapod",
    "name": "oremon.metapod.name",
    "description": "oremon.metapod.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 20,
        "def": 55,
        "atk_spe": 25,
        "def_spe": 25,
        "spd": 30
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 2,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.7,
    "weight": 9.9,
    "baseExperience": 72,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "squiggle",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:butterfree",
            "method": "level-up",
            "conditions": {
                "minLevel": 10,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ],
    "moves": [
        {
            "id": "harden",
            "method": "level_up",
            "level": 0
        },
        {
            "id": "harden",
            "method": "level_up",
            "level": 1
        }
    ]
};
export default metapod;
