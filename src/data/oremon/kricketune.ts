import { OremonData } from "../../types/OremonData";

const kricketune: OremonData = {
  "id": "oremon:kricketune",
  "name": "oremon.kricketune.name",
  "description": "oremon.kricketune.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 77,
    "atk": 85,
    "def": 51,
    "atk_spe": 55,
    "def_spe": 51,
    "spd": 65
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
    "bug"
  ],
  "hatchCounter": 15,
  "height": 1,
  "weight": 25.5,
  "baseExperience": 134,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "bug wings",
  "color": "Red",
  "model": {
    "default": "models/entity/kricketune.geo.json"
  },
  "textures": {
    "default": "textures/entity/kricketune.png"
  },
  "evolutions": []
};

export default kricketune;