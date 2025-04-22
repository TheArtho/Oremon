const petilil = {
    "id": "oremon:petilil",
    "name": "oremon.petilil.name",
    "description": "oremon.petilil.description",
    "types": [
        "grass"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 35,
        "def": 50,
        "atk_spe": 70,
        "def_spe": 50,
        "spd": 30
    },
    "evYield": {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "atk_spe": 1,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 8,
    "catchRate": 190,
    "eggGroups": [
        "plant"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 6.6,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Green",
    "evolutions": [
        {
            "into": "oremon:lilligant",
            "method": "use-item",
            "conditions": {
                "item": "item:80",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default petilil;
