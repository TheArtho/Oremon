import { OremonData } from "../../types/OremonData";

const lillipup: OremonData = {
  "id": "oremon:lillipup",
  "name": "oremon.lillipup.name",
  "description": "oremon.lillipup.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 60,
    "def": 45,
    "atk_spe": 25,
    "def_spe": 45,
    "spd": 55
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 4.1,
  "baseExperience": 55,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:herdier",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default lillipup;