import { OremonData } from "../../types/OremonData";

const rotom_heat: OremonData = {
  "id": "oremon:rotom-heat",
  "name": "oremon.rotom-heat.name",
  "description": "oremon.rotom-heat.description",
  "types": [
    "electric",
    "fire"
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
    "default": "models/entity/rotom-heat.geo.json"
  },
  "textures": {
    "default": "textures/entity/rotom-heat.png"
  },
  "evolutions": []
};

export default rotom_heat;