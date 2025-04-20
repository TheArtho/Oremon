import { OremonData } from "../../types/OremonData";

const pidgeot: OremonData = {
  "id": "oremon:pidgeot",
  "name": "oremon.pidgeot.name",
  "description": "oremon.pidgeot.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 83,
    "atk": 80,
    "def": 75,
    "atk_spe": 70,
    "def_spe": 70,
    "spd": 101
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 3
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 1.5,
  "weight": 39.5,
  "baseExperience": 216,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "wings",
  "color": "Brown",
  "model": {
    "default": "models/entity/pidgeot.geo.json"
  },
  "textures": {
    "default": "textures/entity/pidgeot.png"
  },
  "evolutions": []
};

export default pidgeot;