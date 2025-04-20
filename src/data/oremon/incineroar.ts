import { OremonData } from "../../types/OremonData";

const incineroar: OremonData = {
  "id": "oremon:incineroar",
  "name": "oremon.incineroar.name",
  "description": "oremon.incineroar.description",
  "types": [
    "fire",
    "dark"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 115,
    "def": 90,
    "atk_spe": 80,
    "def_spe": 90,
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 1.8,
  "weight": 83,
  "baseExperience": 239,
  "growthRateId": "medium-slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/incineroar.geo.json"
  },
  "textures": {
    "default": "textures/entity/incineroar.png"
  },
  "evolutions": []
};

export default incineroar;