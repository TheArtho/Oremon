import { OremonData } from "../../types/OremonData";

const shiftry: OremonData = {
  "id": "oremon:shiftry",
  "name": "oremon.shiftry.name",
  "description": "oremon.shiftry.description",
  "types": [
    "grass",
    "dark"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 100,
    "def": 60,
    "atk_spe": 90,
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
  "catchRate": 45,
  "eggGroups": [
    "ground",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 1.3,
  "weight": 59.6,
  "baseExperience": 216,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Brown",
  "model": {
    "default": "models/entity/shiftry.geo.json"
  },
  "textures": {
    "default": "textures/entity/shiftry.png"
  },
  "evolutions": []
};

export default shiftry;