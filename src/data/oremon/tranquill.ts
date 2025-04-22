import { OremonData } from "../../types/OremonData";

const tranquill: OremonData = {
  "id": "oremon:tranquill",
  "name": "oremon.tranquill.name",
  "description": "oremon.tranquill.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 77,
    "def": 62,
    "atk_spe": 50,
    "def_spe": 42,
    "spd": 65
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
  "catchRate": 120,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 15,
  "baseExperience": 125,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:unfezant",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default tranquill;