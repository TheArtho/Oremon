const mantyke = {
    "id": "oremon:mantyke",
    "name": "oremon.mantyke.name",
    "description": "oremon.mantyke.description",
    "types": [
        "water",
        "flying"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 20,
        "def": 50,
        "atk_spe": 60,
        "def_spe": 120,
        "spd": 50
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
    "genderRate": 4,
    "catchRate": 25,
    "eggGroups": [
        "no-eggs"
    ],
    "hatchCounter": 25,
    "height": 1,
    "weight": 65,
    "baseExperience": 69,
    "growthRateId": "slow",
    "generationId": 4,
    "isBaby": true,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "wings",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:mantine",
            "method": "level-up",
            "conditions": {
                "partySpecies": "oremon:remoraid",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default mantyke;
