const shinx = {
    "id": "oremon:shinx",
    "name": "oremon.shinx.name",
    "description": "oremon.shinx.description",
    "types": [
        "electric"
    ],
    "baseStats": {
        "hp": 45,
        "atk": 65,
        "def": 34,
        "atk_spe": 40,
        "def_spe": 34,
        "spd": 45
    },
    "evYield": {
        "hp": 0,
        "atk": 1,
        "def": 0,
        "atk_spe": 0,
        "def_spe": 0,
        "spd": 0
    },
    "abilities": {},
    "genderRate": 4,
    "catchRate": 235,
    "eggGroups": [
        "ground"
    ],
    "hatchCounter": 20,
    "height": 0.5,
    "weight": 9.5,
    "baseExperience": 53,
    "growthRateId": "medium-slow",
    "generationId": 4,
    "isBaby": false,
    "hasGenderDifferences": true,
    "formSwitchable": false,
    "shape": "quadruped",
    "color": "Blue",
    "model": {
        "default": "models/entity/shinx.geo.json"
    },
    "textures": {
        "default": "textures/entity/shinx.png"
    },
    "evolutions": [
        {
            "into": "oremon:luxio",
            "method": "level-up",
            "conditions": {
                "minLevel": 15,
                "needsOverworldRain": false,
                "turnUpsideDown": false
            }
        }
    ]
};
export default shinx;
