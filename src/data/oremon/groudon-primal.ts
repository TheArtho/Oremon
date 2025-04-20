import { OremonData } from "../../types/OremonData";

const groudon_primal: OremonData = {
  "id": "oremon:groudon-primal",
  "name": "oremon.groudon-primal.name",
  "description": "oremon.groudon-primal.description",
  "types": [
    "ground",
    "fire"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 180,
    "def": 160,
    "atk_spe": 150,
    "def_spe": 90,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 3,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "no-eggs"
  ],
  "height": 5,
  "weight": 999.7,
  "baseExperience": 347,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/groudon-primal.geo.json"
  },
  "textures": {
    "default": "textures/entity/groudon-primal.png"
  },
  "evolutions": []
};

export default groudon_primal;