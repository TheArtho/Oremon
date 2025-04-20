import { OremonData } from "../../types/OremonData";

const hitmontop: OremonData = {
  "id": "oremon:hitmontop",
  "name": "oremon.hitmontop.name",
  "description": "oremon.hitmontop.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 95,
    "def": 95,
    "atk_spe": 35,
    "def_spe": 110,
    "spd": 70
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 0,
  "catchRate": 45,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 25,
  "height": 1.4,
  "weight": 48,
  "baseExperience": 159,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/hitmontop.geo.json"
  },
  "textures": {
    "default": "textures/entity/hitmontop.png"
  },
  "evolutions": []
};

export default hitmontop;