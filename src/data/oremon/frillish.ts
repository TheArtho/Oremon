import { OremonData } from "../../types/OremonData";

const frillish: OremonData = {
  "id": "oremon:frillish",
  "name": "oremon.frillish.name",
  "description": "oremon.frillish.description",
  "types": [
    "water",
    "ghost"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 40,
    "def": 50,
    "atk_spe": 65,
    "def_spe": 85,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 33,
  "baseExperience": 67,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "tentacles",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:jellicent",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default frillish;