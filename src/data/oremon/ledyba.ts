import { OremonData } from "../../types/OremonData";

const ledyba: OremonData = {
  "id": "oremon:ledyba",
  "name": "oremon.ledyba.name",
  "description": "oremon.ledyba.description",
  "types": [
    "bug",
    "flying"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 20,
    "def": 30,
    "atk_spe": 40,
    "def_spe": 80,
    "spd": 55
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 1,
  "weight": 10.8,
  "baseExperience": 53,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:ledian",
      "method": "level-up",
      "conditions": {
        "minLevel": 18,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default ledyba;