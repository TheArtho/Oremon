import { OremonData } from "../../types/OremonData";

const tapu_fini: OremonData = {
  "id": "oremon:tapu-fini",
  "name": "oremon.tapu-fini.name",
  "description": "oremon.tapu-fini.description",
  "types": [
    "water",
    "fairy"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 75,
    "def": 115,
    "atk_spe": 95,
    "def_spe": 130,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 15,
  "height": 1.3,
  "weight": 21.2,
  "baseExperience": 257,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Purple",
  "model": {
    "default": "models/entity/tapu-fini.geo.json"
  },
  "textures": {
    "default": "textures/entity/tapu-fini.png"
  },
  "evolutions": []
};

export default tapu_fini;