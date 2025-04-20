const bellsprout = {
    "id": "oremon:bellsprout",
    "name": "oremon.bellsprout.name",
    "description": "oremon.bellsprout.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 75,
        "def": 35,
        "atk_spe": 70,
        "def_spe": 30,
        "spd": 40
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
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.7,
    "weight": 4,
    "baseExperience": 60,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Green",
    "model": {
        "default": "models/entity/bellsprout.geo.json"
    },
    "textures": {
        "default": "textures/entity/bellsprout.png"
    },
    "evolutions": [
        {
            "into": "oremon:weepinbell",
            "method": "level-up",
            "conditions": {
                "minLevel": 21,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default bellsprout;
