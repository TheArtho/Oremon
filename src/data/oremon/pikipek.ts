import { OremonData } from "../../types/OremonData";

const pikipek: OremonData = {
  "id": "oremon:pikipek",
  "name": "oremon.pikipek.name",
  "description": "oremon.pikipek.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 75,
    "def": 30,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 65
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
  "catchRate": 255,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 1.2,
  "baseExperience": 53,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Black",
  "model": {
    "default": "models/entity/pikipek.geo.json"
  },
  "textures": {
    "default": "textures/entity/pikipek.png"
  },
  "evolutions": [
    {
      "into": "oremon:trumbeak",
      "method": "level-up",
      "conditions": {
        "minLevel": 14,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pikipek;