const mudbray = {
    "id": "oremon:mudbray",
    "name": "oremon.mudbray.name",
    "description": "oremon.mudbray.description",
    "types": [
        "ground"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 100,
        "def": 70,
        "atk_spe": 45,
        "def_spe": 55,
        "spd": 45
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
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 1,
    "weight": 110,
    "baseExperience": 77,
    "growthRateId": "medium",
    "generationId": 7,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "model": {
        "default": "models/entity/mudbray.geo.json"
    },
    "textures": {
        "default": "textures/entity/mudbray.png"
    },
    "evolutions": [
        {
            "into": "oremon:mudsdale",
            "method": "level-up",
            "conditions": {
                "minLevel": 30,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default mudbray;
