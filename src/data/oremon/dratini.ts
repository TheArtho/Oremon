import { OremonData } from "../../types/OremonData";

const dratini: OremonData = {
  "id": "oremon:dratini",
  "name": "oremon.dratini.name",
  "description": "oremon.dratini.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 41,
    "atk": 64,
    "def": 45,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 50
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
  "catchRate": 45,
  "eggGroups": [
    "water1",
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.8,
  "weight": 3.3,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Blue",
  "model": {
    "default": "models/entity/dratini.geo.json"
  },
  "textures": {
    "default": "textures/entity/dratini.png"
  },
  "evolutions": [
    {
      "into": "oremon:dragonair",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default dratini;