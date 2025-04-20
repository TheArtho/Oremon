import { OremonData } from "../../types/OremonData";

const silcoon: OremonData = {
  "id": "oremon:silcoon",
  "name": "oremon.silcoon.name",
  "description": "oremon.silcoon.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 35,
    "def": 55,
    "atk_spe": 25,
    "def_spe": 25,
    "spd": 15
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
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 10,
  "baseExperience": 72,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "White",
  "model": {
    "default": "models/entity/silcoon.geo.json"
  },
  "textures": {
    "default": "textures/entity/silcoon.png"
  },
  "evolutions": [
    {
      "into": "oremon:beautifly",
      "method": "level-up",
      "conditions": {
        "minLevel": 10,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default silcoon;