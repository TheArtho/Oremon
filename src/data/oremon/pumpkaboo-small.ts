import { OremonData } from "../../types/OremonData";

const pumpkaboo_small: OremonData = {
  "id": "oremon:pumpkaboo-small",
  "name": "oremon.pumpkaboo-small.name",
  "description": "oremon.pumpkaboo-small.description",
  "types": [
    "ghost",
    "grass"
  ],
  "baseStats": {
    "hp": 44,
    "atk": 66,
    "def": 70,
    "atk_spe": 44,
    "def_spe": 55,
    "spd": 56
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "indeterminate"
  ],
  "height": 0.3,
  "weight": 3.5,
  "baseExperience": 67,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/pumpkaboo-small.geo.json"
  },
  "textures": {
    "default": "textures/entity/pumpkaboo-small.png"
  },
  "evolutions": []
};

export default pumpkaboo_small;