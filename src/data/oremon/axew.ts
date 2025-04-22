import { OremonData } from "../../types/OremonData";

const axew: OremonData = {
  "id": "oremon:axew",
  "name": "oremon.axew.name",
  "description": "oremon.axew.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 46,
    "atk": 87,
    "def": 60,
    "atk_spe": 30,
    "def_spe": 40,
    "spd": 57
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
  "catchRate": 75,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.6,
  "weight": 18,
  "baseExperience": 64,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:fraxure",
      "method": "level-up",
      "conditions": {
        "minLevel": 38,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default axew;