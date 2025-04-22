const roggenrola = {
    "id": "oremon:roggenrola",
    "name": "oremon.roggenrola.name",
    "description": "oremon.roggenrola.description",
    "types": [
        "rock"
    ],
    "baseStats": {
        "hp": 55,
        "atk": 75,
        "def": 85,
        "atk_spe": 25,
        "def_spe": 25,
        "spd": 15
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
    "catchRate": 255,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 15,
    "height": 0.4,
    "weight": 18,
    "baseExperience": 56,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "legs",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:boldore",
            "method": "level-up",
            "conditions": {
                "minLevel": 25,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default roggenrola;
