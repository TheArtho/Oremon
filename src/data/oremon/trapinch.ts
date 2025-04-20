import { OremonData } from "../../types/OremonData";

const trapinch: OremonData = {
  "id": "oremon:trapinch",
  "name": "oremon.trapinch.name",
  "description": "oremon.trapinch.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 100,
    "def": 45,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 10
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
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 15,
  "baseExperience": 58,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Brown",
  "model": {
    "default": "models/entity/trapinch.geo.json"
  },
  "textures": {
    "default": "textures/entity/trapinch.png"
  },
  "evolutions": [
    {
      "into": "oremon:vibrava",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default trapinch;