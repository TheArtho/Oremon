import { OremonData } from "../../types/OremonData";

const fletchling: OremonData = {
  "id": "oremon:fletchling",
  "name": "oremon.fletchling.name",
  "description": "oremon.fletchling.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 50,
    "def": 43,
    "atk_spe": 40,
    "def_spe": 38,
    "spd": 62
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
  "weight": 1.7,
  "baseExperience": 56,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:fletchinder",
      "method": "level-up",
      "conditions": {
        "minLevel": 17,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default fletchling;