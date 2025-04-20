import { OremonData } from "../../types/OremonData";

const flaaffy: OremonData = {
  "id": "oremon:flaaffy",
  "name": "oremon.flaaffy.name",
  "description": "oremon.flaaffy.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 55,
    "def": 55,
    "atk_spe": 80,
    "def_spe": 60,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 13.3,
  "baseExperience": 128,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "model": {
    "default": "models/entity/flaaffy.geo.json"
  },
  "textures": {
    "default": "textures/entity/flaaffy.png"
  },
  "evolutions": [
    {
      "into": "oremon:ampharos",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default flaaffy;