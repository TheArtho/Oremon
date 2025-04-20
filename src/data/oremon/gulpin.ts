import { OremonData } from "../../types/OremonData";

const gulpin: OremonData = {
  "id": "oremon:gulpin",
  "name": "oremon.gulpin.name",
  "description": "oremon.gulpin.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 43,
    "def": 53,
    "atk_spe": 43,
    "def_spe": 53,
    "spd": 40
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 225,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 10.3,
  "baseExperience": 60,
  "growthRateId": "fast-then-very-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Green",
  "model": {
    "default": "models/entity/gulpin.geo.json"
  },
  "textures": {
    "default": "textures/entity/gulpin.png"
  },
  "evolutions": [
    {
      "into": "oremon:swalot",
      "method": "level-up",
      "conditions": {
        "minLevel": 26,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default gulpin;