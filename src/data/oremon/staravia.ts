import { OremonData } from "../../types/OremonData";

const staravia: OremonData = {
  "id": "oremon:staravia",
  "name": "oremon.staravia.name",
  "description": "oremon.staravia.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 75,
    "def": 50,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 15.5,
  "baseExperience": 119,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Brown",
  "model": {
    "default": "models/entity/staravia.geo.json"
  },
  "textures": {
    "default": "textures/entity/staravia.png"
  },
  "evolutions": [
    {
      "into": "oremon:staraptor",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default staravia;