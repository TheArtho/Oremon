import { OremonData } from "../../types/OremonData";

const koffing: OremonData = {
  "id": "oremon:koffing",
  "name": "oremon.koffing.name",
  "description": "oremon.koffing.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 65,
    "def": 95,
    "atk_spe": 60,
    "def_spe": 45,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 1,
  "baseExperience": 68,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Purple",
  "model": {
    "default": "models/entity/koffing.geo.json"
  },
  "textures": {
    "default": "textures/entity/koffing.png"
  },
  "evolutions": [
    {
      "into": "oremon:weezing",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default koffing;