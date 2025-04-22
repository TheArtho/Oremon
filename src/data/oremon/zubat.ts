import { OremonData } from "../../types/OremonData";

const zubat: OremonData = {
  "id": "oremon:zubat",
  "name": "oremon.zubat.name",
  "description": "oremon.zubat.description",
  "types": [
    "poison",
    "flying"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 45,
    "def": 35,
    "atk_spe": 30,
    "def_spe": 40,
    "spd": 55
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
  "catchRate": 255,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.8,
  "weight": 7.5,
  "baseExperience": 49,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:golbat",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default zubat;