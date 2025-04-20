import { OremonData } from "../../types/OremonData";

const mimikyu_busted: OremonData = {
  "id": "oremon:mimikyu-busted",
  "name": "oremon.mimikyu-busted.name",
  "description": "oremon.mimikyu-busted.description",
  "types": [
    "ghost",
    "fairy"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 90,
    "def": 80,
    "atk_spe": 50,
    "def_spe": 105,
    "spd": 96
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "indeterminate"
  ],
  "height": 0.2,
  "weight": 0.7,
  "baseExperience": 167,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/mimikyu-busted.geo.json"
  },
  "textures": {
    "default": "textures/entity/mimikyu-busted.png"
  },
  "evolutions": []
};

export default mimikyu_busted;