import { OremonData } from "../../types/OremonData";

const dialga: OremonData = {
  "id": "oremon:dialga",
  "name": "oremon.dialga.name",
  "description": "oremon.dialga.description",
  "types": [
    "steel",
    "dragon"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 120,
    "def": 120,
    "atk_spe": 150,
    "def_spe": 100,
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 5.4,
  "weight": 683,
  "baseExperience": 306,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "White",
  "model": {
    "default": "models/entity/dialga.geo.json"
  },
  "textures": {
    "default": "textures/entity/dialga.png"
  },
  "evolutions": []
};

export default dialga;