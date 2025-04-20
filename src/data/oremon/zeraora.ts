import { OremonData } from "../../types/OremonData";

const zeraora: OremonData = {
  "id": "oremon:zeraora",
  "name": "oremon.zeraora.name",
  "description": "oremon.zeraora.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 88,
    "atk": 112,
    "def": 75,
    "atk_spe": 102,
    "def_spe": 80,
    "spd": 143
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 3
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 1.5,
  "weight": 44.5,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Yellow",
  "model": {
    "default": "models/entity/zeraora.geo.json"
  },
  "textures": {
    "default": "textures/entity/zeraora.png"
  },
  "evolutions": []
};

export default zeraora;