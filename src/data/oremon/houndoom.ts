import { OremonData } from "../../types/OremonData";

const houndoom: OremonData = {
  "id": "oremon:houndoom",
  "name": "oremon.houndoom.name",
  "description": "oremon.houndoom.description",
  "types": [
    "dark",
    "fire"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 90,
    "def": 50,
    "atk_spe": 110,
    "def_spe": 80,
    "spd": 95
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
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
  "height": 1.4,
  "weight": 35,
  "baseExperience": 175,
  "growthRateId": "slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": true,
  "shape": "quadruped",
  "color": "Black",
  "model": {
    "default": "models/entity/houndoom.geo.json"
  },
  "textures": {
    "default": "textures/entity/houndoom.png"
  },
  "evolutions": []
};

export default houndoom;