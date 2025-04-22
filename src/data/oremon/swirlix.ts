import { OremonData } from "../../types/OremonData";

const swirlix: OremonData = {
  "id": "oremon:swirlix",
  "name": "oremon.swirlix.name",
  "description": "oremon.swirlix.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 48,
    "def": 66,
    "atk_spe": 59,
    "def_spe": 57,
    "spd": 49
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 200,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 3.5,
  "baseExperience": 68,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:slurpuff",
      "method": "trade",
      "conditions": {
        "heldItem": "item:686",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default swirlix;