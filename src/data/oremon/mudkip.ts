import { OremonData } from "../../types/OremonData";

const mudkip: OremonData = {
  "id": "oremon:mudkip",
  "name": "oremon.mudkip.name",
  "description": "oremon.mudkip.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 70,
    "def": 50,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 40
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 7.6,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:marshtomp",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default mudkip;