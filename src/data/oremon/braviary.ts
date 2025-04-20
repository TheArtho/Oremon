import { OremonData } from "../../types/OremonData";

const braviary: OremonData = {
  "id": "oremon:braviary",
  "name": "oremon.braviary.name",
  "description": "oremon.braviary.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 123,
    "def": 75,
    "atk_spe": 57,
    "def_spe": 75,
    "spd": 80
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
  "genderRate": 0,
  "catchRate": 60,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 20,
  "height": 1.5,
  "weight": 41,
  "baseExperience": 179,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Red",
  "model": {
    "default": "models/entity/braviary.geo.json"
  },
  "textures": {
    "default": "textures/entity/braviary.png"
  },
  "evolutions": []
};

export default braviary;