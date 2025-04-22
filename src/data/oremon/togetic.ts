import { OremonData } from "../../types/OremonData";

const togetic: OremonData = {
  "id": "oremon:togetic",
  "name": "oremon.togetic.name",
  "description": "oremon.togetic.description",
  "types": [
    "fairy",
    "flying"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 40,
    "def": 85,
    "atk_spe": 80,
    "def_spe": 105,
    "spd": 40
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
  "genderRate": 1,
  "catchRate": 75,
  "eggGroups": [
    "flying",
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.6,
  "weight": 3.2,
  "baseExperience": 142,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:togekiss",
      "method": "use-item",
      "conditions": {
        "item": "item:107",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default togetic;