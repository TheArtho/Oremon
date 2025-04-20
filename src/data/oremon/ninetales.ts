import { OremonData } from "../../types/OremonData";

const ninetales: OremonData = {
  "id": "oremon:ninetales",
  "name": "oremon.ninetales.name",
  "description": "oremon.ninetales.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 73,
    "atk": 76,
    "def": 75,
    "atk_spe": 81,
    "def_spe": 100,
    "spd": 100
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 6,
  "catchRate": 75,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 19.9,
  "baseExperience": 177,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "model": {
    "default": "models/entity/ninetales.geo.json"
  },
  "textures": {
    "default": "textures/entity/ninetales.png"
  },
  "evolutions": []
};

export default ninetales;