import { OremonData } from "../../types/OremonData";

const sandile: OremonData = {
  "id": "oremon:sandile",
  "name": "oremon.sandile.name",
  "description": "oremon.sandile.description",
  "types": [
    "ground",
    "dark"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 72,
    "def": 35,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 65
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
  "catchRate": 180,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 15.2,
  "baseExperience": 58,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "model": {
    "default": "models/entity/sandile.geo.json"
  },
  "textures": {
    "default": "textures/entity/sandile.png"
  },
  "evolutions": [
    {
      "into": "oremon:krokorok",
      "method": "level-up",
      "conditions": {
        "minLevel": 29,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default sandile;