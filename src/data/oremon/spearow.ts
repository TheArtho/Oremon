import { OremonData } from "../../types/OremonData";

const spearow: OremonData = {
  "id": "oremon:spearow",
  "name": "oremon.spearow.name",
  "description": "oremon.spearow.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 60,
    "def": 30,
    "atk_spe": 31,
    "def_spe": 31,
    "spd": 70
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
  "baseExperience": 52,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Brown",
  "model": {
    "default": "models/entity/spearow.geo.json"
  },
  "textures": {
    "default": "textures/entity/spearow.png"
  },
  "evolutions": [
    {
      "into": "oremon:fearow",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default spearow;