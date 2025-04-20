import { OremonData } from "../../types/OremonData";

const diglett_alola: OremonData = {
  "id": "oremon:diglett-alola",
  "name": "oremon.diglett-alola.name",
  "description": "oremon.diglett-alola.description",
  "types": [
    "ground",
    "steel"
  ],
  "baseStats": {
    "hp": 10,
    "atk": 55,
    "def": 30,
    "atk_spe": 35,
    "def_spe": 45,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "eggGroups": [
    "ground"
  ],
  "height": 0.2,
  "weight": 1,
  "baseExperience": 53,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/diglett-alola.geo.json"
  },
  "textures": {
    "default": "textures/entity/diglett-alola.png"
  },
  "evolutions": []
};

export default diglett_alola;