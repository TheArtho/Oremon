const lickitung = {
    "id": "oremon:lickitung",
    "name": "oremon.lickitung.name",
    "description": "oremon.lickitung.description",
    "types": [
        "normal"
    ],
    "baseStats": {
        "hp": 90,
        "atk": 55,
        "def": 75,
        "atk_spe": 60,
        "def_spe": 75,
        "spd": 30
    },
    "evYield": {
        "hp": 2,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 20,
    "height": 1.2,
    "weight": 65.5,
    "baseExperience": 77,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Pink",
    "model": {
        "default": "models/entity/lickitung.geo.json"
    },
    "textures": {
        "default": "textures/entity/lickitung.png"
    },
    "evolutions": [
        {
            "into": "oremon:lickilicky",
            "method": "level-up",
            "conditions": {
                "knownMove": "move:205",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default lickitung;
