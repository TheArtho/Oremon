import { OremonData } from "../../types/OremonData";

const sharpedo_mega: OremonData = {
  "id": "oremon:sharpedo-mega",
  "name": "oremon.sharpedo-mega.name",
  "description": "oremon.sharpedo-mega.description",
  "types": [
    "water",
    "dark"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 140,
    "def": 70,
    "atk_spe": 110,
    "def_spe": 65,
    "spd": 105
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
    "water2"
  ],
  "height": 2.5,
  "weight": 130.3,
  "baseExperience": 196,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/sharpedo-mega.geo.json"
  },
  "textures": {
    "default": "textures/entity/sharpedo-mega.png"
  },
  "evolutions": []
};

export default sharpedo_mega;