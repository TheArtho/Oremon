import { OremonData } from "../../types/OremonData";

const kyogre_primal: OremonData = {
  "id": "oremon:kyogre-primal",
  "name": "oremon.kyogre-primal.name",
  "description": "oremon.kyogre-primal.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 150,
    "def": 90,
    "atk_spe": 180,
    "def_spe": 160,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "no-eggs"
  ],
  "height": 9.8,
  "weight": 430,
  "baseExperience": 347,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/kyogre-primal.geo.json"
  },
  "textures": {
    "default": "textures/entity/kyogre-primal.png"
  },
  "evolutions": []
};

export default kyogre_primal;