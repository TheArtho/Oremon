import { OremonData } from "../../types/OremonData";

const honchkrow: OremonData = {
  "id": "oremon:honchkrow",
  "name": "oremon.honchkrow.name",
  "description": "oremon.honchkrow.description",
  "types": [
    "dark",
    "flying"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 125,
    "def": 52,
    "atk_spe": 105,
    "def_spe": 52,
    "spd": 71
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
  "catchRate": 30,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 27.3,
  "baseExperience": 177,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Black",
  "model": {
    "default": "models/entity/honchkrow.geo.json"
  },
  "textures": {
    "default": "textures/entity/honchkrow.png"
  },
  "evolutions": []
};

export default honchkrow;