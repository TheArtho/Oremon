const roselia = {
    "id": "oremon:roselia",
    "name": "oremon.roselia.name",
    "description": "oremon.roselia.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 50,
        "atk": 60,
        "def": 45,
        "atk_spe": 100,
        "def_spe": 80,
        "spd": 65
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 2,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 150,
    "eggGroups": [
        "fairy",
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.3,
    "weight": 2,
    "baseExperience": 140,
    "growthRateId": "medium-slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Green",
    "model": {
        "default": "models/entity/roselia.geo.json"
    },
    "textures": {
        "default": "textures/entity/roselia.png"
    },
    "evolutions": [
        {
            "into": "oremon:roserade",
            "method": "use-item",
            "conditions": {
                "item": "item:107",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default roselia;
