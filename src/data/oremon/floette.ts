import { OremonData } from "../../types/OremonData";

const floette: OremonData = {
  "id": "oremon:floette",
  "name": "oremon.floette.name",
  "description": "oremon.floette.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 54,
    "atk": 45,
    "def": 47,
    "atk_spe": 75,
    "def_spe": 98,
    "spd": 52
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 120,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 0.9,
  "baseExperience": 130,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:florges",
      "method": "use-item",
      "conditions": {
        "item": "item:107",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default floette;