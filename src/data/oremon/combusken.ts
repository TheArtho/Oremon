import { OremonData } from "../../types/OremonData";

const combusken: OremonData = {
  "id": "oremon:combusken",
  "name": "oremon.combusken.name",
  "description": "oremon.combusken.description",
  "types": [
    "fire",
    "fighting"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 85,
    "def": 60,
    "atk_spe": 85,
    "def_spe": 60,
    "spd": 55
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 19.5,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:blaziken",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default combusken;