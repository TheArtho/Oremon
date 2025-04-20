import { OremonData } from "../../types/OremonData";

const gallade: OremonData = {
  "id": "oremon:gallade",
  "name": "oremon.gallade.name",
  "description": "oremon.gallade.description",
  "types": [
    "psychic",
    "fighting"
  ],
  "baseStats": {
    "hp": 68,
    "atk": 125,
    "def": 65,
    "atk_spe": 65,
    "def_spe": 115,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 3,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 0,
  "catchRate": 45,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 1.6,
  "weight": 52,
  "baseExperience": 233,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "humanoid",
  "color": "White",
  "model": {
    "default": "models/entity/gallade.geo.json"
  },
  "textures": {
    "default": "textures/entity/gallade.png"
  },
  "evolutions": []
};

export default gallade;