import { OremonData } from "../../types/OremonData";

const azurill: OremonData = {
  "id": "oremon:azurill",
  "name": "oremon.azurill.name",
  "description": "oremon.azurill.description",
  "types": [
    "normal",
    "fairy"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 20,
    "def": 40,
    "atk_spe": 20,
    "def_spe": 40,
    "spd": 20
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 6,
  "catchRate": 150,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 10,
  "height": 0.2,
  "weight": 2,
  "baseExperience": 38,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:marill",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default azurill;