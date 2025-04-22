const munna = {
    "id": "oremon:munna",
    "name": "oremon.munna.name",
    "description": "oremon.munna.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 76,
        "atk": 25,
        "def": 45,
        "atk_spe": 67,
        "def_spe": 55,
        "spd": 24
    },
    "evYield": {
        "hp": 1,
        "atk": 0,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 10,
    "height": 0.6,
    "weight": 23.3,
    "baseExperience": 58,
    "growthRateId": "fast",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Pink",
    "evolutions": [
        {
            "into": "oremon:musharna",
            "method": "use-item",
            "conditions": {
                "item": "item:81",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default munna;
