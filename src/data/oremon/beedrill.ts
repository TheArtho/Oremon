import { OremonData } from "../../types/OremonData";

const beedrill: OremonData = {
  "id": "oremon:beedrill",
  "name": "oremon.beedrill.name",
  "description": "oremon.beedrill.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 90,
    "def": 40,
    "atk_spe": 45,
    "def_spe": 80,
    "spd": 75
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
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
  "weight": 29.5,
  "baseExperience": 178,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "bug wings",
  "color": "Yellow",
  "model": {
    "default": "models/entity/beedrill.geo.json"
  },
  "textures": {
    "default": "textures/entity/beedrill.png"
  },
  "evolutions": []
};

export default beedrill;