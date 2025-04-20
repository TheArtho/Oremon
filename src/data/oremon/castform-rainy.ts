import { OremonData } from "../../types/OremonData";

const castform_rainy: OremonData = {
  "id": "oremon:castform-rainy",
  "name": "oremon.castform-rainy.name",
  "description": "oremon.castform-rainy.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 70,
    "def": 70,
    "atk_spe": 70,
    "def_spe": 70,
    "spd": 70
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "fairy",
    "indeterminate"
  ],
  "height": 0.3,
  "weight": 0.8,
  "baseExperience": 147,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/castform-rainy.geo.json"
  },
  "textures": {
    "default": "textures/entity/castform-rainy.png"
  },
  "evolutions": []
};

export default castform_rainy;