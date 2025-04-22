import { OremonData } from "../../types/OremonData";

const cubone: OremonData = {
  "id": "oremon:cubone",
  "name": "oremon.cubone.name",
  "description": "oremon.cubone.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 50,
    "def": 95,
    "atk_spe": 40,
    "def_spe": 50,
    "spd": 35
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
  "catchRate": 190,
  "eggGroups": [
    "monster"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 6.5,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:marowak",
      "method": "level-up",
      "conditions": {
        "minLevel": 28,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:marowak",
      "method": "level-up",
      "conditions": {
        "minLevel": 28,
        "timeOfDay": "night",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default cubone;