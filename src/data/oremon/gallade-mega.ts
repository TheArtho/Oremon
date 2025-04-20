import { OremonData } from "../../types/OremonData";

const gallade_mega: OremonData = {
  "id": "oremon:gallade-mega",
  "name": "oremon.gallade-mega.name",
  "description": "oremon.gallade-mega.description",
  "types": [
    "psychic",
    "fighting"
  ],
  "baseStats": {
    "hp": 68,
    "atk": 165,
    "def": 95,
    "atk_spe": 65,
    "def_spe": 115,
    "spd": 110
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
  "eggGroups": [
    "indeterminate"
  ],
  "height": 1.6,
  "weight": 56.4,
  "baseExperience": 278,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/gallade-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/gallade-mega.png"
  },
  "evolutions": []
};

export default gallade_mega;