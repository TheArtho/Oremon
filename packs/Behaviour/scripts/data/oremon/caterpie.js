const caterpie = {
    "id": "oremon:caterpie",
    "name": "oremon.caterpie.name",
    "description": "oremon.caterpie.description",
    "types": [
        "bug"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 30,
        "def": 35,
        "atk_spe": 20,
        "def_spe": 20,
        "spd": 45
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 255,
    "eggGroups": [
        "bug"
    ],
    "hatchCounter": 15,
    "height": 0.3,
    "weight": 2.9,
    "baseExperience": 39,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "Green",
    "model": {
        "default": "models/entity/caterpie.geo.json"
    },
    "textures": {
        "default": "textures/entity/caterpie.png"
    },
    "evolutions": [
        {
            "into": "oremon:metapod",
            "method": "level-up",
            "conditions": {
                "minLevel": 7,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default caterpie;
