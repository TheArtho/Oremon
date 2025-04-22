import { OremonData } from "../../types/OremonData";

const spritzee: OremonData = {
  "id": "oremon:spritzee",
  "name": "oremon.spritzee.name",
  "description": "oremon.spritzee.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 78,
    "atk": 52,
    "def": 60,
    "atk_spe": 63,
    "def_spe": 65,
    "spd": 23
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
  "catchRate": 200,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 0.5,
  "baseExperience": 68,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:aromatisse",
      "method": "trade",
      "conditions": {
        "heldItem": "item:687",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default spritzee;