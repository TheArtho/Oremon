const yanma = {
    "id": "oremon:yanma",
    "name": "oremon.yanma.name",
    "description": "oremon.yanma.description",
    "types": [
        "bug",
        "flying"
    ],
    "baseStats": {
        "hp": 65,
        "atk": 65,
        "def": 45,
        "atk_spe": 75,
        "def_spe": 45,
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
    "genderRate": 4,
    "catchRate": 75,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 20,
    "height": 1.2,
    "weight": 38,
    "baseExperience": 78,
    "growthRateId": "medium",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "bug wings",
    "color": "Red",
    "model": {
        "default": "models/entity/yanma.geo.json"
    },
    "textures": {
        "default": "textures/entity/yanma.png"
    },
    "evolutions": [
        {
            "into": "oremon:yanmega",
            "method": "level-up",
            "conditions": {
                "knownMove": "move:246",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default yanma;
