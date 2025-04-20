import { OremonData } from "../../types/OremonData";

const goldeen: OremonData = {
  "id": "oremon:goldeen",
  "name": "oremon.goldeen.name",
  "description": "oremon.goldeen.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 67,
    "def": 60,
    "atk_spe": 35,
    "def_spe": 50,
    "spd": 63
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
    "water2"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 15,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Red",
  "model": {
    "default": "models/entity/goldeen.geo.json"
  },
  "textures": {
    "default": "textures/entity/goldeen.png"
  },
  "evolutions": [
    {
      "into": "oremon:seaking",
      "method": "level-up",
      "conditions": {
        "minLevel": 33,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default goldeen;