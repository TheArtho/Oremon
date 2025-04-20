const kadabra = {
    "id": "oremon:kadabra",
    "name": "oremon.kadabra.name",
    "description": "oremon.kadabra.description",
    "types": [
        "psychic"
    ],
    "baseStats": {
        "hp": 40,
        "atk": 35,
        "def": 30,
        "atk_spe": 120,
        "def_spe": 70,
        "spd": 105
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
    "genderRate": 2,
    "catchRate": 100,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 1.3,
    "weight": 56.5,
    "baseExperience": 140,
    "growthRateId": "medium-slow",
    "generationId": 1,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "upright",
    "color": "Brown",
    "model": {
        "default": "models/entity/kadabra.geo.json"
    },
    "textures": {
        "default": "textures/entity/kadabra.png"
    },
    "evolutions": [
        {
            "into": "oremon:alakazam",
            "method": "trade",
            "conditions": {
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default kadabra;
