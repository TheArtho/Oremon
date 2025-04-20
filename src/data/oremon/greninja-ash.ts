import { OremonData } from "../../types/OremonData";

const greninja_ash: OremonData = {
  "id": "oremon:greninja-ash",
  "name": "oremon.greninja-ash.name",
  "description": "oremon.greninja-ash.description",
  "types": [
    "water",
    "dark"
  ],
  "baseStats": {
    "hp": 72,
    "atk": 145,
    "def": 67,
    "atk_spe": 153,
    "def_spe": 71,
    "spd": 132
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
  "eggGroups": [
    "water1"
  ],
  "height": 1.5,
  "weight": 40,
  "baseExperience": 288,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/greninja-ash.geo.json"
  },
  "textures": {
    "default": "textures/entity/greninja-ash.png"
  },
  "evolutions": []
};

export default greninja_ash;