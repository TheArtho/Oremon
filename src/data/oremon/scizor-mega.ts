import { OremonData } from "../../types/OremonData";

const scizor_mega: OremonData = {
  "id": "oremon:scizor-mega",
  "name": "oremon.scizor-mega.name",
  "description": "oremon.scizor-mega.description",
  "types": [
    "bug",
    "steel"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 150,
    "def": 140,
    "atk_spe": 65,
    "def_spe": 100,
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
  "eggGroups": [
    "bug"
  ],
  "height": 2,
  "weight": 125,
  "baseExperience": 210,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/scizor-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/scizor-mega.png"
  },
  "evolutions": []
};

export default scizor_mega;