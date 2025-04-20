import { OremonData } from "../../types/OremonData";

const tsareena: OremonData = {
  "id": "oremon:tsareena",
  "name": "oremon.tsareena.name",
  "description": "oremon.tsareena.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 72,
    "atk": 120,
    "def": 98,
    "atk_spe": 50,
    "def_spe": 98,
    "spd": 72
  },
  "evYield": {
    "hp": 0,
    "atk": 3,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 45,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 21.4,
  "baseExperience": 230,
  "growthRateId": "medium-slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Purple",
  "model": {
    "default": "models/entity/tsareena.geo.json"
  },
  "textures": {
    "default": "textures/entity/tsareena.png"
  },
  "evolutions": []
};

export default tsareena;