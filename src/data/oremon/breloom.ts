import { OremonData } from "../../types/OremonData";

const breloom: OremonData = {
  "id": "oremon:breloom",
  "name": "oremon.breloom.name",
  "description": "oremon.breloom.description",
  "types": [
    "grass",
    "fighting"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 130,
    "def": 80,
    "atk_spe": 60,
    "def_spe": 60,
    "spd": 70
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "fairy",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 1.2,
  "weight": 39.2,
  "baseExperience": 161,
  "growthRateId": "fast-then-very-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "model": {
    "default": "models/entity/breloom.geo.json"
  },
  "textures": {
    "default": "textures/entity/breloom.png"
  },
  "evolutions": []
};

export default breloom;