import { OremonData } from "../../types/OremonData";

const servine: OremonData = {
  "id": "oremon:servine",
  "name": "oremon.servine.name",
  "description": "oremon.servine.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 75,
    "atk_spe": 60,
    "def_spe": 75,
    "spd": 83
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 16,
  "baseExperience": 145,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:serperior",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default servine;