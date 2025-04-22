import { OremonData } from "../../types/OremonData";

const seedot: OremonData = {
  "id": "oremon:seedot",
  "name": "oremon.seedot.name",
  "description": "oremon.seedot.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 40,
    "def": 50,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 30
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
  "catchRate": 255,
  "eggGroups": [
    "ground",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 4,
  "baseExperience": 44,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:nuzleaf",
      "method": "level-up",
      "conditions": {
        "minLevel": 14,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default seedot;