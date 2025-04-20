import { OremonData } from "../../types/OremonData";

const chansey: OremonData = {
  "id": "oremon:chansey",
  "name": "oremon.chansey.name",
  "description": "oremon.chansey.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 250,
    "atk": 5,
    "def": 5,
    "atk_spe": 35,
    "def_spe": 105,
    "spd": 50
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 30,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 40,
  "height": 1.1,
  "weight": 34.6,
  "baseExperience": 395,
  "growthRateId": "fast",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "model": {
    "default": "models/entity/chansey.geo.json"
  },
  "textures": {
    "default": "textures/entity/chansey.png"
  },
  "evolutions": [
    {
      "into": "oremon:blissey",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default chansey;