import { OremonData } from "../../types/OremonData";

const kricketot: OremonData = {
  "id": "oremon:kricketot",
  "name": "oremon.kricketot.name",
  "description": "oremon.kricketot.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 37,
    "atk": 25,
    "def": 41,
    "atk_spe": 25,
    "def_spe": 41,
    "spd": 25
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
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 2.2,
  "baseExperience": 39,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:kricketune",
      "method": "level-up",
      "conditions": {
        "minLevel": 10,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bug-bite",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "struggle-bug",
      "method": "level_up",
      "level": 6
    }
  ]
};

export default kricketot;
