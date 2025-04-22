import { OremonData } from "../../types/OremonData";

const blitzle: OremonData = {
  "id": "oremon:blitzle",
  "name": "oremon.blitzle.name",
  "description": "oremon.blitzle.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 60,
    "def": 32,
    "atk_spe": 50,
    "def_spe": 32,
    "spd": 76
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 29.8,
  "baseExperience": 59,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Black",
  "evolutions": [
    {
      "into": "oremon:zebstrika",
      "method": "level-up",
      "conditions": {
        "minLevel": 27,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default blitzle;