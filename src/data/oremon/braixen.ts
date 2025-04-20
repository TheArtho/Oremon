import { OremonData } from "../../types/OremonData";

const braixen: OremonData = {
  "id": "oremon:braixen",
  "name": "oremon.braixen.name",
  "description": "oremon.braixen.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 59,
    "atk": 59,
    "def": 58,
    "atk_spe": 90,
    "def_spe": 70,
    "spd": 73
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
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
  "height": 1,
  "weight": 14.5,
  "baseExperience": 143,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/braixen.geo.json"
  },
  "textures": {
    "default": "textures/entity/braixen.png"
  },
  "evolutions": [
    {
      "into": "oremon:delphox",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default braixen;