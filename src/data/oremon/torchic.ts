import { OremonData } from "../../types/OremonData";

const torchic: OremonData = {
  "id": "oremon:torchic",
  "name": "oremon.torchic.name",
  "description": "oremon.torchic.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 60,
    "def": 40,
    "atk_spe": 70,
    "def_spe": 50,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 2.5,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Red",
  "model": {
    "default": "models/entity/torchic.geo.json"
  },
  "textures": {
    "default": "textures/entity/torchic.png"
  },
  "evolutions": [
    {
      "into": "oremon:combusken",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default torchic;