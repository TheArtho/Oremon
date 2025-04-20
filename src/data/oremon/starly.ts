import { OremonData } from "../../types/OremonData";

const starly: OremonData = {
  "id": "oremon:starly",
  "name": "oremon.starly.name",
  "description": "oremon.starly.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 55,
    "def": 30,
    "atk_spe": 30,
    "def_spe": 30,
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
  "catchRate": 255,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 2,
  "baseExperience": 49,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Brown",
  "model": {
    "default": "models/entity/starly.geo.json"
  },
  "textures": {
    "default": "textures/entity/starly.png"
  },
  "evolutions": [
    {
      "into": "oremon:staravia",
      "method": "level-up",
      "conditions": {
        "minLevel": 14,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default starly;