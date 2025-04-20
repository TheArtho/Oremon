import { OremonData } from "../../types/OremonData";

const archeops: OremonData = {
  "id": "oremon:archeops",
  "name": "oremon.archeops.name",
  "description": "oremon.archeops.description",
  "types": [
    "rock",
    "flying"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 140,
    "def": 65,
    "atk_spe": 112,
    "def_spe": 65,
    "spd": 110
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "flying",
    "water3"
  ],
  "hatchCounter": 30,
  "height": 1.4,
  "weight": 32,
  "baseExperience": 177,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Yellow",
  "model": {
    "default": "models/entity/archeops.geo.json"
  },
  "textures": {
    "default": "textures/entity/archeops.png"
  },
  "evolutions": []
};

export default archeops;