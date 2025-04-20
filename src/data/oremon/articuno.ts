import { OremonData } from "../../types/OremonData";

const articuno: OremonData = {
  "id": "oremon:articuno",
  "name": "oremon.articuno.name",
  "description": "oremon.articuno.description",
  "types": [
    "ice",
    "flying"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 85,
    "def": 100,
    "atk_spe": 95,
    "def_spe": 125,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 80,
  "height": 1.7,
  "weight": 55.4,
  "baseExperience": 261,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Blue",
  "model": {
    "default": "models/entity/articuno.geo.json"
  },
  "textures": {
    "default": "textures/entity/articuno.png"
  },
  "evolutions": []
};

export default articuno;