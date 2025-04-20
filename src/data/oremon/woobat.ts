import { OremonData } from "../../types/OremonData";

const woobat: OremonData = {
  "id": "oremon:woobat",
  "name": "oremon.woobat.name",
  "description": "oremon.woobat.description",
  "types": [
    "psychic",
    "flying"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 45,
    "def": 43,
    "atk_spe": 55,
    "def_spe": 43,
    "spd": 72
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
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "flying",
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 2.1,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Blue",
  "model": {
    "default": "models/entity/woobat.geo.json"
  },
  "textures": {
    "default": "textures/entity/woobat.png"
  },
  "evolutions": [
    {
      "into": "oremon:swoobat",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default woobat;