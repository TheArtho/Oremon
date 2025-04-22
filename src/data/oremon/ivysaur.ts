import { OremonData } from "../../types/OremonData";

const ivysaur: OremonData = {
  "id": "oremon:ivysaur",
  "name": "oremon.ivysaur.name",
  "description": "oremon.ivysaur.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 62,
    "def": 63,
    "atk_spe": 80,
    "def_spe": 80,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 13,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:venusaur",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default ivysaur;