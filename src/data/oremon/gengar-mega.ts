import { OremonData } from "../../types/OremonData";

const gengar_mega: OremonData = {
  "id": "oremon:gengar-mega",
  "name": "oremon.gengar-mega.name",
  "description": "oremon.gengar-mega.description",
  "types": [
    "ghost",
    "poison"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 65,
    "def": 80,
    "atk_spe": 170,
    "def_spe": 95,
    "spd": 130
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "indeterminate"
  ],
  "height": 1.4,
  "weight": 40.5,
  "baseExperience": 270,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/gengar-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/gengar-mega.png"
  },
  "evolutions": []
};

export default gengar_mega;