import { OremonData } from "../../types/OremonData";

const mankey: OremonData = {
  "id": "oremon:mankey",
  "name": "oremon.mankey.name",
  "description": "oremon.mankey.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 80,
    "def": 35,
    "atk_spe": 35,
    "def_spe": 45,
    "spd": 70
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
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 28,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/mankey.geo.json"
  },
  "textures": {
    "default": "textures/entity/mankey.png"
  },
  "evolutions": [
    {
      "into": "oremon:primeape",
      "method": "level-up",
      "conditions": {
        "minLevel": 28,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default mankey;