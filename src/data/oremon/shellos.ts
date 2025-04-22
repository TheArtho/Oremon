import { OremonData } from "../../types/OremonData";

const shellos: OremonData = {
  "id": "oremon:shellos",
  "name": "oremon.shellos.name",
  "description": "oremon.shellos.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 76,
    "atk": 48,
    "def": 48,
    "atk_spe": 57,
    "def_spe": 62,
    "spd": 34
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "water1",
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 6.3,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:gastrodon",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default shellos;