import { OremonData } from "../../types/OremonData";

const sealeo: OremonData = {
  "id": "oremon:sealeo",
  "name": "oremon.sealeo.name",
  "description": "oremon.sealeo.description",
  "types": [
    "ice",
    "water"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 60,
    "def": 70,
    "atk_spe": 75,
    "def_spe": 70,
    "spd": 45
  },
  "evYield": {
    "hp": 2,
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
    "water1",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 87.6,
  "baseExperience": 144,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "model": {
    "default": "models/entity/sealeo.geo.json"
  },
  "textures": {
    "default": "textures/entity/sealeo.png"
  },
  "evolutions": [
    {
      "into": "oremon:walrein",
      "method": "level-up",
      "conditions": {
        "minLevel": 44,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default sealeo;