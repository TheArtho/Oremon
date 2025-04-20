import { OremonData } from "../../types/OremonData";

const yamask: OremonData = {
  "id": "oremon:yamask",
  "name": "oremon.yamask.name",
  "description": "oremon.yamask.description",
  "types": [
    "ghost"
  ],
  "baseStats": {
    "hp": 38,
    "atk": 30,
    "def": 85,
    "atk_spe": 55,
    "def_spe": 65,
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
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "mineral",
    "indeterminate"
  ],
  "hatchCounter": 25,
  "height": 0.5,
  "weight": 1.5,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Black",
  "model": {
    "default": "models/entity/yamask.geo.json"
  },
  "textures": {
    "default": "textures/entity/yamask.png"
  },
  "evolutions": [
    {
      "into": "oremon:cofagrigus",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default yamask;