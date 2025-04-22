import { OremonData } from "../../types/OremonData";

const pumpkaboo_average: OremonData = {
  "id": "oremon:pumpkaboo-average",
  "name": "oremon.pumpkaboo-average.name",
  "description": "oremon.pumpkaboo-average.description",
  "types": [
    "ghost",
    "grass"
  ],
  "baseStats": {
    "hp": 49,
    "atk": 66,
    "def": 70,
    "atk_spe": 44,
    "def_spe": 55,
    "spd": 51
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
  "catchRate": 120,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 5,
  "baseExperience": 67,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:gourgeist",
      "method": "trade",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pumpkaboo_average;