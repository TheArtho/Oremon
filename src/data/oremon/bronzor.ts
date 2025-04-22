import { OremonData } from "../../types/OremonData";

const bronzor: OremonData = {
  "id": "oremon:bronzor",
  "name": "oremon.bronzor.name",
  "description": "oremon.bronzor.description",
  "types": [
    "steel",
    "psychic"
  ],
  "baseStats": {
    "hp": 57,
    "atk": 24,
    "def": 86,
    "atk_spe": 24,
    "def_spe": 86,
    "spd": 23
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
  "genderRate": -1,
  "catchRate": 255,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 60.5,
  "baseExperience": 60,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:bronzong",
      "method": "level-up",
      "conditions": {
        "minLevel": 33,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default bronzor;