import { OremonData } from "../../types/OremonData";

const sceptile: OremonData = {
  "id": "oremon:sceptile",
  "name": "oremon.sceptile.name",
  "description": "oremon.sceptile.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 85,
    "def": 65,
    "atk_spe": 105,
    "def_spe": 85,
    "spd": 120
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 1.7,
  "weight": 52.2,
  "baseExperience": 239,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "upright",
  "color": "Green",
  "model": {
    "default": "models/entity/sceptile.geo.json"
  },
  "textures": {
    "default": "textures/entity/sceptile.png"
  },
  "evolutions": []
};

export default sceptile;