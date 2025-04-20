import { OremonData } from "../../types/OremonData";

const rufflet: OremonData = {
  "id": "oremon:rufflet",
  "name": "oremon.rufflet.name",
  "description": "oremon.rufflet.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 83,
    "def": 50,
    "atk_spe": 37,
    "def_spe": 50,
    "spd": 60
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
  "genderRate": 0,
  "catchRate": 190,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 10.5,
  "baseExperience": 70,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "White",
  "model": {
    "default": "models/entity/rufflet.geo.json"
  },
  "textures": {
    "default": "textures/entity/rufflet.png"
  },
  "evolutions": [
    {
      "into": "oremon:braviary",
      "method": "level-up",
      "conditions": {
        "minLevel": 54,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default rufflet;