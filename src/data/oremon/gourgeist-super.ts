import { OremonData } from "../../types/OremonData";

const gourgeist_super: OremonData = {
  "id": "oremon:gourgeist-super",
  "name": "oremon.gourgeist-super.name",
  "description": "oremon.gourgeist-super.description",
  "types": [
    "ghost",
    "grass"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 100,
    "def": 122,
    "atk_spe": 58,
    "def_spe": 75,
    "spd": 54
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "indeterminate"
  ],
  "height": 1.7,
  "weight": 39,
  "baseExperience": 173,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/gourgeist-super.geo.json"
  },
  "textures": {
    "default": "textures/entity/gourgeist-super.png"
  },
  "evolutions": []
};

export default gourgeist_super;