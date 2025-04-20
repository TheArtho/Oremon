import { OremonData } from "../../types/OremonData";

const passimian: OremonData = {
  "id": "oremon:passimian",
  "name": "oremon.passimian.name",
  "description": "oremon.passimian.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 120,
    "def": 90,
    "atk_spe": 40,
    "def_spe": 60,
    "spd": 80
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
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 2,
  "weight": 82.8,
  "baseExperience": 172,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "White",
  "model": {
    "default": "models/entity/passimian.geo.json"
  },
  "textures": {
    "default": "textures/entity/passimian.png"
  },
  "evolutions": []
};

export default passimian;