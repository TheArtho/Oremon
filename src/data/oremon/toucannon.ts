import { OremonData } from "../../types/OremonData";

const toucannon: OremonData = {
  "id": "oremon:toucannon",
  "name": "oremon.toucannon.name",
  "description": "oremon.toucannon.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 120,
    "def": 75,
    "atk_spe": 75,
    "def_spe": 75,
    "spd": 60
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
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 1.1,
  "weight": 26,
  "baseExperience": 218,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Black",
  "model": {
    "default": "models/entity/toucannon.geo.json"
  },
  "textures": {
    "default": "textures/entity/toucannon.png"
  },
  "evolutions": []
};

export default toucannon;