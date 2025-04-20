import { OremonData } from "../../types/OremonData";

const sableye_mega: OremonData = {
  "id": "oremon:sableye-mega",
  "name": "oremon.sableye-mega.name",
  "description": "oremon.sableye-mega.description",
  "types": [
    "dark",
    "ghost"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 85,
    "def": 125,
    "atk_spe": 85,
    "def_spe": 115,
    "spd": 20
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "humanshape"
  ],
  "height": 0.5,
  "weight": 161,
  "baseExperience": 168,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/sableye-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/sableye-mega.png"
  },
  "evolutions": []
};

export default sableye_mega;