import { OremonData } from "../../types/OremonData";

const darkrai: OremonData = {
  "id": "oremon:darkrai",
  "name": "oremon.darkrai.name",
  "description": "oremon.darkrai.description",
  "types": [
    "dark"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 90,
    "def": 90,
    "atk_spe": 135,
    "def_spe": 90,
    "spd": 125
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 1.5,
  "weight": 50.5,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Black",
  "model": {
    "default": "models/entity/darkrai.geo.json"
  },
  "textures": {
    "default": "textures/entity/darkrai.png"
  },
  "evolutions": []
};

export default darkrai;