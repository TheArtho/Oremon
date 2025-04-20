import { OremonData } from "../../types/OremonData";

const hippopotas: OremonData = {
  "id": "oremon:hippopotas",
  "name": "oremon.hippopotas.name",
  "description": "oremon.hippopotas.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 68,
    "atk": 72,
    "def": 78,
    "atk_spe": 38,
    "def_spe": 42,
    "spd": 32
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 140,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 30,
  "height": 0.8,
  "weight": 49.5,
  "baseExperience": 66,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "model": {
    "default": "models/entity/hippopotas.geo.json"
  },
  "textures": {
    "default": "textures/entity/hippopotas.png"
  },
  "evolutions": [
    {
      "into": "oremon:hippowdon",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default hippopotas;