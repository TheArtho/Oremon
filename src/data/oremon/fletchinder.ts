import { OremonData } from "../../types/OremonData";

const fletchinder: OremonData = {
  "id": "oremon:fletchinder",
  "name": "oremon.fletchinder.name",
  "description": "oremon.fletchinder.description",
  "types": [
    "fire",
    "flying"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 73,
    "def": 55,
    "atk_spe": 56,
    "def_spe": 52,
    "spd": 84
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.7,
  "weight": 16,
  "baseExperience": 134,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Red",
  "model": {
    "default": "models/entity/fletchinder.geo.json"
  },
  "textures": {
    "default": "textures/entity/fletchinder.png"
  },
  "evolutions": [
    {
      "into": "oremon:talonflame",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default fletchinder;