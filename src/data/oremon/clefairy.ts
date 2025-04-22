import { OremonData } from "../../types/OremonData";

const clefairy: OremonData = {
  "id": "oremon:clefairy",
  "name": "oremon.clefairy.name",
  "description": "oremon.clefairy.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 45,
    "def": 48,
    "atk_spe": 60,
    "def_spe": 65,
    "spd": 35
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 6,
  "catchRate": 150,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.6,
  "weight": 7.5,
  "baseExperience": 113,
  "growthRateId": "fast",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:clefable",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default clefairy;