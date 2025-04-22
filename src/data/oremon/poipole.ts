import { OremonData } from "../../types/OremonData";

const poipole: OremonData = {
  "id": "oremon:poipole",
  "name": "oremon.poipole.name",
  "description": "oremon.poipole.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 67,
    "atk": 73,
    "def": 67,
    "atk_spe": 73,
    "def_spe": 67,
    "spd": 73
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
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 0.6,
  "weight": 1.8,
  "baseExperience": 189,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:naganadel",
      "method": "level-up",
      "conditions": {
        "knownMove": "move:406",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default poipole;