import { OremonData } from "../../types/OremonData";

const machoke: OremonData = {
  "id": "oremon:machoke",
  "name": "oremon.machoke.name",
  "description": "oremon.machoke.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 100,
    "def": 70,
    "atk_spe": 50,
    "def_spe": 60,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 2,
  "catchRate": 90,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 1.5,
  "weight": 70.5,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:machamp",
      "method": "trade",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default machoke;