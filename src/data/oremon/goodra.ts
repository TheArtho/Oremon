import { OremonData } from "../../types/OremonData";

const goodra: OremonData = {
  "id": "oremon:goodra",
  "name": "oremon.goodra.name",
  "description": "oremon.goodra.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 100,
    "def": 70,
    "atk_spe": 110,
    "def_spe": 150,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 2,
  "weight": 150.5,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Purple",
  "model": {
    "default": "models/entity/goodra.geo.json"
  },
  "textures": {
    "default": "textures/entity/goodra.png"
  },
  "evolutions": []
};

export default goodra;