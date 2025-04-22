import { OremonData } from "../../types/OremonData";

const cherubi: OremonData = {
  "id": "oremon:cherubi",
  "name": "oremon.cherubi.name",
  "description": "oremon.cherubi.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 35,
    "def": 45,
    "atk_spe": 62,
    "def_spe": 53,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "fairy",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 3.3,
  "baseExperience": 55,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:cherrim",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default cherubi;