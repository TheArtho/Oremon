import { OremonData } from "../../types/OremonData";

const swadloon: OremonData = {
  "id": "oremon:swadloon",
  "name": "oremon.swadloon.name",
  "description": "oremon.swadloon.description",
  "types": [
    "bug",
    "grass"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 63,
    "def": 90,
    "atk_spe": 50,
    "def_spe": 80,
    "spd": 42
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 7.3,
  "baseExperience": 133,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:leavanny",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default swadloon;