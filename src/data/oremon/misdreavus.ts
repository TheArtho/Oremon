import { OremonData } from "../../types/OremonData";

const misdreavus: OremonData = {
  "id": "oremon:misdreavus",
  "name": "oremon.misdreavus.name",
  "description": "oremon.misdreavus.description",
  "types": [
    "ghost"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 60,
    "atk_spe": 85,
    "def_spe": 85,
    "spd": 85
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
  "catchRate": 45,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 25,
  "height": 0.7,
  "weight": 1,
  "baseExperience": 87,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:mismagius",
      "method": "use-item",
      "conditions": {
        "item": "item:108",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default misdreavus;