import { OremonData } from "../../types/OremonData";

const graveler: OremonData = {
  "id": "oremon:graveler",
  "name": "oremon.graveler.name",
  "description": "oremon.graveler.description",
  "types": [
    "rock",
    "ground"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 95,
    "def": 115,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 35
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 15,
  "height": 1,
  "weight": 105,
  "baseExperience": 137,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Brown",
  "model": {
    "default": "models/entity/graveler.geo.json"
  },
  "textures": {
    "default": "textures/entity/graveler.png"
  },
  "evolutions": [
    {
      "into": "oremon:golem",
      "method": "trade",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default graveler;