const pupitar = {
    "id": "oremon:pupitar",
    "name": "oremon.pupitar.name",
    "description": "oremon.pupitar.description",
    "types": [
        "rock",
        "ground"
    ],
    "baseStats": {
        "hp": 70,
        "atk": 84,
        "def": 70,
        "atk_spe": 65,
        "def_spe": 70,
        "spd": 51
    },
    "evYield": {
        "hp": 0,
        "atk": 2,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 45,
    "eggGroups": [
        "monster"
    ],
    "hatchCounter": 40,
    "height": 1.2,
    "weight": 152,
    "baseExperience": 144,
    "growthRateId": "slow",
    "generationId": 2,
    "isBaby": false,
    "hasGenderDifferences": false,
    "formSwitchable": false,
    "shape": "squiggle",
    "color": "Gray",
    "model": {
        "default": "models/entity/pupitar.geo.json"
    },
    "textures": {
        "default": "textures/entity/pupitar.png"
    },
    "evolutions": [
        {
            "into": "oremon:tyranitar",
            "method": "level-up",
            "conditions": {
                "minLevel": 55,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default pupitar;
