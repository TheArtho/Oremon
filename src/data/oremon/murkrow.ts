import { OremonData } from "../../types/OremonData";

const murkrow: OremonData = {
  "id": "oremon:murkrow",
  "name": "oremon.murkrow.name",
  "description": "oremon.murkrow.description",
  "types": [
    "dark",
    "flying"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 85,
    "def": 42,
    "atk_spe": 85,
    "def_spe": 42,
    "spd": 91
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
  "catchRate": 30,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 2.1,
  "baseExperience": 81,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Black",
  "evolutions": [
    {
      "into": "oremon:honchkrow",
      "method": "use-item",
      "conditions": {
        "item": "item:108",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default murkrow;