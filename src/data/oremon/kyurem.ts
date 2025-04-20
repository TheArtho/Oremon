import { OremonData } from "../../types/OremonData";

const kyurem: OremonData = {
  "id": "oremon:kyurem",
  "name": "oremon.kyurem.name",
  "description": "oremon.kyurem.description",
  "types": [
    "dragon",
    "ice"
  ],
  "baseStats": {
    "hp": 125,
    "atk": 130,
    "def": 90,
    "atk_spe": 130,
    "def_spe": 90,
    "spd": 95
  },
  "evYield": {
    "hp": 1,
    "atk": 1,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 3,
  "weight": 325,
  "baseExperience": 297,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "upright",
  "color": "Gray",
  "model": {
    "default": "models/entity/kyurem.geo.json"
  },
  "textures": {
    "default": "textures/entity/kyurem.png"
  },
  "evolutions": []
};

export default kyurem;