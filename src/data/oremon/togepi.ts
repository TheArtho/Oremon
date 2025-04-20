import { OremonData } from "../../types/OremonData";

const togepi: OremonData = {
  "id": "oremon:togepi",
  "name": "oremon.togepi.name",
  "description": "oremon.togepi.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 20,
    "def": 65,
    "atk_spe": 40,
    "def_spe": 65,
    "spd": 20
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
  "genderRate": 1,
  "catchRate": 190,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 10,
  "height": 0.3,
  "weight": 1.5,
  "baseExperience": 49,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "White",
  "model": {
    "default": "models/entity/togepi.geo.json"
  },
  "textures": {
    "default": "textures/entity/togepi.png"
  },
  "evolutions": [
    {
      "into": "oremon:togetic",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default togepi;