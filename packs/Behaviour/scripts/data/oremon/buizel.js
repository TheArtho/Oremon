const buizel = {
    "id": "oremon:buizel",
    "name": "oremon.buizel.name",
    "description": "oremon.buizel.description",
    "types": [
        "water"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 65,
        "def": 35,
        "atk_spe": 60,
        "def_spe": 30,
        "spd": 85
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
    "catchRate": 190,
    "eggGroups": [
        "water1",
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.7,
    "weight": 29.5,
    "baseExperience": 66,
    "growthRateId": "medium",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:floatzel",
            "method": "level-up",
            "conditions": {
                "minLevel": 26,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default buizel;
