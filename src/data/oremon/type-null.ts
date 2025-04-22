import { OremonData } from "../../types/OremonData";

const type_null: OremonData = {
  "id": "oremon:type-null",
  "name": "oremon.type-null.name",
  "description": "oremon.type-null.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 95,
    "def": 95,
    "atk_spe": 95,
    "def_spe": 95,
    "spd": 59
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 1.9,
  "weight": 120.5,
  "baseExperience": 107,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:silvally",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default type_null;