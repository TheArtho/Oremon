import { OremonData } from "../../types/OremonData";

const dusclops: OremonData = {
  "id": "oremon:dusclops",
  "name": "oremon.dusclops.name",
  "description": "oremon.dusclops.description",
  "types": [
    "ghost"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 70,
    "def": 130,
    "atk_spe": 60,
    "def_spe": 130,
    "spd": 25
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
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 25,
  "height": 1.6,
  "weight": 30.6,
  "baseExperience": 159,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Black",
  "evolutions": [
    {
      "into": "oremon:dusknoir",
      "method": "trade",
      "conditions": {
        "heldItem": "item:302",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default dusclops;