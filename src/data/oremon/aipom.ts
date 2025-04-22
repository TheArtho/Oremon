import { OremonData } from "../../types/OremonData";

const aipom: OremonData = {
  "id": "oremon:aipom",
  "name": "oremon.aipom.name",
  "description": "oremon.aipom.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 70,
    "def": 55,
    "atk_spe": 40,
    "def_spe": 55,
    "spd": 85
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
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 11.5,
  "baseExperience": 72,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:ambipom",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:458",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default aipom;