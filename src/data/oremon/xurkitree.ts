import { OremonData } from "../../types/OremonData";

const xurkitree: OremonData = {
  "id": "oremon:xurkitree",
  "name": "oremon.xurkitree.name",
  "description": "oremon.xurkitree.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 83,
    "atk": 89,
    "def": 71,
    "atk_spe": 173,
    "def_spe": 71,
    "spd": 83
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
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 3.8,
  "weight": 100,
  "baseExperience": 257,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Black",
  "model": {
    "default": "models/entity/xurkitree.geo.json"
  },
  "textures": {
    "default": "textures/entity/xurkitree.png"
  },
  "evolutions": []
};

export default xurkitree;