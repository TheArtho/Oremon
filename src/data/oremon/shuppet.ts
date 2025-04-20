import { OremonData } from "../../types/OremonData";

const shuppet: OremonData = {
  "id": "oremon:shuppet",
  "name": "oremon.shuppet.name",
  "description": "oremon.shuppet.description",
  "types": [
    "ghost"
  ],
  "baseStats": {
    "hp": 44,
    "atk": 75,
    "def": 35,
    "atk_spe": 63,
    "def_spe": 33,
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
  "catchRate": 225,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 25,
  "height": 0.6,
  "weight": 2.3,
  "baseExperience": 59,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Black",
  "model": {
    "default": "models/entity/shuppet.geo.json"
  },
  "textures": {
    "default": "textures/entity/shuppet.png"
  },
  "evolutions": [
    {
      "into": "oremon:banette",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default shuppet;