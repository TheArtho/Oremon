import { OremonData } from "../../types/OremonData";

const grotle: OremonData = {
  "id": "oremon:grotle",
  "name": "oremon.grotle.name",
  "description": "oremon.grotle.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 89,
    "def": 85,
    "atk_spe": 55,
    "def_spe": 65,
    "spd": 36
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 97,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:torterra",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default grotle;