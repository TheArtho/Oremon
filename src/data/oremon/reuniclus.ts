import { OremonData } from "../../types/OremonData";

const reuniclus: OremonData = {
  "id": "oremon:reuniclus",
  "name": "oremon.reuniclus.name",
  "description": "oremon.reuniclus.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 110,
    "atk": 65,
    "def": 75,
    "atk_spe": 125,
    "def_spe": 85,
    "spd": 30
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
  "genderRate": 4,
  "catchRate": 50,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 20.1,
  "baseExperience": 221,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Green",
  "model": {
    "default": "models/entity/reuniclus.geo.json"
  },
  "textures": {
    "default": "textures/entity/reuniclus.png"
  },
  "evolutions": []
};

export default reuniclus;