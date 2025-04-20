import { OremonData } from "../../types/OremonData";

const lileep: OremonData = {
  "id": "oremon:lileep",
  "name": "oremon.lileep.name",
  "description": "oremon.lileep.description",
  "types": [
    "rock",
    "grass"
  ],
  "baseStats": {
    "hp": 66,
    "atk": 41,
    "def": 77,
    "atk_spe": 61,
    "def_spe": 87,
    "spd": 23
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 30,
  "height": 1,
  "weight": 23.8,
  "baseExperience": 71,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Purple",
  "model": {
    "default": "models/entity/lileep.geo.json"
  },
  "textures": {
    "default": "textures/entity/lileep.png"
  },
  "evolutions": [
    {
      "into": "oremon:cradily",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default lileep;