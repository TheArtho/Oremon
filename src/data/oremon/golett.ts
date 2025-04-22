import { OremonData } from "../../types/OremonData";

const golett: OremonData = {
  "id": "oremon:golett",
  "name": "oremon.golett.name",
  "description": "oremon.golett.description",
  "types": [
    "ground",
    "ghost"
  ],
  "baseStats": {
    "hp": 59,
    "atk": 74,
    "def": 50,
    "atk_spe": 35,
    "def_spe": 50,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 190,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 25,
  "height": 1,
  "weight": 92,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:golurk",
      "method": "level-up",
      "conditions": {
        "minLevel": 43,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default golett;