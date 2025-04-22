import { OremonData } from "../../types/OremonData";

const munchlax: OremonData = {
  "id": "oremon:munchlax",
  "name": "oremon.munchlax.name",
  "description": "oremon.munchlax.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 135,
    "atk": 85,
    "def": 40,
    "atk_spe": 40,
    "def_spe": 85,
    "spd": 5
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
  "genderRate": 1,
  "catchRate": 50,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 40,
  "height": 0.6,
  "weight": 105,
  "baseExperience": 78,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Black",
  "evolutions": [
    {
      "into": "oremon:snorlax",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default munchlax;