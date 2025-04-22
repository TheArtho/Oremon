import { OremonData } from "../../types/OremonData";

const chespin: OremonData = {
  "id": "oremon:chespin",
  "name": "oremon.chespin.name",
  "description": "oremon.chespin.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 56,
    "atk": 61,
    "def": 65,
    "atk_spe": 48,
    "def_spe": 45,
    "spd": 38
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 9,
  "baseExperience": 63,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:quilladin",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default chespin;