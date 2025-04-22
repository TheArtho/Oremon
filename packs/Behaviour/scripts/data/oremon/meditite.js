const meditite = {
    "id": "oremon:meditite",
    "name": "oremon.meditite.name",
    "description": "oremon.meditite.description",
    "types": [
        "fighting",
        "psychic"
    ],
    "baseStats": {
        "hp": 30,
        "atk": 40,
        "def": 55,
        "atk_spe": 40,
        "def_spe": 55,
        "spd": 60
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
    "catchRate": 180,
    "eggGroups": [
        "humanshape"
    ],
    "hatchCounter": 20,
    "height": 0.6,
    "weight": 11.2,
    "baseExperience": 56,
    "growthRateId": "medium",
    "generationId": 3,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "humanoid",
    "color": "Blue",
    "evolutions": [
        {
            "into": "oremon:medicham",
            "method": "level-up",
            "conditions": {
                "minLevel": 37,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default meditite;
