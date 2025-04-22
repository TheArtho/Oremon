const vulpix = {
    "id": "oremon:vulpix",
    "name": "oremon.vulpix.name",
    "description": "oremon.vulpix.description",
    "types": [
        "fire"
    ],
    "baseStats": {
        "hp": 38,
        "atk": 41,
        "def": 40,
        "atk_spe": 50,
        "def_spe": 65,
        "spd": 65
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
    "genderRate": 6,
    "catchRate": 190,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 9.9,
    "baseExperience": 60,
    "growthRateId": "medium",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Brown",
    "evolutions": [
        {
            "into": "oremon:ninetales",
            "method": "use-item",
            "conditions": {
                "item": "item:82",
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default vulpix;
