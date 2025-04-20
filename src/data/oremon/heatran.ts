import { OremonData } from "../../types/OremonData";

const heatran: OremonData = {
  "id": "oremon:heatran",
  "name": "oremon.heatran.name",
  "description": "oremon.heatran.description",
  "types": [
    "fire",
    "steel"
  ],
  "baseStats": {
    "hp": 91,
    "atk": 90,
    "def": 106,
    "atk_spe": 130,
    "def_spe": 106,
    "spd": 77
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 10,
  "height": 1.7,
  "weight": 430,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "model": {
    "default": "models/entity/heatran.geo.json"
  },
  "textures": {
    "default": "textures/entity/heatran.png"
  },
  "evolutions": []
};

export default heatran;