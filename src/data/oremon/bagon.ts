import { OremonData } from "../../types/OremonData";

const bagon: OremonData = {
  "id": "oremon:bagon",
  "name": "oremon.bagon.name",
  "description": "oremon.bagon.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 75,
    "def": 60,
    "atk_spe": 40,
    "def_spe": 30,
    "spd": 50
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
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 0.6,
  "weight": 42.1,
  "baseExperience": 60,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "model": {
    "default": "models/entity/bagon.geo.json"
  },
  "textures": {
    "default": "textures/entity/bagon.png"
  },
  "evolutions": [
    {
      "into": "oremon:shelgon",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default bagon;