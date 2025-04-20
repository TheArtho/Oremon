import { OremonData } from "../../types/OremonData";

const duskull: OremonData = {
  "id": "oremon:duskull",
  "name": "oremon.duskull.name",
  "description": "oremon.duskull.description",
  "types": [
    "ghost"
  ],
  "baseStats": {
    "hp": 20,
    "atk": 40,
    "def": 90,
    "atk_spe": 30,
    "def_spe": 90,
    "spd": 25
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 25,
  "height": 0.8,
  "weight": 15,
  "baseExperience": 59,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Black",
  "model": {
    "default": "models/entity/duskull.geo.json"
  },
  "textures": {
    "default": "textures/entity/duskull.png"
  },
  "evolutions": [
    {
      "into": "oremon:dusclops",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default duskull;