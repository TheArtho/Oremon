import { OremonData } from "../../types/OremonData";

const gourgeist_small: OremonData = {
  "id": "oremon:gourgeist-small",
  "name": "oremon.gourgeist-small.name",
  "description": "oremon.gourgeist-small.description",
  "types": [
    "ghost",
    "grass"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 85,
    "def": 122,
    "atk_spe": 58,
    "def_spe": 75,
    "spd": 99
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
  "height": 0.7,
  "weight": 9.5,
  "baseExperience": 173,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/gourgeist-small.geo.json"
  },
  "textures": {
    "default": "textures/entity/gourgeist-small.png"
  },
  "evolutions": []
};

export default gourgeist_small;