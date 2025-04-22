import { OremonData } from "../../types/OremonData";

const wooper: OremonData = {
  "id": "oremon:wooper",
  "name": "oremon.wooper.name",
  "description": "oremon.wooper.description",
  "types": [
    "water",
    "ground"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 45,
    "def": 45,
    "atk_spe": 25,
    "def_spe": 25,
    "spd": 15
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
  "catchRate": 255,
  "eggGroups": [
    "water1",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 8.5,
  "baseExperience": 42,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:quagsire",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default wooper;