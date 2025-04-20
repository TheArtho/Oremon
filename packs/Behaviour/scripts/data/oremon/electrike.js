const electrike = {
    "id": "oremon:electrike",
    "name": "oremon.electrike.name",
    "description": "oremon.electrike.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 45,
        "def": 40,
        "atk_spe": 65,
        "def_spe": 40,
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
    "genderRate": 4,
    "catchRate": 120,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 15.2,
    "baseExperience": 59,
    "growthRateId": "slow",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Green",
    "model": {
        "default": "models/entity/electrike.geo.json"
    },
    "textures": {
        "default": "textures/entity/electrike.png"
    },
    "evolutions": [
        {
            "into": "oremon:manectric",
            "method": "level-up",
            "conditions": {
                "minLevel": 26,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default electrike;
