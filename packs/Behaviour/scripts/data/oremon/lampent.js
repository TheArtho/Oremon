const lampent = {
    "id": "oremon:lampent",
    "name": "oremon.lampent.name",
    "description": "oremon.lampent.description",
    "types": [
        "ghost",
        "fire"
    ],
    "baseStats": {
        "hp": 60,
        "atk": 40,
        "def": 60,
        "atk_spe": 95,
        "def_spe": 60,
        "spd": 55
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
    "catchRate": 90,
    "eggGroups": [
        "indeterminate"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 13,
    "baseExperience": 130,
    "growthRateId": "medium-slow",
    "generationId": 5,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "arms",
    "color": "Black",
    "evolutions": [
        {
            "into": "oremon:chandelure",
            "method": "use-item",
            "conditions": {
                "item": "item:108",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default lampent;
