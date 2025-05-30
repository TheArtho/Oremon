import { OremonData } from "../../types/OremonData";

const kakuna: OremonData = {
  "id": "oremon:kakuna",
  "name": "oremon.kakuna.name",
  "description": "oremon.kakuna.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 25,
    "def": 50,
    "atk_spe": 25,
    "def_spe": 25,
    "spd": 35
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
  "height": 0.6,
  "weight": 10,
  "baseExperience": 72,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:beedrill",
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
      "id": "harden",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "harden",
      "method": "level_up",
      "level": 1
    }
  ]
};

export default kakuna;
