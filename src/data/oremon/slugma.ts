import { OremonData } from "../../types/OremonData";

const slugma: OremonData = {
  "id": "oremon:slugma",
  "name": "oremon.slugma.name",
  "description": "oremon.slugma.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 40,
    "def": 40,
    "atk_spe": 70,
    "def_spe": 40,
    "spd": 20
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 35,
  "baseExperience": 50,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Red",
  "model": {
    "default": "models/entity/slugma.geo.json"
  },
  "textures": {
    "default": "textures/entity/slugma.png"
  },
  "evolutions": [
    {
      "into": "oremon:magcargo",
      "method": "level-up",
      "conditions": {
        "minLevel": 38,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default slugma;