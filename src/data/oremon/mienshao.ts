import { OremonData } from "../../types/OremonData";

const mienshao: OremonData = {
  "id": "oremon:mienshao",
  "name": "oremon.mienshao.name",
  "description": "oremon.mienshao.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 125,
    "def": 60,
    "atk_spe": 95,
    "def_spe": 60,
    "spd": 105
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
  "catchRate": 45,
  "eggGroups": [
    "ground",
    "humanshape"
  ],
  "hatchCounter": 25,
  "height": 1.4,
  "weight": 35.5,
  "baseExperience": 179,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Purple",
  "model": {
    "default": "models/entity/mienshao.geo.json"
  },
  "textures": {
    "default": "textures/entity/mienshao.png"
  },
  "evolutions": []
};

export default mienshao;