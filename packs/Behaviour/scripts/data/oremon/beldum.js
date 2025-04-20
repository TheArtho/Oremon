const beldum = {
    "id": "oremon:beldum",
    "name": "oremon.beldum.name",
    "description": "oremon.beldum.description",
    "types": [
        "steel",
        "psychic"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 55,
        "def": 80,
        "atk_spe": 35,
        "def_spe": 60,
        "spd": 30
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
    "genderRate": -1,
    "catchRate": 3,
    "eggGroups": [
        "mineral"
    ],
    "hatchCounter": 40,
    "height": 0.6,
    "weight": 95.2,
    "baseExperience": 60,
    "growthRateId": "slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "blob",
    "color": "Blue",
    "model": {
        "default": "models/entity/beldum.geo.json"
    },
    "textures": {
        "default": "textures/entity/beldum.png"
    },
    "evolutions": [
        {
            "into": "oremon:metang",
            "method": "level-up",
            "conditions": {
                "minLevel": 20,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default beldum;
