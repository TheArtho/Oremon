import { OremonData } from "../../types/OremonData";

const fomantis: OremonData = {
  "id": "oremon:fomantis",
  "name": "oremon.fomantis.name",
  "description": "oremon.fomantis.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 55,
    "def": 35,
    "atk_spe": 50,
    "def_spe": 35,
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
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 1.5,
  "baseExperience": 50,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "model": {
    "default": "models/entity/fomantis.geo.json"
  },
  "textures": {
    "default": "textures/entity/fomantis.png"
  },
  "evolutions": [
    {
      "into": "oremon:lurantis",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "timeOfDay": "day",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default fomantis;