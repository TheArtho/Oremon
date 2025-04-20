import { OremonData } from "../../types/OremonData";

const riolu: OremonData = {
  "id": "oremon:riolu",
  "name": "oremon.riolu.name",
  "description": "oremon.riolu.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 70,
    "def": 40,
    "atk_spe": 35,
    "def_spe": 40,
    "spd": 60
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
  "genderRate": 1,
  "catchRate": 75,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 25,
  "height": 0.7,
  "weight": 20.2,
  "baseExperience": 57,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/riolu.geo.json"
  },
  "textures": {
    "default": "textures/entity/riolu.png"
  },
  "evolutions": [
    {
      "into": "oremon:lucario",
      "method": "level-up",
      "conditions": {
        "timeOfDay": "day",
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default riolu;