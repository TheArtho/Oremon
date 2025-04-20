import { OremonData } from "../../types/OremonData";

const rotom_wash: OremonData = {
  "id": "oremon:rotom-wash",
  "name": "oremon.rotom-wash.name",
  "description": "oremon.rotom-wash.description",
  "types": [
    "electric",
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 65,
    "def": 107,
    "atk_spe": 105,
    "def_spe": 107,
    "spd": 86
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "eggGroups": [
    "indeterminate"
  ],
  "height": 0.3,
  "weight": 0.3,
  "baseExperience": 182,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/rotom-wash.geo.json"
  },
  "textures": {
    "default": "textures/entity/rotom-wash.png"
  },
  "evolutions": []
};

export default rotom_wash;