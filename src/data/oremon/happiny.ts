import { OremonData } from "../../types/OremonData";

const happiny: OremonData = {
  "id": "oremon:happiny",
  "name": "oremon.happiny.name",
  "description": "oremon.happiny.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 5,
    "def": 5,
    "atk_spe": 15,
    "def_spe": 65,
    "spd": 30
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
  "genderRate": 8,
  "catchRate": 130,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 40,
  "height": 0.6,
  "weight": 24.4,
  "baseExperience": 110,
  "growthRateId": "fast",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:chansey",
      "method": "level-up",
      "conditions": {
        "heldItem": "item:110",
        "timeOfDay": "day",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default happiny;