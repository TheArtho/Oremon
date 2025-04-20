import { OremonData } from "../../types/OremonData";

const totodile: OremonData = {
  "id": "oremon:totodile",
  "name": "oremon.totodile.name",
  "description": "oremon.totodile.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 65,
    "def": 64,
    "atk_spe": 44,
    "def_spe": 48,
    "spd": 43
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
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 9.5,
  "baseExperience": 63,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "model": {
    "default": "models/entity/totodile.geo.json"
  },
  "textures": {
    "default": "textures/entity/totodile.png"
  },
  "evolutions": [
    {
      "into": "oremon:croconaw",
      "method": "level-up",
      "conditions": {
        "minLevel": 18,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default totodile;