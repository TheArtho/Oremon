import { OremonData } from "../../types/OremonData";

const skiploom: OremonData = {
  "id": "oremon:skiploom",
  "name": "oremon.skiploom.name",
  "description": "oremon.skiploom.description",
  "types": [
    "grass",
    "flying"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 45,
    "def": 50,
    "atk_spe": 45,
    "def_spe": 65,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "fairy",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 1,
  "baseExperience": 119,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:jumpluff",
      "method": "level-up",
      "conditions": {
        "minLevel": 27,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default skiploom;