import { OremonData } from "../../types/OremonData";

const charmander: OremonData = {
  "id": "oremon:charmander",
  "name": "oremon.charmander.name",
  "description": "oremon.charmander.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 39,
    "atk": 52,
    "def": 43,
    "atk_spe": 60,
    "def_spe": 50,
    "spd": 65
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 8.5,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/charmander.geo.json"
  },
  "textures": {
    "default": "textures/entity/charmander.png"
  },
  "evolutions": [
    {
      "into": "oremon:charmeleon",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default charmander;