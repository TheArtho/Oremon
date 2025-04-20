import { OremonData } from "../../types/OremonData";

const relicanth: OremonData = {
  "id": "oremon:relicanth",
  "name": "oremon.relicanth.name",
  "description": "oremon.relicanth.description",
  "types": [
    "water",
    "rock"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 90,
    "def": 130,
    "atk_spe": 45,
    "def_spe": 65,
    "spd": 55
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 25,
  "eggGroups": [
    "water1",
    "water2"
  ],
  "hatchCounter": 40,
  "height": 1,
  "weight": 23.4,
  "baseExperience": 170,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Gray",
  "model": {
    "default": "models/entity/relicanth.geo.json"
  },
  "textures": {
    "default": "textures/entity/relicanth.png"
  },
  "evolutions": []
};

export default relicanth;