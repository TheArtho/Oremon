import { OremonData } from "../../types/OremonData";

const mesprit: OremonData = {
  "id": "oremon:mesprit",
  "name": "oremon.mesprit.name",
  "description": "oremon.mesprit.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 105,
    "def": 105,
    "atk_spe": 105,
    "def_spe": 105,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 80,
  "height": 0.3,
  "weight": 0.3,
  "baseExperience": 261,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "model": {
    "default": "models/entity/mesprit.geo.json"
  },
  "textures": {
    "default": "textures/entity/mesprit.png"
  },
  "evolutions": []
};

export default mesprit;