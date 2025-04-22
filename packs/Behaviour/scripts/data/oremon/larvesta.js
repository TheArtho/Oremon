const larvesta = {
    "id": "oremon:larvesta",
    "name": "oremon.larvesta.name",
    "description": "oremon.larvesta.description",
    "types": [
        "bug",
        "fire"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 85,
        "def": 55,
        "atk_spe": 50,
        "def_spe": 55,
        "spd": 60
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
        "bug"
    ],
    "hatchCounter": 40,
    "height": 1.1,
    "weight": 28.8,
    "baseExperience": 72,
    "growthRateId": "slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "armor",
    "color": "White",
    "evolutions": [
        {
            "into": "oremon:volcarona",
            "method": "level-up",
            "conditions": {
                "minLevel": 59,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default larvesta;
