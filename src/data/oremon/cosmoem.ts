import { OremonData } from "../../types/OremonData";

const cosmoem: OremonData = {
  "id": "oremon:cosmoem",
  "name": "oremon.cosmoem.name",
  "description": "oremon.cosmoem.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 43,
    "atk": 29,
    "def": 131,
    "atk_spe": 29,
    "def_spe": 131,
    "spd": 37
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 0.1,
  "weight": 999.9,
  "baseExperience": 140,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:solgaleo",
      "method": "level-up",
      "conditions": {
        "minLevel": 53,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:lunala",
      "method": "level-up",
      "conditions": {
        "minLevel": 53,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default cosmoem;