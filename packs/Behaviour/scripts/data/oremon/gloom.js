const gloom = {
    "id": "oremon:gloom",
    "name": "oremon.gloom.name",
    "description": "oremon.gloom.description",
    "types": [
        "grass",
        "poison"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 65,
        "def": 70,
        "atk_spe": 85,
        "def_spe": 75,
        "spd": 40
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
    "catchRate": 120,
    "eggGroups": [
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.8,
    "weight": 8.6,
    "baseExperience": 138,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:vileplume",
            "method": "use-item",
            "conditions": {
                "item": "item:85",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        },
        {
            "into": "oremon:bellossom",
            "method": "use-item",
            "conditions": {
                "item": "item:80",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default gloom;
