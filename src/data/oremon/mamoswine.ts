import { OremonData } from "../../types/OremonData";

const mamoswine: OremonData = {
  "id": "oremon:mamoswine",
  "name": "oremon.mamoswine.name",
  "description": "oremon.mamoswine.description",
  "types": [
    "ice",
    "ground"
  ],
  "baseStats": {
    "hp": 110,
    "atk": 130,
    "def": 80,
    "atk_spe": 70,
    "def_spe": 60,
    "spd": 80
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
  "genderRate": 4,
  "catchRate": 50,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 2.5,
  "weight": 291,
  "baseExperience": 239,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "model": {
    "default": "models/entity/mamoswine.geo.json"
  },
  "textures": {
    "default": "textures/entity/mamoswine.png"
  },
  "evolutions": []
};

export default mamoswine;