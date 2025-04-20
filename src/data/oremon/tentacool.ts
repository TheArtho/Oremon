import { OremonData } from "../../types/OremonData";

const tentacool: OremonData = {
  "id": "oremon:tentacool",
  "name": "oremon.tentacool.name",
  "description": "oremon.tentacool.description",
  "types": [
    "water",
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 40,
    "def": 35,
    "atk_spe": 50,
    "def_spe": 100,
    "spd": 70
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 45.5,
  "baseExperience": 67,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "tentacles",
  "color": "Blue",
  "model": {
    "default": "models/entity/tentacool.geo.json"
  },
  "textures": {
    "default": "textures/entity/tentacool.png"
  },
  "evolutions": [
    {
      "into": "oremon:tentacruel",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default tentacool;