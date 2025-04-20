import { OremonData } from "../../types/OremonData";

const slaking: OremonData = {
  "id": "oremon:slaking",
  "name": "oremon.slaking.name",
  "description": "oremon.slaking.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 150,
    "atk": 160,
    "def": 100,
    "atk_spe": 95,
    "def_spe": 65,
    "spd": 100
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
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
  "hatchCounter": 15,
  "height": 2,
  "weight": 130.5,
  "baseExperience": 252,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Brown",
  "model": {
    "default": "models/entity/slaking.geo.json"
  },
  "textures": {
    "default": "textures/entity/slaking.png"
  },
  "evolutions": []
};

export default slaking;