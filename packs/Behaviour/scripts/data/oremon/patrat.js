const patrat = {
    "id": "oremon:patrat",
    "name": "oremon.patrat.name",
    "description": "oremon.patrat.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 55,
        "def": 39,
        "atk_spe": 35,
        "def_spe": 39,
        "spd": 42
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 15,
    "height": 0.5,
    "weight": 11.6,
    "baseExperience": 51,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:watchog",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default patrat;
