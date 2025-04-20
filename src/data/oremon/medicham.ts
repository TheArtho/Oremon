import { OremonData } from "../../types/OremonData";

const medicham: OremonData = {
  "id": "oremon:medicham",
  "name": "oremon.medicham.name",
  "description": "oremon.medicham.description",
  "types": [
    "fighting",
    "psychic"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 60,
    "def": 75,
    "atk_spe": 60,
    "def_spe": 75,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 90,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 1.3,
  "weight": 31.5,
  "baseExperience": 144,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": true,
  "shape": "humanoid",
  "color": "Red",
  "model": {
    "default": "models/entity/medicham.geo.json"
  },
  "textures": {
    "default": "textures/entity/medicham.png"
  },
  "evolutions": []
};

export default medicham;