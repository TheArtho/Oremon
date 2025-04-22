import { OremonData } from "../../types/OremonData";

const boldore: OremonData = {
  "id": "oremon:boldore",
  "name": "oremon.boldore.name",
  "description": "oremon.boldore.description",
  "types": [
    "rock"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 105,
    "def": 105,
    "atk_spe": 50,
    "def_spe": 40,
    "spd": 20
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 15,
  "height": 0.9,
  "weight": 102,
  "baseExperience": 137,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "tentacles",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:gigalith",
      "method": "trade",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default boldore;