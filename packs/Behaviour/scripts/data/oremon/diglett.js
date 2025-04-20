const diglett = {
    "id": "oremon:diglett",
    "name": "oremon.diglett.name",
    "description": "oremon.diglett.description",
    "types": [
        "ground"
    ],
    "baseStats": {
        "hp": 10,
        "atk": 55,
        "def": 25,
        "atk_spe": 35,
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
    "catchRate": 255,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.2,
    "weight": 0.8,
    "baseExperience": 53,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Brown",
    "model": {
        "default": "models/entity/diglett.geo.json"
    },
    "textures": {
        "default": "textures/entity/diglett.png"
    },
    "evolutions": [
        {
            "into": "oremon:dugtrio",
            "method": "level-up",
            "conditions": {
                "minLevel": 26,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default diglett;
