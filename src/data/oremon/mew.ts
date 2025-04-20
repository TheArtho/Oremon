import { OremonData } from "../../types/OremonData";

const mew: OremonData = {
  "id": "oremon:mew",
  "name": "oremon.mew.name",
  "description": "oremon.mew.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 100,
    "def": 100,
    "atk_spe": 100,
    "def_spe": 100,
    "spd": 100
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
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
  "height": 0.4,
  "weight": 4,
  "baseExperience": 270,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Pink",
  "model": {
    "default": "models/entity/mew.geo.json"
  },
  "textures": {
    "default": "textures/entity/mew.png"
  },
  "evolutions": []
};

export default mew;