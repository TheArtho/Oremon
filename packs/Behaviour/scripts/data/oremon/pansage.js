const pansage = {
    "id": "oremon:pansage",
    "name": "oremon.pansage.name",
    "description": "oremon.pansage.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 53,
        "def": 48,
        "atk_spe": 53,
        "def_spe": 48,
        "spd": 64
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
    "genderRate": 1,
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 10.5,
    "baseExperience": 63,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Green",
    "model": {
        "default": "models/entity/pansage.geo.json"
    },
    "textures": {
        "default": "textures/entity/pansage.png"
    },
    "evolutions": [
        {
            "into": "oremon:simisage",
            "method": "use-item",
            "conditions": {
                "item": "item:85",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pansage;
