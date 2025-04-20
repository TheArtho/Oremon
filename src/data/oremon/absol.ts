import { OremonData } from "../../types/OremonData";

const absol: OremonData = {
  "id": "oremon:absol",
  "name": "oremon.absol.name",
  "description": "oremon.absol.description",
  "types": [
    "dark"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 130,
    "def": 60,
    "atk_spe": 75,
    "def_spe": 60,
    "spd": 75
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
    "ground"
  ],
  "hatchCounter": 25,
  "height": 1.2,
  "weight": 47,
  "baseExperience": 163,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "quadruped",
  "color": "White",
  "model": {
    "default": "models/entity/absol.geo.json"
  },
  "textures": {
    "default": "textures/entity/absol.png"
  },
  "evolutions": []
};

export default absol;