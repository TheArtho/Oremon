const honedge = {
    "id": "oremon:honedge",
    "name": "oremon.honedge.name",
    "description": "oremon.honedge.description",
    "types": [
        "steel",
        "ghost"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 80,
        "def": 100,
        "atk_spe": 35,
        "def_spe": 37,
        "spd": 28
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 1,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 180,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 2,
    "baseExperience": 65,
    "growthRateId": "medium",
    "generationId": 6,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Brown",
    "model": {
        "default": "models/entity/honedge.geo.json"
    },
    "textures": {
        "default": "textures/entity/honedge.png"
    },
    "evolutions": [
        {
            "into": "oremon:doublade",
            "method": "level-up",
            "conditions": {
                "minLevel": 35,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default honedge;
