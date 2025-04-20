const larvitar = {
    "id": "oremon:larvitar",
    "name": "oremon.larvitar.name",
    "description": "oremon.larvitar.description",
    "types": [
        "rock",
        "ground"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 64,
        "def": 50,
        "atk_spe": 45,
        "def_spe": 50,
        "spd": 41
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
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 40,
    "height": 0.6,
    "weight": 72,
    "baseExperience": 60,
    "growthRateId": "slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "model": {
        "default": "models/entity/larvitar.geo.json"
    },
    "textures": {
        "default": "textures/entity/larvitar.png"
    },
    "evolutions": [
        {
            "into": "oremon:pupitar",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default larvitar;
