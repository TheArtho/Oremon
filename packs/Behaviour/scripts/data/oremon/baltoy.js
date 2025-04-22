const baltoy = {
    "id": "oremon:baltoy",
    "name": "oremon.baltoy.name",
    "description": "oremon.baltoy.description",
    "types": [
        "ground",
        "psychic"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 40,
        "def": 55,
        "atk_spe": 40,
        "def_spe": 70,
        "spd": 55
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 1,
        "spd": 0
    },
    "abilities": {},
    "genderRate": -1,
    "catchRate": 255,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 21.5,
    "baseExperience": 60,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:claydol",
            "method": "level-up",
            "conditions": {
                "minLevel": 36,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default baltoy;
