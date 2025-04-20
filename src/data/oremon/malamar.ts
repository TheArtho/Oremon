import { OremonData } from "../../types/OremonData";

const malamar: OremonData = {
  "id": "oremon:malamar",
  "name": "oremon.malamar.name",
  "description": "oremon.malamar.description",
  "types": [
    "dark",
    "psychic"
  ],
  "baseStats": {
    "hp": 86,
    "atk": 92,
    "def": 88,
    "atk_spe": 68,
    "def_spe": 75,
    "spd": 73
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
  "genderRate": 4,
  "catchRate": 80,
  "eggGroups": [
    "water1",
    "water2"
  ],
  "hatchCounter": 20,
  "height": 1.5,
  "weight": 47,
  "baseExperience": 169,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Blue",
  "model": {
    "default": "models/entity/malamar.geo.json"
  },
  "textures": {
    "default": "textures/entity/malamar.png"
  },
  "evolutions": []
};

export default malamar;