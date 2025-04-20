import { OremonData } from "../../types/OremonData";

const lycanroc_midnight: OremonData = {
  "id": "oremon:lycanroc-midnight",
  "name": "oremon.lycanroc-midnight.name",
  "description": "oremon.lycanroc-midnight.description",
  "types": [
    "rock"
  ],
  "baseStats": {
    "hp": 85,
    "atk": 115,
    "def": 75,
    "atk_spe": 55,
    "def_spe": 75,
    "spd": 82
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
    "ground"
  ],
  "height": 1.1,
  "weight": 25,
  "baseExperience": 170,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/lycanroc-midnight.geo.json"
  },
  "textures": {
    "default": "textures/entity/lycanroc-midnight.png"
  },
  "evolutions": []
};

export default lycanroc_midnight;