import { OremonData } from "../../types/OremonData";

const croagunk: OremonData = {
  "id": "oremon:croagunk",
  "name": "oremon.croagunk.name",
  "description": "oremon.croagunk.description",
  "types": [
    "poison",
    "fighting"
  ],
  "baseStats": {
    "hp": 48,
    "atk": 61,
    "def": 40,
    "atk_spe": 61,
    "def_spe": 40,
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
  "catchRate": 140,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 10,
  "height": 0.7,
  "weight": 23,
  "baseExperience": 60,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "model": {
    "default": "models/entity/croagunk.geo.json"
  },
  "textures": {
    "default": "textures/entity/croagunk.png"
  },
  "evolutions": [
    {
      "into": "oremon:toxicroak",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default croagunk;