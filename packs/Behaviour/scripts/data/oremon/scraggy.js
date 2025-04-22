const scraggy = {
    "id": "oremon:scraggy",
    "name": "oremon.scraggy.name",
    "description": "oremon.scraggy.description",
    "types": [
        "dark",
        "fighting"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 75,
        "def": 70,
        "atk_spe": 35,
        "def_spe": 70,
        "spd": 48
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
    "catchRate": 180,
    "eggGroups": [
        "ground",
        "dragon"
    ],
    "hatchCounter": 15,
    "height": 0.6,
    "weight": 11.8,
    "baseExperience": 70,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:scrafty",
            "method": "level-up",
            "conditions": {
                "minLevel": 39,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default scraggy;
