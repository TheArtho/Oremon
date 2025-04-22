const pikachu = {
    "id": "oremon:pikachu",
    "name": "oremon.pikachu.name",
    "description": "oremon.pikachu.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 35,
        "atk": 55,
        "def": 40,
        "atk_spe": 50,
        "def_spe": 50,
        "spd": 90
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 2
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "ground",
        "fairy"
    ],
    "hatchCounter": 10,
    "height": 0.4,
    "weight": 6,
    "baseExperience": 112,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Yellow",
    "evolutions": [
        {
            "into": "oremon:raichu",
            "method": "use-item",
            "conditions": {
                "item": "item:83",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pikachu;
