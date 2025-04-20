import { OremonData } from "../../types/OremonData";

const phanpy: OremonData = {
  "id": "oremon:phanpy",
  "name": "oremon.phanpy.name",
  "description": "oremon.phanpy.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 60,
    "def": 60,
    "atk_spe": 40,
    "def_spe": 40,
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
  "catchRate": 120,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 33.5,
  "baseExperience": 66,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "model": {
    "default": "models/entity/phanpy.geo.json"
  },
  "textures": {
    "default": "textures/entity/phanpy.png"
  },
  "evolutions": [
    {
      "into": "oremon:donphan",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default phanpy;