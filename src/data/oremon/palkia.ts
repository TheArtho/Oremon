import { OremonData } from "../../types/OremonData";

const palkia: OremonData = {
  "id": "oremon:palkia",
  "name": "oremon.palkia.name",
  "description": "oremon.palkia.description",
  "types": [
    "water",
    "dragon"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 120,
    "def": 100,
    "atk_spe": 150,
    "def_spe": 120,
    "spd": 100
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 4.2,
  "weight": 336,
  "baseExperience": 306,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Purple",
  "model": {
    "default": "models/entity/palkia.geo.json"
  },
  "textures": {
    "default": "textures/entity/palkia.png"
  },
  "evolutions": []
};

export default palkia;