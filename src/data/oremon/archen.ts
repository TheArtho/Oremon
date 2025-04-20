import { OremonData } from "../../types/OremonData";

const archen: OremonData = {
  "id": "oremon:archen",
  "name": "oremon.archen.name",
  "description": "oremon.archen.description",
  "types": [
    "rock",
    "flying"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 112,
    "def": 45,
    "atk_spe": 74,
    "def_spe": 45,
    "spd": 70
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "flying",
    "water3"
  ],
  "hatchCounter": 30,
  "height": 0.5,
  "weight": 9.5,
  "baseExperience": 71,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Yellow",
  "model": {
    "default": "models/entity/archen.geo.json"
  },
  "textures": {
    "default": "textures/entity/archen.png"
  },
  "evolutions": [
    {
      "into": "oremon:archeops",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default archen;