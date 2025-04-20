import { OremonData } from "../../types/OremonData";

const ducklett: OremonData = {
  "id": "oremon:ducklett",
  "name": "oremon.ducklett.name",
  "description": "oremon.ducklett.description",
  "types": [
    "water",
    "flying"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 44,
    "def": 50,
    "atk_spe": 44,
    "def_spe": 50,
    "spd": 55
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
  "catchRate": 190,
  "eggGroups": [
    "water1",
    "flying"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 5.5,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Blue",
  "model": {
    "default": "models/entity/ducklett.geo.json"
  },
  "textures": {
    "default": "textures/entity/ducklett.png"
  },
  "evolutions": [
    {
      "into": "oremon:swanna",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default ducklett;